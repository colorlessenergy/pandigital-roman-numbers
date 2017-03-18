var pandigital = document.getElementById("pandigital");

for (var j = 0; j < 2000; j++) {
var realNum = parseInt(j).toString().split("").map(Number);
if (realNum[0] === 1 && realNum.length === 4) {
  for (var i = 1; i < realNum.length; i++) {
    if (realNum[i] === 4 || realNum[i] === 6) {
      if (i === 2) {
        if (realNum[i-1] === 4 || realNum[i-1] === 6) {
          if (realNum[i+1] == 4 || realNum[i+1] === 6) {
            var createLi = document.createElement("li");
            createLi.innerHTML = realNum.join("");
            pandigital.appendChild(createLi);
          }
        }
      }
    }
  }
}
}
