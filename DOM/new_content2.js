/***creates a paragraph element
creates a text node
appends the text node to the paragraph
appends the paragraph to the tag */


const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

//or
const myParam = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myParam);