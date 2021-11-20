const userName = document.getElementById('name');
const job = document.getElementById('job');
const location = document.getElementById('location');
const dob = document.getElementById('dob');
   
 function updateInfo() {
     const nameInp = document.getElementsByName('name')[0];
     const jobInp  = document.querySelector('[name="job"]');
     const locatInp  = document.querySelector('[name="location"]');
     const dobInp  = document.querySelector('[name="dob"]');
      
     userName.innerHTML  = nameInp.value;
     job.innerHTML = jobInp.value;
     location.innerHTML =locatInp.value;
     dob.innerHTML = dobInp.value;
 }