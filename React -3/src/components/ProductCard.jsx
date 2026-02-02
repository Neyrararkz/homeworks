import styles from "../App.module.css"


export default function ProductCard({ product, onInc, onDec, onDelete }) {
  const { id, name, price, qty } = product
  return (
    <div className={styles.card}>
      <div className="card-info">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Qty: {qty}</p>
        <p>Sum: {price * qty}</p>
      </div>
      <div className="card-actions">
        <button onClick={() => onDec(id)}>-</button>
        <button onClick={() => onInc(id)}>+</button>
        <button onClick={() => onDelete(id)} className="delete">Delete</button>
      </div>
    </div>
  )
}


