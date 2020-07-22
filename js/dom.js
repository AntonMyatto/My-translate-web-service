const inputTranslate = document.getElementById('input');
const inputClear = document.getElementById('clear');
const engWords = ["hello","today","i","we","he","she","it","no","yes","thanks","north","west","south","east","country","city","town","village","vacation", "airport","railway station","hotel"];
const rusWords = ["Привет","сегодня","Я","мы","он","она", "оно","нет","да","спасибо","север","запад","юг","восток","страна","город","городишко","деревня","отпуск","аэропорт","железнодорожная станция","отель"];
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
if(inputTranslate.value == rusWords[7] || inputTranslate.value == 'нет'|| inputTranslate.value == 'Нет' ){
    result.innerHTML = engWords[7];
}
if(inputTranslate.value == rusWords[8] || inputTranslate.value == 'Да'|| inputTranslate.value == 'да' ){
    result.innerHTML = engWords[8];
}
if(inputTranslate.value == rusWords[9] || inputTranslate.value == 'спасибо'|| inputTranslate.value == 'Спасибо' ){
    result.innerHTML = engWords[9];
}
if(inputTranslate.value == rusWords[10] || inputTranslate.value == 'Север'|| inputTranslate.value == 'СЕВЕР' ){
    result.innerHTML = engWords[10];
}
if(inputTranslate.value == rusWords[11] || inputTranslate.value == 'зАПАД'|| inputTranslate.value == 'Запад' ){
    result.innerHTML = engWords[11];
}
if(inputTranslate.value == rusWords[12] || inputTranslate.value == 'Юг'|| inputTranslate.value == 'ЮГ' ){
    result.innerHTML = engWords[12];
}
if(inputTranslate.value == rusWords[13] || inputTranslate.value == 'Восток'|| inputTranslate.value == 'ВОСТОК' ){
    result.innerHTML = engWords[13];
}
if(inputTranslate.value == rusWords[14] || inputTranslate.value == 'Страна'|| inputTranslate.value == 'СТРАНА' ){
    result.innerHTML = engWords[14];
}
if(inputTranslate.value == rusWords[15] || inputTranslate.value == 'ГОРОД'|| inputTranslate.value == 'Город' ){
    result.innerHTML = engWords[15];
}
if(inputTranslate.value == rusWords[16] || inputTranslate.value == 'Городишко'|| inputTranslate.value == 'ГОРОДИШКО' ){
    result.innerHTML = engWords[16];
}
if(inputTranslate.value == rusWords[17] || inputTranslate.value == 'ДЕРЕВНЯ'|| inputTranslate.value == 'Деревня' ){
    result.innerHTML = engWords[17];
}
if(inputTranslate.value == rusWords[18] || inputTranslate.value == 'Отпуск'|| inputTranslate.value == 'ОТПУСК' ){
    result.innerHTML = engWords[18];
}
if(inputTranslate.value == rusWords[19] || inputTranslate.value == 'Аэропорт'|| inputTranslate.value == 'АЭРОПОРТ' ){
    result.innerHTML = engWords[19];
}
if(inputTranslate.value == rusWords[20] || inputTranslate.value == 'ЖЕЛЕЗНОДОРОЖНАЯ СТАНЦИЯ'|| inputTranslate.value == 'Железнодорожная станция' ){
    result.innerHTML = engWords[20];
}
if(inputTranslate.value == rusWords[21] || inputTranslate.value == 'ОТЕЛЬ'|| inputTranslate.value == 'Отель' ){
    result.innerHTML = engWords[21];
}
};

