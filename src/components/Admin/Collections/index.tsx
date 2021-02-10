import React from "react";
import { WarCollection } from "../../../redux/types";
import CollectionField from "../CollectionField";

interface Props {
  collections: Array<WarCollection>;
}

const WarCollections = ({ collections = [] }: Props) => {




  
  return (
    <div>
      <CollectionField widgetType="string" />
      {/* {collections.map((collectionItem: WarCollection, index: number) => {
        return (
          <div key={index}>
            <h1>{collectionItem.name}</h1>
          </div>
        );
      })} */}
      <CollectionField widgetType="markdown" />
    </div>
  );
};

export default WarCollections;
