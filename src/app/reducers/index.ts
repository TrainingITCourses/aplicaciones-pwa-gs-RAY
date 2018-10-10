import * as fromTypeStatus from './type-status/type-status.reducer';
import * as fromTypeMission from './type-mission/type-mission.reducer';
import * as fromAgencie from './agencie/agencie.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromCriteria from './criteria/criteria.reducer';

export interface State {
  launch: fromLaunch.LaunchesState;
  agencie: fromAgencie.AgencieState;
  typeMission: fromTypeMission.TypeMissionState;
  typeStatus: fromTypeStatus.TypeStatusState;
  criteria: fromCriteria.CriteriaState;
}

export const reducers: ActionReducerMap<State> = {
  launch: fromLaunch.reducer,
  agencie: fromAgencie.reducer,
  typeMission: fromTypeMission.reducer,
  typeStatus: fromTypeStatus.reducer,
  criteria: fromCriteria.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
