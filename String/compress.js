var compress = function (chars) {
  const myMap = new Map();
  for (let i = 0; i < chars.length; i++) {
    myMap.set(chars[i], (myMap.get(chars[i]) || 0) + 1);
  }
  let str = "";
  myMap.forEach((key, value) => {
    if (key === 1) {
      str += `${value}`;
    } else {
      str += `${value}${key}`;
    }
  });
  return str.split("");
};
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
