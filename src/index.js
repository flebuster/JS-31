import logo from '../img/logo.svg';
import '../styles/main.scss';
import regeneratorRuntime from "regenerator-runtime";

let nameDog = document.createElement('p');
let nameCat = document.createElement('p');
let weight = document.createElement('p');
let age = document.createElement('p');

let image = document.querySelector('.custom-img');

let grid = document.querySelector('.status');
let content = document.querySelector('.content');
let buttons = document.querySelector('.buttons');
let buttonsDog = document.querySelector('.dog');
let buttonsCat = document.querySelector('.cat');

let dogBlock = document.querySelector('.dogBlock');
let catBlock = document.querySelector('.catBlock');

let likeBlock = document.querySelector('.like');
let dislikeBlock = document.querySelector('.dislike');

let likeDog = [];
let likeCat = [];
let dislikeDog = [];
let dislikeCat = [];
document.querySelector('#pre-loader').style.display = 'none';

function dogBtn() {
    document.querySelector('.content').innerHTML = "";
    document.querySelector('#pre-loader').style.display = 'block';

    const DATA_DOG_API = 'https://api.thedogapi.com/v1/images/search';
    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);

        }
        return res.json();
    };

    const getAnimal = async () => {
        const res = await getResource(DATA_DOG_API);
        // return res[0].url;
        return res;
    };

    const creatpicture = async () => {
        const data = await getAnimal();

        document.querySelector('#pre-loader').style.display = 'none';
        document.querySelector('.content').append(image, nameDog, weight, age);

        if (data[0].url) {
            image.src = data[0].url;
            nameDog.innerHTML = '';
            weight.innerHTML = '';
            age.innerHTML = '';
        };

        if (data[0].breeds[0]) {
            nameDog.innerHTML = `name: ` + data[0].breeds[0].name;
            weight.innerHTML = `weight: ` + data[0].breeds[0].weight.metric;
            age.innerHTML = `age: ` + data[0].breeds[0].life_span;

        };
        console.log(data[0].url);
        console.log(data[0].breeds[0]);
    };
    creatpicture();
};

buttonsDog.addEventListener('click', () => {
    dogBtn();
    dogBlock.classList.add('block');
    buttons.classList.remove('block');
});

document.querySelector('.like-dog').addEventListener('click', () => {
    dogBtn();
    likeDog.push(image.src);
});
document.querySelector('.dislike-dog').addEventListener('click', () => {
    dogBtn();
    dislikeDog.push(image.src);
});

document.querySelector('.EndButtonOfDog').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = ""
    dogBlock.classList.remove('block');
    grid.classList.add('grid');
    let likeD = likeDog.length;
    let dlikeD = dislikeDog.length;
    likeBlock.innerHTML = `<p>${likeD}</p>`;
    dislikeBlock.innerHTML = `<p>${dlikeD}</p>`;

    for (let img of likeDog) {
        likeBlock.innerHTML += `<img src="${img}">`;
    };
    for (let img of dislikeDog) {
        dislikeBlock.innerHTML += `<img src="${img}">`;
    };
});

function catBtn() {
    document.querySelector('.content').innerHTML = "";
    document.querySelector('#pre-loader').style.display = 'block';

    const DATA_CAT_API = 'https://api.thecatapi.com/v1/images/search';
    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);

        };
        return res.json();
    };

    const getAnimal = async () => {
        const res = await getResource(DATA_CAT_API);
        // return res[0].url;
        return res;
    };

    const creatpicture = async () => {
        const data = await getAnimal();

        document.querySelector('#pre-loader').style.display = 'none';
        document.querySelector('.content').append(image, nameCat, weight, age);

        if (data[0].url) {
            image.src = data[0].url;
            nameCat.innerHTML = '';
            weight.innerHTML = '';
            age.innerHTML = '';
        };

        if (data[0].breeds[0]) {
            nameCat.innerHTML = `name: ` + data[0].breeds[0].name;
            weight.innerHTML = `weight: ` + data[0].breeds[0].weight.metric;
            age.innerHTML = `age: ` + data[0].breeds[0].life_span;

        };
        console.log(data[0].url);
        console.log(data[0].breeds[0]);
    };
    creatpicture();
};

buttonsCat.addEventListener('click', () => {
    catBtn();
    catBlock.classList.add('block');
    buttons.classList.remove('block');

});
document.querySelector('.like-cat').addEventListener('click', () => {
    catBtn();
    likeCat.push(image.src);
});
document.querySelector('.dislike-cat').addEventListener('click', () => {
    catBtn();
    dislikeCat.push(image.src);
});
document.querySelector('.EndButtonOfCat').addEventListener('click', () => {
    document.querySelector('.content').innerHTML = ""
    catBlock.classList.remove('block');
    grid.classList.add('grid');
    let likeC = likeCat.length;
    let dlikeC = dislikeCat.length;
    likeBlock.innerHTML = `<p>${likeC}</p>`;
    dislikeBlock.innerHTML = `<p>${dlikeC}</p>`;

    for (let img of likeCat) {
        likeBlock.innerHTML += `<img src="${img}">`;
    };
    for (let img of dislikeCat) {
        dislikeBlock.innerHTML += `<img src="${img}">`;
    };
});
for (let button of document.getElementsByClassName('back')) {

    button.addEventListener('click', () => {
        buttonsDog.classList.remove('block');
        buttonsCat.classList.remove('block');
        buttons.classList.add('block');
        grid.classList.remove('grid');
        likeBlock.innerHTML = '';
        dislikeBlock.innerHTML = '';
    });
};