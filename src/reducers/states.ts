import {ActionTypes} from "../actions/types";
import {FetchStates} from "../actions";
import {GeoElement} from "../models/Geography";

export const statesReducer = (states:GeoElement[] = [], action: FetchStates) => {
  switch (action.type) {
    case ActionTypes.fetchStates:
      return action.payload;
    default:
      return states;
  }
};