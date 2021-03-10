import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";
import CheckboxTreeMain from "../ListComponent/CheckboxTreeMain";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "center",
  },

  ".MuiAccordionDetails-root": {
    padding: "0px !important",
  },
});

interface Props {
  children?: React.ReactNode;
  inner?: boolean;
}
const CategorySelect = ({ children, inner }: Props) => {
  const classes = useStyles();

  return (
    <Box width="300px">
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            style={{ margin: "0px" }}
            expandIcon={<ExpandMoreIcon />}
            aria-label="Expand"
            aria-controls="additional-actions1-content"
            id="additional-actions1-header"
          >
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
              label="Abunai"
            />
          </AccordionSummary>
          <AccordionDetails
            style={{ padding: "0px", display: "flex", flexDirection: "column" }}
          >
            <CheckboxTreeMain checked={true} subCategory={0} />
            <CheckboxTreeMain checked={true} subCategory={0} />
            <CheckboxTreeMain checked={true} subCategory={1} />
            <CheckboxTreeMain checked={true} subCategory={1} />
            <CheckboxTreeMain checked={true} subCategory={1} />
            <CheckboxTreeMain checked={true} subCategory={2} />
            <CheckboxTreeMain checked={true} subCategory={2} />
            <CheckboxTreeMain checked={true} subCategory={2} />
            <CheckboxTreeMain checked={true} subCategory={3} />
            <CheckboxTreeMain checked={true} subCategory={3} />
            <CheckboxTreeMain checked={true} subCategory={3} />
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
};

export default CategorySelect;
