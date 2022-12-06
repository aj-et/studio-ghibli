async function getMovieData() {
    let GHIBLI_URL = 'https://ghibliapi.onrender.com/films';
    try {
        let response = await fetch(GHIBLI_URL);
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
                            <div class="img-card"><img src="${title.movie_banner}"></div>
                            <div class="in-card">
                                <h2>${title.title}</h2>
                                <p>Released: ${title.release_date}</p>
                                <p>Runtime: ${title.running_time}</p>
                                <p>Ratings: ${title.rt_score}/100</p>
                                <p>Director: ${title.director}</p>
                                <p>Producer: ${title.producer}</p>
                                <p class="desc">Description: ${title.description}</p>
                            </div>
                            
                            </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderMovieData();