import {ActionTypes} from "../actions/types";
import {FetchPlaces} from "../actions";
import {GeoElement} from "../models/Geography";

export const placesReducer = (places:GeoElement[] = [], action: FetchPlaces) => {
  switch (action.type) {
    case ActionTypes.fetchPlaces:
      return action.payload;
    default:
      return places;
  }
};