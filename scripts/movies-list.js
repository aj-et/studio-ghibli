
async function getMovieData() {
    let POKE_URL = 'https://ghibliapi.herokuapp.com/films';
    try {
        let response = await fetch(POKE_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderMovieData() {
    let titles = await getMovieData();
    let html = '';
    titles.forEach(title => {
        let htmlSegment = `<div class="movies">
                            <img src="${title.image}">
                            <h2>${title.title}</h2>
                            <h3>${title.original_title_romanised}</h3>
                            <p>${title.description}`

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderMovieData();