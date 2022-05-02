import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";
import styles from "./App.modules.css";
import {
  SwipeableList,
  SwipeableListItem,
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);
  return (
    <div className={styles.App}>
      <Nav />
      <ProductList products={products} setBasket={setBasket} />
      <BasketContainer setBasket={setBasket} basket={basket} />
    </div>
  );
}

export default App;
