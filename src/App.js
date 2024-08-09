import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/WatchPage",
    element: <WatchPage />,
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

/**
 * 
 * const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/WatchPage",
    element: <WatchPage />,
  },
]);

 */
