import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./store.js";
import { Provider } from "react-redux";
// import Counter from "./Counter.jsx";
import Todos from "./Todos.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Todos />
  </Provider>
);
