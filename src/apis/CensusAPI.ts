import axios, {AxiosInstance} from 'axios';
import {CENSUS_API_KEY_INACCESSIBLE, CENSUS_BASE_PATH, FIELDS, NO_CENSUS_API_KEY_ERROR} from '../constants';
import {TransportationMeans} from "../models/TransportationMeans";
import {GeoElement, Geography, GeoLevel} from "../models/Geography";

export class CensusAPI {
  axios: AxiosInstance;
  apiKey: string | undefined;
  cache: Map<string, any>;
  constructor() {
    this.axios = axios.create({
      baseURL: CENSUS_BASE_PATH
    });
    this.cache = new Map();
    this.apiKey = process.env.REACT_APP_CENSUS_API_KEY;
    this.checkAPIKey();
  }

  checkAPIKey = () => {
    if (!this.apiKey) {
      alert(CENSUS_API_KEY_INACCESSIBLE);
      return false;
    } else return true;
  }

  addToCache = (key:string, element:any):void => {
    this.cache.set(key, element);
  }

  checkCache = (key:string):any => {
    if (this.cache.has(key)) {
      // @ts-ignore
      return this.cache.get(key);
    }
  }

  getFetchGeoCacheKey = (geoLevel:GeoLevel, state?:GeoElement):string => {
    return `${geoLevel.toString()}${(state ? `-${state.value}`: '')}`;
  }

  getFetchTransportationCacheKey = (geo:Geography, year?:number):string => {
    return `${geo.toQueryString()}${(year ? `-${year}`: '')}`;
  }

  fetchTransportationMeans = async (geo:Geography, year:number = 2019):Promise<TransportationMeans[]> => {
    if (!this.checkAPIKey()) throw Error(NO_CENSUS_API_KEY_ERROR);
    const cacheElement = this.checkCache(this.getFetchTransportationCacheKey(geo, year));
    if (cacheElement) {
      return cacheElement;
    }
    // TODO: implementing additional factors
    const fields = geo.forValue.includes('us') ? FIELDS.US_TRANSPORTATION : FIELDS.GEO_TRANSPORTATION;
    const query = `/${year}/acs/acs1/subject?get=${fields}&${geo.toQueryString()}&key=${this.apiKey}`;
    let response:any;
    // try {
      response = await this.axios.get<[][]>(query);
    // } catch(error) {
    //   console.error('error fetching transportation means', error.toString());
    // }
    const transportObjects: TransportationMeans[] = [];
    // try {
      const [titles, ...transportData] = response.data;
      console.log('ACS response titles:', titles);
      for (let i = 0; i < transportData.length; i++) {
        // @ts-ignore
        transportObjects.push(new TransportationMeans(String(transportData[i][0]), Number(transportData[i][1]), Number(transportData[i][2]), Number(transportData[i][3]), Number(transportData[i][4])));
      }
    // } catch (error) {
    //   console.error('error parsing ACS transport response', error.toString());
    // }
    this.addToCache(this.getFetchTransportationCacheKey(geo, year), transportObjects);
    return transportObjects;
  }

  fetchStates = async ():Promise<GeoElement[]> => {
    return this.fetchGeos(GeoLevel.state);
  }

  fetchCounties = async (state:GeoElement):Promise<GeoElement[]> => {
    return this.fetchGeos(GeoLevel.county, state);
  }

  fetchPlaces = async (state:GeoElement):Promise<GeoElement[]> => {
    return this.fetchGeos(GeoLevel.place, state);
  }

  getGeoLevelUrl = (geoLevel:GeoLevel, stateValue?:string) => {
    switch(geoLevel) {
      case GeoLevel.place:
        return `/2019/acs/acs1?get=NAME&for=place:*&in=state:${stateValue}&key=${this.apiKey}`;
      case GeoLevel.county:
        return `/2019/acs/acs1?get=NAME&for=county:*&in=state:${stateValue}&key=${this.apiKey}`;
      case GeoLevel.state:
        return `/2019/acs/acs1?get=NAME&for=state:*&key=${this.apiKey}`;
      default:
        return '';
    }
  }

  fetchGeos = async (geoLevel:GeoLevel, state?:GeoElement):Promise<GeoElement[]> => {
    if (!this.checkAPIKey()) throw Error(NO_CENSUS_API_KEY_ERROR);
    let geoElements:GeoElement[] = [];
    const cacheElement = this.checkCache(this.getFetchGeoCacheKey(geoLevel, state));
    if (cacheElement) {
      return cacheElement;
    }
    if (geoLevel !== GeoLevel.state && !state) {
      console.error('stateGeoElement required');
      return geoElements;
    }
    const query = this.getGeoLevelUrl(geoLevel, state?.value);
    if (!query) {
      console.error('error fetching geos.  query could not be determined');
      return geoElements;
    }

    let response:any;
    try {
      response = await this.axios.get<[][]>(query);
    } catch(error) {
      console.error('error fetching geos', error.toString());
    }
    // parse the response
    try {
      const [titles, ...data] = response.data;
      console.log('ACS response titles:', titles);
      geoElements = data.map((geo:any) => {
        switch (geoLevel) {
          case GeoLevel.place:
            return new GeoElement(geo[0].replace(`, ${state?.name}`,''), geo[2]);
          case GeoLevel.county:
            return new GeoElement(geo[0].replace(`, ${state?.name}`,''), geo[2]);
          case GeoLevel.state:
            return new GeoElement(geo[0],geo[1]);
          default:
            return new GeoElement();
        }
      });
      geoElements = geoElements.sort((a, b) => Number(a.value) - Number(b.value));
    } catch (error) {
      console.error('error parsing ACS transport response', error.toString());
    }
    this.addToCache(this.getFetchGeoCacheKey(geoLevel, state), geoElements);
    return geoElements;
  }
}

