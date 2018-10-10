import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { TypeMissionActionTypes, TypeMissionsLoaded } from './type-mission.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class TypeMissionEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(TypeMissionActionTypes.LoadTypeMissions)
    .pipe(
      mergeMap(() =>
        this.api
          .getTypesMissions$()
          .pipe(map(typesMissions => new TypeMissionsLoaded(typesMissions)))
      )
    );

  constructor(private actions$: Actions,
              private api: ApiService) {}
}
