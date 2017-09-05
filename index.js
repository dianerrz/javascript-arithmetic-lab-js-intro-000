function add(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var add = a + b;
  return add;
}
function subtract(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var subtract = b - a;
  return subtract;
}
function multiply(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var multiply = b * a;
  return multiply;
}
function divide(a,b) {
  a=parseInt (a,10);
  b=parseInt(b,10)
  var divide = b / a;
  return divide;
}
function inc(n) {
  return ++n;
}
function dec(n) {
  return --n;
}
function makeInt(n) {
  return parseInt(n,10);
}
function preserveDecimal(n) {
  return parseInt(n,10);
}
