var PrefixSum = function (strs) {
  let newArray = [];
  let sum = 0;
  for (let i = 0; i < strs.length; i++) {
    sum += strs[i];
    newArray.push(sum);
  }
  return newArray;
};
PrefixSum([2, 3, 4, 5, 6, 7, 8]);
// T.C = 0(n)
// S.C = 0(n);

// optimize approach
var prefixSumOptimize = function (strs) {
  let sum = 0;
  for (let i = 0; i < strs.length; i++) {
    sum += parseInt(strs[i]);
    strs[i] = sum;
  }
  return strs;
};
console.log(prefixSumOptimize([2, 3, 4, 5, 6, 7, 8]));
// T.C = 0(n)
// S.C = 0(1);
// ============================
