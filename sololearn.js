class Movie {
    constructor () {
        this.movies = [
            { movieName: "Hacksaw Ridge", rating: 9.77, genre: "History", views: 12.000000},
            { movieName: "Top Gun: Maverick", rating: 2.1, genre: "Action", views: 4.500000},
            { movieName: "The Last Samurai", rating: 7.6, genre: "Drama", views: 100000},
            { movieName: "Avengers", rating: 4.5, genre: "Fantasy", views: 1.500000 },
        ]
    }

    sortByName () {
        return this.movies.slice().sort((a, b) => a.movieName.localeCompare(b.movieName));
    }

    sortByRating () {
        return this.movies.slice().sort((a, b) => (a.rating > b.rating) ? -1 : 1);
    }

    sortByGenre () {
        return this.movies.slice().sort((a, b) => a.genre.localeCompare(b.genre));
    }

    sortByViews () {
        return this.movies.slice().sort((a, b) => (a.views > b.views) ? -1 : 1);
    }

    getMovies (type) {
        switch (type.toLowerCase()) {
            case "by name":
                return this.sortByName();
                break;
            case "by rating":
                return this.sortByRating();
                break;
            case "by genre":
                return this.sortByGenre();
                break;
            case "by views":
                return this.sortByViews();
                break;
            default:
                return "something went wrong";
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('You have the option to sort the movies by "name, rating, genre and views" fill in the option and press enter, example (by name): ', (i) => {
    const mov = new Movie();
    console.log(mov.getMovies(i));;
    rl.close();
});
