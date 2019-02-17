var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello';

// document.querySelector('html').onclick = function(){
//     alert('Hello');
// }

var myImg = document.querySelector('img');

myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'image/download.jpg'){
        myImg.setAttribute('src','image/a.jpg');
    }else{
        myImg.setAttribute('src','image/download.jpg');
    }
};

var myBtn = document.querySelector('button');

function setUsrName(){
    var myName = prompt('Set name');
    localStorage.setItem('username', myName );
    myHeading.textContent = 'Hello ' + myName;
}

if(!localStorage.getItem('username')){
    setUsrName();
}else{
    var storedName = localStorage.getItem('username');
    myHeading.textContent = 'Hello ' + storedName;
}

myBtn.onclick = function(){
    setUsrName();
}