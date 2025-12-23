const removeFromArray = function(arr,num) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === num) {
            arr.splice(i, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
