// Declare an array of strings
var colors = ["Red", "Green", "Blue", "Orange"];
// Add elements to the array
colors.push("White");
colors.push("Pink");
// Remove elements from the array
colors.pop(); // Removes the last element ("Orange")
// Iterate through the array and print each element
console.log("Array Elements:");
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var c = colors_1[_i];
    console.log(c);
}
// Check if an element exists in the array
var searchColor = "Green";
var isColorInArray = colors.includes(searchColor);
console.log("Is ".concat(searchColor, " in the array? ").concat(isColorInArray ? "Yes" : "No"));
// Find the index of a specific element in the array
var indexOfBlue = colors.indexOf("Blue");
console.log("Index of \"Blue\" in the array: ".concat(indexOfBlue));
// Remove a specific element from the array by index
if (indexOfBlue !== -1) {
    colors.splice(indexOfBlue, 1);
}
// Display the modified array
console.log("Modified Array:");
console.log(colors);
