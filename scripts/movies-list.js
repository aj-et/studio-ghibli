async function getMovieData() {
    let POKE_URL = 'https://ghibliapi.herokuapp.com/films';
    try {
        let response = await fetch(POKE_URL);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// async function getPeople(a) {
//     a.forEach(people => {
//         console.log(people);
//     })
// }

async function renderMovieData() {
    let titles = await getMovieData();
    // let rawpeople = titles[0].people;
    // console.log(rawpeople);
    // let newpeople = getPeople(rawpeople);
    let html = '';
    titles.forEach(title => {
        let htmlSegment = `<div class="movie-cont">
                            <div class="img-card"><img class="movie-img" src="${title.movie_banner}"></div>
                            <div class="in-card">
                                <h2>${title.title}</h2>
                                <p>Release Date: ${title.release_date}</p>
                                <p>Running Time: ${title.running_time}</p>
                                <p>Ratings: ${title.rt_score}/100</p>
                                <p>Director: ${title.director}</p>
                                <p>Producer: ${title.producer}</p>
                                <p>Description: ${title.description}</p>
                            </div>
                            
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderMovieData();