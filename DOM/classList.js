
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>


const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);


/***.add() - to add a class to the list
.remove() - to remove a class from the list
.toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
.contains() - returns a boolean based on if the class exists in the list or not */