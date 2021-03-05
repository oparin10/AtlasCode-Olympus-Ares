import React from "react";
import { DataWidgetFunctionalComponentProps } from "../../../../types";

interface Props extends DataWidgetFunctionalComponentProps {}

const DataTable = ({ activeCollection, addNew }: Props) => {
  return (
    <div>
      <div>this is a datatable, believe it or not</div>

      <button onClick={() => addNew(activeCollection!.fields)}>
        Open action creation
      </button>
    </div>
  );
};

export default DataTable;
