import {ActionTypes} from "../actions/types";
import {FetchTransportAction} from "../actions";
import {TransportationMeans} from "../models/TransportationMeans";

export const transportationReducer = (transportation:TransportationMeans[] = [], action: FetchTransportAction) => {
  switch (action.type) {
    case ActionTypes.fetchTransportation:
      return action.payload;
    default:
      return transportation;
  }
};