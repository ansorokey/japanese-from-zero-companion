const chapters = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        name: 'Posession',
        newWords: [
            {
                kana: 'だれ',
                kanji: '誰',
                english: 'who'
            },{
                kana: 'どなた',
                kanji: 'どなた',
                english: 'who (polite)'
            },{
                kana: 'なまえ',
                kanji: '名前',
                english: 'name'
            },            {
                kana: 'ともだち',
                kanji: '友達',
                english: 'friend'
            },
            {
                kana: 'たぶん',
                kanji: '多分',
                english: 'maybe'
            },            {
                kana: 'がっこう',
                kanji: '学校',
                english: 'school'
            },            {
                kana: 'とり',
                kanji: '鳥',
                english: 'bird'
            },            {
                kana: 'せんせい',
                kanji: '先生',
                english: 'teacher, doctor, profesor'
            },            {
                kana: 'にほんごのせんせい',
                kanji: '日本語の先生',
                english: 'Japanese teacher'
            },            {
                kana: 'ゆうた',
                kanji: '優太',
                english: 'Yuuta (boy name)'
            },            {
                kana: 'みさき',
                kanji: '美咲',
                english: 'Misaki (girl name)'
            },            {
                kana: 'わたし',
                kanji: '私',
                english: 'I, me (neutral)'
            },            {
                kana: 'ぼく',
                kanji: '僕',
                english: 'I, me (male)'
            },            {
                kana: 'あなた',
                kanji: '貴方',
                english: 'you'
            },            {
                kana: 'かのじょ',
                kanji: '彼女',
                english: 'her, she, girlfriend'
            },            {
                kana: 'かれ',
                kanji: '彼',
                english: 'he, him, boyfriend'
            },
        ],
        newExpressions: [
            {
                kana: 'そうです',
                kanji: '',
                english: 'That\'s right./You are right./It is./Yes.'
            },            {
                kana: 'ちがいます',
                kanji: '',
                english: 'That\'s wrong./It\'s different./It isn\'t./No.'
            },            {
                kana: 'そうですか',
                kanji: '',
                english: 'Is that so?/I see.'
            },
        ],
        notes: [
            "'Boku' is used by men to refer to themselves. It can also refer to a little boy if you don't know their name. Females may use it when trying to sound boyish or in a song.",
            "To sound cute, girls may refer to themselve's as 'atashi'",
            "'dare' can be used as 'who' wherever, except when asking 'Who are you?', 'dare desu ka?' Is rude. 'donata desu ka' is more polite.",
            "Differentiating between he/boyfriend and she/girlfriend depends on context. 'kareshi' only means boyfriend.",
            "Teachers are called sensei, or name-sensei. A doctor is 'isha', but can also be called 'sensei'",
            "When the subject of a sentance is known, pronouns and identifiers can be dropped.",
            "If a person is saying something without a subject, we can assume they mean themself.",
            "If a person is asking a question without a subject, we can ussume they mean you",
            "When asking a question: grammar structure is (subject) (particle) (comparison) (question word) (being) (question particle)",
            "Japanese sentences usually do not start with a question word. If they do, it is followed by the particle 'ga' instead of 'ha'",
            "A word is made possesive with a following 'no'. Similar to an english 's. (subject)(particle) (object/question)(no) (being)",
            ""
        ],
        examples: [
            {
                j: "これはたなかさんですか。",
                e: "Is he Mr. Tanaka?"
            },{
                j: "はい、そうです。",
                e: 'Yes, he is.'
            }, {
                j: "いいえ、これわこばやしさんです。",
                e: "No, he is Mr. Kobayashi."
            }, {
                j: "かのじょですか。",
                e: ""
            }, {
                j: "はい、かのじょです。",
                e: ""
            }, {
                j: "いいえ、かのじょはともだちです。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "かれです。",
                e: ""
            }, {
                j: "かのじょです。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "どなたですか。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "まみこです。",
                e: ""
            }, {
                j: "かのじょですか。",
                e: ""
            }, {
                j: "いいえ、ともだちです。",
                e: ""
            }, {
                j: "なんさいですか。",
                e: ""
            }, {
                j: "じゅうはっさいです。",
                e: ""
            }, {
                j: "みさきです。",
                e: ""
            }, {
                j: "にじゅうにさいです。",
                e: ""
            }, {
                j: "にほんごのせんせいです。",
                e: ""
            }, {
                j: "みさきさんですか。",
                e: ""
            }, {
                j: "なんさいですか。",
                e: ""
            }, {
                j: "にほんごのせんせいですか。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "たなかよしおです。",
                e: ""
            }, {
                j: "どなたですか。",
                e: ""
            }, {
                j: "たなかよしおです。",
                e: ""
            }, {
                j: "かれはだれですか。",
                e: ""
            }, {
                j: "かれはともだちです。",
                e: ""
            }, {
                j: "せんせいはだれですか。",
                e: ""
            }, {
                j: "やまだせんせいです。",
                e: ""
            }, {
                j: "たなかさんはだれですか。",
                e: ""
            }, {
                j: "にほんごのせんせいです。",
                e: ""
            }, {
                j: "かのじょはどなたですか。",
                e: ""
            }, {
                j: "こばやしさんです。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "だれですか。",
                e: "たなかさんです。"
            }, {
                j: "どなたですか。",
                e: "たなかです。"
            }, {
                j: "だれですか。",
                e: ""
            }, {
                j: "まゆみです。",
                e: ""
            }, {
                j: "これはなんですか。",
                e: ""
            }, {
                j: "くるまはどれですか。",
                e: ""
            }, {
                j: "",
                e: "たなかさんはだれですか。"
            }, {
                j: "どれががっこうですか。",
                e: ""
            }, {
                j: "だれがたなかさんです。",
                e: ""
            }, {
                j: "どれがさしみですか。",
                e: ""
            }, {
                j: "それがさしみです。",
                e: "それです。"
            }, {
                j: "それです。",
                e: ""
            }, {
                j: "だれがたなかさんですか。",
                e: ""
            }, {
                j: "わたしの",
                e: ""
            }, {
                j: "あなたの",
                e: ""
            }, {
                j: "かのじょの",
                e: ""
            }, {
                j: "かれの",
                e: ""
            }, {
                j: "だれの",
                e: ""
            }, {
                j: "あきこの",
                e: ""
            }, {
                j: "ジェフの",
                e: ""
            }, {
                j: "たなかさんの",
                e: ""
            }, {
                j: "おとうさんの",
                e: ""
            }, {
                j: "おかあさんの",
                e: ""
            }, {
                j: "おじいさんの",
                e: ""
            }, {
                j: "おばあさんの",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            }, {
                j: "",
                e: ""
            },
            

        ]
    }
]