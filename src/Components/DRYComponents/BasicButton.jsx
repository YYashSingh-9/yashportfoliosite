import classes from "./BasicButton.module.css";
import { Button } from "@mui/material";

const BasicButton = (props) => {
  return (
    <>
      <Button onClick={props.onClick}>{props.title}</Button>
    </>
  );
};

export default BasicButton;
