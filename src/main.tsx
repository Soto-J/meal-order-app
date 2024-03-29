import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartProvider from "./store/CartProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  // {/* </React.StrictMode> */}
);
