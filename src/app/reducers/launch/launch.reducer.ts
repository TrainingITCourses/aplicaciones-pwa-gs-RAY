import { Launch } from './../models';
import { LaunchActions, LaunchActionTypes } from './launch.actions';

export interface LaunchesState {
  launches: Launch[];
  launchesFiltered: Launch[];
}

export const initialState: LaunchesState = {
  launches: [],
  launchesFiltered: []
};

export function reducer(state = initialState, action: LaunchActions): LaunchesState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunches:
      return { ...state };
    case LaunchActionTypes.LaunchesLoaded:
      return { ...state, launches: action.payload};
    case LaunchActionTypes.FilterLaunches:
      return { ...state };
    case LaunchActionTypes.LaunchesFiltered:
      return { ...state, launchesFiltered: action.payload};
    default:
      return state;
  }
}
