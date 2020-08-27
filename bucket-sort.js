function main() {
  const arr = [4, 0, 5, 2, 1, 3];

  console.log(sortKnown(arr, 5));
}

function sortKnown(arr, n) {
  let counts = new Array(n + 1);

  for (let i = 0; i <= n; i++)
    counts[i] = 0;

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
  }

  let currentInput = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < counts[currentInput]) {
      arr[i] = currentInput;
    }
    else {
      currentInput++;
      counts[currentInput] += i;
      arr[i] = currentInput;
    }
  }

  return arr;
}


function sortKnownSimple(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0)
      count++;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = (i < count) ? 0 : 1;
  }

  return arr;
}

main();