import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationReducer } from "./authentication/reducer";
import { configurationReducer } from "./configuration/reducer";
import { globalUIReducer } from "./globalUI/reducer";
import { collectionsReducer } from "./collections/reducer";
import { activeCollectionReducer } from "./activeCollection/reducer";
import { adonisReducer } from "./adonis/reducer";
import { entriesReducer } from "./entries/reducer";

const rootReducer = combineReducers({
  auth: authenticationReducer,
  config: configurationReducer,
  globalUI: globalUIReducer,
  activeCollection: activeCollectionReducer,
  collections: collectionsReducer,
  adonis: adonisReducer,
  entries: entriesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
