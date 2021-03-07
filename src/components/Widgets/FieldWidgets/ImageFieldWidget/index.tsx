import { Box, Grow, TextField } from "@material-ui/core";
import React from "react";
import {
  DraftAdditionalConfigTypes,
  DraftChangeField,
  DraftStateField,
} from "../../../../redux/draft/types";
import { FieldWidgetTypes } from "../../../../types";
import { FieldComponentProps } from "../../../RootComponents/FieldWidgetComponent";

const ImageFieldWidget = ({
  changeField,
  currentValues,
  label,
  name,
}: FieldComponentProps) => {
  let currentImageValue: DraftStateField | string =
    currentValues?.[name].value.imageURL ?? "";

  let currentImageDescriptionValue: DraftStateField | string =
    currentValues?.[name].value.imageDescription ?? "";

  return (
    <div>
      <Box mb={3} width={"100%"} display="flex" justifyContent="center">
        <Grow
          mountOnEnter
          unmountOnExit
          in={Boolean(currentImageValue.toString().length > 0)}
          timeout={{ enter: 750, exit: 750 }}
        >
          <div>
            <Box
              width={"200px"}
              height={"200px"}
              display="flex"
              justifyContent="center"
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "35px",
                }}
                src={currentImageValue as string}
                alt={currentImageDescriptionValue as string}
              />
            </Box>
          </div>
        </Grow>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        fontSize={{ xs: "15px", md: "20px" }}
        fontWeight={600}
      >
        {label.toString()}
      </Box>
      <Box width={"300px"} my={2}>
        <TextField
          variant="outlined"
          value={currentImageValue}
          fullWidth
          label="Link da imagem"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeField(name, e.target.value, "image", "url")
          }
        />
      </Box>

      <Box my={2}>
        <TextField
          value={currentImageDescriptionValue}
          fullWidth
          label="Descrição da imagem"
          variant="outlined"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeField(name, e.target.value, "image", "description")
          }
        />
      </Box>
    </div>
  );
};

export default ImageFieldWidget;
