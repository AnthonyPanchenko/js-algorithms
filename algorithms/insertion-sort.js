function InsertionSort(arr) {
  var sortedArr = arr;
  var n = sortedArr.length;

  for (var i = 0; i < n; i++) {
    var v = sortedArr[i];
    var j = i - 1;

    while (j >= 0 && sortedArr[j] > v) {
      sortedArr[j + 1] = sortedArr[j];
      j--;
    }

    sortedArr[j + 1] = v;
  }

  return sortedArr;
}

console.log(InsertionSort([1, 9, 2, 3, 7, 6, 4, 5, 5]));
