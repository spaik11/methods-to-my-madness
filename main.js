function slice(string, start = 0, end = string.length) {
  let newStr = '';

  for (let i = start; i < end; i++) {
    newStr += string[i];
  }
  return newStr;
}

function repeat(str, repetitions) {
  let newStr = '';

  for (let i = 0; i < repetitions; i++) {
    newStr += str
  }
  return newStr;
}

function startsWith(string, substring) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[i]) {
      return true;
    }
  }
  return false;
}

function endsWith(str, substring) {
  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] === substring[i]) {
      return true;
    }
  }
  return false;
}


function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

function join(arr, separator = '') {
  let newStr = '';

  if (separator === '') {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr.length - 1) {
      newStr += arr[i];
    } else {
      newStr += `${arr[i]}${separator}`;
    } 
  }
}
  return newStr;
}


function split(str, separator) {
  const newArr = [];

  for (let i = 0; i < 1; i++) {
    if (separator === undefined) {
      newArr.push(str)
    } else {
      newArr.push(str[separator])
    }
  }
  return newArr;
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
