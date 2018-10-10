import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { eCriteria } from './../search-criteria/search-criteria-enum';
import { Store } from '@ngrx/store';
import { AgencieState } from '../../reducers/agencie/agencie.reducer';
import { TypeMissionState } from '../../reducers/type-mission/type-mission.reducer';
import { TypeStatusState } from '../../reducers/type-status/type-status.reducer';
import { ChangeValues } from '../../reducers/criteria/criteria.actions';
import { CriteriaState } from '../../reducers/criteria/criteria.reducer';

@Component({
  selector: 'app-search-values',
  templateUrl: './search-values.component.html',
  styleUrls: ['./search-values.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchValuesComponent implements OnInit {

  public values$: Observable<any>;
  private criteria: eCriteria;

  constructor(private agencieStore: Store<AgencieState>,
              private typeMissionStore: Store<TypeMissionState>,
              private typeStatusStore: Store<TypeStatusState>,
              private criteriaStore: Store<CriteriaState> ) { }

  ngOnInit() {
    this.values$ = this.criteriaStore.select('criteria')
      .pipe(switchMap((state: CriteriaState) => {
        if (this.criteria != state.criteria) {
          switch (state.criteria) {
            case eCriteria.Agencia:
              return this.agencieStore.select('agencie')
                .pipe(map(agenciesState => agenciesState.agencies));
            case eCriteria.Estado:
              return this.typeStatusStore.select('typeStatus')
                .pipe(map(typeStatusState => typeStatusState.typesStatus));
            case eCriteria.Tipo:
              return this.typeMissionStore.select('typeMission')
                .pipe(map(typeMissionsState => typeMissionsState.typesMissions ));
          }
        }
      }));
  } 

  onChange = (event) => {
    this.criteriaStore.dispatch(new ChangeValues( +event.srcElement.value ));
  }

}
