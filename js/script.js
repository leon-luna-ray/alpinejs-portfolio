const year = new Date().getFullYear();
const copyrightText = document.createTextNode(year);

document.querySelector('footer #year').appendChild(copyrightText)