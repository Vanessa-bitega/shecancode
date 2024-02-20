//Write a program that calculates the sum of all numbers from 1 to 100.

for (let rows = 1; rows <= 10; rows++) {
    // Initialize a string variable to accumulate the row values
    let rowString = "";
    
    for (let column = 1; column <= 10; column++) {
      // Calculate the product of the current row and column
      let product = rows * column;
      
      // Append the product to the rowString with proper spacing
      rowString += product + "\t"; // \t adds a tab space between values
    }
    
    // Log the entire rowString after the inner loop finishes
    console.log(rowString);
  }