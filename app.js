document.querySelector("#btn7").addEventListener("click", () => func(7));
document.querySelector("#btn8").addEventListener("click", () => func(8));
document.querySelector("#btn9").addEventListener("click", () => func(9));
document.querySelector("#btn4").addEventListener("click", () => func(4));
document.querySelector("#btn5").addEventListener("click", () => func(5));
document.querySelector("#btn6").addEventListener("click", () => func(6));
document.querySelector("#btn1").addEventListener("click", () => func(1));
document.querySelector("#btn2").addEventListener("click", () => func(2));
document.querySelector("#btn3").addEventListener("click", () => func(3));
document.querySelector("#plus").addEventListener("click", () => func("+"));
document.querySelector("#ans").addEventListener("click", () => func("Ans"));
document.querySelector("#multiply").addEventListener("click", () => func("*"));
document.querySelector("#divide").addEventListener("click", () => func("/"));
document.querySelector("#minus").addEventListener("click", () => func("-"));

document.querySelector("#reset").addEventListener("click", reset);

let arr = "";
function func(x) {
  if (x !== "Ans") {
    if (document.getElementById("output").value === "0") {
      if (x !== "+" && x !== "-" && x !== "*" && x !== "/") {
        document.getElementById("output").value = x;
        arr += x;
      } else {
        document.getElementById("output").value = 0;
        if (arr.length !== 0) {
          arr += x;
        }
      }
    } else {
      if (x !== "+" && x !== "-" && x !== "*" && x !== "/") {
        document.getElementById("output").value += x;
        arr += x;
      } else {
        document.getElementById("output").value = 0;
        if (arr.length !== 0) {
          arr += x;
        }
      }
    }
  } else {
    if (arr.length === 0) {
      alert("Please Enter a Value! ");
    } else {
      document.getElementById("output").value = eval(arr);
    }
  }
}

function reset() {
  document.getElementById("output").value = 0;
  arr = "";
}
