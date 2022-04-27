const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('click', function () {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
}, false);


/***Remember that the third argument of the .addEventListener() method is the boolean for the capturing phase. Since it's false, that means
 *  the event listener should not run during the capturing phase...therefore it will run in the (default) bubble phase. */