import {data, makeVocabList} from "./vocab.js";

const menuButton = document.querySelector('#menuButton');
const listItems = document.querySelectorAll('li');
const contentBox = document.querySelector('#contentBox');
const vocab = document.querySelector('#vocab');


vocab.addEventListener('click', () => {
    data.forEach((group) => {
        const header = document.createElement('h2');
        header.innerText = group['name'];
        contentBox.appendChild(header);
    });
})

menuButton.addEventListener('click', () => {
    document.querySelector('#navMenu').classList.toggle('hidden');
})