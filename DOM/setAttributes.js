const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';

//The last two lines could've been combined into one to bypass setting an ID and just styling the element directly:

mainHeading.nextElementSibling.style.backgroundColor = 'red';



//checkagain
// check
const mainHeading2 = document.querySelector('h1');

mainHeading2.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');