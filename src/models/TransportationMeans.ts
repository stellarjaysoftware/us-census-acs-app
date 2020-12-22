export class TransportationMeans {
  geoName: string;
  total: number | null;
  droveAlone: number | null;
  carpooled: number | null;
  publicTransit: number | null;
  droveAlonePercent: number | null;
  carpooledPercent: number | null;
  publicTransitPercent: number | null;
  constructor(geoName: string, total: number, droveAlone: number, carpooled: number, publicTransit: number) {
    this.geoName = geoName;
    this.total = total === -999999999 ? null : total;
    this.droveAlone = droveAlone === -999999999 ? null : droveAlone;
    this.carpooled = carpooled === -999999999 ? null : carpooled;
    this.publicTransit = publicTransit === -999999999 ? null : publicTransit;
    this.droveAlonePercent = this._getPercentage(droveAlone);
    this.carpooledPercent = this._getPercentage(carpooled);
    this.publicTransitPercent = this._getPercentage(publicTransit);
  }
  _getPercentage = (numerator:number):number => {
    if (numerator && this.total) {
      const fraction = numerator/this.total;
      return Math.ceil(fraction * 100);
    } else {
      return 0;
    }
  }
  // getDroveAlonePercentage = ():number => {
  //   return this._getPercentage(this.droveAlone);
  // }
  // getCarpooledPercentage = ():number => {
  //   return this._getPercentage(this.carpooled);
  // }
  // getPublicTransitPercentage = ():number => {
  //   return this._getPercentage(this.publicTransit);
  // }
}