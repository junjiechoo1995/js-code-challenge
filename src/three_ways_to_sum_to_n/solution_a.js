// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

<!DOCTYPE html>
<script>
'use strict';

var sum_to_n = function(n) {
    // your code here
    // let n = 5;
    let sum_to_n = 0;
    for (let i = 1; i <= n; i++) {
        sum_to_n += i;
    }
    return sum_to_n;
}
alert( sum_to_n(5) );
</script>
