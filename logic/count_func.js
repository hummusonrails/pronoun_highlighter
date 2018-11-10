export const countInstances = (listArr, inputArr) => {
  let counter = 0;
  let inputToLower = inputArr.join(" ").toLowerCase().split(" ");
  for (let i = 0; i <= inputToLower.length; i++) {
    if (listArr.includes(inputToLower[i])) {
      counter += 1;
    };
  }; 
  return counter;
}