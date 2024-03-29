import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <Fragment>
      <Header openCart={toggleCart} />
      {showCart && <Cart closeCart={toggleCart} />}
      
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
