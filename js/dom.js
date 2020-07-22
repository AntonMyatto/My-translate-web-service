const inputTranslate = document.getElementById('input');
const inputBlock = document.getElementById('f1_block');
const inputClear = document.getElementById('clear');

inputTranslate.onclick = function(event){
   inputBlock.style.borderColor = "red";
   
};

inputClear.onclick = function(){
    inputTranslate.value = '';
}

