const movies = [
    { title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, director: 'Christopher Nolan' },
    { title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9, director: 'Quentin Tarantino' },
    { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3, director: 'Frank Darabont' },
    { title: 'Interstellar', genre: 'Sci-Fi', year: 2014, rating: 8.6, director: 'Christopher Nolan' },
    { title: 'Fight Club', genre: 'Drama', year: 1999, rating: 8.8, director: 'David Fincher' },
    { title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2, director: 'Francis Ford Coppola' },
    { title: 'Forrest Gump', genre: 'Drama', year: 1994, rating: 8.8, director: 'Robert Zemeckis' }
];

function recommendMovies(preferredGenres, minRating) {
    const filteredMovies = movies.filter(movie => {
        return preferredGenres.includes(movie.genre) && movie.rating >= minRating;
    });

    filteredMovies.sort((a, b) => b.rating - a.rating);

    return filteredMovies;
}

function calculateAverageRatingByGenre(filteredMovies) {
    const genreRatings = {};

    filteredMovies.forEach(movie => {
        if (!genreRatings[movie.genre]) {
            genreRatings[movie.genre] = { totalRating: 0, count: 0 };
        }
        genreRatings[movie.genre].totalRating += movie.rating;
        genreRatings[movie.genre].count++;
    });

    const averageRatings = [];
    for (let genre in genreRatings) {
        const averageRating = genreRatings[genre].totalRating / genreRatings[genre].count;
        averageRatings.push({ genre: genre, averageRating: averageRating });
    }

    averageRatings.sort((a, b) => b.averageRating - a.averageRating);

    return averageRatings;
}

function getTopDirectors(filteredMovies, numTopDirectors) {
    const directorRatings = {};

    filteredMovies.forEach(movie => {
        if (!directorRatings[movie.director]) {
            directorRatings[movie.director] = { totalRating: 0, count: 0 };
        }
        directorRatings[movie.director].totalRating += movie.rating;
        directorRatings[movie.director].count++;
    });

    const directors = [];
    for (let director in directorRatings) {
        const averageRating = directorRatings[director].totalRating / directorRatings[director].count;
        directors.push({ director: director, averageRating: averageRating });
    }

    directors.sort((a, b) => b.averageRating - a.averageRating);

    const topDirectors = directors.slice(0, numTopDirectors);

    const topDirectorsMovies = [];
    topDirectors.forEach(director => {
        const moviesByDirector = filteredMovies.filter(movie => movie.director === director.director);
        moviesByDirector.sort((a, b) => a.title.localeCompare(b.title));
        const highestRatedMovie = moviesByDirector.reduce((max, movie) => (movie.rating > max.rating ? movie : max), moviesByDirector[0]);
        topDirectorsMovies.push({
            director: director.director,
            movies: [{ title: highestRatedMovie.title, rating: highestRatedMovie.rating }]
        });
    });

    return topDirectorsMovies;
}

const userPreferredGenres = ['Drama', 'Crime'];
const userMinRating = 8.5;

const recommendedMovies = recommendMovies(userPreferredGenres, userMinRating);
const averageRatingsByGenre = calculateAverageRatingByGenre(recommendedMovies);
const topDirectors = getTopDirectors(recommendedMovies, 3);

console.log("Filtered Recommended Movies:");
console.log(recommendedMovies);
console.log("\nAverage Ratings by Genre:");
console.log(averageRatingsByGenre);
console.log("\nTop Directors and Their Highest-Rated Movies:");
console.log(topDirectors);
