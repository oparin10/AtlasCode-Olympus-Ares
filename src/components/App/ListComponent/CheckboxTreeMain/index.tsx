import { Checkbox, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { Children } from "react";
import styled from "styled-components";

const CheckboxTreeRoot = styled.div`
  width: 100%;
  border-top: 1px solid rgba(51, 51, 51, 0.363);
`;

interface CheckBoxActionContainerProps {
  subCategory?: number;
}

const CheckboxActionContainer = styled.div`
  /* box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5); */
  width: 100%;
  border-radius: 0px;

  background-color: #fff;
`;

const CheckboxSelectContainer = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;
  border-right: 1px solid rgba(51, 51, 51, 0.25);
`;

const CheckboxActionInnerContainer = styled.div<CheckBoxActionContainerProps>`
  margin-left: ${(props) =>
    props.subCategory ? `calc(${props.subCategory} * 40px)` : "initial"};
  display: grid;
  grid-template-columns: auto 70%;
  justify-items: center;
  align-content: center;
`;

const CheckboxLabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface Props {
  checked: boolean;
  onChangeFn?: () => void;
  collapsed?: boolean;
  children?: React.ReactNode;
  subCategory?: number;
}

const CheckboxTreeMain = ({
  checked,
  collapsed,
  onChangeFn,
  children,
  subCategory = 0,
}: Props) => {
  return (
    <CheckboxTreeRoot>
      <CheckboxActionContainer>
        <CheckboxActionInnerContainer subCategory={subCategory}>
          <CheckboxSelectContainer>
            <Checkbox checked={checked} onChange={onChangeFn} />
          </CheckboxSelectContainer>

          <CheckboxLabelContainer>Categoria</CheckboxLabelContainer>
        </CheckboxActionInnerContainer>
      </CheckboxActionContainer>
    </CheckboxTreeRoot>
  );
};

export default CheckboxTreeMain;
