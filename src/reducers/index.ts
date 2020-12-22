import { combineReducers } from "redux";
import { transportationReducer } from './transportation';
import {statesReducer} from "./states";
import {TransportationMeans} from "../models/TransportationMeans";
import {GeoElement} from "../models/Geography";
import {countiesReducer} from "./counties";
import {placesReducer} from "./places";

export interface StoreState {
  transportation: TransportationMeans[]
  states: GeoElement[],
  counties: GeoElement[],
  places: GeoElement[]
}

export const reducers = combineReducers({
  transportation: transportationReducer,
  states: statesReducer,
  counties: countiesReducer,
  places: placesReducer
})