import {data as vocab, makeVocabList} from "./vocab.js";

const contentBox = document.querySelector('#contentBox');
const contentButtons = document.querySelectorAll('.contentButton');

contentButtons.forEach((btn) => {
    
    switch (btn.value) {

        case "home":
            btn.addEventListener('click', () => {
                contentBox.innerHTML = ""; // clear content box
                contentBox.innerHTML += `<h1>Konichiwa!</h1>`;
                contentBox.innerHTML += `<h2>This website is to help study alongside the Japanese From Zero series by George Trombley, Yukari Takenaka, and Kanako Hatanaka.</h2>`;
                contentBox.innerHTML += `<img class="thumbnail" src="./assets/japfromzero1.jpg" alt="Cover for Japanese From Zero! Book 1"></img>`;
                contentBox.innerHTML += `<p>The book is available for purchase <a href="https://a.co/d/4Fx6FIa" target="_blank">here.</a> Check it out!</p>`;
            })
            break;

        case "vocab":
            btn.addEventListener('click', () => {
                contentBox.innerHTML = ""; // clear content box                
                vocab.forEach((group) => { // make a list of the content headers/groups
                    const wrapper = document.createElement('div');
                    wrapper.classList.add('vocabWrapper')
                    wrapper.dataset.isOpen = "n";

                    const header = document.createElement('h2');
                    header.innerText = group.group + '. ' +  group['name'];
                    header.before = `<span>${group.group}</span>`;
                                        
                    header.addEventListener('click', () => { 
                        if (wrapper.dataset.isOpen === "y") {
                            wrapper.innerHTML = ""; // clear the wrapper
                            wrapper.appendChild(header); // Add the header back in
                            wrapper.dataset.isOpen = "n"; // set wrapper to closed
                        } else {
                            wrapper.appendChild(makeVocabList(group)); // add the content after the header
                            wrapper.dataset.isOpen = "y"; // set wrapper to opem
                        }
                    });

                    wrapper.appendChild(header); // add header to wrapper
                    contentBox.appendChild(wrapper); // add wrapper to content box
                });
            })
            break;
    
        default:
            break;
    }
})
