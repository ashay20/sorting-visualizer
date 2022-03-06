export function getBubbleSortAnimations(array) {
    const bubbleAnimations = [];
    const auxiliaryArray=array.slice();
    bubbleSortHelper(bubbleAnimations,array,auxiliaryArray);
    return bubbleAnimations;
}

function bubbleSortHelper(bubbleAnimations,mainArray,auxiliaryArray){
    let endIdx=mainArray.length-1;
    let flag=false;
    let changeOne = 0;
    let changeTwo = 0;
    for(let i = 0; i<mainArray.length-1; i++){
        for(let j = 0; j<mainArray.length-i-1; j++){
            if(auxiliaryArray[j]>auxiliaryArray[j+1]){
                flag=true;
                changeOne=j;
                changeTwo=j+1;
                swap(auxiliaryArray, j, j+1);
            }
            if(flag){
                bubbleAnimations.push([changeOne, changeTwo]);
                bubbleAnimations.push([changeOne, changeTwo]);
                bubbleAnimations.push([mainArray.length-i-1, auxiliaryArray[mainArray.length-i-1]]);
            }
            else{
                // mainArray[0]=auxiliaryArray[0];
                break;
            }
        }
        mainArray[endIdx]=auxiliaryArray[endIdx];
        endIdx--;
    }
    console.log(arraysAreEqual(mainArray, auxiliaryArray));
    mainArray[0]=auxiliaryArray[0];
    bubbleAnimations.push([0, 0]);
    bubbleAnimations.push([0, 0]);
    bubbleAnimations.push([0, auxiliaryArray[0]]);
    console.log(mainArray);
    console.log(auxiliaryArray);
    console.log(arraysAreEqual(mainArray, auxiliaryArray));
}

function swap(array, i, j) {
    let c = array[i];
    array[i] = array[j];
    array[j] = c;
    return array;
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }