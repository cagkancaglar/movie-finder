// api = 289d668a77fbdec88cb12f2e41cfc474

// base_url = https://api.themoviedb.org/3

// https://api.themoviedb.org/3/search/movie?api_key=289d668a77fbdec88cb12f2e41cfc474&language=en-US&query=abc&page=1&include_adult=false


async function getResult(keyword) {
    const api_key = "289d668a77fbdec88cb12f2e41cfc474";
    const base_url = "https://api.themoviedb.org/3";

    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${keyword}`);
    const data = await response.json();

    

}

getResult("abc");