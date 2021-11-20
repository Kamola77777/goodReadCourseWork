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