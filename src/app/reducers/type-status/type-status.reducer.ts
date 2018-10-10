import { TypeStatus } from './../models';
import { TypeStatusActions, TypeStatusActionTypes } from './type-status.actions';


export interface TypeStatusState {
  typesStatus: TypeStatus[]
}

export const initialState: TypeStatusState = {
  typesStatus: []
};

export function reducer(state = initialState, action: TypeStatusActions): TypeStatusState {
  switch (action.type) {
    case TypeStatusActionTypes.LoadTypeStatus:
      return { ...state};
    case TypeStatusActionTypes.TypeStatusLoaded:
      return {...state, typesStatus: action.payload };
    default:
      return state;
  }
}
