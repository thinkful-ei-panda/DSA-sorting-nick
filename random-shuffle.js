function main() {
  const arr = [4, 0, 5, 2, 1, 3];

  randomShuffle(arr);

  console.log(arr);
}

function randomShuffle(arr) {
  let temp1, temp2;

  for (let i = 0; i < arr.length; i++) {
    const randIndex = getRandInt(arr.length - 1);

    temp1 = arr[i];
    temp2 = arr[randIndex];

    arr[i] = temp2;
    arr[randIndex] = temp1;
  }
}

function getRandInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

main();