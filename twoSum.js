const twoSum = (arr, target) => {
  let AllPairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[i] + arr[j]);
      if (arr[i] + arr[j] == target) {
        AllPairs.push(new Array(i, j));
      }
    }
  }
  return AllPairs;
};

// console.log(twoSum([1, 2, 3, 4], 5));
