const gamesWrapper = document.querySelector('.games')
const newsWrapper = document.querySelector('.main__news')
const tags = "mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-Person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts"
let mapArray = []
let newsArray = []
let newsPosition = 0
let currentNews = []

async function fetchData(url) {
    let result = []
    const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "85145a591amshddc656a65b714a4p1741e9jsn73084d441036",
          "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        result = await response.json();
        return result
      } catch (error) {
        console.error(error);
      }

    
}


async function fetchNews () {
    document.body.classList += ' news__loading'
    let news = await fetchData('https://mmo-games.p.rapidapi.com/latestnews')

    document.body.classList.remove('news__loading')
    createsNewsArray(news)   
}

function moveRight() {
    if (newsPosition === 15)
        newsPosition = 0
    else
    newsPosition += 1
    newsToHtml()
}
function arrowClickLeft() {
    clearInterval(timeOut)
    moveLeft()
    timeOut = setInterval(reStartMovement, 10000)
}
function arrowClickRight() {
    clearInterval(timeOut)
    moveRight()
    timeOut = setInterval(reStartMovement, 10000)
}
function reStartMovement() {
    clearInterval(timeOut)
    timeOut = setInterval(moveRight, 5000)
}
function moveLeft() {
    if (newsPosition === 0)
        newsPosition = 14
    else
    newsPosition -= 1
    newsToHtml()
}
function stopInterval() {
    clearInterval(timeOut)
}
let timeOut = setInterval(moveRight, 5000)
fetchCategory("Shooter", false);
fetchNews()


function newsToHtml () {       
   
    newsWrapper.innerHTML = `
        <div class="news__window">
        <h1 class="news__title shadowb">${currentNews[newsPosition].title}</h1>
            <div class="new__img--wrapper">
             <figure news_imgs>
                <img src=${currentNews[newsPosition].main_image} class="news__img" alt="">
                <div class="arrow__wrapper">
<i class="fa-solid fa-caret-left arrow arrow-left click" onclick="arrowClickLeft()"></i>
<h2 class="news__subtitle shadowb">${currentNews[newsPosition].short_description}</h3>
<i class="fa-solid fa-caret-right arrow arrow-right click" onclick="arrowClickRight()"></i>            
</div>
            </figure>
            </div>
            
            <a href"${currentNews.article_url}" class="news__url click">${currentNews[newsPosition].article_url}</a> </div>`
            
}

function createsNewsArray(news) {
    let array = []
    for (i = 0; i < 16; ++i){
        array.push(news[i])
    }
    currentNews = array
    newsToHtml()
}






/***
 * 
 *  Games Area
 */

async function fetchCategory(category, title) {
    let url = 'https://mmo-games.p.rapidapi.com/games?sort-by=alphabetical'
    if (isNaN(category) && !(title))
        url = "https://mmo-games.p.rapidapi.com/games?category=" + category;      
    document.body.classList += ' games__loading'
    let data = await fetchData(url)
    console.log(data)
    document.body.classList.remove('games__loading')
    if (title){
        gamesWrapper.innerHTML = mapIt(data.filter(game =>  game.title.toUpperCase().match(category.toUpperCase())))
    }
    else if (!(isNaN(category))) {
    gamesWrapper.innerHTML = mapIt(data.filter(game => category === getYear(game.release_date)))
    }
    else {
        gamesWrapper.innerHTML = mapIt(data)
    }
}

async function searchBar() {
    let text = document.querySelector('.input__bar').value
    if (text === "") {
        return
    }
    if (isNaN(text) && (tags.toUpperCase().search(text.toUpperCase()) !== -1)){
        fetchCategory(text, false)       
    }
    else {
        if (text.length === 4 && !(isNaN(text))) {
            fetchCategory(text, false)
        }
    }
    fetchCategory(text, true)
}

function filterGames(event) {
    fetchCategory(event.target.value, false)
}
function getYear(date) {
    let newData = ""
    for (i = 0; i < 4; i++)
        newData += date[i]
    return(newData)
}

function mapIt (games) {       
    let finalArray = []
    for (i = 0; i < 6; ++i){
        if (!games[i]) i=5
        else
        finalArray.push(games[i])
    }
    mapArray = finalArray.map((games) => { 
    return [`<div class="popular__game">
    <h3 class="game__link--title shadoww">${games.title}</h3>
        <div class="popular__img--wrapper">
        <figure class="popular__imgs">
            <img src="${games.thumbnail}" class="popular__img" alt="">
        </figure>
        </div>
        <div class="popular__text--wrapper">
        <a href="${games.game_url}" class="game__link--text">${games.game_url}</a>
        <p class="game__genre--text ">${games.genre}</p>
        <p class="game__developer--text shadoww">${games.publisher}</p>
        </div>
    </div>`]
    }).join('')
    return mapArray

}