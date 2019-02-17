var myHeading = document.querySelector('h1');

var myImg = document.querySelector('img');
myImg.onclick = function(){
    var mySrc = myImg.getAttribute('src');
    if(mySrc === 'download.jpg'){
        
       myImg.setAttribute('src', 'a.jpg');

    }else {
        myImg.setAttribute('src','download.jpg');
    }
};
var myButton = document.querySelector('button');
function setUserName(){
    var myName = prompt('set name ');
    localStorage.setItem('username' , myName);
    myHeading.textContent = 'Hello ' + myName;
}
// if (!localStorage.getItem('username')){
//     setUserName();
// }else{
//     var storedName = localStorage.getItem('username');
//     myHeading.textContent = 'Hello ' + storedName;
// }
myButton.onclick = function(){
    setUserName();
}