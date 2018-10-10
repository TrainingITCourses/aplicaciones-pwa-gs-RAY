import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoadLaunches, FilterLaunches } from './../reducers/launch/launch.actions';
import { LoadTypeMissions } from '../reducers/type-mission/type-mission.actions';
import { LoadTypeStatus } from '../reducers/type-status/type-status.actions';
import { LoadAgencies } from '../reducers/agencie/agencie.actions';
import { CriteriaState } from '../reducers/criteria/criteria.reducer';
import { LaunchesState } from '../reducers/launch/launch.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<State>,
              private criteriaStore: Store<CriteriaState>,
              private launchesStore: Store<LaunchesState>) {}

  ngOnInit() {
    this.loadData();
  
    this.criteriaStore.select( 'criteria' )
      .subscribe( state => this.onChangeValue(state) );
  }

  private loadData = () => {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadTypeMissions());
    this.store.dispatch(new LoadTypeStatus());
    this.store.dispatch(new LoadAgencies());
  }
 
  onChangeValue = (state: any) => {
    console.log('Change criteria: ' + state.criteria + ' - value: ' + state.value);
    this.launchesStore.dispatch( new FilterLaunches( state ));
  }

}
