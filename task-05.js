function maxValueArray(Arr) {
    let max = 0;
        for (let i = 0; i < Arr.length; i++) {
            if (max < Arr[i]) {
                    max = Arr[i];
                }
            }
        return max;
    } 
module.exports = maxValueArray; 