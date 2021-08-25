const ADDITEM = "ADDITEM";
const SETTEXT = "SETTEXT";
const EDITTEXT = "EDITTEXT";
const DELETEITEM = "DELETEITEM";

const addItem = () => {
  return {
    type: ADDITEM,
  };
};
const setText = (text) => {
  return {
    type: SETTEXT,
    paylod: text,
  };
};
const editText = (data) => {
  return {
    type: EDITTEXT,
    paylod: data,
  };
};
const deleteItem = (index) => {
  return {
    type: DELETEITEM,
    paylod: index,
  };
};

export {
  addItem,
  ADDITEM,
  setText,
  SETTEXT,
  editText,
  EDITTEXT,
  deleteItem,
  DELETEITEM,
};
