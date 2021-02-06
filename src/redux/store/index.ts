import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { firestoreReducer } from "./reducers/firebase/firestore";
import { authenticationReducer } from "./reducers/firebase/authentication";

const rootReducers = combineReducers({
  auth: authenticationReducer,
  db: firestoreReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
