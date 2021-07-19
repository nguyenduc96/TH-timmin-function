
function minArray(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [21,42,3543,5,436,52,412,1,123,11];
let min = minArray(arr1);
console.log("Min arr 1 = " + min)
let arr2 = [];
min = minArray(arr2)
console.log('Min arr 2 = ' + min)
let arr3=[0,0,0,0,0,0,0]
min = minArray(arr3);
console.log('Min arr3 = ' + min)