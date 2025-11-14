//1
const container = document.getElementById("users")
const api = "https://dummyjson.com/users"

async function loadUsers() {
    container.innerHTML = "⏳ Загрузка..."
    try {
        const res = await fetch(api)
        const data = await res.json()
        
        renderUsers(data.users);
    } catch {
        container.innerHTML = "<p style='color:red'>Ошибка загрузки</p>";
    }
}

function renderUsers(users) {
    container.innerHTML = "";

    if (users.length === 0) {
        container.innerHTML = "<p>Пользователь не найден 😔</p>";
        return;
    }

    users.forEach(u => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
            <img src="${u.image}" alt="${u.firstName}">
            <h3>${u.firstName} ${u.lastName}</h3>
            <p>Возраст: ${u.age}</p>
            <p>Город: ${u.address.city}</p>
            <p>📧 ${u.email}</p>
            <button onclick="showDetails(${u.id})">Подробнее</button>
        `
        container.appendChild(card)
    })
}

//2
async function showDetails(id) {
  container.innerHTML = "⏳ Загрузка..."
  try {
    const res = await fetch(`${api}/${id}`)
    const u = await res.json()
    container.innerHTML = `
        <div class="card big">
            <img src="${u.image}" alt="${u.firstName}">
            <h2>${u.firstName} ${u.lastName}</h2>
            <p><b>Возраст:</b> ${u.age}</p>
            <p><b>Профессия:</b> ${u.company.title}</p>
            <p><b>Город:</b> ${u.address.city}</p>
            <p><b>Телефон:</b> ${u.phone}</p>
            <p><b>Email:</b> ${u.email}</p>
            <button onclick="loadUsers()">Назад</button>
        </div>
    `
  } catch {
    container.innerHTML = "<p style='color:red'>Не удалось получить данные</p>"
  }
}

//3
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

searchBtn.addEventListener("click", async () => {
    const query = searchInput.value.trim()
    if (!query) return loadUsers()

    container.innerHTML = "⏳ Поиск..."
    try {
        const res = await fetch(`${api}/search?q=${query}`)
        const data = await res.json()
        if (Array.isArray(data.users)) {
        renderUsers(data.users);
        } else {
            container.innerHTML = "<p>Пользователь не найден 😔</p>";
        } 
    } catch (error) {
        console.error(error);
        container.innerHTML = "<p style='color:red'>Ошибка поиска</p>";
    }
})

resetBtn.addEventListener("click", () => {
    searchInput.value = ""
    loadUsers()
})

loadUsers();