import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { InputBase } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { editText as editTitle, deleteItem } from "../Redux/Action";
import { useDispatch } from "react-redux";

export default function ItemCard({ text, index }) {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");
  const dispatch = useDispatch("");

  const handleEdit = () => {
    let data = {
      index,
      text: editText,
    };
    if(data.text)
    dispatch(editTitle(data));
    setEditText("");
    setEdit(false);
  };
  return (
    <div className="item-card">
      {!edit ? (
        <div className="title">
          <div>
            <ArrowForwardIosIcon style={{ color: "#2196f3" }} />
            <h1>{text}</h1>
          </div>
          <div>
            <EditIcon
              onClick={() => {
                setEditText(text);
                setEdit(true);
              }}
            />
            <DeleteIcon
              onClick={() => dispatch(deleteItem(index))}
              style={{ color: "red", marginLeft: "10px" }}
            />
          </div>
        </div>
      ) : (
        <div className="edit-card">
          <InputBase
            autoFocus
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="input-base"
            placeholder="Enter Text"
          />
          <CheckCircleIcon
            onClick={handleEdit}
            style={{ color: "green", marginLeft: "10px" }}
          />
          <CancelIcon
            onClick={() => setEdit(false)}
            style={{ color: "#ff1744", marginLeft: "10px" }}
          />
        </div>
      )}
    </div>
  );
}
