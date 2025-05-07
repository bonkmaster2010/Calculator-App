window.onload = () => {
let btns = document.querySelectorAll("button");
let input = document.getElementById("input");

function valuetrans() {
  btns.forEach((button) => {
    button.addEventListener("click", () => {
      let value = button.textContent;

  if (value === "C") {
        input.value = ''; 
      } else {
        input.value += value; 
      }
    });
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    try {
      e.preventDefault();
      input.value = eval(input.value);
    } catch {
      input.value = "Error";
    }
  }
});

valuetrans();
}
