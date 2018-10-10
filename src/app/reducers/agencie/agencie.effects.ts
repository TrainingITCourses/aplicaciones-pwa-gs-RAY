import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { mergeMap, map } from 'rxjs/operators';
import { AgenciesLoaded, AgencieActionTypes } from './agencie.actions';


@Injectable()
export class AgencieEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(AgencieActionTypes.LoadAgencies)
    .pipe(
      mergeMap(() => 
        this.api
          .getAgencies$()
          .pipe(map(agencies => new AgenciesLoaded(agencies)))
      )
    );

  constructor(private actions$: Actions,
              private api: ApiService) {}
}
