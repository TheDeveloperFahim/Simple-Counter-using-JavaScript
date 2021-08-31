// Set inital value to zero
let count = 0;

// Set value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Set values color
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "#f44";
    } else {
      value.style.color = "#102A42";
    }

    value.textContent = count;
  });
});
