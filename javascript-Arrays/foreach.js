words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

/***The forEach() method will call this function once for each element
 *  in the array (hence the name forEach.) Each time,
 * it will call the function with different arguments.
 *  The element parameter will get the value of the array element.
 *  The index parameter will get the index of the element (starting with zero).
 *  The array parameter will get a reference to the whole array,
 *  which is handy if you want to modify the elements. */