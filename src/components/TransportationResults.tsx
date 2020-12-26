import React, {useState, useEffect} from 'react';
import {TransportationResultsTable} from "./TransportationResultsTable";
import {TransportationResultsChart} from "./TransportationResultsChart";
import {StoreState} from "../reducers";
import {TransportationMeans} from "../models/TransportationMeans";
import {connect} from "react-redux";
import * as AppStyles from "../styles/App";

interface Props {
  transportation: TransportationMeans[]
}

const _TransportationResults = (props:Props) => {
  const [showChart, setShowChart] = useState(false);
  const initNames:string[] = [];
  const [geoNamesToChart, setGeoNamesToChart] = useState(initNames);

  useEffect(() => {
    setGeoNamesToChart(getInitialGeoNamesToChart());
  }, [props.transportation]);

  const getInitialGeoNamesToChart = ():string[] => {
    const firstTen = [...props.transportation].slice(0, 10);
    const justTheNames = firstTen.map((transportationMeans:TransportationMeans) => {
      return transportationMeans.geoName;
    })
    return justTheNames;
  }

  const handleGeoToChartToggle = (geoName:string):boolean => {
    const geoIndex = geoNamesToChart.indexOf(geoName);
    if (geoIndex !== -1) {
      const geoNamesToChartCopy = [...geoNamesToChart];
      geoNamesToChartCopy.splice(geoIndex, 1)
      setGeoNamesToChart(geoNamesToChartCopy);
      return true;
    } else if (geoNamesToChart.length < 10) {
      setGeoNamesToChart([...geoNamesToChart, geoName]);
      return true;
    } else {
      return false;
    }
  }

  const handleSelectTopTen = ():void => {
    setGeoNamesToChart([]);
    setGeoNamesToChart(getInitialGeoNamesToChart());
  }

  const handleClearSelected = ():void => {
    setGeoNamesToChart([]);
  }

  const handleShowChart = (show:boolean) => {
    setShowChart(show);
  }

  return (
    <AppStyles.ContentCard>
      <AppStyles.H2>Results</AppStyles.H2>
      <div>
        <AppStyles.ResultsViewSelect className={(!showChart ? 'selected' : '')}>
          <AppStyles.ResultsViewLink onClick={() => setShowChart(false)}>table</AppStyles.ResultsViewLink>
        </AppStyles.ResultsViewSelect>
        <AppStyles.ResultsViewSelect className={(showChart ? 'selected' : '')}>
          <AppStyles.ResultsViewLink onClick={() => setShowChart(true)}>chart</AppStyles.ResultsViewLink>
        </AppStyles.ResultsViewSelect>
      {/* additional charts. ex: {some_county} by Age */}
      </div>
      <AppStyles.ResultsContentWrapper>
        {!showChart ?
          <TransportationResultsTable geoNamesToChart={geoNamesToChart}
                                      handleGeoToChartToggle={handleGeoToChartToggle}
                                      handleSelectTopTen={handleSelectTopTen}
                                      handleClearSelected={handleClearSelected} /> :
          <TransportationResultsChart geoNamesToChart={geoNamesToChart}
                                      handleShowChart={handleShowChart} />}
      </AppStyles.ResultsContentWrapper>
    </AppStyles.ContentCard>
  );
}


const mapStateToProps = ({ transportation }: StoreState): {transportation: TransportationMeans[]} => {
  return { transportation };
}

export const TransportationResults = connect(
  mapStateToProps,
  {}
)(_TransportationResults);