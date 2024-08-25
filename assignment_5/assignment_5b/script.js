let number = prompt(
  "Enter 4 digit number to check whether the given number is armstrong number or not."
); // not added +prompt as it removes initial zeros like 0153
const originalNumber = number;
let numberOfDigitsOfNumber = number.length;
let rem = 0;
let sum = 0;

while (number > 0) {
  rem = number % 10;
  number = Math.floor(number / 10);
  sum += Math.pow(rem, numberOfDigitsOfNumber);
}
if (sum === parseInt(originalNumber)) {
  document.write("The number " + originalNumber + " is an armstrong number");
} else {
  document.write(
    "The number " + originalNumber + " is not an armstrong number"
  );
}
