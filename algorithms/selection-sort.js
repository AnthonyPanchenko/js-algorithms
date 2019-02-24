function SelectionSort(arr) {
  var sortedArr = arr;
  var n = sortedArr.length;

  for (var i = 0; i < n - 1; i++) {
    var min = i;

    for (var j = i + 1; j < n; j++) {
      if (sortedArr[j] < sortedArr[min]) min = j;
    }

    var t = sortedArr[min];
    sortedArr[min] = sortedArr[i];
    sortedArr[i] = t;
  }

  return sortedArr;
};

console.log(SelectionSort([1, 9, 2, 3, 7, 6, 4, 5, 5]));
