/* var amount=500;
if (amount<1000) {
  alert("It's less than 1000");
} */

/* var a=5;
var b="5"; //if this is any number besides 5, then you get else statement//

if (a==b) { //these statements refer to the variables to determine alert//
  alert("Yes they're equal");
} else {
  alert("No they are not equal");
} */

/* var foo=10;
var bar=20;

if (foo<bar) {
  console.log("foo is less than bar");
  console.log(foo);
  console.log(bar);
} */

/* function arbitraryName (x, y) {
  var myVar=x*y;
  console.log(myVar);
}

var myResult = arbitraryName(6 , 9); */

/* var myArray=[10,20,30,40,50]
console.log(myArray.length); */

/* var foo="Hello ";
var bar="Person";
console.log(foo+bar); */

/* var x=200.6;
var y=Math.round(x);

console.log(x);
console.log(y); */

/* var phrase="This is a simple phrase";
console.log(phrase.length); //result is 23 spaces and characters in the phrase "this is a simple phrase"//
*/

var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var myDate = new Date(1955, 1, 24);
console.log( "Steve Jobs was born on: ", n );
