const options = {year:'numeric'};
document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US',options);

/* const date = {weekday:'long', day:'numeric', month:'long', year:'numeric'};
document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US',date); */

document.getElementById('current-date').textContent=(document.lastModified);