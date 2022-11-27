// api = 289d668a77fbdec88cb12f2e41cfc474

// base_url = https://api.themoviedb.org/3

// https://api.themoviedb.org/3/search/movie?api_key=289d668a77fbdec88cb12f2e41cfc474&language=en-US&query=abc&page=1&include_adult=false


import Search from "./models/Search";
import Movie from "./models/Movie";
import {elements} from "../js/base"
import * as searchView from "./views/searchView"

const state = {};

// Search Controller
const searchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResults();
        searchView.clearInput();
        searchView.clearResults();

        searchView.displayResults(state.search.data);
    }else {
        alert("Anahtar kelime girmelisiniz!")
    }
}

elements.searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    searchController();
    console.log("form submitted");
})

// Movie Controller

const movie = new Movie(252291)
movie.getMovie();
console.log(movie);
