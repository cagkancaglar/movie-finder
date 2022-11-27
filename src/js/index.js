// api = 289d668a77fbdec88cb12f2e41cfc474

// base_url = https://api.themoviedb.org/3

// https://api.themoviedb.org/3/search/movie?api_key=289d668a77fbdec88cb12f2e41cfc474&language=en-US&query=abc&page=1&include_adult=false


import Search from "./models/search";

const state = {};

const searchController = async () => {
    const keyword = document.getElementById("txt-keyword").value;

    if(keyword){
        state.search = new Search(keyword);

        await state.search.getResults();

        console.log(state.search.data.results);
    }else {
        alert("Anahtar kelime girmelisiniz!")
    }
}

document.getElementById("form-search").addEventListener("submit", function(e){
    e.preventDefault();
    searchController();
    console.log("form submitted");
})

