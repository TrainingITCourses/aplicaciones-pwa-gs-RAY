import { eCriteria } from './../../shared/search-criteria/search-criteria-enum';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { LaunchActionTypes, LaunchesLoaded, FilterLaunches, LaunchesFiltered } from './launch.actions';
import { Launch, ICriteria } from './../models';

@Injectable()
export class LaunchEffects {
  
  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  @Effect()
  public filter$ = this.actions$
    .ofType(LaunchActionTypes.FilterLaunches)
    .pipe(
      mergeMap(((action: FilterLaunches) =>
        this.api
          .getLaunches$()
          .pipe(map(launches => {
            const launchesFilter: Launch[] = launches.filter((launch: Launch) => 
              {
                let valido = false;
                if ((<ICriteria>action.payload).value > 0) {
                  switch ((<ICriteria>action.payload).criteria) {
                    case eCriteria.Agencia:
                      valido = launch.agencie == (<ICriteria>action.payload).value;
                      break;
                    case eCriteria.Estado:
                      valido = launch.status == (<ICriteria>action.payload).value;
                      break;
                    case eCriteria.Tipo:
                      valido = launch.typeMission == (<ICriteria>action.payload).value;
                      break;
                  }
                }
                return valido;
              }
            );
            return new LaunchesFiltered(launchesFilter)
          }))
      )
    ));

  constructor(private actions$: Actions,
              private api: ApiService) {}
}
