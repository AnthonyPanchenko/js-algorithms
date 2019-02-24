var mergeSort = function (array) {
  function merge(left, right) {
    var result = [];
    var il = 0;
    var ir = 0;

    while (il < left.length && ir < right.length) {
      result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
  }

  function merge_sort(items) {
    if (items.length < 2) {
      return items;
    }

    var middle = Math.floor(items.length / 2);

    var left = items.slice(0, middle);
    var right = items.slice(middle);

    return merge(merge_sort(left), merge_sort(right));
  }

  return merge_sort(array);
};

console.log(mergeSort([1, 9, 2, 3, 7, 6, 4, 5, 5]));
