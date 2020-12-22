import React, {useState, useEffect} from 'react';
import {StoreState} from "../reducers";
import {connect} from "react-redux";
import {fetchTransportation, fetchStates} from "../actions";
import {TransportationMeans} from "../models/TransportationMeans";
import {Geography} from "../models/Geography";
// import {YearSelect} from "./YearSelect";
import {GeoSelect} from './GeoSelect';
import * as AppStyles from "../styles/App";
import styled from "styled-components";

interface Props {
  transportation: TransportationMeans[],
  fetchTransportation: any,
  fetchStates: any
}

const GetDataButton = styled(AppStyles.ActionButton)`
  width: 50%;
  border-radius: 10px;
`;
const GetDataDisabledButton = styled(AppStyles.DisabledButton)`
  width: 50%;
  border-radius: 10px;
`;

const _TransportationForm = (props:Props): JSX.Element => {
  // const initYears: number[] = [2019];
  // const [years, setYears] = useState(initYears); // years checked
  const [geo, setGeo] = useState(new Geography());
  const [hasFormUpdate, setHasFormUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.fetchStates();
  }, []);

  // const handleYearToggle = (year: number): void => {
  //   if (!years.includes(year)) {
  //     setYears([...years, year]);
  //   } else {
  //     const found = years.findIndex((yr) => yr === year);
  //     const updated = [...years];
  //     updated.splice(found, 1);
  //     setYears(updated);
  //   }
  // }

  const handleGet = async ():Promise<void> => {
    setLoading(true);
    setHasFormUpdate(false);
    await props.fetchTransportation(geo); // send in form selections
    setLoading(false);
  }

  const handleGeoUpdate = (geo:Geography):void => {
    setHasFormUpdate(true);
    setGeo(geo);
  }

  const geoDisplay = geo.toDisplayString();

  return (
    <div>
      <AppStyles.ContentCard>
        <AppStyles.H2>Location</AppStyles.H2>
        {/*<YearSelect years={years} onChange={handleYearToggle}/>*/}
        {/*<hr />*/}
        <GeoSelect geography={geo} onChange={handleGeoUpdate}/>
        {geoDisplay ?
          <AppStyles.GeoSelected>
            <AppStyles.H3>Selected Location:</AppStyles.H3>
            <strong>{geoDisplay}</strong>
          </AppStyles.GeoSelected> : null}
      </AppStyles.ContentCard>
      {hasFormUpdate ?
        <GetDataButton onClick={handleGet}>Get Data</GetDataButton>:
        <GetDataDisabledButton>Get Data</GetDataDisabledButton>}
      {loading ? <div style={{display: 'inline-block', marginLeft: 20}}> loading...</div>: null}
    </div>
  );
}

const mapStateToProps = ({ transportation }: StoreState): {transportation: TransportationMeans[]} => {
  return { transportation };
}

export const TransportationForm = connect(
  mapStateToProps,
  {
    fetchTransportation: fetchTransportation,
    fetchStates: fetchStates
  }
)(_TransportationForm);