// Function to print a given name with a fancy effect
function printFancyName(name) {
  let index = 0;
  const intervalId = setInterval(() => {
    process.stdout.write(name[index]); // Print one letter at a time
    index++;
    if (index === name.length) {
      clearInterval(intervalId); // Stop the interval when all letters are printed
      console.log(); // Move to the next line after printing the name
    }
  }, 100); // Adjust the interval duration (in milliseconds) for the desired speed
}

// Usage example
let givenName = 'Andrew M Stands and Looks Back';
printFancyName(givenName);
