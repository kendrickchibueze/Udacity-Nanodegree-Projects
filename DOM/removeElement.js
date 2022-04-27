const mainHeading = document.querySelector('h1');

mainHeading.parentElement.removeChild(mainHeading);

/***This starts with the mainHeading variable. It calls .parentElement, so the focus of the next code is directed at the parent element. Then .removeChild() is called on the parent element. Finally, mainHeading itself is passed as the element that needs to be removed from its parent.

So an element uses itself to remove itself from its parent. Pretty cool, huh? */


const mainHeading2 = document.querySelector('h1');

mainHeading2.remove();

/***We also learned about the following helpful properties:

.firstChild
.firstElementChild
.parentElement
The difference */