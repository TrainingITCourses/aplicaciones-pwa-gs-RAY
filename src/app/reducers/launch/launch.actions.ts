import { Action } from '@ngrx/store';
import { Launch, ICriteria } from '../models';

export enum LaunchActionTypes {
  LoadLaunches = '[Launch] Load Launches',
  LaunchesLoaded = '[Launch] Launches loaded',
  LaunchesFiltered = '[Launch] Launches filtered',
  FilterLaunches = '[Launch] Filter launches'
}

export class LoadLaunches implements Action {
  readonly type = LaunchActionTypes.LoadLaunches;
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchesLoaded;
  constructor (public readonly payload?: Launch[]) {}
}

export class LaunchesFiltered implements Action {
  readonly type = LaunchActionTypes.LaunchesFiltered;
  constructor (public readonly payload?: Launch[]) {}
}

export class FilterLaunches implements Action {
  readonly type = LaunchActionTypes.FilterLaunches;
  constructor (public readonly payload?: ICriteria) {}
}

export type LaunchActions = LoadLaunches | LaunchesLoaded | LaunchesFiltered | FilterLaunches;
