//const database = await fetch ("https://www.mmobomb.com/api1/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc")
const gamesWrapper = document.querySelector('.games')
let games = []

async function renderGames(filter) {
    
    if (filter === 'MMOARPG' || (filter === 'ARPG') || (filter === "MMORPG") || (filter === 'MMO')) {
        const filteredGames = games.filter(game => filter === game.genre)
        gamesWrapper.innerHTML = mapIt(filteredGames)
        return
    }
    if (filter === 'AMAZON')        
        return developer("Amazon Games")
    else if (filter === "Gameforge")
        return developer("GameForge")
    else if (filter === "KingsIsle")
        return developer("KingsIsle Entertainment")
    else if (filter === "Suba")
        return developer("Suba Games")
    games = getGames()
    const gamesHtml = mapIt(games)
    gamesWrapper.innerHTML = gamesHtml

}

setTimeout(() => {
    renderGames()
},);

function developer(str) {
    games = getGames()
    const filteredGames = games.filter(game => str === game.publisher)
    gamesWrapper.innerHTML = mapIt(filteredGames)
}
function filterGames(event) {
    renderGames(event.target.value)
}
function mapIt (games) {       
    let finalArray = []
    for (i = 0; i < 6; ++i){
        if (!games[i]) i=5
        else
        finalArray.push(games[i])
    }
    const mapArray = finalArray.map((games) => { 
    return [`<div class="popular__game">
    <h3 class="game__link--title">${games.title}</h3>
        <div class="popular__img--wrapper">
        <figure class="popular__imgs">
            <img src="${games.thumbnail}" class="popular__img" alt="">
        </figure>
        </div>
        <div class="popular__text--wrapper">
        <a href="" class="game__link--text">${games.game_url}</a>
        <p class="game__genre--text">${games.genre}</p>
        <p class="game__developer--text">${games.publisher}</p>
        </div>
    </div>`]
    }).join('')
    return mapArray    
}


function passThrough (id) {
    
}
function postHtml(games) {
   return[(`<div class="popular__game">
        <h3 class="game__link--title">${games[0].title}</h3>
            <div class="popular__img--wrapper">
            <figure class="popular__imgs">
                <img src="${games[0].thumbnail}" class="popular__img" alt="">
            </figure>
            </div>
            <div class="popular__text--wrapper">
            <a href="" class="game__link--text">${games[0].game_url}</a>
            <p class="game__genre--text">${games[0].genre}</p>
            <p class="game__developer--text">${games[0].publisher}</p>
            </div>
        </div>`
        )]
    }


