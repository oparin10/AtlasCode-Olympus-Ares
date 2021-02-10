import React from "react";
import { WarCollection } from "../../../redux/types";

interface Props {
  collections: Array<WarCollection>;
}

const WarCollections = ({ collections = [] }: Props) => {
  return (
    <div>
      {collections.map((collectionItem: WarCollection, index: number) => {
        return (
          <div key={index}>
            <h1>{collectionItem.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default WarCollections;
