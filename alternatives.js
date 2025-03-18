function printAlternative(arr){
    let result =[];

    for (i=0; i<arr.length; i+=2){
        result.push(arr[i]);
    }
    return result;

}
const arr = [10,20,30,40,50,60,70,80,90,100];
const result =printAlternative(arr);
console.log(result);
