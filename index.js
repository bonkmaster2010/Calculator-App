
let btns = document.querySelectorAll("button");
let input = document.getElementById("input");

function valuetrans() {
  btns.forEach((button) => {
    button.addEventListener("click", () => {
      let value = button.textContent;

      if (value === "=") {
          input.value = eval(input.value);
        
      } else if (value === "C") {
        input.value = ''; 
      } else {
        input.value += value; 
      }
    });
  });
}

valuetrans();
