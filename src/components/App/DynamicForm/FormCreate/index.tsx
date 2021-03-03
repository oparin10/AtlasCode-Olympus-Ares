import React from "react";
import FieldWidgetComponent from "../../../FieldWidgets/FieldWidgetComponent";
import { AdminItem } from "../../../../config/collections.config";
import FormBase from "../FormBase";
import { useDispatch } from "react-redux";
import { setCreateItemFields } from "../../../../redux/createItem/actions";

interface Props {
  activeCollection: AdminItem;
  isOpen: boolean;
}

const FormCreate = ({ activeCollection, isOpen }: Props) => {
  return (
    <FormBase isOpen={isOpen}>
      {activeCollection && activeCollection.fields.length > 0
        ? activeCollection.fields.map((collectionField, index) => {
            return (
              <FieldWidgetComponent
                label={collectionField.label}
                value={undefined}
                key={index}
                onChange={(e: any) => console.log(e.target.value)}
                fieldType={collectionField.fieldType}
              />
            );
          })
        : null}
    </FormBase>
  );
};

export default FormCreate;
