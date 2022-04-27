
//The first element property we'll look at is the .className property.
//This property returns a string of all of the element's classes. If an element has the following HTML:

<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>




const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);

//The .className property returns a space-separated string of the classes. This isn't the most ideal format, unfortunately. We can, however, convert this space-separated string into an array using the JavaScript string method, .split():

const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);