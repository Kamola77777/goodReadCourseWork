const userName = document.getElementById('name');
const job = document.getElementById('job');
const userLocation = document.getElementById('location');
const  dob = document.getElementById('dob');
const userImage = document.querySelector('img');
console.log(userImage.src)

function updateInfo() {
    const nameInput = document.getElementsByName('name')[0];
    const jobInput = document.querySelector('[name ="job"]');
    const locationInput = document.querySelector('[name ="location"]');
    const dobInput = document.querySelector('[name ="dob"]');
   

    
    userName.innerHTML = nameInput.value;
    job.innerHTML = jobInput.value;
    userLocation.innerHTML = locationInput.value;
    dob.innerHTML = dobInput.value;

    // const dateIndex =  new Date(dobInput.value).getDay() + 1;
    //  const validImage = dateIndex ? 'img/man-'+ dateIndex + '.png' : 'https://cdn.pixabay.com/photo/2020/11/26/20/20/barn-owl-5780100__340.jpg';
    // console.log(validImage)
    userImage.src = validImage;
    nameInput.value = '';
    jobInput.value = '';
    locationInput.value = '';
    dobInput.value = '';    
}

//    function add() {
//        var icons = JSON.parse(localStorage.data);
//        icons.push({icon: '😘', type: '10'});
//        console.log(icons);
//        localStorage.data = JSON.stringify(icons)
//    }
   JSON.parse(localStorage.data).forEach(function(item) {
       const list = document.getElementById('list');
       list.innerHTML += `<h2>${item.icon} - ${item.type}</h2>`
   })
