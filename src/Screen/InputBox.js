import React from "react";
import { InputBase } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setText, addItem } from "../Redux/Action";

export default function InputBox() {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state);
  return (
    <div className="input-box">
      <InputBase
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
        placeholder="Enter text here"
        className="input-base"
      />
      <IconButton onClick={() => text && dispatch(addItem())}>
        <AddCircleOutlineIcon style={{ color: "#2196f3" }} />
      </IconButton>
    </div>
  );
}
