'use strict';

///////////////////////////////////////
// Default Parameters

//const createBooking = function (){}

const bookings = [];

const createBooking = (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) => {
  //before ES6 we would assign default parameters this way.
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;
  //ES6 we can specify that within the parameters

  const booking = {
    flightNum,
    numPassenger: numPassenger, //Remember if key is the same as value we skip this synthax
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 1);
createBooking('LH123', 5);
console.log(`Flight current bookings: ${bookings}`);
console.log(bookings);
//Output would return 'undefined' which we know its a falsy value. We can use short circuting
//{ flightNum: 'LH123', numPassenger: undefined, price: undefined }
//Note: if we wanted to skip a value on the parameters we would have to set that value as undefined

createBooking('LH123', undefined, 69);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = (flightNum, passanger) => {
  flightNum = 'LH999';
  passanger.name = 'Mr.' + passanger.name;

  if (passanger.passport === 24739479284) {
    alert('Checked in!');
    console.log('Checked in!');
  } else {
    //alert('Wrong passport!');
    console.log('wrong passport!');
  }
};

checkIn(flight, jonas);

//Note - because objects are not primitive but reference values instead. When we  passanger.name = 'Mr.' + passanger.name;
//The object it self gets affected. Because when we pass a reference type to a function what we copy is really jus the reference of the object in the memory key
//Is the same as doing

const flightNum = flight;
const passanger = jonas;
//With the object we are copying the reference to that object in the memory key but they both point to the same object in memory
//KEEP IN MIND THIS BEHAVIOR WHEN WORKING WITH OBJECTS AND FUNCTION!
