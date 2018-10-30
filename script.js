var userInput = document.getElementById('userInput');
var userButton = document.querySelector('#userButton');
var ul = document.querySelector('ul');
var listItems = document.querySelectorAll('li');

userButton.addEventListener('click', addToListClick);
userInput.addEventListener('keypress', addToListPress);

crossOff();

function crossOff(){
    
    listItems.forEach(function(item, i){
        item.classList.add('unCross');
        item.addEventListener('click', function(){
            //item.classList.toggle('done', true);
            if(item.classList[0] == 'unCross'){
                item.classList.replace('unCross', 'cross');
               console.log(item.classList[0]);
            } else if(item.classList[0] == 'cross'){
                item.classList.replace('cross', 'unCross');
                console.log(item.classList[0]);
            }
        });
    });     
}


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
    listItems = document.querySelectorAll('li');
    crossOff();       
    userInput.value = '';       
}

function noBlank(){ return alert('Cannot be blank.'); }

function userButtonCheck(e){ return e.keyCode === 13 ? true : false; }

function userInputCheck(){ return userInput.value.length > 0 ? true : false; }


