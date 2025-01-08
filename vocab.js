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
                kana: 'くち',
                kanji: '口',
                english: 'mouth',
                imgSrc: ''
            },
            {
                kana: 'め',
                kanji: '目',
                english: 'eye',
                imgSrc: ''
            },
            {
                kana: 'みみ',
                kanji: '耳',
                english: 'ear',
                imgSrc: ''
            },
            {
                kana: 'はな',
                kanji: '鼻',
                english: 'nose',
                imgSrc: ''
            },
            {
                kana: 'かお',
                kanji: '顔',
                english: 'face',
                imgSrc: ''
            },
            {
                kana: 'て',
                kanji: '手',
                english: 'hand',
                imgSrc: ''
            },
            {
                kana: 'あし',
                kanji: '足',
                english: 'foot, leg',
                imgSrc: ''
            },            {
                kana: 'ゆび',
                kanji: '指',
                english: 'finger',
                imgSrc: ''
            },            {
                kana: 'あたま',
                kanji: '頭',
                english: 'head',
                imgSrc: ''
            },
            {
                kana: 'は',
                kanji: '歯',
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
                kana: 'まくら',
                kanji: '枕',
                english: 'pillow',
                imgSrc: ''
            },
            {
                kana: 'べっど',
                kanji: '',
                english: 'bed',
                imgSrc: ''
            },
            {
                kana: 'ふとん',
                kanji: '布団',
                english: 'futon',
                imgSrc: ''
            },
            {
                kana: 'もうふ',
                kanji: '毛布',
                english: 'blanket',
                imgSrc: ''
            },
            {
                kana: 'タオル',
                kanji: '',
                english: 'towel',
                imgSrc: ''
            },
            {
                kana: 'おふろ',
                kanji: 'お風呂',
                english: 'bath',
                imgSrc: ''
            },
            {
                kana: 'せっけん',
                kanji: '石けん',
                english: 'soap',
                imgSrc: ''
            },
            {
                kana: 'ハブラシ',
                kanji: '歯ブラシ',
                english: 'toothbrush',
                imgSrc: ''
            },
            {
                kana: 'かがみ',
                kanji: '鏡',
                english: 'mirror',
                imgSrc: ''
            },
            {
                kana: 'まど',
                kanji: '窓',
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
                kana: 'おかあさｎ',
                kanji: 'お母さん',
                english: 'mother',
                imgSrc: ''
            },
            {
                kana: 'おとうさん',
                kanji: 'お父さん',
                english: 'father',
                imgSrc: ''
            },
            {
                kana: 'おじいさん',
                kanji: '',
                english: 'grandfather',
                imgSrc: ''
            },
            {
                kana: 'おばあさん',
                kanji: '',
                english: 'grandmother',
                imgSrc: ''
            },
            {
                kana: 'あかちゃん',
                kanji: '赤ちゃん',
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
                kana: 'ありがとう',
                kanji: '',
                english: 'thank you, thanks',
                imgSrc: ''
            },
            {
                kana: 'おはようございます',
                kanji: '',
                english: 'good morning',
                imgSrc: ''
            },
            {
                kana: 'おやすみなさい',
                kanji: '',
                english: 'good night',
                imgSrc: ''
            },
            {
                kana: 'こんにちは',
                kanji: '今日は',
                english: 'good afternoon',
                imgSrc: ''
            },
            {
                kana: 'さようなら',
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
                kana: 'ぞう',
                kanji: '象',
                english: 'elephant',
                imgSrc: ''
            },
            {
                kana: 'うま',
                kanji: '馬',
                english: 'horse',
                imgSrc: ''
            },
            {
                kana: 'うさぎ',
                kanji: '兎',
                english: 'rabbit',
                imgSrc: ''
            },  
            {
                kana: 'パンダ',
                kanji: '',
                english: 'panda',
                imgSrc: ''
            },  
            {
                kana: 'ねずみ',
                kanji: '鼠',
                english: 'mouse',
                imgSrc: ''
            },  
            {
                kana: 'ライオン',
                kanji: '',
                english: 'lion',
                imgSrc: ''
            },  
            {
                kana: 'きりん',
                kanji: 'キリン',
                english: 'giraffe',
                imgSrc: ''
            },  
            {
                kana: 'うし',
                kanji: '牛',
                english: 'cow',
                imgSrc: ''
            },  
            {
                kana: 'さる',
                kanji: '猿',
                english: 'monkey',
                imgSrc: ''
            },  
            {
                kana: 'ひつじ',
                kanji: '羊',
                english: 'sheep',
                imgSrc: ''
            },  
            {
                kana: 'きつね',
                kanji: '狐',
                english: 'fox',
                imgSrc: ''
            },  
            {
                kana: 'くま',
                kanji: '熊',
                english: 'bear',
                imgSrc: ''
            },  
        ]
    }
]

export function makeVocabList(group) {
    const vocabBox = document.createElement('div');
    vocabBox.classList.add('vocabBox');

    // const vocabBoxHeaders = document.createElement('div');
    const kanaBox = document.createElement('div');
    const kanjiBox = document.createElement('div');
    const englishBox = document.createElement('div');

    vocabBox.appendChild(kanaBox);
    vocabBox.appendChild(kanjiBox);
    vocabBox.appendChild(englishBox);

    group.vocab.map(card => {
        kanaBox.innerHTML += `<p class="textBox">${card['kana'] ? card['kana'] : '-----' }</p>`;
        kanjiBox.innerHTML += `<p class="bigHover textBox">${card['kanji'] ? card['kanji'] : '-----'}</p>`;
        englishBox.innerHTML += `<p class="textBox">${card['english']}</p>`;
    });

    return vocabBox;
}