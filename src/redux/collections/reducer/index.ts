import { GET_CONFIG_SUCCESS, Content } from "../../types";
import { get } from "lodash";
import { List, Map } from "immutable";

export const collectionsReducer = (state = null, action: any) => {
  switch (action.type) {
    case GET_CONFIG_SUCCESS:
      let configCollectionsTwo: Array<Content> = get(
        action.payload,
        "collections"
      );

      let toListType: List<Content> = List(configCollectionsTwo);

      return List(configCollectionsTwo)
        .toOrderedMap()
        .mapKeys((key, value) => value.name.toLowerCase());

    default:
      return state;
  }
};
