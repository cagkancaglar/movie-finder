// api = 289d668a77fbdec88cb12f2e41cfc474

// base_url = https://api.themoviedb.org/3

// https://api.themoviedb.org/3/search/movie?api_key=289d668a77fbdec88cb12f2e41cfc474&language=en-US&query=abc&page=1&include_adult=false


import Search from "./models/Search";
import { Movie } from "./models/Movie";
import { elements, renderLoader, clearLoader } from "../js/base";
import * as searchView from "./views/searchView";
import * as movieView from "./views/movieView";

const state = {};

// Search Controller
const searchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword){
        state.search = new Search(keyword);
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.movieListContainer);
        await state.search.getResults();
        searchView.displayResults(keyword, state.search.data);
        setTimeout(() => {
            clearLoader(elements.movieListContainer);
        }, 100000);
    }else {
        alert("Anahtar kelime girmelisiniz!")
    }
}
            

elements.searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    searchController();
})

// Movie Controller
const movieController = async () => {
    const id = window.location.hash.replace("#","");
    if(id){
        state.movie = new Movie(id);
        await state.movie.getMovie();
        movieView.displayMovie(state.movie.data);
        movieView.scrollToTop();
    }
};

window.addEventListener("hashchange", movieController);
elements.movieDetailsClose.addEventListener("click", movieView.closeDetails);