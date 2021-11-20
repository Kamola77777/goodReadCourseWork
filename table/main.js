const todoName = document.getElementById('tname');
const cateGory = document.getElementById('icon');
const prioRity = document.getElementById('priority');
const desCript = document.getElementById('description');
const dates = document.getElementById('date');
const staTus = document.getElementById('status');

function createInfo() {
    const todoInput = document.querySelector("input[name='tname']").value
    const categoryIn = document.getElementsByName('[name="icon"]')
    const priorInput= document.getElementsByName('[name = "priority"]');
    const desripInput= document.getElementsByName('[name = "description"]');
    const dateInput= document.getElementsByName('[name = "date"]');
    const statusInput= document.getElementsByName('[name = "status"]');
console.log(todoInput);
    todoName.innerHTML =  todoInput;
    cateGory.innerHTML = categoryIn.
    prioRity.innerHTML = priorInput.value;
    desCript.innerHTML = desripInput.value;
    dates.innerHTML = dateInput.value;
    staTus.innerHTML = statusInput.value;


}

// var a;
// function showForm()
//  if(a==1) {
//      document.getElementById('formss').style.display="inline";
//      return a=0;
//  }
//  else {
//      document.getElementById('formss').style.display="none";
//      return a=1;
//  }

function showEl() {
    var form = document.getElementById('formss');
    form.style.display = 'inline'
    }
    function hideEl() {
        var form = document.getElementById('formss');
        form.style.display = 'none'
        }