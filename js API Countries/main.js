const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener("click", async () => {
    const name = document.getElementById("country").value.trim();
    const result = document.getElementById("result");
    if (!name) {
        alert("Введите название страны!");
        return;
    }
    result.innerHTML = "Загрузка...";
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
            result.innerHTML = "Страна не найдена!";
            return;
        }
        const data = await response.json();
        const country = data[0];

        const flag = country.flags.svg;
        const capital = country.capital?.[0] || "Нет данных";
        const languages = country.languages ? Object.values(country.languages).join(", ") : "Нет данных";

        result.innerHTML = `
            <h3>${country.name.common}</h3>
            <img src="${flag}" alt="flag">
            <p><b>Столица:</b> ${capital}</p>
            <p><b>Языки:</b> ${languages}</p>
        `;
        
    } catch (error) {
        result.innerHTML = "Ошибка при загрузке данных!";
        console.error(error);
    }
});