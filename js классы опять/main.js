class Product {
    constructor(id, title, price, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
    }

    getFormattedPrice() {
        return this.price.toLocaleString("ru-RU") + " ₸";
    }
}

class CartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addProduct(product) {
        const existing = this.items.find(item => item.product.id === product.id);

        if (existing) {
            existing.quantity++;
        } else {
            this.items.push(new CartItem(product, 1));
        }
    }

    decreaseProduct(productId) {
        const index = this.items.findIndex(item => item.product.id === productId);
        if (index === -1) return;

        if (this.items[index].quantity > 1) {
            this.items[index].quantity--;
        } else {
            this.items.splice(index, 1);
        }
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    clear() {
        this.items = [];
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.getTotalPrice(), 0);
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

class ShopUI {
    constructor(products) {
        this.products = products;
        this.cart = new Cart();

        this.productsContainer = document.getElementById("productsContainer");
        this.cartItemsContainer = document.getElementById("cartItemsContainer");
        this.cartBadge = document.getElementById("cartBage");
        this.cartTotal = document.getElementById("cartTotal");
        this.cartCount = document.getElementById("cartCount");
        this.flash = document.getElementById("flashMessage");
        this.searchInput = document.getElementById("searchInput");
        this.categoryFilter = document.getElementById("categorFilter");

        
        this.init();
    }
    init() {
        this.renderCategories();
        this.renderProducts();
        this.renderCart();
        this.searchInput.addEventListener("input", () => this.renderProducts());

        this.categoryFilter.addEventListener("change", () => this.renderProducts());
        document.getElementById("clearCartBtn").addEventListener("click", () => {
            this.cart.clear();
            this.renderCart();
            this.showFlash("Корзина очищена");
        });


        document.getElementById("checkoutBtn").addEventListener("click", () => {
            if (this.cart.isEmpty()) {
                this.showFlash("Корзина пустая!");
                return;
            }
            this.showFlash("Заказ оформлен! 🎉");
            this.cart.clear();
            this.renderCart();
        });
    }
    renderProducts() {
        const searchValue = this.searchInput.value.toLowerCase();
        const category = this.categoryFilter.value;

        const filtered = this.products.filter(p => {
            const matchSearch = p.title.toLowerCase().includes(searchValue);
            const matchCategory = category === "all" || p.category === category;
            return matchSearch && matchCategory;
        });

        this.productsContainer.innerHTML = "";

        filtered.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <div class="product-title">${product.title}</div>
                <div class="product-price">${product.getFormattedPrice()}</div>
                <button class="btn btn-primary" data-id="${product.id}">
                    В корзину
                </button>
            `;

            card.querySelector("button").addEventListener("click", () => {
                this.cart.addProduct(product);
                this.renderCart();
                this.showFlash(`Добавлено: ${product.title}`);
            });

            this.productsContainer.appendChild(card);
        });

        document.getElementById("productCount").textContent = filtered.length;
    }

    renderCategories() {
        const categories = [...new Set(this.products.map(p => p.category))];

        categories.forEach(cat => {
            const option = document.createElement("option");
            option.value = cat;
            option.textContent = cat;
            this.categoryFilter.appendChild(option);
        });
    }

    renderCart() {
        this.cartItemsContainer.innerHTML = "";

        this.cart.items.forEach(item => {
            const div = document.createElement("div");
            div.className = "cart-item";

            div.innerHTML = `
                <span class="cart-item-title">${item.product.title}</span>

                <div class="cart-qty">
                    <button class="qty-btn" data-minus="${item.product.id}">–</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" data-plus="${item.product.id}">+</button>
                </div>

                <button class="remove-btn" data-remove="${item.product.id}">
                    ✕
                </button>
            `;

            div.querySelector(`[data-minus]`).addEventListener("click", () => {
                this.cart.decreaseProduct(item.product.id);
                this.renderCart();
            });

            div.querySelector(`[data-plus]`).addEventListener("click", () => {
                this.cart.addProduct(item.product);
                this.renderCart();
            });

            div.querySelector(`[data-remove]`).addEventListener("click", () => {
                this.cart.removeProduct(item.product.id);
                this.renderCart();
            });

            this.cartItemsContainer.appendChild(div);
        });

        this.cartBadge.textContent = `${this.cart.items.length} товаров`;
        this.cartCount.textContent = this.cart.items.reduce((c, i) => c + i.quantity, 0);
        this.cartTotal.textContent = this.cart.getTotal().toLocaleString("ru-RU") + " ₸";
    }

    showFlash(text) {
        this.flash.textContent = text;
        this.flash.classList.add("show");

        setTimeout(() => {
            this.flash.classList.remove("show");
        }, 1500);
    }
}


const products = [
    new Product(1, "Ноутбук Lenovo", 350000, "electronics"),
    new Product(2, "Кроссовки Nike", 45000, "shoes"),
    new Product(3, "Футболка", 5000, "clothes"),
    new Product(4, "Наушники Sony", 22000, "electronics"),
    new Product(5, "Ботинки зимние", 67000, "shoes"),
];

// Создаём интерфейс
new ShopUI(products);
