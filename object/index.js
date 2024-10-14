let obj = {
  name: "John",
  age: 30,
};
// Object.freeze(obj);
console.log(Object.isFrozen(obj));

// in seal we can update the values but not add or delete link freeze
Object.seal(obj);
obj.gender = "Male"; // do nothing
console.log(Object.isSealed(obj));

// 1. solution of nested object with recurssion
let finalObj = {};
const recurssionMagic = (obj, parentName) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      recurssionMagic(obj[key], parentName + "_" + key);
    } else {
      finalObj[parentName + "_" + key] = obj[key];
    }
  }
};
recurssionMagic(user, "user");
