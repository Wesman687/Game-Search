const gamesWrapper = document.querySelector('.games')
const newsWrapper = document.querySelector('.main__news')
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
    let news = await fetchData('https://mmo-games.p.rapidapi.com/latestnews')
    createsNewsArray(news)   
}

function moveRight() {
    if (newsPosition === 15)
        newsPosition = 0
    else
    newsPosition += 1
    newsToHtml()
}
function moveLeft() {
    if (newsPosition === 0)
        newsPosition = 14
    else
    newsPosition -= 1
    newsToHtml()
}



fetchCategory("Shooter");
fetchNews()


function newsToHtml () {       
    console.log(newsPosition)
    
    newsWrapper.innerHTML = `
        <div class="news__window">
        <h1 class="news__title shadowb">${currentNews[newsPosition].title}</h1>
            <div class="new__img--wrapper">
             <figure news_imgs>
                <img src=${currentNews[newsPosition].main_image} class="news__img" alt="">
                <div class="arrow__wrapper">
<i class="fa-solid fa-caret-left arrow arrow-left click" onclick="moveLeft()"></i>
<h2 class="news__subtitle shadowb">${currentNews[newsPosition].short_description}</h3>
<i class="fa-solid fa-caret-right arrow arrow-right click" onclick="moveRight()"></i>            
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

async function fetchCategory(category) {
    let url = "https://mmo-games.p.rapidapi.com/games?category=MMORPG"
    if (isNaN(category))
        url = "https://mmo-games.p.rapidapi.com/games?category=" + category;      
    
    let data = await fetchData(url)
    if (isNaN(category))
    gamesWrapper.innerHTML = mapIt(data.filter(game => category === game.genre))
    else{
        let date = getYear(category)
        gamesWrapper.innerHTML = mapIt(data.filter(game => date === getYear(game.release_date)))
    }   
}

function filterGames(event) {
    fetchCategory(event.target.value)
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