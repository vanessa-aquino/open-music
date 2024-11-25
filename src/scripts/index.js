import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";
import { activeThemeButton, applySavedTheme} from "./theme.js";

const container = document.getElementById('container-albums');
const inputRange = document.querySelector("#price-range");

function routine() {
    applyInputRangeStyle(filterAlbumByPrice);
    insertCards(albumList);
    activeThemeButton();
}

routine();

function createCard(album) {
    const card = document.createElement('div');
    card.classList.add('albums-list');

    const img = document.createElement('img');
    img.src = album.img;
    card.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = album.title;
    card.appendChild(title);

    const singerInfos = document.createElement('div');
    singerInfos.classList.add('name-gender');
    card.appendChild(singerInfos);

    const singer = document.createElement('p');
    singer.classList.add('singer');
    singer.textContent = album.singer;
    singerInfos.appendChild(singer)

    const genre = document.createElement('p');
    genre.classList.add('music-gender');
    genre.textContent = album.genre;
    singerInfos.appendChild(genre);

    const buyInfos = document.createElement('div');
    buyInfos.classList.add('price-buy');
    card.appendChild(buyInfos);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `R$ ${album.price}`;
    buyInfos.appendChild(price);

    const buy = document.createElement('button');
    buy.classList.add('buy');
    buy.textContent = 'Comprar';
    buyInfos.appendChild(buy);
    return card;
};


function insertCards(arr) {
    container.innerHTML = '';

    if(arr.length === 0) {
        container.innerHTML = '<p>Nenhum álbum encontrado com o preço selecionado.</p>';
        container.style.fontSize = '1.5rem'
        container.style.fontWeight = '600'
        container.style.lineHeight = '100%'
        container.style.color = '#f76707';
    }

    arr.forEach(album => {
        const card = createCard(album);
        container.appendChild(card);
    });

    return container;

};


function filterAlbumByPrice(maxprice) {
    const filteredAlbums = albumList.filter(album => (album.price <= maxprice));
    insertCards(filteredAlbums);
    applySavedTheme();
};