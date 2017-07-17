let myArray = [2,5,3,1,4];

let is = function insertionSort (input){

  let i, j, key;

  for(i = 1; i < input.length; i++){
    key = input[i];
    j = i-1;
    while(j >= 0 && input[j] > key){
      input[j+1] = input[j];
      j--;
    }
    input[j+1] = key;
  }
  return input;
}

console.log(is(myArray));
