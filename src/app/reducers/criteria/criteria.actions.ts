import { Action } from '@ngrx/store';

export enum CriteriaActionTypes {
  ChangeCriteria = '[Criteria] Change Criteria',
  ChangeValues = '[Criteria] Change Values'
}

export class ChangeCriteria implements Action {
  readonly type = CriteriaActionTypes.ChangeCriteria;
  constructor(public readonly payload?: any) {}
}

export class ChangeValues implements Action {
  readonly type = CriteriaActionTypes.ChangeValues;
  constructor(public readonly payload?: any) {}
}

export type CriteriaActions = ChangeCriteria | ChangeValues;
