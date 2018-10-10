import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { TypeStatusActionTypes, TypeStatusLoaded } from './type-status.actions';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()
export class TypeStatusEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(TypeStatusActionTypes.LoadTypeStatus)
    .pipe(
      mergeMap(() => 
        this.api
          .getTypesStatus$()
          .pipe(map(
            typeStatus => new TypeStatusLoaded(typeStatus)
          ))
      )
    );

  constructor(private actions$: Actions,
              private api: ApiService) {}
}
