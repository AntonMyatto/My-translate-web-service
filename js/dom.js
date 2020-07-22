const inputTranslate = document.getElementById('input');
const inputClear = document.getElementById('clear');
const engWords = ["hello","today","i","we","he","she","it"];
const rusWords = ["Привет","сегодня","Я","мы","он","она", "оно"];
const btnTranslate = document.getElementById('button');
const result = document.getElementById("result");

inputClear.onclick = function(){
    inputTranslate.value = '';
    result.innerHTML = "";
}

btnTranslate.onclick = () => {
   if(inputTranslate.value == rusWords[0] || inputTranslate.value == 'привет'|| inputTranslate.value == 'Привет' ){
       result.innerHTML = engWords[0];
   }
   if(inputTranslate.value == rusWords[1] || inputTranslate.value == 'Сегодня'|| inputTranslate.value == 'сегодня' ){
    result.innerHTML = engWords[1];
}
if(inputTranslate.value == rusWords[2] || inputTranslate.value == 'Я'|| inputTranslate.value == 'я' ){
    result.innerHTML = engWords[2];
}
if(inputTranslate.value == rusWords[3] || inputTranslate.value == 'МЫ'|| inputTranslate.value == 'мы' ){
    result.innerHTML = engWords[3];
}
if(inputTranslate.value == rusWords[4] || inputTranslate.value == 'он'|| inputTranslate.value == 'Он' ){
    result.innerHTML = engWords[4];
}
if(inputTranslate.value == rusWords[5] || inputTranslate.value == 'она'|| inputTranslate.value == 'Она' ){
    result.innerHTML = engWords[5];
}
if(inputTranslate.value == rusWords[6] || inputTranslate.value == 'оно'|| inputTranslate.value == 'Оно' ){
    result.innerHTML = engWords[6];
}
};

