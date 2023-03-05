// Setup vars
var myInput = document.querySelector('#myInput');
var myButton = document.querySelector('#btn');

//Events
//myButton.onclick = togglePassword;
//   OR
myButton.addEventListener('click', togglePassword);

//Function
function togglePassword(){
    if(myButton.getAttribute('data-text') == 'show'){
        myInput.setAttribute('type','text');
        this.setAttribute('data-text','hide');
        this.innerHTML = 'Hide';
    }else{
        myInput.setAttribute('type','password');
        this.setAttribute('data-text','show');
        this.innerHTML = 'Show';
    }
}