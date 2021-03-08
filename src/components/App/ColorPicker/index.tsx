import { ClickAwayListener, Grow, Modal, Slide, Zoom } from "@material-ui/core";
import React from "react";
import { ChromePicker, ColorResult } from "react-color";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../redux";
import { colorPickerHide } from "../../../redux/colorPicker/actions";
import IconComponent from "../../Util/IconComponent";

const ColorPickBackdrop = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ColorPickerRootContainer = styled.div`
  svg {
    display: none;
  }

  .MuiSvgIcon-root {
    display: block;
  }

  .flexbox-fix:last-of-type {
    div:nth-child(2) {
      display: none;
    }
  }
`;

const ColorPickerModalContainer = styled.div`
  outline: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColorPickerModalContainerInner = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  position: relative;

  .colorPickerClose {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    background-color: #fff;
    padding: 7px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(10px, -6px);
  }

  .colorPickerHeader {
    font-size: 16px;
    padding-top: 25px;
    padding-bottom: 25px;
    font-weight: 700;

    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) {
    height: auto;
    width: auto;
    padding-left: 75px;
    padding-right: 75px;
  }
`;

interface Props extends ColorPickerReduxProps {}

const ColorPicker = ({ handleClose, isOpen }: Props) => {
  const [colorState, setColorState] = React.useState<string>("#F15D3C");
  const colorPickerRootRef = React.useRef<HTMLDivElement>(null);

  const eventOnParent = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target == colorPickerRootRef.current) {
      handleClose();
    } else {
      return;
    }
  };

  return (
    <Zoom
      style={{ outline: "none" }}
      in={isOpen}
      timeout={{ enter: 500, exit: 250 }}
      unmountOnExit
    >
      <ColorPickBackdrop
        ref={colorPickerRootRef}
        onClick={(e: any) => eventOnParent(e)}
        style={{ zIndex: 5000 }}
      >
        <div>
          <ColorPickerModalContainer>
            <ColorPickerRootContainer>
              <ColorPickerModalContainerInner>
                <div onClick={handleClose} className="colorPickerClose">
                  <IconComponent
                    width="12px"
                    height="12px"
                    clickable
                    iconType="Close"
                  />
                </div>
                <div className="colorPickerHeader">Seletor de cores</div>

                <ChromePicker
                  disableAlpha
                  color={colorState}
                  // onChangeComplete={(color: ColorResult) => setColorState(color.hex)}
                  onChange={(color: ColorResult) => setColorState(color.hex)}
                ></ChromePicker>
              </ColorPickerModalContainerInner>
            </ColorPickerRootContainer>
          </ColorPickerModalContainer>
        </div>
      </ColorPickBackdrop>
    </Zoom>
  );
};

const mapStateToProps = (rootState: RootState) => ({
  isOpen: rootState.colorPicker.isOpen,
});

const mapDispatchToProps = {
  handleClose: colorPickerHide,
};

const colorPickerConnector = connect(mapStateToProps, mapDispatchToProps);

export type ColorPickerReduxProps = ConnectedProps<typeof colorPickerConnector>;

export default colorPickerConnector(ColorPicker);
