console.log("Calculator app loaded");

function getAdd() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("add-val1").value);
  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("add-val2").value);
  const add = num1 + num2;
  console.log(add);
  // Displays the result in paragraph using dom
  document.getElementById("results-add").innerHTML = "Addition : " + add;
  // Changes the color of paragraph tag with red
  document.getElementById("results-add").style.color = "red";
}
function getSUB() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("sub-val1").value);
  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("sub-val2").value);
  const add = num1 - num2;
  console.log(add);
  // Displays the result in paragraph using dom
  document.getElementById("results-sub").innerHTML = "Subtraction : " + add;
  // Changes the color of paragraph tag with red
  document.getElementById("results-sub").style.color = "red";
}
function getMUL() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("val1").value);
  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("val2").value);
  const add = num1 * num2;
  console.log(add);
  // Displays the result in paragraph using dom
  document.getElementById("results-mul").innerHTML = "Multiply : " + add;
  // Changes the color of paragraph tag with red
  document.getElementById("results-mul").style.color = "red";
}
function getDIV() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("val1").value);
  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("val2").value);
  const add = num1 / num2;
  console.log(add);
  // Displays the result in paragraph using dom
  document.getElementById("results-div").innerHTML = "Division5 : " + add;
  // Changes the color of paragraph tag with red
  document.getElementById("results-div").style.color = "red";
}
