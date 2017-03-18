// I = 1
// V = 5
// X = 10
// L = 50
// C = 100 check
// D = 500
// M = 1000 check
// check if the number is  pandigital
var number = prompt("check if number is a pandigital");
var realNum = parseInt(number).toString().split("").map(Number)

  if (realNum[0] === 1) {
    for (var i = 1; i < realNum.length; i++) {
      if (realNum[i] === 4 || realNum [i] === 6) {
        alert(realNum.join("") + " is a pandigital roman number");
      }
    }
  } else {
    alert(realNum + " is not a pandigital roman number")
  }
