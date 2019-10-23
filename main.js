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
  for (let i = 0; i < substring.length; i++) {
    if (string[i] !== substring[i]) {
      return false;
    }
  }
  return true;
}

function endsWith(str, substring) {
  for (let i = 0; i <= substring.length; i++) {
    const substringIndex = substring.length - i;
    const strIndex = str.length - i;
    if (str[strIndex] !== substring[substringIndex]) {
      return false;
    }
  }

  return true;
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
  let str = arr[0];
  for (let i = 1; i < arr.length; i++) {
    str += separator + arr[i];
  }

  return str;
}


function split(str, separator) {
  let arr = [];
  let strStartIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      arr.push(str.slice(strStartIndex, i));
      strStartIndex = i + 1;
    }
  }

  arr.push(str.slice(strStartIndex));

  return arr;
}

function trimStart(str) {
  let trimmed = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str.slice(i);
    }
  }

  return trimmed;
}

function trimEnd(str) {
  let trimmed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      return str.slice(0, i + 1);
    }
  }

  return trimmed;
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
