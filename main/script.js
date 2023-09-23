var cyrillic = document.getElementById('cyrillic-input'),
    result = document.getElementById('result-input');

/* 
    [ , { - х
    ] , } - ъ
    ; , : - ж
    , , " , ' - э
    < - б
    > , . - ю
    ` , ~ - ё
*/

let charEn = ["q", "w", "e", "r",
              "t", "y", "u", "i",
              "o", "p", "[", "]",
              "a", "s", "d", "f",
              "g", "h", "j", "k",
              "l", ";", ",", "z",
              "x", "c", "v", "b",
              "n", "m", "<", ".",
              "`", "Q", "W", "E",
              "R", "T", "Y", "U",
              "I", "O", "P", "{",
              "}", "A", "S", "D", 
              "F", "G", "H", "J", 
              "K", "L", ":", '"',
              "Z", "X", "C", "V", 
              "B", "N", "M", "<",
              ">", "~"
            ];

let charRu = ["й", "ц", "у", "к",
              "е", "н", "г", "ш",
              "щ", "з", "х", "ъ",
              "ф", "ы", "в", "а",
              "п", "р", "о", "л",
              "д", "ж", "э", "я",
              "ч", "с", "м", "и",
              "т", "ь", "б", "ю",
              "ё", "Й", "Ц", "У", 
              "К", "Е", "Н", "Г",
              "Ш", "Щ", "З", "Х",
              "Ъ", "Ф", "Ы", "В",
              "А", "П", "Р", "О",
              "Л", "Д", "Ж", "Э",
              "Я", "Ч", "С", "М",
              "И", "Т", "Ь", "Б",
              "Ю", "Ё"      
            ];


setInterval(function(){
    let res = "";

    for(let i = 0; i <= (cyrillic.value.length - 1); i++){
        if(cyrillic.value[i] == " "){
            res += " ";
        } 
        else if(charRu.includes(cyrillic.value[i])){
            res += cyrillic.value[i];
        }
        else if(cyrillic.value[i] == "!" || cyrillic.value[i] == "?" || cyrillic.value[i] == "-" || cyrillic.value[i] == "_"){
            res += cyrillic.value[i];
        }
        else{
            res += charRu[charEn.indexOf(cyrillic.value[i])];
        }
    }

    result.value = res;
}, 1);