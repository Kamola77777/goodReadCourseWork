function displayImage() {
  // const index = Math.floor(Math.random() * pics.length)
  document.getElementById("img").innerHTML = `<img src="./Unknown.jpg">
    `;
}
function removeElement() {
  var element = document.querySelector("#img img");
  element.remove();
}
// ___________________________________

let img = document.querySelector("img");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => {
  img.src = "./1.jpg";
});

btn2.addEventListener("click", () => {
  img.src = "./2.jpg";
});

btn3.addEventListener("click", () => {
  img.src = "./3.jpg";
});

var mouse = document.querySelector('button')
button.addEventListener('mouseover', function(event){
  console.log('doubleclickkkkk')
})

function dblclickEvent(){
  console.log("salom")
}
var button =  document.querySelector('button');
// button.addEventListener('mousemove', function(event) {
//   console.log('SALOMMMMM')
// })
button.ondblclick = function dblclickEvent(event){
  console.log("salom");
  console.log(event)
}
var form = document.querySelector('form')
form.onsubmit = function(event){
  console.log(event);
  event.preventDefault();
}

function parentClick(){
  console.log('parent', event)
}


function childClick() {
  console.log('child', event)
}
const parent =  document.getElementById('parent');
const child = document.getElementById('child');
   
parent.addEventListener('click', function(event){
  
  console.log("parent")
}, true)

child.addEventListener('click', function(event){
  event.stopPropagation();  
  console.log("child")
}, true)

var li = document.querySelectorAll('ul li button');
li.forEach(function (item) {
  item.addEventListener('click', function(event){
    var el = event.target;
    var parentEl = el.parentElement;
    parentEl.remove();
  })
});

var inputs = document.getElementById('input')
inputs.addEventListener('focus', function(event) {
  var value = event.target.value;
  console.log(value)
})