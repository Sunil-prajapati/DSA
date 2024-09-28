// Big 0 notation help us understand HOW LONG an algorithm will take to run or HOW MUCH memory it

// O(n) grow linearly acc. to size of the data
//     size of input grow (depends on input)
//     time will also grow linearly

// if we have two for loop in one function then the time complexity will be n + n = 0(2n)
// but we remove constant. right way is 0(n)

// expample == we are two name in below function ====

const studentsDB = ["aksay", "sohil", "kan", "joradan"];

function getStudent(db, name) {
  if (!Array.isArray(db)) {
    throw new Error("Input must be an array.");
  }
  for (let names of db) {
    if (names.indexOf(name)) {
      return `Found ${name} in the database.`;
    }
  }
  for (let names of db) {
    if (names.indexOf("sohil")) {
      return `Found ${"sohil"} in the database.`;
    }
  }
  return false;
}
console.log(getStudent(studentsDB, "kan"));

// ==================== 0(1) =============
// execution time of an algorithm remains constant

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 3));

// =============0(n^2)======
// output increase by 2 times of it's input

// one loop in between the another loop
// nested loop

// then we also have one more array in the function the it will become 0(n^2 + n) Dominant term
// 0(n) non-dominant term

// ==============0(log n)======
// binary search
// basically divide the search always to search particular data
