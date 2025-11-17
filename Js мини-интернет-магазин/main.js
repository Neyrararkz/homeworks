
const store = {
    products: [
        {id: 1, title: 'Jacket', price: 32000},
        {id: 2, title: 'Sweater', price: 24000},
        {id: 3, title: 'Coat', price: 65000},
        {id: 4, title: 'Pants', price: 21000},
    ],

    cart: [],

    getProducts(){
        return [...this.products];
    },

    renderProducts(){
        const productsContainer = document.getElementById('products');
        productsContainer.innerHTML = ``;

        this.getProducts().forEach(({id, title, price}) => {
            const product = document.createElement('div');
            product.className = 'product';

            product.innerHTML = `
                <p>${title} — ${price}₸.</p>
                <button onclick='store.addToCart(${id})'>Добавить</button>
            `;
            productsContainer.appendChild(product);
        });
    },

    addToCart(id){
        const productCart = this.products.find(p => p.id === id);
        const existing = this.cart.find(p => p.id === id);

        if (existing){
            existing.qty += 1;
        } else{
            this.cart = [...this.cart, {...productCart, qty: 1}];
        }
        this.renderCart();
    },

    removeFromCart(id){
        const removeProduct = this.cart.find(p => p.id === id);

        if (!removeProduct) return;
        if (removeProduct.qty > 1){
            removeProduct.qty -= 1;
        } else{
            this.cart = this.cart.filter(p => p.id !== id);
        }
        this.renderCart();
    },

    clearCart(){
        this.cart = [];
        this.renderCart();
    },

    getCartTotal(){
        return this.cart.reduce((sum, p) => sum + p.price*p.qty, 0);
    },

    renderCart(){
        const cartContainer = document.getElementById('cart');
        cartContainer.innerHTML = '';

        this.cart.forEach(({id, title, price, qty}) => {
            const productCart = document.createElement('div');
            productCart.className = 'product-cart';

            productCart.innerHTML = `
            <p>${title} x${qty} — ${price*qty}₸.</p>
            <div class='cart-btns'>
                <button onclick='store.addToCart(${id})'>[+]</button>
                <button onclick='store.removeFromCart(${id})'>[-]</button>
            </div> 
        `;
        cartContainer.appendChild(productCart);
        });

        const totalPrice = document.getElementById('total');
        totalPrice.textContent = `Итого: ${this.getCartTotal()}₸.`;
    }
};

document.getElementById("clearBtn").onclick = () => store.clearCart();

store.renderProducts();
store.renderCart();


