const options = {year:'numeric'};
document.getElementById('current-year').textContent = new Date().toLocaleDateString('en-US',options);

document.getElementById('current-date').textContent=(document.lastModified);