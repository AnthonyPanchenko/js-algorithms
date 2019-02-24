// Average O(n log n)

function QuickSort(arr) {
  if (arr.length == 0) {
    return [];
  }

  var a = [],
      b = [],
      p = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < p) {
      a[a.length] = arr[i];
    } else {
      b[b.length] = arr[i];
    }
  }

  return QuickSort(a).concat(p, QuickSort(b));
}

console.log(QuickSort([1, 9, 2, 3, 7, 6, 4, 5, 5]));
