// find and return the element with an ID of "header"
document.querySelector('#header');

// find and return the first element with the class "header"
document.querySelector('.header');

// find and return the first <header> element
document.querySelector('header');

/***I want to point out one potentially tricky thing - the .querySelector()
 * method only returns one element. This makes sense if you use it to search
 * for an element by ID. However, even though .getElementsByClassName()
 *  and .getElementsByTagName() both return a list of multiple elements,
 *  using .querySelector() with a class selector or a tag selector will
 *  still only return the first item it finds. */

// find and return a list of elements with the class "header"
document.querySelectorAll('.header');

// find and return a list of <header> elements
document.querySelectorAll('header');