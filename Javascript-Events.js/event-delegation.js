
/**Remember the event object that we looked at in the previous section?
 * That's our ticket to getting back the original functionality!

The event object has a .target property.
This property references the target of the event. Remember the capturing, at target,
 and bubbling phases?...these are coming back into play here, too!

Let's say that you click on a paragraph element. Here's roughly the process that happens:

a paragraph element is clicked
the event goes through the capturing phase
it reaches the target
it switches to the bubbling phase and starts going up the DOM tree
when it hits the <div> element, it runs the listener function
inside the listener function, event.target is the element that was clicked
So event.target gives us direct access to the paragraph element that was clicked.
Because we have access to the element directly, we can access its .textContent,
 modify its styles, update the classes it has - we can do anything we want to it! */



const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);