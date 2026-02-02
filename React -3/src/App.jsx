import { useState } from "react"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/ProductList"

export default function App() {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    qty: 1
  })

  const [products, setProducts] = useState([])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === "name" ? value : Number(value)
    }))
  }

  function addProduct(e) {
    e.preventDefault()
    if (form.name.trim().length < 2) return

    const newProduct = {
      id: Date.now(),
      name: form.name.trim(),
      price: form.price,
      qty: form.qty
    }

    setProducts(prev => [newProduct, ...prev])
    setForm({ name: "", price: 0, qty: 1 })
  }

  function incQty(id) {
    setProducts(prev =>
      prev.map(p =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    )
  }

  function decQty(id) {
    setProducts(prev =>
      prev.map(p =>
        p.id === id && p.qty > 1
          ? { ...p, qty: p.qty - 1 }
          : p
      )
    )
  }

  function deleteProduct(id) {
    setProducts(prev =>
      prev.filter(p => p.id !== id)
    )
  }

  const total = products.reduce(
    (sum, p) => sum + p.price * p.qty, 0
  )

  return (
    <div  className="app">
      <ProductForm form={form} onChange={handleChange} onSubmit={addProduct} />
      <ProductList products={products} onInc={incQty} onDec={decQty} onDelete={deleteProduct} />
      <h2 className="total">Total: {total}</h2>
    </div>
  )
}

