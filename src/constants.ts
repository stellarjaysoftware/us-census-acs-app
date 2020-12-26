export const CENSUS_BASE_PATH = 'https://api.census.gov/data';
export const CENSUS_API_KEY_INACCESSIBLE = 'Developer: The app can\'t read your census api key.  See the README file for help.'
export const NO_CENSUS_API_KEY_ERROR = 'No census api key. See README';
export const TRANSPORT_VARS = {
  DROVE_ALONE: 'Drove Alone',
  CARPOOLED: 'Carpooled',
  PUBLIC_TRANSIT: 'Public Transportation'
}
export const TRANSPORT_FIELDS = {
  TOTAL: 'TOTAL',
  AGE: 'AGE',
  SEX: 'SEX'
}
export const FIELD_LABELS = {
  TOTAL: 'Total count',
  MALE: 'Male',
  FEMALE: 'Female',
  _16_TO_19: '16 to 19 years',
  _20_TO_24: '20 to 24 years',
  _24_TO_44: '24 to 44 years',
  _45_TO_54: '45 to 54 years',
  _55_TO_59: '55 to 59 years',
  _60P: '60 years and over',
}
// export const CHART_COLORS = {
//   DROVE_ALONE: 'rgb(255, 99, 132)',
//   CARPOOLED: 'rgb(54, 162, 235)',
//   PUBLIC_TRANSIT: 'rgb(75, 192, 192)'
// }
export const THEME_KEY = 'theme';
export const DEFAULT_THEME = 'charger';

// FIELD KEY:
//  1. ex: S0804_C01_001E - {group}_{variable}_{field}
//    group: S0804 - Transportation
//    variable: C01 - Total count
//    field: 001E - All Workers 16 years and over
//  2. ex: S0804_C02_001E - Drove alone count
//  3. ex: S0804_C03_001E - Carpooled count
//  4. ex: S0804_C04_001E - Public Transportation count
// export const FIELDS = {
//   US_TRANSPORTATION: 'S0802_C01_001E,S0802_C02_001E,S0802_C03_001E,S0802_C04_001E',
//   // S0804_C01_001E: Workers 16 years and over
//   GEO_TRANSPORTATION: 'S0804_C01_001E,S0804_C02_001E,S0804_C03_001E,S0804_C04_001E',
//   // additional breakdown fields: Sex, Age Range, Race, Earnings, Travel Time
//   // 16 to 19 years, 20 to 24 years, 25 to 44 years, 45 to 54 years, 55 to 59 years, 60 years and over
//   TRANSPORTATION_BY_AGE_16: 'S0804_C01_002E,S0804_C02_002E,S0804_C03_002E,S0804_C04_002E',
//   TRANSPORTATION_BY_AGE_20: 'S0804_C01_003E,S0804_C02_003E,S0804_C03_003E,S0804_C04_003E',
//   TRANSPORTATION_BY_AGE_25: 'S0804_C01_004E,S0804_C02_004E,S0804_C03_004E,S0804_C04_004E',
//   TRANSPORTATION_BY_AGE_45: 'S0804_C01_005E,S0804_C02_005E,S0804_C03_005E,S0804_C04_005E',
//   TRANSPORTATION_BY_AGE_55: 'S0804_C01_006E,S0804_C02_006E,S0804_C03_006E,S0804_C04_006E',
//   TRANSPORTATION_BY_AGE_60: 'S0804_C01_007E,S0804_C02_007E,S0804_C03_007E,S0804_C04_007E'
// }

// export const SUBJECTS = {
//   TRANSPORTATION_MEANS: {
//     GROUP: 'S0804',
//     VARIABLES: {
//       TOTAL: 'C01',
//       DROVE_ALONE: 'C02',
//       CARPOOLED: 'C03',
//       PUBLIC_TRANSIT: 'C04'
//     },
//     FIELDS: {
//       TOTAL_COUNT: {
//         ALL: '001E',
//       },
//       AGE: {
//         _16_TO_19: '002E',
//         _20_TO_24: '003E',
//         _24_TO_44: '004E',
//         _45_TO_54: '005E',
//         _55_TO_59: '006E',
//         _60P: '007E',
//       },
//       SEX: {
//         M: '009E',
//         F: '0010E'
//       },
//       RACE: {},
//       EARNINGS: {
//         _10K: '029E',
//         _10K_TO_15K: '030E',
//         _15K_TO_25K: '031E',
//         _25K_TO_35K: '032E',
//         _35K_TO_50K: '033E',
//         _50K_TO_65K: '034E',
//         _65K_TO_75K: '035E',
//         _75KP: '036E'
//       },
//       TRAVEL_TIME: {}
//     }
//   }
// }

