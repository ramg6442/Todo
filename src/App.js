import Home from "./Screen/Home";
import { Provider } from "react-redux";
import Store from "./Redux/State";
function App() {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
}

export default App;
