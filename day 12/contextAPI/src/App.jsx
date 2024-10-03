import { RouterProvider } from "react-router-dom";
import router from "./routes/Routing";
import "./main.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
