import React from 'react';
import {connect} from "react-redux";
import { Bar, Pie } from 'react-chartjs-2';
import {StoreState} from "../reducers";
import {TRANSPORT_VARS} from "../constants";
import {TransportationMeans} from "../models/TransportationMeans";
import * as AppStyles from "../styles/App";
import styled, { withTheme } from 'styled-components';

const Chart = styled.div`
  max-width: 1000px;
`;

interface Props {
  transportation: TransportationMeans[]
  geoNamesToChart: string[],
  handleShowChart: Function
  theme: any,
}

const _TransportationResultsChart = (props: Props):JSX.Element => {
  const filteredTransportation:TransportationMeans[] =
    props.transportation.filter((transportation):TransportationMeans | undefined => {
    return props.geoNamesToChart.includes(transportation.geoName) ?
      transportation : undefined;
  });

  const getBarChartOptions = ():any => {
    return {
      scales: {
        yAxes: [
          {
            stacked: true,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        xAxes: [
          {
            stacked: true,
          },
        ],
      },
    }
  }

  const getBarChartData = ():any => {
    if (filteredTransportation.length > 10) {
      return;
    }

    const labels:string[] = [];
    const droveAloneData:number[] = [];
    const carpooledData:number[] = [];
    const publicTransitData:number[] = [];

    filteredTransportation.forEach((transportMeans:TransportationMeans) => {
      labels.push(transportMeans.geoName);
      droveAloneData.push(transportMeans.droveAlonePercent || 0);
      carpooledData.push(transportMeans.carpooledPercent || 0);
      publicTransitData.push(transportMeans.publicTransitPercent || 0);
    });

    return {
      labels: labels,
      datasets: [
        {
          label: TRANSPORT_VARS.DROVE_ALONE,
          data: droveAloneData,
          backgroundColor: props.theme.primary,
        },
        {
          label: TRANSPORT_VARS.CARPOOLED,
          data: carpooledData,
          backgroundColor: props.theme.secondary,
        },
        {
          label: TRANSPORT_VARS.PUBLIC_TRANSIT,
          data: publicTransitData,
          backgroundColor: props.theme.accent,
        },
      ],
    }
  }

  const getPieChartData = ():any => {
    if (filteredTransportation.length > 1) {
      return;
    }
    const pieData:number[] = [
      filteredTransportation[0].droveAlonePercent || 0,
      filteredTransportation[0].carpooledPercent || 0,
      filteredTransportation[0].publicTransitPercent || 0
    ];

    return {
      labels: [TRANSPORT_VARS.DROVE_ALONE, TRANSPORT_VARS.CARPOOLED, TRANSPORT_VARS.PUBLIC_TRANSIT],
      datasets: [
        {
          label: 'Means of Transportation',
          data: pieData,
          backgroundColor: [
            props.theme.primary,
            props.theme.secondary,
            props.theme.accent,
          ],
          borderColor: [
            props.theme.primary,
            props.theme.secondary,
            props.theme.accent,
          ],
          borderWidth: 1,
        },
      ],
    }
  }

  return filteredTransportation && filteredTransportation.length > 0 ? (
    <Chart>
      {filteredTransportation.length === 1 ?
        <Pie data={getPieChartData} /> :
        <Bar data={getBarChartData()} options={getBarChartOptions()} />
      }
    </Chart>
  ): <AppStyles.NoResults>
    No result rows selected.  Select rows in the results <AppStyles.LinkButton onClick={()=> props.handleShowChart(false)}>table</AppStyles.LinkButton>.
  </AppStyles.NoResults>;
}

const mapStateToProps = ({ transportation }: StoreState): {transportation: TransportationMeans[]} => {
  return { transportation };
}

// @ts-ignore
const _TransportationResultsChartThemed = withTheme(_TransportationResultsChart);

export const TransportationResultsChart = connect(
  mapStateToProps,
  {}
)(_TransportationResultsChartThemed);

