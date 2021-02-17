import { GET_CONFIG_SUCCESS } from "../../types";
import { get } from "lodash";

export const collectionsReducer = (state = [], action: any) => {
  switch (action.type) {
    case GET_CONFIG_SUCCESS:
      let configCollectionsTwo: Array<any> = get(action.payload, "collections");

      // let toListType: List<WarCollection> = List(configCollectionsTwo);

      // return List(configCollectionsTwo)
      //   .toOrderedMap()
      //   .mapKeys((key, value) => value.name.toLowerCase());

      return configCollectionsTwo;

    default:
      return state;
  }
};
