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
  return false;
}
console.log(getStudent(studentsDB, "kan"));
