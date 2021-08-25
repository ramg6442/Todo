import React from "react";
import ListAltIcon from "@material-ui/icons/ListAlt";
export default function Header() {
  return (
    <div className="header">
      <ListAltIcon style={{ color: "white" }} />
      <h1>To Do List</h1>
    </div>
  );
}
