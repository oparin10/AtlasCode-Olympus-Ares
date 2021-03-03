import { Backdrop, Grow, Modal } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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
  children: React.ReactNode;
  isOpen: boolean;
}

const FormBase = ({ children, isOpen }: Props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Grow in={isOpen} timeout={{ enter: 500, exit: 500 }}>
        <div style={{ outline: "none", height: "100%" }}>
          <FormComponentAncientRoot>
            <FormComponentBase>{children}</FormComponentBase>
          </FormComponentAncientRoot>
        </div>
      </Grow>
    </div>
  );
};

export default FormBase;
