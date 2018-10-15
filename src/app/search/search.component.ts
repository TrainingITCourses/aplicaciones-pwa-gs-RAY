import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { LoadLaunches, FilterLaunches } from './../reducers/launch/launch.actions';
import { LoadTypeMissions } from '../reducers/type-mission/type-mission.actions';
import { LoadTypeStatus } from '../reducers/type-status/type-status.actions';
import { LoadAgencies } from '../reducers/agencie/agencie.actions';
import { CriteriaState } from '../reducers/criteria/criteria.reducer';
import { LaunchesState } from '../reducers/launch/launch.reducer';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { ChangeVersion } from '../reducers/version/version.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<State>,
              private criteriaStore: Store<CriteriaState>,
              private launchesStore: Store<LaunchesState>,
              private swUpdate: SwUpdate) {}

  ngOnInit() {
    this.loadData();
    this.observeCriteria();
    this.observeVersions();
  }

  private loadData = () => {
    this.store.dispatch(new LoadLaunches());
    this.store.dispatch(new LoadTypeMissions());
    this.store.dispatch(new LoadTypeStatus());
    this.store.dispatch(new LoadAgencies());
  }

  private observeCriteria = () => {
    this.criteriaStore.select( 'criteria' )
      .subscribe( state => this.onChangeValue(state) );
  }

  private observeVersions = () => {
    const actualVersion: string = "1.1.0";
    this.store.dispatch(new ChangeVersion(actualVersion));

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((event: UpdateAvailableEvent) => {
        if (window.confirm("Una nueva versión está disponible. Pulse OK para instalarla.")) { 
          window.location.reload()
        }
      });
    }
  }
 
  onChangeValue = (state: any) => {
    console.log('Change criteria: ' + state.criteria + ' - value: ' + state.value);
    this.launchesStore.dispatch( new FilterLaunches( state ));
  }

  checkForUpdate = () => {
    this.swUpdate.checkForUpdate()
      .then(() => {console.log('No hay nueva actualización')})
      .catch(err => {console.error(err)});
  }

}
