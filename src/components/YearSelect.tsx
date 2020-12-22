import React from 'react';

interface Props {
  years: number[]
  onChange: any // TODO: how to validate a function
}

export const YearSelect = (props: Props): JSX.Element => {
  const inputYears: number[] = [2019,2018,2017,2016,2015];

  const getInput = (year:number):JSX.Element => {
    const checked: boolean = props.years.includes(year);
    return (
      <label key={year}>
        <input type="checkbox" checked={checked} onChange={() => props.onChange(year)} />
        {year}
      </label>
    );
  }

  return (
    <div>
      Select Year(s): {inputYears.map((year) => getInput(year))}
    </div>
  );
};