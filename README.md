# redux-fun
 
Just some fun playing with and doing a full set up

## to run the app
- clone repo
- cd to project directory
- run `npm install`
- run `npm run start`
- open in Chrome `http://localhost:9000/`

## Info 

- index.js is a super basic html element setup that uses the Redux actions
- Actions.js has all the actions and what payload each of them take
- ActionTypes.js are basically just strings, which act like identifiers for the actions saved as variables to be called Actions.js and Store.js
- Reducer.js is where the magic happens, it detects the action type and returns and new state object (never mutated) with the changes needed to the data
- Store.js initializes the Redux createStore and has config for the Redux Chrome middle wear