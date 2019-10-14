function maxValueArray(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
return max;
} 
module.exports = maxValueArray; 