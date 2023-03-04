
// get elements into variables

var inputEle = document.getElementById('input');
var buttonEle = document.getElementById('btn');
var msgEle = document.getElementById('msg');

// Events
buttonEle.onclick = function(){

    // get value from input
    var inputValue = inputEle.value;

    if(inputValue != ''){
    // put input value into p
    msgEle.innerHTML = inputValue;

    // empty input value
    inputEle.value = '';
    }
}