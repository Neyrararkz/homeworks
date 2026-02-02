import styles from "../App.module.css"

import ProductCard from "./ProductCard";

export default function ProductList({ products, onInc, onDec, onDelete }) {
  return (
    <div className={styles.list}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onInc={onInc}
          onDec={onDec}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
