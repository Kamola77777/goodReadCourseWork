let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
// let list = document.querySelector('#list');
// let el = document.getElementsByTagName('li');
let audio = document.getElementById('sound');

btn.addEventListener('click',() => {
    let txt = input.value;
    if(txt === "") {
        alert('you must write something');
    }else {
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = '';
    }
})
list.addEventListener('click', e => {
    if(e.target.tagName == 'LI' ){
        e.target.classList.toggle('checked');
    }
})
 
 function sound() {
     audio.play();
}

// const arrowF = () => {
//     console.log('arfdvk')
// };
// arrowF();  function expression;function declaration;
//   name: 'hfbvdfm',
//   console.log(this)

//   var myName = (name= 'Bob', age = 12) => `${name} ${age}`;
//   myName('jack', 76);


//      function h(a=1, b=1){
//          console.log(a,b)
//      }



//      var arr = {fname:"John", lname:"Doe", age:25};
//       arr.forEach((item) => {
//           console.log(item.totL)
//       })
   function filter() {
       var searchValue, input , ul, li, i;
       
       input = document.getElementById('search');
       searchValue = input.value.toUpperCase();
       ul = document.getElementById('menu');
       li = document.getElementsByTagName('li');

       for(i=0; i<li.length; i++ ){
           var a = li[i].getElementsByTagName('a')[0];
           if(a.innerHTML.toUpperCase().indexOf(searchValue) > -1){
               li[i].style.display = "";

           } else {
               li[i].style.display = "none";
           }
       }
   }