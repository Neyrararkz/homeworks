const card = document.getElementById("card")
const addBtn = document.getElementById("addBtn")

let product = {
    title: "Phone",
    price: 100000,
    color: "Black"
}

function renderProduct() {
    card.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Color: ${product.color}</p>
        ${product.feature ? `<p>Feature: ${product.feature}</p>` : ""}
    `;
}

addBtn.addEventListener("click", () => {
    product = { ...product, feature: "Waterproof" };
    renderProduct();
});

renderProduct();
