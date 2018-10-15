import { VersionActions, VersionActionTypes } from './version.actions';

export interface VersionState {
  version: string,
}

export const initialState: VersionState = {
  version: "1.0.0",
};

export function reducer(state = initialState, action: VersionActions): VersionState {
  switch (action.type) {
    case VersionActionTypes.ChangeVersion:
      return {...state, version: action.payload};
    default:
      return state;
  }
}
