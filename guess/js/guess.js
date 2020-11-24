let count = 0;
let random = Math.floor(Math.random() * 100);
let result = "";
let resultP = document.getElementById("result");
let alertP = document.getElementById("alert");
let button = document.getElementById("guessButton");
console.log(`Đáp án ${random}`)

button.addEventListener("click", function () {
  let userGuess = parseInt(document.getElementById("number").value);

  if (!Number.isInteger(userGuess)) {
    alertP.innerHTML = "Vui lòng nhập số";
    alertP.style.color = "red";
  } else {
    count++;
    if (random === userGuess) {
      alertP.innerHTML = "Chúc mừng bạn đã đoán đúng";
      alertP.style.color = "red";
      alertP.style.fontWeight = "700";
      alertP.style.fontSize = 20;
      button.disabled = true;
    } else if (random < userGuess) {
      alertP.innerHTML = "Số bạn chọn quá lớn";
      alertP.style.color = "blue";
    } else if (random > userGuess) {
      alertP.innerHTML = "Số bạn chọn quá bé";
      alertP.style.color = "green";
    }

    result += `Số bạn đoán lần ${count} là ${userGuess} <br>`;
    if (count >= 10) {
      result += `<p style='color: red'>Bạn đã đoán hết lượt!<p>`;
      button.disabled = true;
    }
    resultP.innerHTML = result;
  }
});
