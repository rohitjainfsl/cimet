import { CartContextProvider } from "./context/CartContext";
import {  UserContextProvider } from "./context/UserContext";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
    <UserContextProvider>
      <CartContextProvider>
        <AllRoutes />
      </CartContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
