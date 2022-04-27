const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';

//check this
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';


/***Notice that when using the .style.cssText property,
 *  you write the CSS styles just as you would in a stylesheet;
 *  so you write font-size rather than fontSize.
 * This is different than using the individual .style.<property> way. */

