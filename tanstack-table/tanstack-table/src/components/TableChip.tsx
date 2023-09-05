import React from "react";
import { Chip, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { CellContext } from "@tanstack/react-table";
import { BasicTableColumnType } from "./Columns";

const customHoverStyling = {
  background: "#04aa6d",
  color: "#ffffff",
};

const useStyles = makeStyles({
  customHoverStyle: {
    "&:hover": {
      backgroundColor: "#04aa6d !important",
      color: "#ffffff",
      border: "none"
    },
  },
});

interface TableChipProps {
  props: CellContext<BasicTableColumnType, string>;
}

const handleCompletedClick = ({ props }: TableChipProps) => {
  console.log("Props on hanldeClick", props.row.original);
  props.row.original = props.row.original + 1;
};
const handleDeletedClick = ({ props }: TableChipProps) => {
  console.log("Props on hanldeClick", props.row.original);
  props.row.original = props.row.original - 1;
};

const TableChip = ({ props }: TableChipProps) => {
  // console.log(props.row.original);
  const classes = useStyles();
  return (
    <Grid sx={{display: "flex", justifyContent: "space-around"}}>
      <Chip
        onClick={() => handleCompletedClick({ props })}
        label="Completed"
        variant="outlined"
        icon={<MdOutlineFileDownloadDone />}
        clickable
        sx={{
          "&:hover": {
            backgroundColor: "#04aa6d !important",
            color: "#ffffff",
            border: "none",
          },
        }}
      />
      <Chip
        label="Ongoing"
        variant="outlined"
        onClick={() => handleDeletedClick({ props })}
        icon={<AiOutlineDelete />}
        classes={{
          root: classes.customHoverStyle,
        }}
        clickable
      />
    </Grid>
  );
};

export default TableChip;