function getGames() {
    return [
        {
        "id": 6,
        "title": "Blade and Soul",
        "thumbnail": "https://www.mmobomb.com/g/6/thumbnail.jpg",
        "short_description": "Blade & Soul is a free to play 3D action-combat MMORPG. In Blade & Soul, you'll take part in epic martial-arts action, fighting evil at every turn with your vast array of physical and mystical abilities.",
        "game_url": "https://www.mmobomb.com/open/blade-and-soul",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "NCSoft",
        "developer": "NCSoft",
        "release_date": "2016-01-19",
        "profile_url": "https://www.mmobomb.com/blade-and-soul"
        },
        {
        "id": 8,
        "title": "Trove",
        "thumbnail": "https://www.mmobomb.com/g/8/thumbnail.jpg",
        "short_description": "Trove is a Voxel-based MMO from Trion Worlds that generates exciting new worlds on a regular basis. It features free-form exploration that makes going through a mountain as rewarding as going over it, and enables community contributions to significantly impact the game through player created creatures and environments.",
        "game_url": "https://www.mmobomb.com/open/trove",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Trion Worlds",
        "developer": "Trion Worlds",
        "release_date": "2015-07-09",
        "profile_url": "https://www.mmobomb.com/trove"
        },
        {
        "id": 10,
        "title": "ArcheAge",
        "thumbnail": "https://www.mmobomb.com/g/10/thumbnail.jpg",
        "short_description": "ArcheAge is a fantasy sandbox MMORPG that sends players on a journey across the great continents of Nuia and Harihara. In search of the legacy of the Delphinad, the greatest city to ever exist, they will unfold the secrets of the Lost Continent as well as whatever adventures and treasures that turn up along the way.",
        "game_url": "https://www.mmobomb.com/open/archeage",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Kakao Games",
        "developer": "XL Games",
        "release_date": "2014-09-04",
        "profile_url": "https://www.mmobomb.com/archeage"
        },
        {
        "id": 11,
        "title": "Neverwinter",
        "thumbnail": "https://www.mmobomb.com/g/11/thumbnail.jpg",
        "short_description": "Neverwinter is an action MMORPG based on the acclaimed Dungeons and Dragons universe. In Neverwinter you take on the role as a mighty hero who must set out to protect the lands of Neverwinter from those who conspire to see it destroyed.",
        "game_url": "https://www.mmobomb.com/open/neverwinter",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Perfect World Entertainment",
        "developer": "Cryptic Studios",
        "release_date": "2013-12-06",
        "profile_url": "https://www.mmobomb.com/neverwinter"
        },
        {
        "id": 13,
        "title": "Guild Wars 2",
        "thumbnail": "https://www.mmobomb.com/g/13/thumbnail.jpg",
        "short_description": "Guild Wars 2 represents ArenaNet's attempt to turn MMO convention on its ears and create an engaging game for players of all skill levels and play styles. It does away with typical things like the holy trinity (tank, healer, DPS) and eschews traditional group mechanics for open-world content, which anyone can join in on without hampering other players' efforts.",
        "game_url": "https://www.mmobomb.com/open/guild-wars-2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "NCsoft",
        "developer": "ArenaNet",
        "release_date": "2012-08-28",
        "profile_url": "https://www.mmobomb.com/guild-wars-2"
        },
        {
        "id": 16,
        "title": "Roblox",
        "thumbnail": "https://www.mmobomb.com/g/16/thumbnail.jpg",
        "short_description": "Roblox is a massively multiplayer 3D game environment with of thousands of games that use physics to simulate the real world, and a virtual economy with millions of highly customized characters. Players on Roblox demonstrate incredible creativity limited only by their imagination, using core building components to create their own elaborate online games, social hangouts, and custom virtual items.",
        "game_url": "https://www.mmobomb.com/open/roblox",
        "genre": "MMO",
        "platform": "PC (Windows)",
        "publisher": "Roblox Corporation",
        "developer": "Roblox Corporation",
        "release_date": "2006-12-22",
        "profile_url": "https://www.mmobomb.com/roblox"
        },
        {
        "id": 62,
        "title": "Kritika: Zero",
        "thumbnail": "https://www.mmobomb.com/g/62/thumbnail.jpg",
        "short_description": "Leap into action in Kritika: Zero (Kritika Online), a fast-paced free-to-play MMORPG from VALOFE!",
        "game_url": "https://www.mmobomb.com/open/kritika",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "VALOFE",
        "developer": "VALOFE",
        "release_date": "2024-01-25",
        "profile_url": "https://www.mmobomb.com/kritika"
        },
        {
        "id": 64,
        "title": "Secret World Legends",
        "thumbnail": "https://www.mmobomb.com/g/64/thumbnail.jpg",
        "short_description": "Experience the rich, handcrafted storyline and moody atmosphere of Funcom's The Secret World in its free-to-play spinoff, Secret World Legends! Featuring the same gameplay as TSW, Secret World Legends offers improved combat, a re-designed progression system, and updated visuals, breathing new life into this classic MMORPG.",
        "game_url": "https://www.mmobomb.com/open/secret-world-legends",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Funcom",
        "developer": "Funcom",
        "release_date": "2017-07-31",
        "profile_url": "https://www.mmobomb.com/secret-world-legends"
        },
        {
        "id": 77,
        "title": "Revelation Online",
        "thumbnail": "https://www.mmobomb.com/g/77/thumbnail.jpg",
        "short_description": "Soar over a vast and colorful world in Revelation Online, NetEase and My.com's far-reaching free-to-play MMO inspired by Asian designs. You'll spend much of your time in the air, whether utilizing your character's wings or flying mounts, exploring the vast and open world of Nuanor and experiencing a wide range of content options.",
        "game_url": "https://www.mmobomb.com/open/revelation-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "My.com",
        "developer": "NetEase",
        "release_date": "2017-03-06",
        "profile_url": "https://www.mmobomb.com/revelation-online"
        },
        {
        "id": 87,
        "title": "MU Legend",
        "thumbnail": "https://www.mmobomb.com/g/87/thumbnail.jpg",
        "short_description": "Fight against the God of Destruction in Mu Legend, the free-to-play action RPG follow-up to Webzen's popular Mu Online. The attempt to hide evil in a human body failed, causing death and destruction on a massive scale.",
        "game_url": "https://www.mmobomb.com/open/mu-legend",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "VALOFE",
        "developer": "VALOFE",
        "release_date": "2017-03-23",
        "profile_url": "https://www.mmobomb.com/mu-legend"
        },
        {
        "id": 89,
        "title": "AdventureQuest 3D",
        "thumbnail": "https://www.mmobomb.com/g/89/thumbnail.jpg",
        "short_description": "AdventureQuest 3D is Artix Entertainment's free-to-play follow-up to AdventureQuest Worlds, offering a fantastic MMORPG experience across multiple platforms. Explore an ever-expanding world, battle dangerous monsters, and capture amazing loot!",
        "game_url": "https://www.mmobomb.com/open/adventurequest-3d",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Artix Entertainment",
        "developer": "Artix Entertainment",
        "release_date": "2016-10-19",
        "profile_url": "https://www.mmobomb.com/adventurequest-3d"
        },
        {
        "id": 106,
        "title": "Riders of Icarus",
        "thumbnail": "https://www.mmobomb.com/g/106/thumbnail.jpg",
        "short_description": "Master fantastic beasts and engage in daring three-dimensional aerial combat in Riders of Icarus, a free-to-play MMORPG from WeMade Entertainment and Nexon! Explore a lushly developed virtual fantasy world from the ground and from the skies, and join other heroes in the fight against evil.",
        "game_url": "https://www.mmobomb.com/open/riders-of-icarus",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "VALOFE",
        "developer": "WeMade",
        "release_date": "2016-07-06",
        "profile_url": "https://www.mmobomb.com/riders-of-icarus"
        },
        {
        "id": 112,
        "title": "Weapons Of Mythology",
        "thumbnail": "https://www.mmobomb.com/g/112/thumbnail.jpg",
        "short_description": "Claim your relic and fight against the powers of darkness in Weapons of Mythology -- New Age, a free-to-play MMORPG that draws inspiration from Chinese myth and legend. Two factions fight for control of the ultimate relic, while a third seeks to destroy everything in its path.",
        "game_url": "https://www.mmobomb.com/open/weapons-of-mythology",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "IDC/Games",
        "developer": "Gamemag",
        "release_date": "2016-06-07",
        "profile_url": "https://www.mmobomb.com/weapons-of-mythology"
        },
        {
        "id": 116,
        "title": "Tree of Savior",
        "thumbnail": "https://www.mmobomb.com/g/116/thumbnail.jpg",
        "short_description": "Tree of Savior is a vividly designed MMORPG with lush graphics and a surprisingly deep combat system that challenges players to come up with new strategies on the fly. Tree of Savior's diverse character classes -- 80 in total -- and their various job advancements guarantee that you'll find something you like to play.",
        "game_url": "https://www.mmobomb.com/open/tree-of-savior",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "IMC Games",
        "developer": "IMC Games",
        "release_date": "2016-05-10",
        "profile_url": "https://www.mmobomb.com/tree-of-savior"
        },
        {
        "id": 120,
        "title": "Luna Online: Reborn",
        "thumbnail": "https://www.mmobomb.com/g/120/thumbnail.jpg",
        "short_description": "Relive your favorite Luna Online memories with Luna Online: Reborn, Suba Games' remake of the anime-styled free-to-play MMORPG! Set in the fantasy world of Blueland, Luna Online: Reborn takes all that was great about Luna Online and adds even more, while removing many of the restrictions and annoyances of its predecessor.",
        "game_url": "https://www.mmobomb.com/open/luna-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Suba Games",
        "developer": "Suba Games",
        "release_date": "2017-10-17",
        "profile_url": "https://www.mmobomb.com/luna-online"
        },
        {
        "id": 154,
        "title": "Sphere 3: Enchanted World",
        "thumbnail": "https://www.mmobomb.com/g/154/thumbnail.jpg",
        "short_description": "Sphere III: Enchanted World is a 3D fantasy action MMORPG that was published by Nikita Online. Use the game’s unique non-target combat system and participate in the PvP that is a strong focus in Sphere III.",
        "game_url": "https://www.mmobomb.com/open/sphere-3",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "NIKITA ONLINE",
        "developer": "NIKITA ONLINE",
        "release_date": "2015-08-18",
        "profile_url": "https://www.mmobomb.com/sphere-3"
        },
        {
        "id": 161,
        "title": "Skyforge",
        "thumbnail": "https://www.mmobomb.com/g/161/thumbnail.jpg",
        "short_description": "Skyforge is a free-to-play sci-fi MMORPG from the Allods Team, Obsidian Entertainment, and My.com where players will become gods to battle invading forces from space as well as other players. In Skyforge, players will progress towards becoming gods.",
        "game_url": "https://www.mmobomb.com/open/skyforge",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "My.com",
        "developer": "Allods Team & Obsidian Entertainment Collaboration",
        "release_date": "2015-07-16",
        "profile_url": "https://www.mmobomb.com/skyforge"
        },
        {
        "id": 167,
        "title": "Salem",
        "thumbnail": "https://www.mmobomb.com/g/167/thumbnail.jpg",
        "short_description": "Salem is a free-to-play crafting MMORPG developed by Seatribe and Mortal Moments, Inc. Players will experience an enormous open-world colonial setting where creation is the goal and all the necessary materials are for the taking – and permanent death is a real possibility.",
        "game_url": "https://www.mmobomb.com/open/salem",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Mortal Moments",
        "developer": "John Carver",
        "release_date": "2015-06-19",
        "profile_url": "https://www.mmobomb.com/salem"
        },
        {
        "id": 185,
        "title": "Eldevin",
        "thumbnail": "https://www.mmobomb.com/g/185/thumbnail.jpg",
        "short_description": "Eldevin is a free-to-play Browser MMORPG (and client), from Hunted Cow Studios. Set in the Eldevin Kingdom, players must protect their homeland against the Emperor of the Infernal Empire, hell bent on obtaining powerful artifacts which are sure to plunge the kingdom into chaos and confusion.",
        "game_url": "https://www.mmobomb.com/open/eldevin",
        "genre": "MMORPG",
        "platform": "PC (Windows), Web Browser",
        "publisher": "Hunted Cow Studios",
        "developer": "Hunted Cow Studios",
        "release_date": "2014-11-05",
        "profile_url": "https://www.mmobomb.com/eldevin"
        },
        {
        "id": 190,
        "title": "Ryzom",
        "thumbnail": "https://www.mmobomb.com/g/190/thumbnail.jpg",
        "short_description": "Ryzom is a free-to-play fantasy/sci-fi sandbox that puts critical decisions in the hands of players and constantly evolves based on their actions. With updated graphics for its Steam launch, Ryzom is waiting to be discovered by a new generation of gamers looking for a truly immersive experience.",
        "game_url": "https://www.mmobomb.com/open/ryzom",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Winch Gate",
        "developer": "Nevrax",
        "release_date": "2004-09-19",
        "profile_url": "https://www.mmobomb.com/ryzom"
        },
        {
        "id": 195,
        "title": "Divine Souls",
        "thumbnail": "https://www.mmobomb.com/g/195/thumbnail.jpg",
        "short_description": "Divine Souls is a free-to-play 3D Action-Fighting MMORPG from Outspark, with unique character classes, imposing weapons, arcade style brawler gameplay, and non-stop action. To transform into a Divine Soul, an enlightened one, you must master an impressive array of combos, skills, and weapons in battle.",
        "game_url": "https://www.mmobomb.com/open/divine-souls",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Suba Games ",
        "developer": "GamePrix ",
        "release_date": "2014-08-15",
        "profile_url": "https://www.mmobomb.com/divine-souls"
        },
        {
        "id": 198,
        "title": "Creativerse",
        "thumbnail": "https://www.mmobomb.com/g/198/thumbnail.jpg",
        "short_description": "In Creativerse, a free-to-play building game from Playful Corporation, you can explore, mine, craft, and build to your heart's content in a lush and vibrant 3-D world. Many elements will be familiar to players of similar games, but Creativerse streamlines much of the gameplay, making it easy to jump right in and start building the structure of your dreams!",
        "game_url": "https://www.mmobomb.com/open/creativerse",
        "genre": "MMO",
        "platform": "PC (Windows)",
        "publisher": "Playful Corporation",
        "developer": "Playful Corporation",
        "release_date": "2014-08-12",
        "profile_url": "https://www.mmobomb.com/creativerse"
        },
        {
        "id": 205,
        "title": "Elsword",
        "thumbnail": "https://www.mmobomb.com/g/205/thumbnail.jpg",
        "short_description": "Elsword is a free to play 3D non-stop side-scrolling MMORPG set in a colorful comic book style world with anime-style graphics and RPG elements. Experienced gamers as well as casual players can immediately jump into the game and pick-up the intuitive controls to defeat enemies or string together combos to deal devastating damage.",
        "game_url": "https://www.mmobomb.com/open/elsword",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "KOG Games",
        "developer": "KOG",
        "release_date": "2011-03-23",
        "profile_url": "https://www.mmobomb.com/elsword"
        },
        {
        "id": 206,
        "title": "Aura Kingdom",
        "thumbnail": "https://www.mmobomb.com/g/206/thumbnail.jpg",
        "short_description": "Aura Kingdom, is an Anime MMORPG set in the wildly alive world of Azuria. In Azuria the power of Gaia remains ever-present.",
        "game_url": "https://www.mmobomb.com/open/aura-kingdom",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "X-Legend",
        "developer": "X-Legend",
        "release_date": "2013-12-23",
        "profile_url": "https://www.mmobomb.com/aura-kingdom"
        },
        {
        "id": 221,
        "title": "Lucent Heart",
        "thumbnail": "https://www.mmobomb.com/g/221/thumbnail.jpg",
        "short_description": "Lucent Heart is a 3D free to play fantasy MMORPG widely popular in Asia. The game has in-depth match making and dating features where players can even get married.",
        "game_url": "https://www.mmobomb.com/open/lucent-heart",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Suba Games",
        "developer": "Playcoco (Subsidiary of Gamania)",
        "release_date": "2014-01-10",
        "profile_url": "https://www.mmobomb.com/lucent-heart"
        },
        {
        "id": 225,
        "title": "RIFT",
        "thumbnail": "https://www.mmobomb.com/g/225/thumbnail.jpg",
        "short_description": "Rift, a once P2P MMORPG now Free to Play MMORPG by Trion Worlds is set in a world being torn apart by mystical energies. Play as either a Gaurdian or a Defiant in your fight for control of the ever-changing planes of Telara, choosing from 40 unique souls to create your own custom class.",
        "game_url": "https://www.mmobomb.com/open/rift",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Trion Worlds",
        "developer": "Trion Worlds",
        "release_date": "2013-10-24",
        "profile_url": "https://www.mmobomb.com/rift"
        },
        {
        "id": 226,
        "title": "Path of Exile",
        "thumbnail": "https://www.mmobomb.com/g/226/thumbnail.jpg",
        "short_description": "Path of Exile is an 3D Action RPG published by Grinding Gear Games. Similar to games such as Diablo and Torchlight, Path of Exile allows players to explore various dungeons in the forms of story \"Acts\".",
        "game_url": "https://www.mmobomb.com/open/path-of-exile",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Grinding Gear Games",
        "developer": "Grinding Gear Games",
        "release_date": "2013-10-23",
        "profile_url": "https://www.mmobomb.com/path-of-exile"
        },
        {
        "id": 230,
        "title": "Ragnarok Online 2",
        "thumbnail": "https://www.mmobomb.com/g/230/thumbnail.jpg",
        "short_description": "Ragnarok Online 2 is the sequel to the popular 2.5D original Ragnarok. While the two may share the same developer, Gravity, both games play almost completely different.",
        "game_url": "https://www.mmobomb.com/open/ragnarok-online-2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Gravity Interactive",
        "developer": "Gravity, Inc.",
        "release_date": "2013-05-01",
        "profile_url": "https://www.mmobomb.com/ragnarok-online-2"
        },
        {
        "id": 232,
        "title": "Age of Wushu",
        "thumbnail": "https://www.mmobomb.com/g/232/thumbnail.jpg",
        "short_description": "Age of Wulin, also known as Age of Wushu in North America is a new free to play fantasy 3D martial arts MMORPG with some unique features. Set in the Ming Dynasty (Jianghu) during the Chinese Feudal Empire.",
        "game_url": "https://www.mmobomb.com/open/age-of-wushu",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Snail Games",
        "developer": "Snail Games",
        "release_date": "2012-12-20",
        "profile_url": "https://www.mmobomb.com/age-of-wushu"
        },
        {
        "id": 234,
        "title": "Champions of Regnum",
        "thumbnail": "https://www.mmobomb.com/g/234/thumbnail.jpg",
        "short_description": "Champions of Regnum is a free to play 3D fantasy MMORPG similar to the subscription-based MMORPG, Dark Age of Camelot (DAoC). Both games have realm versus realm action (RvR), 3 realms to choose from, and similar graphics.",
        "game_url": "https://www.mmobomb.com/open/champions-of-regnum",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "NGD Studios",
        "developer": "NGD Studios",
        "release_date": "2013-02-27",
        "profile_url": "https://www.mmobomb.com/champions-of-regnum"
        },
        {
        "id": 241,
        "title": "Everquest",
        "thumbnail": "https://www.mmobomb.com/g/241/thumbnail.jpg",
        "short_description": "EverQuest is a popular 3D fantasy MMORPG that was released on 1999 and since its release has enjoyed numerous expansion packs and content updates. Celebrating its 13th anniversary EverQuest has gone free-to-play with three account levels (free, silver, and gold).",
        "game_url": "https://www.mmobomb.com/open/everquest",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Daybreak Games",
        "developer": "Daybreak Games",
        "release_date": "2012-12-13",
        "profile_url": "https://www.mmobomb.com/everquest"
        },
        {
        "id": 246,
        "title": "Pirate 101",
        "thumbnail": "https://www.mmobomb.com/g/246/thumbnail.jpg",
        "short_description": "Pirate101 is a 3D Pirate MMORPG where players must embark on a journey to become a renowned pirate. Players will be able to choose from 5 unique pirate themed classes each with their own unique starter companion and abilities.",
        "game_url": "https://www.mmobomb.com/open/pirate-101",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "KingsIsle Entertainment",
        "developer": "KingsIsle Entertainment",
        "release_date": "2012-10-15",
        "profile_url": "https://www.mmobomb.com/pirate-101"
        },
        {
        "id": 248,
        "title": "Continent of the Ninth Seal",
        "thumbnail": "https://www.mmobomb.com/g/248/thumbnail.jpg",
        "short_description": "C9 (Continent of the Ninth Seal) is a free to play 3D fantasy action RPG with great graphics, strategic battle zone system, story driven quests, and much more. C9 has hack and slash style action with impressive graphics, fluid movement and fancy skill effects that combine to create visually marvelous game play.",
        "game_url": "https://www.mmobomb.com/open/c9",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Webzen",
        "developer": "NHN Games (Acquired by Webzen)",
        "release_date": "2012-09-13",
        "profile_url": "https://www.mmobomb.com/c9"
        },
        {
        "id": 251,
        "title": "The Lord of the Rings Online",
        "thumbnail": "https://www.mmobomb.com/g/251/thumbnail.jpg",
        "short_description": "The Lord of the Rings Online (LOTRO) is a free-to-play massively multiplayer online roleplaying game (MMORPG) developed by Turbine, based on the books of J.R.R. Tolkien, with characters from the books and movies.",
        "game_url": "https://www.mmobomb.com/open/lotro",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Warner Bros. Interactive Entertainment",
        "developer": "Turbine, Inc.",
        "release_date": "2001-04-24",
        "profile_url": "https://www.mmobomb.com/lotro"
        },
        {
        "id": 254,
        "title": "AION",
        "thumbnail": "https://www.mmobomb.com/g/254/thumbnail.jpg",
        "short_description": "Aion: Ascension is a free to play visually stunning 3D MMORPG where your character wields devastating powers and sweeping wings to explore a celestial world of breath-taking beauty and epic adventure. It features cutting-edge imagery, gorgeous environments, and a unique fantasy world.",
        "game_url": "https://www.mmobomb.com/open/aion",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "NCSOFT",
        "developer": "NCSOFT",
        "release_date": "2008-11-25",
        "profile_url": "https://www.mmobomb.com/aion"
        },
        {
        "id": 260,
        "title": "DC Universe Online",
        "thumbnail": "https://www.mmobomb.com/g/260/thumbnail.jpg",
        "short_description": "DC Universe Online (DCUO) is a free to play 3D action MMORPG from Sony Online Entertainment. Players can create their own legendary superhero, or villain, and join forces with their favorite DC Comics characters, including Batman, Superman and the Joker to either save or destroy the planet.",
        "game_url": "https://www.mmobomb.com/open/dcuo",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Daybreak Games",
        "developer": "Daybreak Games",
        "release_date": "2011-01-11",
        "profile_url": "https://www.mmobomb.com/dcuo"
        },
        {
        "id": 262,
        "title": "Digimon Masters Online",
        "thumbnail": "https://www.mmobomb.com/g/262/thumbnail.jpg",
        "short_description": "Digimon Masters is a free to play 3D MMORPG featuring the popular Digimon franchise. The conflict has spilled once again from the Digital World into the Real World and the fate of both worlds will rest on the hands on a new generation of Tamers.",
        "game_url": "https://www.mmobomb.com/open/digimon-masters",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "MOVE ON USA CO.",
        "developer": "Move Games Co., Ltd.",
        "release_date": "2011-10-20",
        "profile_url": "https://www.mmobomb.com/digimon-masters"
        },
        {
        "id": 264,
        "title": "Dragon Nest",
        "thumbnail": "https://www.mmobomb.com/g/264/thumbnail.jpg",
        "short_description": "Dragon Nest is a free to play 3D fast paced action MMORPG published by Nexon with cute anime inspired graphics. Dragon Nest features four cute classes that can be directed down various paths of customization.",
        "game_url": "https://www.mmobomb.com/open/dragon-nest",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": " Eyedentity Games Inc.",
        "developer": " Eyedentity Games Inc.",
        "release_date": "2011-09-28",
        "profile_url": "https://www.mmobomb.com/dragon-nest"
        },
        {
        "id": 265,
        "title": "9Dragons",
        "thumbnail": "https://www.mmobomb.com/g/265/thumbnail.jpg",
        "short_description": "9Dragons is a 3D martial arts MMORPG with a great combat system and a unique skill system, set in ancient China during the Ming Dynasty. The game allows you pick from one of four distinct classes (Warriro, Strategist, Chi Kung Artist, Holist) and six different martial arts (White Clans: Shaolin, Wu Tang, The League of Beggars - Black Clans: Sacred Flower, Heavenly Demon and The Brotherhood of Thieves).",
        "game_url": "https://www.mmobomb.com/open/9dragons",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Battlezone",
        "developer": "JoongWon Games",
        "release_date": "2007-05-09",
        "profile_url": "https://www.mmobomb.com/9dragons"
        },
        {
        "id": 268,
        "title": "Eden Eternal",
        "thumbnail": "https://www.mmobomb.com/g/268/thumbnail.jpg",
        "short_description": "Eden Eternal is a free-to-play 3D anime-style MMORPG from the developers of Kitsu Saga and Grand Fantasia. In Eden Eternal, players will trek across a magical realm filled with vibrant races (Humans, Beast Men, Frog Men and other half-animal races) and prosperous villages.",
        "game_url": "https://www.mmobomb.com/open/eden-eternal",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "X-Legend Entertainment",
        "developer": "X-Legend Entertainment",
        "release_date": "2023-05-10",
        "profile_url": "https://www.mmobomb.com/eden-eternal"
        },
        {
        "id": 269,
        "title": "Spiral Knights",
        "thumbnail": "https://www.mmobomb.com/g/269/thumbnail.jpg",
        "short_description": "Spiral Knights is a free-to-play 3D fantasy MMORPG Java game with a retro-inspired visual style. Anybody who dares to face the perils of these dungeons, whether alone or with a group of up to three other friends, can start their journey to the core of the Clockworks.",
        "game_url": "https://www.mmobomb.com/open/spiral-knights",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "SEGA",
        "developer": "Three Rings",
        "release_date": "2011-06-15",
        "profile_url": "https://www.mmobomb.com/spiral-knights"
        },
        {
        "id": 275,
        "title": "Dragon Saga",
        "thumbnail": "https://www.mmobomb.com/g/275/thumbnail.jpg",
        "short_description": "Dragon Saga (Dragonica Online) is a free to play side scrolling 3D Fantasy MMORPG set in a world of Dragons and magic. Choose one of four classes (Warrior, Mage, Thief and Archer) and explore a rich world filled with unique monsters.",
        "game_url": "https://www.mmobomb.com/open/dragon-saga",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Gravity Interactive",
        "developer": "Gravity Interactive",
        "release_date": "2010-10-28",
        "profile_url": "https://www.mmobomb.com/dragon-saga"
        },
        {
        "id": 276,
        "title": "Vindictus",
        "thumbnail": "https://www.mmobomb.com/g/276/thumbnail.jpg",
        "short_description": "Vindictus is an action packed free 3D MMORPG game developed by devCAT and published by Nexon. It is known as Mabinogi Heroes outside of North America and Europe, since it is a prequel to the MMORPG Mabinogi.",
        "game_url": "https://www.mmobomb.com/open/vindictus",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Nexon",
        "developer": "devCAT",
        "release_date": "2010-10-13",
        "profile_url": "https://www.mmobomb.com/vindictus"
        },
        {
        "id": 277,
        "title": "Aika Online",
        "thumbnail": "https://www.mmobomb.com/g/277/thumbnail.jpg",
        "short_description": "Aika Online is a 3D fantasy MMORPG with fast paced gameplay, great graphics and strong emphasis on player versus player (PvP) combat. The game presents three major PvP modes from small skirmishes to 1000 vs.",
        "game_url": "https://www.mmobomb.com/open/aika-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "HanbitSoft",
        "developer": "JoyImpact",
        "release_date": "2010-08-27",
        "profile_url": "https://www.mmobomb.com/aika-online"
        },
        {
        "id": 287,
        "title": "Twelve Sky 2",
        "thumbnail": "https://www.mmobomb.com/g/287/thumbnail.jpg",
        "short_description": "Players may choose from any of the three classes of each faction, then develop their skills, sharpen their weapons and refine their armor to produce a character fit for battle against the other Factions. But it isn't all about PvP, Twelve Sky also caters to a player's solo and party needs too!",
        "game_url": "https://www.mmobomb.com/open/twelve-sky-2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "RedFox Games",
        "developer": "SG Data",
        "release_date": "2009-09-09",
        "profile_url": "https://www.mmobomb.com/twelve-sky-2"
        },
        {
        "id": 288,
        "title": "Champions Online",
        "thumbnail": "https://www.mmobomb.com/g/288/thumbnail.jpg",
        "short_description": "Champions Online: Free for All is a 3D superhero-themed Fantasy MMORPG (Massively multiplayer online role playing game) from Cryptic Studios (creator of City of Heroes Freedom), with fast paced gameplay and awesome cel-shading graphics, set in Millennium City. The game used to be pay to play but officially went free to play.",
        "game_url": "https://www.mmobomb.com/open/champions-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Perfect World Entertainment",
        "developer": "Cryptic Studios",
        "release_date": "2009-09-01",
        "profile_url": "https://www.mmobomb.com/champions-online"
        },
        {
        "id": 290,
        "title": "Runes of Magic",
        "thumbnail": "https://www.mmobomb.com/g/290/thumbnail.jpg",
        "short_description": "Runes of Magic is a free to play 3D fantasy MMORPG. Dive into Taborea, a dangerous and magical world full of mysteries.",
        "game_url": "https://www.mmobomb.com/open/runes-of-magic",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "GameForge",
        "developer": "Runewalker Entertainment",
        "release_date": "2009-03-19",
        "profile_url": "https://www.mmobomb.com/runes-of-magic"
        },
        {
        "id": 293,
        "title": "Atlantica Online",
        "thumbnail": "https://www.mmobomb.com/g/293/thumbnail.jpg",
        "short_description": "Atlantica Online travels back to the roots of traditional RPGs and blends classic turn-based combat with gripping strategy elements. The tactical combat present in this free MMORPG is a major attribute and one that is captivating players from all over the world!",
        "game_url": "https://www.mmobomb.com/open/atlantica-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "VALOFE",
        "developer": "NDOORS Corporation",
        "release_date": "2008-10-30",
        "profile_url": "https://www.mmobomb.com/atlantica-online"
        },
        {
        "id": 295,
        "title": "Florensia",
        "thumbnail": "https://www.mmobomb.com/g/295/thumbnail.jpg",
        "short_description": "Florensia is a free-to-play fantasy MMORPG game with several islands and the sprawling ocean to explore. In this free MMO game the players chooses from 12 different character classes and create their own ship from five previously defined models.",
        "game_url": "https://www.mmobomb.com/open/florensia",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Netts Corporation",
        "developer": "Netts Corporation",
        "release_date": "2008-10-15",
        "profile_url": "https://www.mmobomb.com/florensia"
        },
        {
        "id": 297,
        "title": "Wizard101",
        "thumbnail": "https://www.mmobomb.com/g/297/thumbnail.jpg",
        "short_description": "Wizard101 is a 3D Wizard MMORPG which is very much influence by Harry Porter. Here a player is considered as a student of Ravenwood School of Magic Arts, which belongs to a fictional town known as Wizard valley.",
        "game_url": "https://www.mmobomb.com/open/wizard101",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "KingsIsle Entertainment",
        "developer": "KingsIsle Entertainment",
        "release_date": "2008-09-02",
        "profile_url": "https://www.mmobomb.com/wizard101"
        },
        {
        "id": 298,
        "title": "Perfect World International",
        "thumbnail": "https://www.mmobomb.com/g/298/thumbnail.jpg",
        "short_description": "Perfect World International is a free-to-play MMORPG based on the Chinese mythology. The fabulous visuals support the refined gameplay, immersing players in a huge game world.",
        "game_url": "https://www.mmobomb.com/open/perfect-world",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Beijing Perfect World, Perfect World Entertainment",
        "developer": "Beijing Perfect World",
        "release_date": "2008-09-02",
        "profile_url": "https://www.mmobomb.com/perfect-world"
        },
        {
        "id": 300,
        "title": "Rohan: Blood Feud",
        "thumbnail": "https://www.mmobomb.com/g/300/thumbnail.jpg",
        "short_description": "R.O.H.A.N.: Blood Feud is a free massively multiplayer online role-playing game. This free MMO game unfolds in a rich and huge persistent online world, and is set on the continent of R.O.H.A.N.: Blood Feud.",
        "game_url": "https://www.mmobomb.com/open/rohan-blood-feud",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Playwith Interactive",
        "developer": "Playwith Interactive",
        "release_date": "2008-05-28",
        "profile_url": "https://www.mmobomb.com/rohan-blood-feud"
        },
        {
        "id": 301,
        "title": "Age of Conan: Unchained",
        "thumbnail": "https://www.mmobomb.com/g/301/thumbnail.jpg",
        "short_description": "Age of Conan: Unchained (Age of Conan: Hyborian Adventures) is a free to play 3D fantasy massively-multiplayer online roleplaying game (MMORPG) based on the world and works of acclaimed author Robert E. Howard.",
        "game_url": "https://www.mmobomb.com/open/age-of-conan",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Funcom",
        "developer": "Funcom",
        "release_date": "2008-05-20",
        "profile_url": "https://www.mmobomb.com/age-of-conan"
        },
        {
        "id": 304,
        "title": "Cabal Online",
        "thumbnail": "https://www.mmobomb.com/g/304/thumbnail.jpg",
        "short_description": "Cabal Online is a free 3d Fantasy MMORPG (Massively multiplayer online role playing game) with fast paced combat system and awesome graphics, that takes place in the world of Nevareth. The game provides quite good options, with features that include a unique combo system, timed and group dungeons, spectacular animations, and massive player versus player nation wars.",
        "game_url": "https://www.mmobomb.com/open/cabal-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "ESTsoft",
        "developer": "ESTsoft",
        "release_date": "2016-02-17",
        "profile_url": "https://www.mmobomb.com/cabal-online"
        },
        {
        "id": 305,
        "title": "Fiesta Online",
        "thumbnail": "https://www.mmobomb.com/g/305/thumbnail.jpg",
        "short_description": "Fiesta Online is a free to play 3D cartoon style MMORPG with simple gameplay, cell-shaded graphics, regular updates, and now with a browser version. The game combines easy to learn controls with the accustomed depth of an online role-playing game, which makes it suitable for beginners and experienced players alike.",
        "game_url": "https://www.mmobomb.com/open/fiesta-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "gamigo AG",
        "developer": "Onson Soft",
        "release_date": "2008-02-01",
        "profile_url": "https://www.mmobomb.com/fiesta-online"
        },
        {
        "id": 306,
        "title": "4Story",
        "thumbnail": "https://www.mmobomb.com/g/306/thumbnail.jpg",
        "short_description": "4Story (or Gates of Andaron for North America) is a 3D Fantasy MMORPG with a visual style and interface design very similar to the popular MMORPG World of Warcraft. Three kingdoms are facing each other without a bit of yield, advocating each history and truth of those three kingdoms.",
        "game_url": "https://www.mmobomb.com/open/4story",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Zemi Interactive",
        "developer": "Zemi Interactive",
        "release_date": "2008-10-20",
        "profile_url": "https://www.mmobomb.com/4story"
        },
        {
        "id": 307,
        "title": "Shaiya",
        "thumbnail": "https://www.mmobomb.com/g/307/thumbnail.jpg",
        "short_description": "Shaiya is a dazzling free to play fantasy MMORPG that plunges players in a gigantic war between the opposing forces of Light and Darkness. Shaiya allows players to enter compelling quests for glory both in solo and in cooperative gaming, with the option to join or create a guild and evolving to a level where they can defeat even the most impressive and toughest creatures in the game world.",
        "game_url": "https://www.mmobomb.com/open/shaiya",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Aeria Games",
        "developer": "Aeria Games",
        "release_date": "2007-12-24",
        "profile_url": "https://www.mmobomb.com/shaiya"
        },
        {
        "id": 309,
        "title": "Seal Online",
        "thumbnail": "https://www.mmobomb.com/g/309/thumbnail.jpg",
        "short_description": "The game also provides a large selection of classes. Initially they were six, as: Knight, Warrior, Magician, Priest, Jester and Crafter.",
        "game_url": "https://www.mmobomb.com/open/seal-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "YNK Interactive",
        "developer": "YNK Interactive",
        "release_date": "2007-11-19",
        "profile_url": "https://www.mmobomb.com/seal-online"
        },
        {
        "id": 312,
        "title": "Granado Espada Online",
        "thumbnail": "https://www.mmobomb.com/g/312/thumbnail.jpg",
        "short_description": "Granado Espada Online is a 3D free to play fantasy MMORPG with RTS (Real-Time Strategy) elements, inspired by Europe's exploration of the Americas. If you love to play strategy games and you are in a search of some online role playing game then I’ll invite you to play this game.",
        "game_url": "https://www.mmobomb.com/open/granado-espada",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "T3Fun",
        "developer": "IMC Games Co. Limited",
        "release_date": "2007-07-10",
        "profile_url": "https://www.mmobomb.com/granado-espada"
        },
        {
        "id": 317,
        "title": "Rappelz",
        "thumbnail": "https://www.mmobomb.com/g/317/thumbnail.jpg",
        "short_description": "Rappelz is a free 3D MMORPG set in a medieval world that features three races (Deva, Asura and Gaia), three classes, and five sub-classes where over 5 million players adventure and battle in a dark and devastated fantasy world. With a guild siege system, Rappels enables its player to own dungeons rather than castles or cities.",
        "game_url": "https://www.mmobomb.com/open/rappelz",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Webzen",
        "developer": "Gala Lab",
        "release_date": "2006-11-03",
        "profile_url": "https://www.mmobomb.com/rappelz"
        },
        {
        "id": 320,
        "title": "Dungeons and Dragons Online",
        "thumbnail": "https://www.mmobomb.com/g/320/thumbnail.jpg",
        "short_description": "Dungeons & Dragons Online: Eberron Unlimited (DDO) is a free to play 3D Fantasy MMORPG based on the classic Dungeons and Dragons (D&D) tabletop role playing game. The game was originally released as a subscription based game but is now free-to-play with an item shop.",
        "game_url": "https://www.mmobomb.com/open/dungeons-dragons-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Warner Bros. Interactive Entertainment",
        "developer": "Turbine, Inc.",
        "release_date": "2006-02-28",
        "profile_url": "https://www.mmobomb.com/dungeons-dragons-online"
        },
        {
        "id": 323,
        "title": "Flyff: Fly For Fun",
        "thumbnail": "https://www.mmobomb.com/g/323/thumbnail.jpg",
        "short_description": "Fly For Fun (Flyff) is a popular free to play 3D fantasy MMORPG with enjoyable graphics, a large community, and frequent content updates called \"versions\" . The gameplay, animations and visuals of Flyff seems very cheerful.",
        "game_url": "https://www.mmobomb.com/open/flyff",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Webzen",
        "developer": "Gala Lab Corp (formerly Aeonsoft)",
        "release_date": "2005-12-25",
        "profile_url": "https://www.mmobomb.com/flyff"
        },
        {
        "id": 324,
        "title": "Dream of Mirror Online",
        "thumbnail": "https://www.mmobomb.com/g/324/thumbnail.jpg",
        "short_description": "Dream of Mirror Online (DOMO) is a social free MMORPG based on the ancient Oriental legend of the Kunlun Mirror. Players can enter an anime-inspired world to meet people and make new friendships, learn crafting skills and master an assortment of job classes, all with the purpose of solving the enigma of the ancient myth.",
        "game_url": "https://www.mmobomb.com/open/domo",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "SubaGames",
        "developer": "SoftStar",
        "release_date": "2005-09-03",
        "profile_url": "https://www.mmobomb.com/domo"
        },
        {
        "id": 327,
        "title": "Everquest 2",
        "thumbnail": "https://www.mmobomb.com/g/327/thumbnail.jpg",
        "short_description": "EverQuest II is a free to play 3D fantasy MMORPG based upon the popular Everquest. The game was originally released back in 2004 as a subscription-based, but was re-released in July 2010 as a free to play game.",
        "game_url": "https://www.mmobomb.com/open/everquest-2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Daybreak Games",
        "developer": "Daybreak Games",
        "release_date": "2004-11-08",
        "profile_url": "https://www.mmobomb.com/everquest-2"
        },
        {
        "id": 329,
        "title": "Kal Online",
        "thumbnail": "https://www.mmobomb.com/g/329/thumbnail.jpg",
        "short_description": "KAL online is a free to play 3D Fantasy MMORPG which was first released in 2004. The player is given a choice of three professions including a Knight, a Mage, or an Archer and a Thief.",
        "game_url": "https://www.mmobomb.com/open/kalonline",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Inisxoft",
        "developer": "Inisxoft",
        "release_date": "2004-06-11",
        "profile_url": "https://www.mmobomb.com/kalonline"
        },
        {
        "id": 330,
        "title": "Lineage 2",
        "thumbnail": "https://www.mmobomb.com/g/330/thumbnail.jpg",
        "short_description": "Lineage II is a 3D fantasy MMORPG and has been revitalized with a revamp of existing content, all-new high level content and the introduction of the Free to play model with the launch of Goddess of Destruction. The Goddess of Destruction update ushers in a new era for Lineage II, with improved graphics, 4x faster levelling, character advancement, eight new specialized classes, challenging new bosses, unexplored zones, over 400 hours of brand new gameplay and much more completely free.",
        "game_url": "https://www.mmobomb.com/open/lineage-2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "NCSoft",
        "developer": "NCSoft",
        "release_date": "2004-04-27",
        "profile_url": "https://www.mmobomb.com/lineage-2"
        },
        {
        "id": 333,
        "title": "Metin2",
        "thumbnail": "https://www.mmobomb.com/g/333/thumbnail.jpg",
        "short_description": "Metin 2 is a free 3D fantasy MMORPG which is packed with great features including guild battles, real time combat, ride mounts, and wars between nations. It was originally released in Korea but got a great success in Europe.",
        "game_url": "https://www.mmobomb.com/open/metin2",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Gameforge",
        "developer": "Ymir Entertainment",
        "release_date": "2006-12-17",
        "profile_url": "https://www.mmobomb.com/metin2"
        },
        {
        "id": 334,
        "title": "Mu Online",
        "thumbnail": "https://www.mmobomb.com/g/334/thumbnail.jpg",
        "short_description": "MU Online is a free to play 3D fantasy MMORPG that takes the player, into a world full of excitement, adventure and monsters. The game’s graphics and interface both look a lot like Diablo 2.",
        "game_url": "https://www.mmobomb.com/open/mu-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Webzen",
        "developer": "Webzen",
        "release_date": "2003-10-06",
        "profile_url": "https://www.mmobomb.com/mu-online"
        },
        {
        "id": 335,
        "title": "Ragnarok Online",
        "thumbnail": "https://www.mmobomb.com/g/335/thumbnail.jpg",
        "short_description": "Ragnarok Online is a popular free 3D fantasy MMORPG based on Norse mythology inspired by the anime written by MJ Lee. Ragnarok Online was entirely pay to play but in October 2008 gravity launched a free to play server called Valkyrie (Valkyrie Server Client).",
        "game_url": "https://www.mmobomb.com/open/ragnarok-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Gravity Interactive ",
        "developer": "Gravity Interactive ",
        "release_date": "2003-06-01",
        "profile_url": "https://www.mmobomb.com/ragnarok-online"
        },
        {
        "id": 337,
        "title": "Priston Tale",
        "thumbnail": "https://www.mmobomb.com/g/337/thumbnail.jpg",
        "short_description": "Priston Tale is a free to play fantasy MMORPG released in 2001 by Trglow Pictures. Welcome to the Continent of Priston, where its inhabitants settle in one of the two major towns.",
        "game_url": "https://www.mmobomb.com/open/priston-tale",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Suba Games",
        "developer": "Trglow Pictures",
        "release_date": "2007-05-17",
        "profile_url": "https://www.mmobomb.com/priston-tale"
        },
        {
        "id": 446,
        "title": "Legends of Aria",
        "thumbnail": "https://www.mmobomb.com/g/446/thumbnail.jpg",
        "short_description": "Choose your path and create your legacy in Legends of Aria a free-to-play sandbox MMORPG from Citadel Studios. Create your character exactly how you want it, choosing from over 30 skills, and put yourself to the test in a vast open world where danger lurks around every corner.",
        "game_url": "https://www.mmobomb.com/open/legends-of-aria",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Citadel Studios Inc",
        "developer": "Citadel Studios Inc",
        "release_date": "2019-08-07",
        "profile_url": "https://www.mmobomb.com/legends-of-aria"
        },
        {
        "id": 449,
        "title": "Albion Online",
        "thumbnail": "https://www.mmobomb.com/g/449/thumbnail.jpg",
        "short_description": "Albion Online is a 3D sandbox MMORPG with player freedom being at the center of the game. Players will be able to claim land, build a house, gather resources, craft items which they can use or sell, and engage in Guild vs Guild or open world PVP.",
        "game_url": "https://www.mmobomb.com/open/albion-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Sandbox Interactive GmbH",
        "developer": "Sandbox Interactive GmbH",
        "release_date": "2017-07-17",
        "profile_url": "https://www.mmobomb.com/albion-online"
        },
        {
        "id": 523,
        "title": "Lost Ark",
        "thumbnail": "https://www.mmobomb.com/g/523/thumbnail.jpg",
        "short_description": "Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate's free-to-play ARPG Lost Ark!",
        "game_url": "https://www.mmobomb.com/open/lost-ark",
        "genre": "ARPG",
        "platform": "PC (Windows)",
        "publisher": "Amazon Games",
        "developer": "Smilegate",
        "release_date": "2022-02-11",
        "profile_url": "https://www.mmobomb.com/lost-ark"
        },
        {
        "id": 1118,
        "title": "Diablo Immortal",
        "thumbnail": "https://www.mmobomb.com/g/1118/thumbnail.jpg",
        "short_description": "Diablo Immortal is an all-new massively multiplayer online action RPG and Blizzard’s long advertised mobile Diablo experience (that totally was not coming to PC) comes to PC complete with all the demon slaying and looting you could want.",
        "game_url": "https://www.mmobomb.com/open/diablo-immortal",
        "genre": "MMOARPG",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-06-02",
        "profile_url": "https://www.mmobomb.com/diablo-immortal"
        },
        {
        "id": 1124,
        "title": "Aero Tales Online",
        "thumbnail": "https://www.mmobomb.com/g/1124/thumbnail.jpg",
        "short_description": "Aero Tales Online uses a more classic Anime MMORPG art style to hit those nostalgia buttons for early 2000s MMO players.",
        "game_url": "https://www.mmobomb.com/open/aero-tales-online",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Anisage Games",
        "developer": "Anisage Games",
        "release_date": "2022-08-01",
        "profile_url": "https://www.mmobomb.com/aero-tales-online"
        },
        {
        "id": 1125,
        "title": "Tower of Fantasy",
        "thumbnail": "https://www.mmobomb.com/g/1125/thumbnail.jpg",
        "short_description": "Tower of Fantasy brings the MMORPG experience to PC and mobile with a F2P, splashy, anime-esque style.",
        "game_url": "https://www.mmobomb.com/open/tower-of-fantasy",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Level Infinite",
        "developer": "Hotta Studio",
        "release_date": "2022-08-10",
        "profile_url": "https://www.mmobomb.com/tower-of-fantasy"
        },
        {
        "id": 1127,
        "title": "Noah’s Heart",
        "thumbnail": "https://www.mmobomb.com/g/1127/thumbnail.jpg",
        "short_description": "Noah's Heart is an open-world action-adventure MMORPG game developed by Archosaur Games, the developers of Dragon Raja.",
        "game_url": "https://www.mmobomb.com/open/noahs-heart",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Archosaur Games",
        "developer": "Archosaur Games",
        "release_date": "2022-07-28",
        "profile_url": "https://www.mmobomb.com/noahs-heart"
        },
        {
        "id": 1147,
        "title": "Summoners War: Chronicles",
        "thumbnail": "https://www.mmobomb.com/g/1147/thumbnail.jpg",
        "short_description": "Discover the secrets of the Rahil Kingdom in this reimagined version of Summoners War",
        "game_url": "https://www.mmobomb.com/open/summoners-war-chronicles",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Com2uS",
        "developer": "Com2uS",
        "release_date": "2022-11-09",
        "profile_url": "https://www.mmobomb.com/summoners-war-chronicles"
        },
        {
        "id": 1157,
        "title": "Ethyrial: Echoes of Yore",
        "thumbnail": "https://www.mmobomb.com/g/1157/thumbnail.jpg",
        "short_description": "An \"old school MMORPG\" that pays tribute to those that came before it.",
        "game_url": "https://www.mmobomb.com/open/ethyrial-echoes-of-yore",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Gellyberry Studios",
        "developer": "Gellyberry Studios",
        "release_date": "2023-05-01",
        "profile_url": "https://www.mmobomb.com/ethyrial-echoes-of-yore"
        },
        {
        "id": 1181,
        "title": "Tarisland",
        "thumbnail": "https://www.mmobomb.com/g/1181/thumbnail.jpg",
        "short_description": "If you're looking for an MMORPG that sticks to the tried-and-true structure, Tarisland may be worth checking out.",
        "game_url": "https://www.mmobomb.com/open/tarisland",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Tencent",
        "developer": "Level Infinite",
        "release_date": "2024-06-21",
        "profile_url": "https://www.mmobomb.com/tarisland"
        }
        ]}