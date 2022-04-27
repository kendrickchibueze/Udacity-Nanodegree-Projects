<h1 id="test">Ice Cream Flavors</h1>

const myElement = document.querySelector('#test');
myElement.textContent = 'The <strong>Greatest</strong> Ice Cream Flavors';


//textcontent will render everything as a text on a page while innerHTML will render the HTML of a page

/***the textcontent returns all the text without the css while the innerText
 * return the text how it will be seen visually ie applying CSS
*/

/***As you saw, .innerText will get the visible text of the element.
 *  This is an important distinction! If CSS is used to hide any text inside that element,
 *  .innerText will not return that text, while .textContent will return it.
 * And it's not just the hiding/showing nature of CSS that .innerText adheres to,
 * .innerText will also honor changes to things like capitalization.

The .textContent property has been a standard for quite a long time.
 Conversely, .innerText property is a relatively new addition to the HTML specification.
 It has been around for a while but was not fully supported
  by all browsers because it was not a part of the HTML specification.

Between .textContent and .innerText, you probably want to use
 .textContent since that will return all of the text no matter what.
  Rarely will you actually want only the visible text.

 */