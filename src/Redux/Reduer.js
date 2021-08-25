import { ADDITEM, SETTEXT, EDITTEXT, DELETEITEM } from "./Action";

const initialState = {
  text: "",
  items: [],
};

const reduer = (state = initialState, action) => {
  switch (action.type) {
    case ADDITEM: {
      return { text: "", items: [...state.items, state.text] };
    }
    case EDITTEXT: {
      let { index, text } = action.paylod;
      let arr = [...state.items];
      arr[index] = text;
      return { text: "", items: arr };
    }
    case DELETEITEM: {
      let index = action.paylod;
      let arr = [...state.items].filter((data, i) => i !== index);
      return { ...state, items: arr };
    }

    case SETTEXT: {
      return { ...state, text: action.paylod };
    }

    default:
      return state;
  }
};

export default reduer;
