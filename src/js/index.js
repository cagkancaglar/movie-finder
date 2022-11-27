// api = 289d668a77fbdec88cb12f2e41cfc474

// base_url = https://api.themoviedb.org/3

// https://api.themoviedb.org/3/search/movie?api_key=289d668a77fbdec88cb12f2e41cfc474&language=en-US&query=abc&page=1&include_adult=false



// model-view-controller

import Search from "./models/search";

const search = new Search("abc");

console.log(search);
search.getResults();