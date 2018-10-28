var userInput = document.getElementById('userInput');
var userButton = document.querySelector('#userButton');
var ul = document.querySelector('ul');
var listItems = document.querySelectorAll('li');

userButton.addEventListener('click', addToListClick);
userInput.addEventListener('keypress', addToListPress);

/*
for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        console.log(i);
    });
    
}

function listItemsClick(i){
    return console.log(i);

}
*/


function addToListClick(){
    if(userInputCheck()){
        addToList();
    } else{
        noBlank();
    }
}

function addToListPress(event){
    if(userInputCheck() && userButtonCheck(event)){
        addToList();
    } else if(userButtonCheck(event)){
        noBlank();
    }
}

function addToList(){    
    var li = document.createElement('li');
    var text = document.createTextNode(userInput.value);
    li.appendChild(text);
    ul.appendChild(li);
    userInput.value = '';       
}

function noBlank(){
    return alert('Cannot be blank.');
}

function userButtonCheck(e){
    if(e.keyCode === 13){
        return true;
    } else{
        return false;
    }
}

function userInputCheck(){
    if(userInput.value.length > 0){
        return true;
    } else{
        return false;
    }    
}


