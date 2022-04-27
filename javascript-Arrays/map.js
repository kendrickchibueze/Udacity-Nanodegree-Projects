var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

/****Using forEach() will not be useful if you want to
 * permanently modify the original array. forEach() always
 * returns undefined. However, creating a new array from an existing
 *  array is simple with the powerful map() method.
With the map() method, you can take an array,
 perform some operation on each element of the array,
  and return a new array. */

  //NOTES
  /**In the above example, we used a function expression to pass
   * that function into map(). This function is taking in one argument,
   * donut which corresponds to each element in the donuts array.
   *  You no longer need to iterate over the indices anymore.
   *  map() does all that work for you. */