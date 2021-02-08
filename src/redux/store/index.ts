import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { firestoreReducer } from "./firestore/reducer";
import { authenticationReducer } from "./authentication/reducer";

const rootReducers = combineReducers({
  auth: authenticationReducer,
  db: firestoreReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
