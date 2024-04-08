import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./context/CartContext";
import CartStore from "./context/CartStore";
//Create A root entry point
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CartStore>
      <App />
    </CartStore>
  </BrowserRouter>
);
