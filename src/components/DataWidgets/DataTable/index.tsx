import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { AdminItem } from "../../../config/collections.config";
import { entryDraftNew } from "../../../redux/entries/actions";

interface Props {}

const DataTable = (props: Props) => {
  const dispatch = useDispatch();

  const activeCollection: AdminItem = useSelector(
    (state: RootStateOrAny) => state.activeCollection
  );

  return (
    <div>
      <div>this is a datatable, believe it or not</div>

      <button onClick={() => dispatch(entryDraftNew(activeCollection.fields))}>
        Open this mofo and add some shit bruv
      </button>
    </div>
  );
};

export default DataTable;
