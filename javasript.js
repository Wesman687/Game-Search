

function renderGames(filter) {
    const gamesWrapper = document.querySelector('.games')
    const games = getGames()
    console.log(filter)
    if (filter === 'MMOARPG' || (filter === 'ARPG') || (filter === "MMORPG") || (filter === 'MMO')) {
        const filteredGames = games.filter(game => filter === game.genre)
        gamesWrapper.innerHTML = mapIt(filteredGames)
        return
    }
    const gamesHtml = mapIt(games)
    gamesWrapper.innerHTML = gamesHtml
}

setTimeout(() => {
    renderGames()
},);

function filterGames(event) {
    renderGames(event.target.value)
}
function mapIt (games) {        
    const mapArray = games.map((games) => { 
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
},]}
/*
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
}]}*/
