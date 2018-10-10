import { TypeMission } from './../models';
import { TypeMissionActions, TypeMissionActionTypes } from './type-mission.actions';


export interface TypeMissionState {
  typesMissions: TypeMission[]
}

export const initialState: TypeMissionState = {
  typesMissions: []
};

export function reducer(state = initialState, action: TypeMissionActions): TypeMissionState {
  switch (action.type) {
    case TypeMissionActionTypes.LoadTypeMissions:
      return { ...state };
    case TypeMissionActionTypes.TypeMissionsLoaded:
      return { ...state, typesMissions: action.payload };
    default:
      return state;
  }
}
