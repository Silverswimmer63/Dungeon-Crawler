



function nine(number){

  */
  if (number == 2) {
    return "This fool even";
  }
  if (number == 1) {
    return "This boi odd";
  }
  return nine(Math.abs(number-2));
}

 //hw; May 7 - 12
 /*
  function mergeSort(unsortedArray)
    if (unsortedArray <= 1)
    return unsortedArray // this checks whether or not the array has only one thing in it or is empty.

    create a constant that would dictate where the middle of the array is so it can be divided.

    create two more constants, one each for the left and right, then create the merge
    by returning the two and using the imbedded Javascript function "merge".

    create a second function for the merge

    use a while loop to sort all of the elements in the left and right
    inorder to keep track of the elements, we can make two variables for the left and right indexes.

    within the loop, we need to compare the left with the leftindex var, and the right with the rightindex var.
    then push the smaller of the two the result array to make sure there is no duplication.

    finally we would need to use concat to return the full array so that we dont have an incomplete list of elements. 
 */
