const API_URL =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=";

const doc = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("search");

/* const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWQ4NTI4ZTBlZmEyOTk3NDFiOTY5ZjQ2M2ZhYjY1OSIsInN1YiI6IjYwZjUxNmM4NjZhMGQzMDA1ZTU2MTAyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JcAO5JZ6ciiOHcGcR0ibCILgNQ8KbprLpn1k8AnLTNA",
  },
}; */

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /* doc.innerHTML = ""; */

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    /*     fetch(API_URL + searchTerm, options)
      .then((res) => res.json())
      .then((data) => {
        data.results.forEach((movie) => {
          doc.innerHTML += `<div class="card">
                                <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" class="thumbnail" />
                                <h3>${movie.title}</h3>
                            </div>`;
        });
      }); */

    window.location.replace(
      "http://localhost:3000/movies/search?q=" + searchTerm
    );

    search.value = "";

    return false;
  } else {
    window.location.href("");
  }
});
