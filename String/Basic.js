let firstName = "Sunil";
// console.log(firstName.charAt(0));
// console.log(firstName.charCodeAt(0));
// console.log(firstName.indexOf("u"));
// console.log(firstName.lastIndexOf("i"));

let anotherName = "Sunil";
console.log(firstName.localeCompare(anotherName)); // case sensitive return 0 incase of true otherwise false

// replace
const str = "One piece is best anime One";
// only replace for the first appearance
// to replace multiple we can use regex in replace
// console.log(str.replace("One", "Two"));

// console.log(str.replaceAll("One", "Two"));

// console.log(str.substring(6, 10));

console.log(str.search("piece"));
console.log(str.split(" ")); //convert string into array
console.log(str.startsWith("piece"));
