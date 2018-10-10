import { Action } from '@ngrx/store';

export enum TypeStatusActionTypes {
  LoadTypeStatus = '[TypeStatus] Load TypeStatus',
  TypeStatusLoaded = '[TypeStatus] TypeStatus Loaded'
}

export class LoadTypeStatus implements Action {
  readonly type = TypeStatusActionTypes.LoadTypeStatus;
}

export class TypeStatusLoaded implements Action {
  readonly type = TypeStatusActionTypes.TypeStatusLoaded;
  constructor (public readonly payload?: any) {};
}

export type TypeStatusActions = LoadTypeStatus | TypeStatusLoaded;
