import { Agencie } from './../models';
import { AgencieActions, AgencieActionTypes } from './agencie.actions';


export interface AgencieState {
  agencies: Agencie[];
}

export const initialState: AgencieState = {
  agencies: []
};

export function reducer(state = initialState, action: AgencieActions): AgencieState {
  switch (action.type) {
    case AgencieActionTypes.LoadAgencies:
      return {...state};
    case AgencieActionTypes.AgenciesLoaded:
      return { ...initialState, agencies: action.payload };
    default:
      return state;
  }
}
