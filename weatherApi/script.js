const item_1 = document.getElementById('item_1');
const item_2 = document.getElementById('item_2');
const info_btn = document.getElementById('info_btn_1');
const info_btn = document.getElementById('info_btn_2');

info_btn_1.addEventListener('click',getInfo)
info_btn_2.addEventListener('click',getMoreInfo)

function getInfo() {
  fetch('https:\/\/purr.objects-us-east-1.dream.io\/i\/061_-_qxHYGTX.gif')
   .then(res => res.json())
   .then(data => {
    item_1.innerHTML = `<img src="${data.file}"/>`
   })
}