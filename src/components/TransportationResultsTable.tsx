import React, { useState } from 'react';
import {TransportationMeans} from "../models/TransportationMeans";
import {StoreState} from "../reducers";
import {connect} from "react-redux";
import * as AppStyles from "../styles/App";
import * as Style from "../styles/ResultsTable";
import {TRANSPORT_VARS} from "../constants";

interface Props {
  transportation: TransportationMeans[],
  geoNamesToChart: string[],
  handleGeoToChartToggle: Function,
  handleClearSelected: Function,
  handleSelectTopTen: Function
}

const _TransportationResultsTable = (props: Props) => {
  const [showCounts, setShowCounts] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (field:string):void => {
    if (sortBy !== field) {
      setSortBy(field);
    } else {
      setSortAsc(!sortAsc);
    }
  }

  const getSortedResults = ():TransportationMeans[] => {
    return props.transportation.sort((a,b) => {
      if (sortBy === 'geoName') {
        // @ts-ignore
        return sortAsc ? (b[sortBy] > a[sortBy] ? -1 : 1) : (a[sortBy] > b[sortBy]  ? -1 : 1);
      } else {
        // @ts-ignore
        return sortAsc ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy];
      }
    });
  }

  const sortedResults = getSortedResults();

  const handleRowToggle = (geoName:string) => {
    if (!props.handleGeoToChartToggle(geoName)) {
        alert('max selected is 10');
    }
  }

  return props.transportation && props.transportation.length > 0 ? (
    <div>
      <Style.ResultOptions>
        <label><input type="checkbox" checked={showCounts}
                        onChange={(event) => setShowCounts(event.target.checked)} /> show result counts</label>
        &nbsp;| <AppStyles.LinkButton onClick={() => props.handleClearSelected()}>clear selected</AppStyles.LinkButton>
        &nbsp;| <AppStyles.LinkButton onClick={() => props.handleSelectTopTen()}>select top 10</AppStyles.LinkButton>
      </Style.ResultOptions>
      <Style.ResultTable>
        <Style.ResultHeader>
          <Style.ResultsRow>
            <Style.HeaderCell as="th">📊</Style.HeaderCell>
            <Style.HeaderCell as="th" className="left">
              <AppStyles.BoldLinkButton title="Name" onClick={() => handleSort('geoName')}>Name</AppStyles.BoldLinkButton>
            </Style.HeaderCell>
            <Style.HeaderCell as="th">
              <AppStyles.BoldLinkButton title={TRANSPORT_VARS.DROVE_ALONE} onClick={() => handleSort('droveAlonePercent')}>{TRANSPORT_VARS.DROVE_ALONE}</AppStyles.BoldLinkButton>
            </Style.HeaderCell>
            <Style.HeaderCell as="th">
              <AppStyles.BoldLinkButton title={TRANSPORT_VARS.CARPOOLED} onClick={() => handleSort('carpooledPercent')}>{TRANSPORT_VARS.CARPOOLED}</AppStyles.BoldLinkButton>
            </Style.HeaderCell>
            <Style.HeaderCell as="th">
              <AppStyles.BoldLinkButton title={TRANSPORT_VARS.PUBLIC_TRANSIT} onClick={() => handleSort('publicTransitPercent')}>{TRANSPORT_VARS.PUBLIC_TRANSIT}</AppStyles.BoldLinkButton>
            </Style.HeaderCell>
            <Style.HeaderCell as="th" className="right">
              <AppStyles.BoldLinkButton title="total" onClick={() => handleSort('total')}>Total</AppStyles.BoldLinkButton>
            </Style.HeaderCell>
            {/*<Style.HeaderCell as="th">📊+</Style.HeaderCell>*/}
          </Style.ResultsRow>
        </Style.ResultHeader>
        <Style.ResultsBody>
        {sortedResults.map((transportMeans:TransportationMeans) => {
          return (
            <Style.ResultsRow key={transportMeans.geoName} onClick={(e) => handleRowToggle(transportMeans.geoName)}>
              <Style.BodyCell>
                <input type="checkbox" checked={props.geoNamesToChart.indexOf(transportMeans.geoName) !== -1}
                       onChange={(e) => handleRowToggle(transportMeans.geoName)} />
              </Style.BodyCell>
              <Style.BodyCell className="left"><span title={transportMeans.geoName}>{transportMeans.geoName}</span></Style.BodyCell>
              <Style.BodyCell>
                {transportMeans.droveAlonePercent}%
                {(showCounts?`(${transportMeans.droveAlone})`:null)}
              </Style.BodyCell>
              <Style.BodyCell>
                {transportMeans.carpooledPercent}%
                {(showCounts?`(${transportMeans.carpooled})`:null)}
              </Style.BodyCell>
              <Style.BodyCell>
                {transportMeans.publicTransitPercent}%
                {(showCounts?`(${transportMeans.publicTransit})`:null)}
              </Style.BodyCell>
              <Style.BodyCell className="right">{transportMeans.total}</Style.BodyCell>
              {/*<Style.BodyCell>*/}
              {/*  <select>*/}
              {/*    <option>Total</option>*/}
              {/*    <option>Age</option>*/}
              {/*    <option>Sex</option>*/}
              {/*    <option>Race</option>*/}
              {/*    <option>Earnings</option>*/}
              {/*  </select>*/}
              {/*</Style.BodyCell>*/}
            </Style.ResultsRow>
          );
        })}
      </Style.ResultsBody>
    </Style.ResultTable>
  </div>
  ) : (
    <AppStyles.NoResults>
      Select a location above to see that area's means of transportation:
      <ul>
        <li>Drove alone</li>
        <li>Carpooled</li>
        <li>Public transportation.</li>
      </ul>
    </AppStyles.NoResults>
  );
}

const mapStateToProps = ({ transportation }: StoreState): {transportation: TransportationMeans[]} => {
  return { transportation };
}

export const TransportationResultsTable = connect(
  mapStateToProps,
  {}
)(_TransportationResultsTable);

