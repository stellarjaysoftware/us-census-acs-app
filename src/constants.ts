export const CENSUS_BASE_PATH = 'https://api.census.gov/data';
export const CENSUS_API_KEY_INACCESSIBLE = 'Developer: The app can\'t read your census api key.  See the README file for help.'
export const NO_CENSUS_API_KEY_ERROR = 'no census api key. see README';
export const FIELDS = {
  US_TRANSPORTATION: 'NAME,S0802_C01_001E,S0802_C02_001E,S0802_C03_001E,S0802_C04_001E',
  GEO_TRANSPORTATION: 'NAME,S0804_C01_001E,S0804_C02_001E,S0804_C03_001E,S0804_C04_001E'
}
export const CHART_LABELS = {
  DROVE_ALONE: 'Drove Alone',
  CARPOOLED: 'Carpooled',
  PUBLIC_TRANSIT: 'Public Transportation'
}
export const CHART_COLORS = {
  DROVE_ALONE: 'rgb(255, 99, 132)',
  CARPOOLED: 'rgb(54, 162, 235)',
  PUBLIC_TRANSIT: 'rgb(75, 192, 192)'
}