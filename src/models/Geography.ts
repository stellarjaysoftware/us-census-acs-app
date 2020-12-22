export enum GeoLevel { state, county, place}

export const getGeoLevelString = (geoLevel:GeoLevel, plural?:boolean, capitol?:boolean):string => {
  switch(geoLevel) {
    case GeoLevel.state:
      return (capitol ? 'S': 's') + (plural ? 'tates' : 'tate');
    case GeoLevel.county:
      return (capitol ? 'C': 'c') + (plural ? 'ounties' : 'ounty');
    case GeoLevel.place:
      return (capitol ? 'C': 'c') + (plural ? 'ivic centers' : 'ivic center');
  }
};

export class GeoElement {
  name: string | undefined;
  value: string | undefined;
  constructor(name?: string, value?: string) {
    this.name = name;
    this.value = value;
  }
}

export class Geography {
  forKey: string;
  forValue: string;
  forDisplayValue: string;
  inKey: string;
  inValue: string;
  inDisplayValue: string;
  // TODO: consider a second 'in' string
  constructor(forKey: string = 'US', forValue: string = '*', forDisplayValue: string = '',
              inKey: string = '', inValue: string = '*', inDisplayValue: string = '') {
    this.forKey = forKey;
    this.forValue = forValue;
    this.forDisplayValue = forDisplayValue;
    this.inKey = inKey;
    this.inValue = inValue;
    this.inDisplayValue = inDisplayValue;
  }
  forQueryString ():string {
    return `for=${this.forKey.toLowerCase()}:${this.forValue}`;
  }
  inQueryString ():string {
    return `in=${this.inKey.toLowerCase()}:${this.inValue}`;
  }
  toQueryString (): string {
    return this.forQueryString() + (this.inKey !== '' ? `&${this.inQueryString()}` : '');
  }
  toDisplayString (): string {
    // if (!this.forDisplayValue) {
    //   return 'none';
    // }
    if (this.inKey !== '') {
      return `${this.inDisplayValue} > ${this.forDisplayValue}`;
    }
    return this.forDisplayValue;
  }
}