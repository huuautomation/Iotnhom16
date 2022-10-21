const resetBtn = document.getElementById("resetBtn");
const calculateBtn = document.getElementById("calculateBtn");
const bac1 = document.getElementById("bac1");
const toggler = document.querySelector(".fas");
const inputs = document.getElementsByClassName("number");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number1 = document.querySelector(".number1");
const number5 = document.querySelector(".number5");
const number4 = document.querySelector(".number4");
const root1 = document.querySelector(".root1");
const root2 = document.querySelector(".root2");
const info = document.getElementById("info");
const live = document.getElementById("live");

resetBtn.addEventListener("click", function () {
  for (let i = 0; i <= inputs.length - 1; i++) {
    inputs[i].value = "";
  }
});

calculateBtn.addEventListener("click", function () {
  const a = Number(number1.value);
  const b = Number(number2.value);
  const c = Number(number3.value);
  const Delta = b * b - 4 * a * c;
  if (a !== 0 && Delta > 0) {
    const x1 = ((-b + Math.sqrt(Delta)) / 2) * a;
    const x2 = ((-b - Math.sqrt(Delta)) / 2) * a;
    root1.textContent = x1.toFixed(3);
    root2.textContent = x2.toFixed(3);
    document.querySelector(".none").style.display = "block";
    info.textContent = "";
  } else if (Delta === 0 && a!==0) {
    const x1 = -b / (2 * a);
    const x2 = -b / (2 * a);
    root1.textContent = x1.toFixed(3);
    root2.textContent = x2.toFixed(3);
    
    document.querySelector(".none").style.display = "block";
    info.textContent = "Phương trình có nghiệm kép ";
    info.style.color = "red";
    info.style.fontSize = "1.5rem";
  } else if (a === 0 ) {
    info.textContent = "Số đầu tiên phải lớn hơn 0 bạn nhé !!!";
    info.style.color = "red";
    info.style.fontSize = "1.5rem";
    root1.textContent = "";
    root2.textContent = "";
  } else {
    info.textContent = "Ôi!!! Phương trình vô nghiệm mất rồi";
    info.style.color = "red";
    info.style.fontSize = "1.5rem";
    root1.textContent = "";
    root2.textContent = "";
  }
});


//day night mode
//day night mode
//day night mode
const darkBtn = document.querySelector(".fa-moon");
const bodyEl = document.querySelector("body");

const darkMode = () => {
  bodyEl.classList.toggle("dark");
};

darkBtn.addEventListener("click", () => {
  // Get the value of the "dark" item from the local storage on every click
  setDarkMode = localStorage.getItem("dark");

  if (setDarkMode !== "on") {
    darkMode();
    // Set the value of the itwm to "on" when dark mode is on
    setDarkMode = localStorage.setItem("dark", "on");
  } else {
    darkMode();
    // Set the value of the item to  "null" when dark mode if off
    setDarkMode = localStorage.setItem("dark", null);
  }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem("dark");

// Check dark mode is on or off on page reload
if (setDarkMode === "on") {
  darkMode();
}

setInterval(() => {
  const today = new Date();
  const cas =
    new Intl.DateTimeFormat(navigator.language, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(today) +
    " " +
    new Intl.DateTimeFormat(navigator.language, {
      hour: "numeric",
      minute: "numeric",
    }).format(today);
  live.textContent = cas;
}, 1);
