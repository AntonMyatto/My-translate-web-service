const inputTranslate = document.getElementById('input');
const inputBlock = document.getElementById('f1_block');
const inputClear = document.getElementById('clear');

inputTranslate.onclick = function(event){
   inputBlock.style.borderColor = "red";
   
};
window.onclick = function(){
    inputBlock.style.borderColor = "grey";
};
inputClear.onclick = function(){
    
}

