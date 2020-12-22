import React, {useState} from 'react';
import {StoreState} from "../reducers";
import {connect} from "react-redux";
import {GeoElement, Geography, GeoLevel, getGeoLevelString} from "../models/Geography";
import {fetchCounties, fetchPlaces} from "../actions";
import * as FormStyles from "../styles/Form";

interface Props {
  geography: Geography,
  states: GeoElement[],
  counties: GeoElement[],
  places: GeoElement[],
  onChange: any,
  fetchCounties: any,
  fetchPlaces: any
}

const _GeoSelect = (props:Props): JSX.Element => {
  const [state, setState] = useState(new GeoElement('', ''));
  const [county, setCounty] = useState(new GeoElement('', ''));
  const [place, setPlace] = useState(new GeoElement('', ''));

  // useEffect(() => {
  //   // if geography levels are populated in the store
  //   // else call action to get states and populate store
  // }, []);

  const handleStateSelect = (state:GeoElement): void => {
    const geography = new Geography('state', state.value, state.name);
    setState(state);
    if (state && state.value !== '*' && !state.value?.includes('SELECT')) {
      props.fetchCounties(state);
      props.fetchPlaces(state);
    }
    resetSelect(GeoLevel.place);
    resetSelect(GeoLevel.county);
    props.onChange(geography);
  }

  const handleCountySelect = (county:GeoElement): void => {
    const geography = new Geography('county', county.value, county.name,
      'state', state.value, state.name);
    setCounty(county);
    resetSelect(GeoLevel.place);
    props.onChange(geography);
  }

  const handlePlaceSelect = (place:GeoElement): void => {
    const geography = new Geography('place', place.value, place.name,
      'state', state.value, state.name);
    setPlace(place);
    resetSelect(GeoLevel.county);
    props.onChange(geography);
  }

  const resetSelect = (geoLevel:GeoLevel) => {
    switch (geoLevel) {
      case GeoLevel.state:
        setState(new GeoElement('',''));
        break;
      case GeoLevel.county:
        setCounty(new GeoElement('',''));
        break;
      case GeoLevel.place:
        setPlace(new GeoElement('',''));
        break;


    }
  }

  const handleGeoSelect = (geoLevel:GeoLevel, event:any): void => {
    // translate selection into geography state
    const {value, selectedIndex} = event.target;
    const text = event.target[selectedIndex].text;
    const geo = new GeoElement(text, value);
    switch(geoLevel) {
      case GeoLevel.state:
        handleStateSelect(geo);
        break;
      case GeoLevel.county:
        handleCountySelect(geo);
        break;
      case GeoLevel.place:
        handlePlaceSelect(geo);
        break;
    }

  }

  const getSelectDefault = (geoLevel:GeoLevel) => {
    return (`${geoLevel !== GeoLevel.state ? 'optionally ' : ''}select ${getGeoLevelString(geoLevel)}`).toUpperCase();
  }

  const getGeoSelect = (geoLevel:GeoLevel, geoArray:GeoElement[], inputStateValue?:string):JSX.Element => {
    return (
      <div>
        <FormStyles.Select value={inputStateValue} onChange={(event) => handleGeoSelect(geoLevel, event)}>
          <option>{getSelectDefault(geoLevel)}</option>
          <option value="*">All {getGeoLevelString(geoLevel, true, true)}</option>
          {geoArray.map((geo) => {
            return <option value={geo.value} key={geo.name}>{geo.name}</option>;
          })}
        </FormStyles.Select>
      </div>
    );
  }

  return (
    <div>
      {/* State select */}
      {getGeoSelect(GeoLevel.state, props.states, state.value)}
      <br />
      {(state.value !== '' && state.value !== '*' ?
        <React.Fragment>
          {/* County select */}
          {getGeoSelect(GeoLevel.county, props.counties, county.value)}
          <FormStyles.OrWrapper>------------ or ------------</FormStyles.OrWrapper>
          {/* Place select */}
          {getGeoSelect(GeoLevel.place, props.places, place.value)}
        </React.Fragment> :
        null)}

    </div>
  );
}

const mapStateToProps = ({ states, counties, places }: StoreState): {
  states: GeoElement[], counties: GeoElement[], places: GeoElement[]
} => {
  return { states, counties, places };
}

export const GeoSelect = connect(
  mapStateToProps,
  {
    fetchCounties: fetchCounties,
    fetchPlaces: fetchPlaces
  }
)(_GeoSelect);



