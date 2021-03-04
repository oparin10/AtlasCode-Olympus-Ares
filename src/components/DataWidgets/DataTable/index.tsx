import React from "react";
import { DataWidgetFunctionalComponentProps } from "../../../dictionaries";

interface Props extends DataWidgetFunctionalComponentProps {}

const DataTable = ({ activeCollection, addNew }: Props) => {
  return (
    <div>
      <div>this is a datatable, believe it or not</div>

      <button onClick={() => addNew(activeCollection!.fields)}>
        Open this mofo and add some shit bruv
      </button>
    </div>
  );
};

export default DataTable;
