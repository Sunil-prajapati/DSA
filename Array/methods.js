const dummy = [1, 4, 5, 6, 7, "Hello", { name: "Vishal" }, [1, 2, 3, 4]];

// shallow copy
// this will also change to parent array but only for one level if we have nested
const shallowCopy = dummy;
shallowCopy.splice(1, 0, 30, 40, 50, 60);
// console.log(shallowCopy);

// Deep Copy
// not affect to parent array
const deepCopy = [...dummy];
// OR
const anotherWayOfDeepCopy = Array.from(dummy);
// OR
const anotherWay = dummy.concat();
deepCopy.splice(1, 0, 30, 40, 50, 60);
// console.log(deepCopy);
