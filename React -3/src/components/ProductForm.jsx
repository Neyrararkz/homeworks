import styles from "../App.module.css"

export default function ProductForm({form, onChange, onSubmit}){
    return(
        <form className={styles.form} onSubmit={onSubmit}>
            <input
              className={styles.input}
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Product name"
            />
            <input
              className={styles.input}
              type="number"
              name="price"
              value={form.price}
              onChange={onChange}
              min="0"
            />
            <input
              className={styles.input}
              type="number"
              name="qty"
              value={form.qty}
              onChange={onChange}
              min="1"
            />
            <button className={styles.btn}>Add product</button>
        </form>
    )
}
