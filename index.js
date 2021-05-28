function add(a, b) {
  let res = a + b;
  return res;
}

function subtract(a, b) {
  let res = a - b;
  return res;
}

function multiply(a, b) {
  let res = a * b;
  return res;
}

function divide(a, b) {
  let res = a / b;
  return res;
}

function increment(n) {
  let res = ++n;
  return res;
}

function decrement(n) {
  let res = --n;
  return res;
}

function makeInt(string) {
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  return parseFloat(string);
}
