import { eCriteria } from '../../shared/search-criteria/search-criteria-enum';
import { CriteriaActions, CriteriaActionTypes } from './criteria.actions';

export interface CriteriaState {
  criteria: eCriteria,
  value: number
}

export const initialState: CriteriaState = {
  criteria: eCriteria.Estado,
  value: 0
};

export function reducer(state = initialState, action: CriteriaActions): CriteriaState {
  switch (action.type) {
    case CriteriaActionTypes.ChangeCriteria:
      return {...state, criteria: action.payload, value: 0};
    case CriteriaActionTypes.ChangeValues:
      return {...state, value: action.payload};
    default:
      return state;
  }
}
