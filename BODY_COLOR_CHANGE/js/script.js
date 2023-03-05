var buttonEle = document.querySelector('.btn');
var divEle = document.querySelector('.myDiv');


var colors = ['red','green','blue'];
var i = 0;

buttonEle.onclick = function(){
    // logic

    divEle.style.backgroundColor = colors[i];
    i++;

    if(i == 3){
        i = 0;
    }
}
