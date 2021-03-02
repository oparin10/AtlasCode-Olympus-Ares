import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { Backdrop, Grow, Modal } from "@material-ui/core";
import FieldWidgetComponent from "../../FieldWidgets/FieldWidgetComponent";

const FormComponentBase = styled.div``;

interface Props {
  initialValuesArray?: Array<string>;
}

const FormCreate = ({
  initialValuesArray = ["ass", "butt", "big", "bikini", "booty"],
}: Props) => {
  let initialValuesObj: any = {};

  React.useEffect(() => {
    for (const key of initialValuesArray) {
      initialValuesObj[key] = "";
    }

    console.log(initialValuesObj);
  }, []);

  return (
    <div>
      <Modal
        style={{ outline: "none" }}
        open={true}
        onClose={() => null}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, style: { outline: "none" } }}
      >
        <Grow in={true} timeout={{ enter: 500, exit: 500 }}>
          <div style={{ outline: "none" }}>
            <FieldWidgetComponent
              label={"Whaaaa"}
              name={"SAY IT"}
              fieldType="select"
            />
          </div>
        </Grow>
      </Modal>
    </div>
  );
};

export default FormCreate;
