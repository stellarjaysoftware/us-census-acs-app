# US Census Bureau American Community Survey (ACS) App

Enables creating simple graphs based on census API

## Tech used

- React, Redux, TypeScript
- Axios, Chart.js(maybe)
- Styled-components, CSS Grid
- Firebase Hosting

## Resources 

- [official docs](https://www.census.gov/data/developers.html)
- [slack](https://join.slack.com/t/uscensusbureau/shared_invite/enQtNzI2MTY0NjA4MzU1LTYxOGE1YTVmMmU2ZjM5MjE0Yzk1NTg5Yjk4NTMxMzhhM2RjMGU5ZDMxMDgxMzMyOThiMTVlZDE0Y2ZiMjQzYjM)

## Getting Started 

- apply for a key: https://api.census.gov/data/key_signup.html
- place key in `/api-key.txt`
- `yarn install`
- `yarn start`

## API

### Example calls

- [Geography specification examples](https://api.census.gov/data/2019/acs/acs1/examples.html)
- [total population in each county in CA](https://api.census.gov/data/2019/acs/acs1?get=NAME,B01001_001E&for=county:*&in=state:06)

### Means of Transportation

- [Means of transporation data fields](https://api.census.gov/data/2019/acs/acs1/subject/groups/S0804.html)
- [Subject Table web browser example (means of transportation)](https://data.census.gov/cedsci/table?q=ACSST1Y2019&t=Commuting&tid=ACSST1Y2019.S0804&moe=false&tp=false&hidePreview=true)
- [Means of trans for counties in CA example api call](https://api.census.gov/data/2019/acs/acs1/subject?get=NAME,S0804_C01_001E,S0804_C02_001E,S0804_C03_001E,S0804_C04_001E&for=county:*&in=state:06)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
