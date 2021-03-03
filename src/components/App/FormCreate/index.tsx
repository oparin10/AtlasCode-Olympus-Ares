import React from "react";
import { Formik, Form } from "formik";
import styled from "styled-components";
import { Backdrop, Grow, Modal } from "@material-ui/core";
import FieldWidgetComponent from "../../FieldWidgets/FieldWidgetComponent";

const FormComponentAncientRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  outline: 0;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const FormComponentBase = styled.div`
  height: auto;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);

  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  margin: 32px;
  position: relative;
  overflow-y: auto;
  display: flex;
  max-height: calc(100% - 64px);
  flex-direction: column;
  max-width: 600px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

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
          <div style={{ outline: "none", height: "100%" }}>
            <FormComponentAncientRoot>
              <FormComponentBase>
                <FieldWidgetComponent
                  label={"Label 1"}
                  onChange={(e: any) => console.log(e.target.value)}
                  value={"lol"}
                  fieldType="string"
                />
              </FormComponentBase>
            </FormComponentAncientRoot>
          </div>
        </Grow>
      </Modal>
    </div>
  );
};

export default FormCreate;
