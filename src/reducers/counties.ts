import {ActionTypes} from "../actions/types";
import {FetchCounties} from "../actions";
import {GeoElement} from "../models/Geography";

export const countiesReducer = (counties:GeoElement[] = [], action: FetchCounties) => {
  switch (action.type) {
    case ActionTypes.fetchCounties:
      return action.payload;
    default:
      return counties;
  }
};