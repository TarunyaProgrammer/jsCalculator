console.log("Calculator app loaded");

function getAdd() {
  // Fetch the value of input with id val1
  const num1 = Number(document.getElementById("val1").value);
  // Fetch the value of input with id val2
  const num2 = Number(document.getElementById("val2").value);
  const add = num1 + num2;
  console.log(add);
  // Displays the result in paragraph using dom
  document.getElementById("results").innerHTML = "Addition : " + add;
  // Changes the color of paragraph tag with red
  document.getElementById("results").style.color = "red";
}
