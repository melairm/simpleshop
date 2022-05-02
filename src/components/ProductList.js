import Product from "./Product";

export default function ProductList({ products, setBasket }) {
  return (
    <section className="ProductList">
      {products.map((p) => (
        <Product setBasket={setBasket} product={p} />
      ))}
    </section>
  );
}
