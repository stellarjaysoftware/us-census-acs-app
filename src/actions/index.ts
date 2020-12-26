import { CensusAPI } from "../apis/CensusAPI";
import { Dispatch } from 'redux';
import {ActionTypes} from "./types";
import {TransportationMeans} from "../models/TransportationMeans";
import {Geography, GeoElement} from "../models/Geography";
import {TRANSPORT_FIELDS} from "../constants";

export interface FetchTransportAction {
  type: ActionTypes.fetchTransportation,
  payload: TransportationMeans[],
}

const censusAPI:CensusAPI = new CensusAPI();

// NOTE: ACS response will be two-dimensional array
//  first row will be the headers,
//  sequent rows will be the data associated with those headers
//  ex: [["NAME","S0804_C01_001E","S0804_C02_001E","S0804_C03_001E","S0804_C04_001E","state","county"],
//    ["Lake County, California","21304","13926","2585","242","06","033"],
//    ["Yuba County, California","25787","20283","3128","308","06","115"]]
export const fetchTransportationMeans = (field:string, geo:Geography, years:number[] = [2019]):Function => {
  return async (dispatch: Dispatch) => {
    // if multiple years have been selected we need to make multiple fetchTransportationMeansTotalCounts calls
    let transportObjects:TransportationMeans[] = [];
    try {
      switch(field) {
        case TRANSPORT_FIELDS.AGE:
          // transportObjects = await censusAPI.fetchTransportationMeansTotalCounts(geo);
          break;
        case TRANSPORT_FIELDS.SEX:
          // transportObjects = await censusAPI.fetchTransportationMeansTotalCounts(geo);
          break;
        default:
          transportObjects = await censusAPI.fetchTransportationMeansTotalCounts(geo);
          break;
      }
    } catch (error) {
      console.error(error);
    }
    dispatch<FetchTransportAction>({
      type: ActionTypes.fetchTransportation,
      payload: transportObjects
    });
  };
};

export interface FetchStates {
  type: ActionTypes.fetchStates,
  payload: GeoElement[],
}

export const fetchStates = ():Function => {
  return async (dispatch: Dispatch) => {
    let states:GeoElement[] = [];
    try {
      states = await censusAPI.fetchStates();
    } catch (error) {
      console.error(error);
    }
    dispatch<FetchStates>({
      type: ActionTypes.fetchStates,
      payload: states
    });
  }
}

export interface FetchCounties {
  type: ActionTypes.fetchCounties,
  payload: GeoElement[],
}

export const fetchCounties = (state:GeoElement):Function => {
  return async (dispatch: Dispatch) => {
    let counties:GeoElement[] = [];
    try {
      counties = await censusAPI.fetchCounties(state);
    } catch (error) {
      console.error(error);
    }
    dispatch<FetchCounties>({
      type: ActionTypes.fetchCounties,
      payload: counties
    });
  }
}

export interface FetchPlaces {
  type: ActionTypes.fetchPlaces,
  payload: GeoElement[],
}

export const fetchPlaces = (state:GeoElement) => {
  return async (dispatch: Dispatch) => {
    let places:GeoElement[] = [];
    try {
      places = await censusAPI.fetchPlaces(state);
    } catch (error) {
      console.error(error);
    }
    dispatch<FetchPlaces>({
      type: ActionTypes.fetchPlaces,
      payload: places
    });
  }
}
