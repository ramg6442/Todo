import { createStore } from "redux";
import reducer from "./Reduer";

const state = createStore(reducer);

export default state;
