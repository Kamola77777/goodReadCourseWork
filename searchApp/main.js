
// const item = [
//   {
//     id : 1,
//     username: "Bret",
//     email: "Sincere@april.biz",
//     street: "Kulas Light",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//   },
//   {
//     id : 2,
//     username: "Ervin Howell",
//     email: "Shanna@melissa.tv",
//     street: "Victor Plains",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//   },
//   {
//     id : 3,
//     username: "Adcins",
//     email: "Nathan@yesenia.net",
//     street: "Douglas Extension",
//     city: "Suite 847",
//     zipcode: "92998-3456",
//   },
//   {
//     id : 4,
//     username: "Anna",
//     email: "Julianne.OConner@kory.org",
//     street: "Hoeger Mall",
//     city: "South Elvis",
//     zipcode: "92998-33453",
//   }

// function filter() {
//   var Filtervalue, input, ul, li, i;

//   input = document.getElementById('search');
//   Filtervalue = input.value.toUpperCase();
//   ul = document.getElementById('menu');
//   li = ul.getElementsByTagName('li');

//   for(i=0, i<li.length;) {
//     var a = li[i].getElementsByTagName('a')[0];
//     if(a.innerHTML.toUpperCase().indexOf(Filtervalue) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
 $(document).ready(function() {
   $("myInput").on("keyup",function() {
     var value = $(this).val().toLowerCase();
     $("myTable tr").filter(function(){
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);

     });
   });
 });