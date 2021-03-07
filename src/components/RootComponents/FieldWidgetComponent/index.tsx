import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { FieldWidgetDictionary } from "../../../dictionaries";
import { RootState } from "../../../redux";
import { draftChange } from "../../../redux/draft/actions";
import { FieldWidgetTypes } from "../../../types";
import {
  DraftChangeField,
  DraftState,
  DraftStateField,
} from "../../../redux/draft/types";

const FieldWidgetComponent = ({
  fieldType,
  changeField,
  currentFieldValues,
  label,
  name,
  activeFields,
}: FieldComponentRootProps) => {
  const FieldComponentDynamic = FieldWidgetDictionary[fieldType];

  return (
    <div>
      <FieldComponentDynamic
        currentValues={currentFieldValues}
        changeField={changeField}
        name={name}
        label={label}
      />
    </div>
  );
};

export interface FieldComponentProps {
  label: string;
  name: string;
  changeField: (
    key: string,
    value: any,
    fieldType?: FieldWidgetTypes,
    additionalConfig?: any
  ) => DraftChangeField;
  currentValues: Record<string, Partial<DraftStateField>> | undefined;
}

export interface FieldComponentRootProps extends FieldComponentReduxProps {
  fieldType: FieldWidgetTypes;
  label: string;
  name: string;
}

const mapStateToProps = (rootState: RootState) => ({
  currentFieldValues: rootState.draft.fields,
  activeFields: rootState.activeCollection.fields,
});

const mapDispatchToProps = {
  changeField: draftChange,
};

const fieldWidgetConnector = connect(mapStateToProps, mapDispatchToProps);

export type FieldComponentReduxProps = ConnectedProps<
  typeof fieldWidgetConnector
>;

export default fieldWidgetConnector(FieldWidgetComponent);
