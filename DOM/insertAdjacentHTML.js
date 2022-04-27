const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

/**Enter the .insertAdjacentHTML() method! The .insertAdjacentHTML() method has to be called with two arguments:

the location of the HTML
the HTML text that is going to be inserted
The first argument to this method will let us insert the new HTML in one of four different locations

beforebegin – inserts the HTML text as a previous sibling
afterbegin – inserts the HTML text as the first child
beforeend – inserts the HTML text as the last child
afterend – inserts the HTML text as a following sibling */


//NOTES
/**if an element already exists in the DOM
 * and this element is passed to .appendChild(),
 * the .appendChild() method will move it rather than duplicating it
an element's .textContent property is used more often
 than creating a text node with the .createTextNode() method
the .insertAdjacentHTML() method's second argument
has to be text, you can't pass an element */