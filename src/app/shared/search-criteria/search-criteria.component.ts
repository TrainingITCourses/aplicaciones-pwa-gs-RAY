import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CriteriaState } from '../../reducers/criteria/criteria.reducer';
import { ChangeCriteria } from '../../reducers/criteria/criteria.actions';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCriteriaComponent implements OnInit {
  
  constructor(private store: Store<CriteriaState>) { }
 
  ngOnInit() {
  }

  onChange = (event) => {
    this.store.dispatch(new ChangeCriteria( +event.srcElement.value ));
  }

}
