import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationReducer } from "./authentication/reducer";
import { configurationReducer } from "./configuration/reducer";
import { globalUIReducer } from "./globalUI/reducer";
import { collectionsReducer } from "./collections/reducer";
import { activeCollectionReducer } from "./activeCollection/reducer";
import { adonisReducer } from "./adonis/reducer";
import { draftReducer } from "./draft/reducer";
import { colorPickerReducer } from "./colorPicker/reducer";

const rootReducer = combineReducers({
  auth: authenticationReducer,
  config: configurationReducer,
  globalUI: globalUIReducer,
  activeCollection: activeCollectionReducer,
  collections: collectionsReducer,
  adonis: adonisReducer,
  draft: draftReducer,
  colorPicker: colorPickerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
