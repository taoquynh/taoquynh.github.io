/**
 * Bài 1
 */

function sum(a, b) {
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return "Tham số nhập vào không hợp lệ";
  }

  if (Math.abs(a - b) === 0 || Math.abs(a - b) === 1) {
    return `Không có số nào nằm giữa 2 số ${a} và ${b}`;
  }

  let tong = 0;

  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      tong = tong + i;
    }

    return `Tổng các số nằm giữa ${a} và ${b} là ${tong}`;
  }

  if (a > b) {
    for (let i = a - 1; i > b; i--) {
      tong = tong + i;
    }

    return `Tổng các số nằm giữa ${b} và ${a} là ${tong}`;
  }
}

console.log("1. ", sum(3, 8));
/**
 * Bài 2
 */

function spinalString(str) {
  let strs = str.split(" ");
  return strs.join("-").toLowerCase();
}

console.log("2. ",spinalString("Kiểm tra tổng hợp"));

/**
 * Bài 3
 */

function thoiGian(t, x) {
  let times = t.split(":");

  if (
    times.length !== 3 ||
    Number.isInteger(times[0]) ||
    Number.isInteger(times[1]) ||
    Number.isInteger(times[2]) ||
    Number.isInteger(x) === false
  ) {
    return "Dữ liệu không hợp lệ";
  }

  let gio = parseInt(times[0]);
  let phut = parseInt(times[1]);
  let giay = parseInt(times[2]);

  if (
    gio < 0 ||
    gio > 23 ||
    phut < 0 ||
    phut > 59 ||
    giay < 0 ||
    giay > 59 ||
    x < 0 ||
    x > 1000
  ) {
    return "Dữ liệu không hợp lệ";
  }

  let tongGiay = gio * 3600 + phut * 60 + giay + x;

  gio = Math.floor(tongGiay / 3600);
  tongGiay = tongGiay % 3600;
  phut = Math.floor(tongGiay / 60);
  giay = tongGiay % 60;

  if (gio >= 24) {
    gio = gio - 24;
    return `Thời điểm sau ${x} giây là: ${format(gio)}:${format(phut)}:${format(giay)} ngày hôm sau`;
  } else {
    return `Thời điểm sau ${x} giây là: ${format(gio)}:${format(phut)}:${format(giay)}`;
  }
}

function format(x) {
    if (x >= 0 && x <= 9) {
        return `0${x}`
    }
    
    return x
}
console.log("3. ",thoiGian("09:20:56", 7));

/**
 * Bài 4
 */

function ocSen(h, x, y) {
  if (
    Number.isInteger(h) === false ||
    Number.isInteger(x) === false ||
    Number.isInteger(y) === false ||
    h <= 0 ||
    x <= 0 ||
    y <= 0
  ) {
    return "Thông số không hợp lệ";
  }

  if (x >= h) {
    return "Ốc sên chỉ cần nửa ngày là leo được lên miệng giếng";
  }

  if (x <= y) {
    return "Ốc sên không bao giờ leo ra khỏi miệng giếng";
  }

  let dem = 0;
  let doCaoConLai = h;

  do {
    dem += 1;
    doCaoConLai = doCaoConLai - (x - y);
  } while (x < doCaoConLai);

  return `Ốc sên cần ${dem} ngày để leo ra khỏi miệng giếng`;
}

console.log("4. ",ocSen(20, 5, 2));

/**
 * Bài 5
 */

function timSoNhoNhat(x) {
  if (Number.isInteger(x) === false) {
    return "Thông số không hợp lệ";
  }

  let numbers = [];
  let oldNumber = x;

  while (x > 0) {
    let a = x % 10;
    numbers.push(a);
    x = Math.floor(x / 10);
  }

  numbers.sort();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      numbers.unshift(numbers.splice(i, 1));
      break;
    }
  }

  return `Số nhỏ nhất được viết lại từ số ${oldNumber} là: ${parseInt(numbers.join(""))}`;
}

console.log("5. ",timSoNhoNhat(530751));

/**
 * Bài 6
 */

const button = document.querySelector("#btn");
const bai6 = document.querySelector("#bai6");
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const value = document.querySelector("#hex-value");

button.addEventListener("click", changeHex);

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }
  value.textContent = hex;
  bai6.style.backgroundColor = hex;
}
