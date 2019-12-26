async function startLoading() {
    parseData()
    setInterval(() => parseData(), 30000)
}

function parseData () {
    data.forEach((hello, i) => {    
        var div = document.createElement('div')
        div.id = hello.language
        div.innerHTML = hello.hello
        div.className = 'hide'
        document.getElementById('container').appendChild(div)
        toggleDiv(hello, i, 'show')
        toggleDiv(hello, i + 30, 'hide')
    })
}

function toggleDiv (hello, i, showOrHide) {
    setTimeout(() => {
        document.title = hello.hello
        document.getElementById(hello.language).className = showOrHide
    }, i * 250)
}

const data = [
        {
            "language": "English",
            "hello": "Hello"
        },
        {
            "language": "Afrikaans",
            "hello": "hallo"
        },
        {
            "language": "Albanian",
            "hello": "Përshëndetje"
        },
        {
            "language": "Amharic",
            "hello": "ሰላም"
        },
        {
            "language": "Arabic",
            "hello": "مرحبا"
        },
        {
            "language": "Armenian",
            "hello": "Բարեւ"
        },
        {
            "language": "Azerbaijani",
            "hello": "Salam"
        },
        {
            "language": "Basque",
            "hello": "Kaixo"
        },
        {
            "language": "Belarusian",
            "hello": "добры дзень"
        },
        {
            "language": "Bengali",
            "hello": "হ্যালো"
        },
        {
            "language": "Bosnian",
            "hello": "zdravo"
        },
        {
            "language": "Bulgarian",
            "hello": "Здравейте"
        },
        {
            "language": "Catalan",
            "hello": "Hola"
        },
        {
            "language": "Chichewa",
            "hello": "Moni"
        },
        {
            "language": "Chinese (Simplified)",
            "hello": "您好"
        },
        {
            "language": "Chinese (Traditional)",
            "hello": "您好"
        },
        {
            "language": "Corsican",
            "hello": "Bonghjornu"
        },
        {
            "language": "Croatian",
            "hello": "zdravo"
        },
        {
            "language": "Czech",
            "hello": "Ahoj"
        },
        {
            "language": "Danish",
            "hello": "Hej"
        },
        {
            "language": "Dutch",
            "hello": "Hallo"
        },
        {
            "language": "Esperanto",
            "hello": "Saluton"
        },
        {
            "language": "Estonian",
            "hello": "Tere"
        },
        {
            "language": "Finnish",
            "hello": "Hei"
        },
        {
            "language": "French",
            "hello": "Bonjour"
        },
        {
            "language": "Galician",
            "hello": "Ola"
        },
        {
            "language": "Georgian",
            "hello": "გამარჯობა"
        },
        {
            "language": "German",
            "hello": "Hallo"
        },
        {
            "language": "Greek",
            "hello": "Γεια σας"
        },
        {
            "language": "Gujarati",
            "hello": "હેલો"
        },
        {
            "language": "Haitian Creole",
            "hello": "Bonjou"
        },
        {
            "language": "Hausa",
            "hello": "Sannu"
        },
        {
            "language": "Hawaiian",
            "hello": "Alohaʻoe"
        },
        {
            "language": "Hebrew",
            "hello": "שלום"
        },
        {
            "language": "Hindi",
            "hello": "नमस्ते"
        },
        {
            "language": "Hmong",
            "hello": "Nyob zoo"
        },
        {
            "language": "Hungarian",
            "hello": "Helló"
        },
        {
            "language": "Icelandic",
            "hello": "Halló"
        },
        {
            "language": "Igbo",
            "hello": "Ndewo"
        },
        {
            "language": "Indonesian",
            "hello": "Halo"
        },
        {
            "language": "Irish",
            "hello": "Dia duit"
        },
        {
            "language": "Italian",
            "hello": "Ciao"
        },
        {
            "language": "Japanese",
            "hello": "こんにちは"
        },
        {
            "language": "Kannada",
            "hello": "ಹಲೋ"
        },
        {
            "language": "Kazakh",
            "hello": "Сәлем"
        },
        {
            "language": "Khmer",
            "hello": "ជំរាបសួរ"
        },
        {
            "language": "Korean",
            "hello": "안녕하세요."
        },
        {
            "language": "Kyrgyz",
            "hello": "салам"
        },
        {
            "language": "Lao",
            "hello": "ສະບາຍດີ"
        },
        {
            "language": "Latin",
            "hello": "salve"
        },
        {
            "language": "Latvian",
            "hello": "Labdien!"
        },
        {
            "language": "Lithuanian",
            "hello": "Sveiki"
        },
        {
            "language": "Luxembourgish",
            "hello": "Moien"
        },
        {
            "language": "Macedonian",
            "hello": "Здраво"
        },
        {
            "language": "Malayalam",
            "hello": "ഹലോ"
        },
        {
            "language": "Maori",
            "hello": "Hiha"
        },
        {
            "language": "Marathi",
            "hello": "हॅलो"
        },
        {
            "language": "Mongolian",
            "hello": "Сайн байна уу"
        },
        {
            "language": "Myanmar (Burmese)",
            "hello": "မင်္ဂလာပါ"
        },
        {
            "language": "Nepali",
            "hello": "नमस्ते"
        },
        {
            "language": "Norwegian",
            "hello": "Hallo"
        },
        {
            "language": "Pashto",
            "hello": "سلام"
        },
        {
            "language": "Persian",
            "hello": "سلام"
        },
        {
            "language": "Polish",
            "hello": "Cześć"
        },
        {
            "language": "Portuguese",
            "hello": "Olá"
        },
        {
            "language": "Punjabi",
            "hello": "ਹੈਲੋ"
        },
        {
            "language": "Romanian",
            "hello": "Alo"
        },
        {
            "language": "Russian",
            "hello": "привет"
        },
        {
            "language": "Samoan",
            "hello": "Talofa"
        },
        {
            "language": "Serbian",
            "hello": "Здраво"
        },
        {
            "language": "Sindhi",
            "hello": "هيلو"
        },
        {
            "language": "Sinhala",
            "hello": "හෙලෝ"
        },
        {
            "language": "Slovak",
            "hello": "ahoj"
        },
        {
            "language": "Slovenian",
            "hello": "Pozdravljeni"
        },
        {
            "language": "Spanish",
            "hello": "Hola"
        },
        {
            "language": "Sundanese",
            "hello": "halo"
        },
        {
            "language": "Swahili",
            "hello": "Sawa"
        },
        {
            "language": "Swedish",
            "hello": "Hallå"
        },
        {
            "language": "Tajik",
            "hello": "Салом"
        },
        {
            "language": "Tamil",
            "hello": "ஹலோ"
        },
        {
            "language": "Telugu",
            "hello": "హలో"
        },
        {
            "language": "Thai",
            "hello": "สวัสดี"
        },
        {
            "language": "Turkish",
            "hello": "Merhaba"
        },
        {
            "language": "Ukranian",
            "hello": "Здрастуйте"
        },
        {
            "language": "Urdu",
            "hello": "ہیلو"
        },
        {
            "language": "Uzbek",
            "hello": "Salom"
        },
        {
            "language": "Vietnamese",
            "hello": "Xin chào"
        },
        {
            "language": "Welsh",
            "hello": "Helo"
        },
        {
            "language": "Xhosa",
            "hello": "Sawubona"
        },
        {
            "language": "Yiddish",
            "hello": "העלא"
        },
        {
            "language": "Yoruba",
            "hello": "Kaabo"
        },
        {
            "language": "Zulu",
            "hello": "Sawubona"
        }
    ]