import { Action } from '@ngrx/store';

export enum TypeMissionActionTypes {
  LoadTypeMissions = '[TypeMission] Load TypeMissions',
  TypeMissionsLoaded = '[TypeMission] TypeMissions Loaded'
}

export class LoadTypeMissions implements Action {
  readonly type = TypeMissionActionTypes.LoadTypeMissions;
}

export class TypeMissionsLoaded implements Action {
  readonly type = TypeMissionActionTypes.TypeMissionsLoaded;
  constructor( public readonly payload?: any) {}
}

export type TypeMissionActions = LoadTypeMissions | TypeMissionsLoaded;
