var temp = 100; // TypeScript will infer the type based on the assigned value
// Check the inferred type
console.log("Type of temp:", typeof temp);
// Attempt to reassign the variable with a different type
temp = "Hello, TypeScript!"; // TypeScript will catch this as a type error
// Display the value (won't reach this line due to the error above)
console.log("My Variable:", temp);
