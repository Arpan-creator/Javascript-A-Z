document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'd47da574'; // Replace with your actual API key
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const resultsDiv = document.getElementById('results');
    const paginationDiv = document.getElementById('pagination');
    const errorMessageDiv = document.getElementById('error-msg');

    let currentPage = 1;
    let totalResults = 0;
    const resultsPerPage = 15;

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        currentPage = 1;
        searchMovies();
    });

    function searchMovies() {
        const searchTerm = searchInput.value;
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}&page=${currentPage}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'True') {
                    totalResults = parseInt(data.totalResults);
                    displayMovies(data.Search);
                    setupPagination();
                    errorMessageDiv.textContent = '';
                } else {
                    resultsDiv.innerHTML = '';
                    paginationDiv.innerHTML = '';
                    errorMessageDiv.textContent = 'No results found.';
                }
            })
            .catch(error => {
                resultsDiv.innerHTML = '';
                paginationDiv.innerHTML = '';
                errorMessageDiv.textContent = 'Error.';
            });
    }

    function displayMovies(movies) {
        resultsDiv.innerHTML = '';
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie';
            movieDiv.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'placeholder.jpg'}" alt="${movie.Title}" width="50">
                <div>
                    <h2>${movie.Title}</h2>
                    <p>Year: ${movie.Year}</p>
                </div>
            `;
            resultsDiv.appendChild(movieDiv);
        });
    }

    function setupPagination() {
        paginationDiv.innerHTML = '';
        const totalPages = Math.ceil(totalResults / resultsPerPage);

        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = 'Previous';
            prevButton.addEventListener('click', () => {
                currentPage--;
                searchMovies();
            });
            paginationDiv.appendChild(prevButton);
        }

        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Next';
            nextButton.addEventListener('click', () => {
                currentPage++;
                searchMovies();
            });
            paginationDiv.appendChild(nextButton);
        }
    }
});
