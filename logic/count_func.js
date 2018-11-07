export const countInstances = (listArr, inputArr) => {
  let counter = 0;
  for (let i = 0; i <= inputArr.length; i++) {
    if (listArr.includes(inputArr[i])) {
      counter += 1;
    };
  }; 
  return counter;
}