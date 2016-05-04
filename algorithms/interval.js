var num = 54;
var arrNum = [4, 12, 26, 32, 5, 98, 7, 78, 9, 23, 67, 45];

var arr = arrNum.sort(function (a, b) { return a - b });
var last = arr[arr.length - 1];
var first = arr[0];

console.log(num);
console.log(arr);

function calc(min, max, n) {
    var average = (max - min) / 2;
    var range = ((average + min) > n) ? min : max;

    console.log('The Interval is: ' + min + '...' + max + '\nThe Closest number is: ' + range);
};

(function (val) {
    if (val > last) {
        console.log('The number is greater than: ' + last);
    } else if (val < first) {
        console.log('The number is less than: ' + first);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {

                console.log('The number is equal to: ' + val);

            } else if ((arr[i] < val) && (val < arr[i + 1])) {
                calc(arr[i], arr[i + 1], val);
            }
        }
    }
})(num);