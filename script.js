const imgBox = document.getElementById('imgBox');
const btn = document.getElementById('imgBtn');
const heroName = document.getElementById('heroName');
const heroList = document.getElementById('heroList');
const searchBtn = document.getElementById('searchBtn');
const search = document.getElementById('search');
const BaseUrl =
  'https://superheroapi.com/api.php/267970ffbe1b3dfce173e6a6f55281b3';

const getRandomSuperHero = (id) => {
  fetch(`${BaseUrl}/${id}`)
    .then((response) => response.json())
    .then((json) => showSuperHeroInfo(json));
};

const getSearchSuperHero = (search) => {
  fetch(`${BaseUrl}/search/${search}`)
    .then((response) => response.json())
    .then((data) => {
      const dataList = data.results[0];
      showSuperHeroInfo(dataList);
    });
};

const randomHero = () => {
  const numberOfHeros = 731;
  const random = Math.floor(Math.random() * numberOfHeros + 1);
  return random;
};

const showSuperHeroInfo = (charactor) => {
  const img = charactor.image.url;
  const powerstats = charactor.powerstats;
  heroList.innerHTML = ''
  // Hero name display
  heroName.innerHTML = `<h2>${charactor.name}</h2>`;
  // show hero image
  imgBox.style.backgroundImage = `url('${img}')`;
  // super hero powerstats
  for (const [key, value] of Object.entries(powerstats)) {
    heroList.innerHTML += `<p>${key} : ${value} <br></p>`;
  }
};

btn.onclick = () => getRandomSuperHero(randomHero());
searchBtn.onclick = () => getSearchSuperHero(search.value);
