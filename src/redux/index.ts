import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationReducer } from "./authentication/reducer";
import { configurationReducer } from "./configuration/reducer";
import { globalUIReducer } from "./globalUI/reducer";
import { collectionsReducer } from "./collections/reducer";
import { activeCollectionReducer } from "./activeCollection/reducer";

const rootReducers = combineReducers({
  auth: authenticationReducer,
  config: configurationReducer,
  globalUI: globalUIReducer,
  activeCollection: activeCollectionReducer,
  collections: collectionsReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
