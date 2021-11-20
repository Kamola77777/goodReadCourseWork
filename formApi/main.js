const searchBtn = document.getElementById('search-btn');
const List = document.getElementById('item');
const Content = document.querySelector('details-content');
const CloseBtn = document.getElementById('close-btn');

// event listeners
searchBtn.addEventListener('click', getList);
mealList.addEventListener('click', getResult);
const searchBtn = document.getElementById('search-btn');
const list = document.getElementById('item')

searchBtn.addEventListener('click', getList
 function getList() {
     let searchInput = document.getElementById('search-input').nodeValue.trim();
     fetch('https://jsonplaceholder.typicode.com/users')
     .then (response => response.json())
     .then(data => {
         console.log(data);
     })
 }