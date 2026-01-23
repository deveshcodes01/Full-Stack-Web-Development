// FUNCTIONS
// DRY = DO NOT REPEAT YOURSELF
function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// Conditionals in JavaScript

var age = 4;
// Single if statement
if (age > 18) {
  console.log("you are cannot drink rasna water");
}
// if-else statement
if (age > 8) {
  console.log("you are not a kid");
}
else{
    console.log("you are a kid");
}

// if-else ladder
if(age>32)
{
    console.log("you are not a kid");
}
else if(age>26)
{
    console.log("bacche nhi rhe");
}
else if(age>22)
{
    console.log("yes bacche nhi rahe");
}
else if(age>18)
{
    console.log("18 bacche nhi rhe");
}
else{
    console.log("bcche rhe");
}
console.log("end of ladder");