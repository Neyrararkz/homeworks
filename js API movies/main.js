const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const moviesList = document.getElementById("moviesList");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (!query) {
        alert("Введите название!");
        return;
    }
    fetchMovies(query);
});

async function fetchMovies(query) {
    moviesList.innerHTML = "Загрузка...";
    movieDetails.innerHTML = "";
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        if (data.length === 0) {
            moviesList.innerHTML = "Ничего не найдено";
            return;
        }
        displayMovies(data);
    } catch (err) {
        moviesList.innerHTML = "Ошибка загрузки";
        console.error(err);
    }
}
function displayMovies(data) {
    moviesList.innerHTML = "";

    data.forEach(item => {
        const show = item.show;
        const div = document.createElement("div");
        div.className = "movie";
        div.innerHTML = `
            <img src="${show.image?.medium || ''}" alt="">
            <div>
                <h3>${show.name}</h3>
                <p>ID: ${show.id}</p>
            </div>
        `;

        div.addEventListener("click", () => {
            fetchMovieDetails(show.id);
        });

        moviesList.appendChild(div);
    });
}
