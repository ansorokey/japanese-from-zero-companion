// Group Template
// {
//     group: '',
//     name: '',
//     vocab: [
//         {
//             kana: '',
//             kanji: '',
//             english: '',
//             imgSrc: ''
//         },
//     ]
// },

export const data = [
    {
        group: 'A',
        name: 'The Body',
        vocab: [
            {
                kana: '',
                kanji: '',
                english: 'mouth',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'eye',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'ear',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'nose',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'face',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'hand',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'foot, leg',
                imgSrc: ''
            },            {
                kana: '',
                kanji: '',
                english: 'finger',
                imgSrc: ''
            },            {
                kana: '',
                kanji: '',
                english: 'head',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'tooth, teeth',
                imgSrc: ''
            },
        ]
    },
    {
        group: 'B',
        name: 'Bed and Bath',
        vocab: [
            {
                kana: '',
                kanji: '',
                english: 'pillow',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'bed',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'futon',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'blanket',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'towel',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'bath',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'soap',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'toothbrush',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'mirror',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'window',
                imgSrc: ''
            },
        ]
    },
    {
        group: 'C',
        name: 'Family',
        vocab: [
            {
                kana: '',
                kanji: '',
                english: 'mother',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'father',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'grandfather',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'grandmother',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'baby',
                imgSrc: ''
            },
        ]
    },
    {
        group: 'D',
        name: 'Greetings and Farewells',
        vocab: [
            {
                kana: '',
                kanji: '',
                english: 'thank you, thanks',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'good morning',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'good night',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'good afternoon',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'goodbye, farewell',
                imgSrc: ''
            },
        ]
    },
    {
        group: 'E',
        name: 'Animals',
        vocab: [
            {
                kana: '',
                kanji: '',
                english: 'elephant',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'horse',
                imgSrc: ''
            },
            {
                kana: '',
                kanji: '',
                english: 'rabbit',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'panda',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'mouse',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'lion',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'giraffe',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'cow',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'monkey',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'sheep',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'fox',
                imgSrc: ''
            },  
            {
                kana: '',
                kanji: '',
                english: 'bear',
                imgSrc: ''
            },  
        ]
    }
]

export function makeVocabList(group) {
    const vocabBox = document.createElement('div');

    group.vocab.map(card => {
        const newCard = document.createElement('p');
        newCard.innerText = card['english'];
        vocabBox.appendChild(newCard);
    });

    return vocabBox;
}