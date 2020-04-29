// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.
<!DOCTYPE html>
<script>
'use strict';


var sum_to_n = function(n) {
    // your code here
    if(n == 1) return 1;
    return n + sum_to_n(n - 1);
};

alert( sum_to_n(5) );
</script>
