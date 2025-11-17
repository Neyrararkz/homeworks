//1 Система заказов

const ordersSystem = {
    orders: [],
    addOrder(order){
        this.orders = [...this.orders, order] 
    },
    getTotalCheck(){
        return this.orders.reduce((sum, o) => sum + o.price, 0)
    }
};

ordersSystem.addOrder({id: 1, title:'Latte', withSyrup: true, price: 1300});
ordersSystem.addOrder({id: 2, title:'Croissant', price: 1000});

console.log(ordersSystem.orders[0].title, ` — `, ordersSystem.orders[0].price);
console.log(ordersSystem.orders[1].title, ` — `, ordersSystem.orders[1].price);
console.log(ordersSystem.getTotalCheck());

//2 Банк аккаунт
const bankAccount = {
    balance: 0,
    transactions: [],
    deposit(amount){
        this.balance += amount;
        this.transactions = [...this.transactions, {type:'deposit', amount}];
    },
    withdraw(amount){
        this.balance -= amount;
        this.transactions = [...this.transactions, {type:'withdraw', amount}];
    },
    AvgTransactions(){
        return this.transactions.reduce((sum, t) => sum + t.amount, 0)/this.transactions.length;
    }
}

bankAccount.deposit(5000);
bankAccount.withdraw(2000);
console.log(`Баланс: `, bankAccount.balance);
console.log(`Средние транзакции:`, bankAccount.AvgTransactions());

//3 Мессенджер чат
const chat = {
    messages: [],
    sendMessage(user, text){
        this.messages = [...this.messages, {user, text}]
    },
    getLastMessage(){
        return this.messages[this.messages.length - 1]
    }
}

chat.sendMessage("Lidiya", "Hello!")
chat.sendMessage("Thomas", "Hi!")

console.log(chat.getLastMessage())

//4 Каталог книг

const booksCatalog = {
    books: [],
    addBook(title, author, year){
        this.books = [...this.books, {title, author, year}]
    },
    totalBooks(){
        return this.books.length;
    },
    booksList(){
        for(book of this.books){
            console.log(book.title, ` — `, book.author, `, `, book.year)
        }
    }
}

booksCatalog.addBook('The maze runner', 'James Dashner', 2009)
booksCatalog.addBook('Dead poets society', 'N. G. Kleinbaum', 1989)

console.log(`Всего книг в каталоге: `,booksCatalog.totalBooks())
console.log(booksCatalog.booksList())

//5
const toyStore = {
    toys: [],
    addToy(toy){
        this.toys = [...this.toys, toy]
    },
    getTotalPrice(){
        return this.toys.reduce((s,t) => s + t.price, 0)
    }
}

toyStore.addToy({title:"Bear", price:3000})
toyStore.addToy({title:"Robot", price:4500})

console.log(toyStore.getTotalPrice())
