const resetBtn = document.getElementById("resetBtn");
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


bac1.addEventListener("click", function () {
  const e = Number(number4.value);
  const f = Number(number5.value);

  if (e !== 0 && f !== 0) {
    const x = (-f/e);
    root1.textContent = x.toFixed(3);
    document.querySelector(".none").style.display = "none";
    info.textContent = "";
  } else if((e!==0) && (f==0)){
    const x = 0;
    root1.textContent = x.toFixed(3);
    document.querySelector(".none").style.display = "none";
  }
  else
   {
    info.textContent = "Ôi!!! phương trình bậc 1 a>0 ";
    root1.textContent = "";
    root2.textContent = "";
    document.querySelector(".none").style.display = "none";
    
    
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
