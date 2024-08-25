import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App text-black bg-white dark:text-white dark:bg-black relative">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
