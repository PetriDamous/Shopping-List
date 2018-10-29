var userInput = document.getElementById('userInput');
var userButton = document.querySelector('#userButton');
var ul = document.querySelector('ul');
var listItems = document.querySelectorAll('li');

userButton.addEventListener('click', addToListClick);
userInput.addEventListener('keypress', addToListPress);


listItems.forEach(function(item){
    item.addEventListener('click', function(){
        item.classList.toggle('done');
    });
});

function listItemsClick(i){
    return console.log(i);

}



function addToListClick(){ return userInputCheck() ? addToList() : noBlank(); }

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
    li.classList.toggle('done');   
    userInput.value = '';       
}

function noBlank(){ return alert('Cannot be blank.'); }

function userButtonCheck(e){ return e.keyCode === 13 ? true : false; }

function userInputCheck(){ return userInput.value.length > 0 ? true : false; }


