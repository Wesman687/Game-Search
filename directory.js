let url = "https://mmo-games.p.rapidapi.com/games?category=MMORPG"
if (isNaN(category))
    url = "https://mmo-games.p.rapidapi.com/games?category=" + category;      
data = fetchData(url)
console.log(data)


const options =  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "85145a591amshddc656a65b714a4p1741e9jsn73084d441036",
      "x-rapidapi-host": "mmo-games.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    result = await response.json();
  } catch (error) {
    console.error(error);
  }