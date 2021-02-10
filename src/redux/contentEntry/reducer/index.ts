import { fromJS, Map } from "immutable";
import { CHANGE_CONTENT_FIELD, ContentFieldActionTypes } from "../../types";

let initialState = Map({
  entry: Map(),
});

export const contentEntryReducer = (
  state = Map(),
  action: ContentFieldActionTypes
) => {
  switch (action.type) {
    case CHANGE_CONTENT_FIELD:
      let newData = action.payload;

      return state.withMutations((state) => {
        state.set("entry", fromJS(action.payload));
      });

    default:
      return state;
  }
};
