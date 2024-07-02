const gamesWrapper = document.querySelector('.games')
const newsWrapper = document.querySelector('.main__news')
let mapArray = []
let newsArray = []
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


async function fetchCategory(category) {
    console.log(category)
    let url = "https://mmo-games.p.rapidapi.com/games?category=MMORPG"
    if (isNaN(category))
        url = "https://mmo-games.p.rapidapi.com/games?category=" + category;      
    
    let data = await fetchData(url)
    let news = await fetchData('https://mmo-games.p.rapidapi.com/latestnews')
    newsArray = mapNews(news)
    newsWrapper.innerHTML = newsArray
    if (isNaN(category))
    gamesWrapper.innerHTML = mapIt(data.filter(game => category === game.genre))
    else{
        let date = getYear(category)
        gamesWrapper.innerHTML = mapIt(data.filter(game => date === getYear(game.release_date)))
        console.log(mapIt(result.filter(game => date === getYear(game.release_date))))
    }
    
}

setTimeout(() => {
    fetchCategory("Shooter");
  });
  
  function mapIt (games) {       
    let finalArray = []
    for (i = 0; i < 6; ++i){
        if (!games[i]) i=5
        else
        finalArray.push(games[i])
    }
    mapArray = finalArray.map((games) => { 
    return [`<div class="popular__game">
    <h3 class="game__link--title">${games.title}</h3>
        <div class="popular__img--wrapper">
        <figure class="popular__imgs">
            <img src="${games.thumbnail}" class="popular__img" alt="">
        </figure>
        </div>
        <div class="popular__text--wrapper">
        <a href="${games.game_url}" class="game__link--text">${games.game_url}</a>
        <p class="game__genre--text">${games.genre}</p>
        <p class="game__developer--text">${games.publisher}</p>
        </div>
    </div>`]
    }).join('')
    return mapArray

}
function mapNews (news) {       
    let finalNews = []
    for (i = 0; i < 1; ++i){
        finalNews.push(news[i])
    }
    let array = finalNews.map((news) => { 
    return [`<h1 class="news__title">${news.title}</h1>
        <div class="news__window">
            <figure news_imgs>
                <img src=${news.main_image} class="news__img" alt="">
            </figure>
            <h2 class="news__subtitle">${news.short_description}</h3>
            </div>
            <a href"${news.article_url}" class="news__url click">${news.article_url}</a>`]
    }).join('')
    return array
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

