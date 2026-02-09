import { useState } from "react";
import "./App.css"
export default function App(){
// const [text,setText] = useState("")
const [text, setText] = useState("")
const [items, setItems] = useState([])
const [form, setForm] = useState({
  title: "",
  price: "",
  category: "food",
  
})
const [products, setProducts] = useState([])
const [query, setQuery] = useState("")


const visible = products.filter(
  (p) => p.title.toLowerCase().includes(query.toLowerCase()))

const sorted = visible.slice().sort((a,b) => a.price - b.price)



const onChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
}
const addProduct = () =>{
  const title = form.title.trim()
  const price = Number(form.price)

  if(!title) return
  if(Number.isNaN(price) || price <= 0) return

  const newProduct ={
    id: Date.now(),
    title,
    price,
    category: form.category
  }
  setProducts([...products, newProduct])
  setForm({title: "", price: "", category:form.category})
}



const addItem = () =>{
  const trimmed = text.trim();
  if(!trimmed) return;

  setItems([...items, trimmed])
  setText("")
}

const removeItem = (index) =>{
  setItems(items.filter((_, i) => i !== index))
}

return(
  <>
    {/* <input type="text"
    value={text}
    onChange = {(e) => setText(e.target.value)}/>
    <p>Live Text: {text}</p> */}
    <div className="card">
      <h2>SmartList v1 (строки)</h2>
      <div className="product">
        <input
        type="text"
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Напиши элемент"/>
        <button onClick={addItem}>Добавить</button>
      </div>
      <p>Сейчас в input: {text}</p>

      <ul>
        {items.map((item, i) =>(
          <li key={i}>
            {item}
            <button onClick={() => removeItem(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
    <div className="card">
      <h2>SmartShop v1 (products)</h2>
      <div className="product">
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Название товара"
        />
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={onChange}
          placeholder="Цена"
        />
        <select
          name="category"
          value={form.category}
          onChange={onChange}
        >
          <option value="food">food</option>
          <option value="tech">tech</option>
          <option value="other">other</option>
        </select>
        <button onClick={addProduct}>Добавить товар</button>
      </div>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск…"
      />
      <ul>
        {sorted.map((product) => (
          <li key={product.id}>
            {product.title} — {product.category} — {product.price}₸
          </li>
        ))}
      </ul>

      <p> Всего товаров: {products.length} </p>
      <p> Найдено: {sorted.length} </p>
    </div>
    
  </>
)

}