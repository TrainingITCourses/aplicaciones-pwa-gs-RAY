import { Action } from '@ngrx/store';

export enum VersionActionTypes {
  ChangeVersion = '[Version] Change Version'
}

export class ChangeVersion implements Action {
  readonly type = VersionActionTypes.ChangeVersion;
  constructor(public readonly payload?: any) {}
}

export type VersionActions = ChangeVersion;
