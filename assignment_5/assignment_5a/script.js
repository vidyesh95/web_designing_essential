let number = +prompt("Enter number");
let fact = 1;
for (let i = 1; i <= number; i++) {
  fact *= i;
}
document.write("The factorial of " + number + " is " + fact);
