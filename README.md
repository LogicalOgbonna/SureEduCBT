# SUREEDU CBT SERVICE - FRONT END (CLIENT SIDE)

## Present State of the application:

- The application presently uses mocked data for the users and candidates which can be changed in `src/actions/auth` to satisfy another need
- Since there is no authentication the login button on the logs the user in depending on the settings on the `auth` file
- The role of the user (`admin`, `coordinator` or `examiner` ) can also be changed to render a different dashboard
- changing the `isAuthenticated` property in the `auth` file to false (which is what the logout function does for now) will log the user or candidate out the application
- Still working on the candidate dashboard though, not fully functional.

## Getting Started

To test the application:

- git clone the repository
- cd into the directory
- run `yarn install` or `npm install`
- run the app using `yarn start` or `npm start`
