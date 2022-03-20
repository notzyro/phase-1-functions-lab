// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {    
    someValue = someValue - 42;
    return someValue;
  }
  

  function distanceFromHqInFeet(aValue) {
    aValue = 42;
    //aValue = aValue + distanceFromHqInBlocks(34);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return aValue;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
  }