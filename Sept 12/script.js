// page reload huda radio button lai uncheck ralkhni  plus meadi query adjust gareko
window.addEventListener("load", () => {
  // reload will hide the form
  document.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.checked = false;
  });

  // plus meadi query adjust gareko
  document.querySelector("header").style.position = "static";
});

// close button thichda radio button lai unchecked plus meadi query adjust gareko
document
  .querySelectorAll("form.form img.close-form")
  .forEach((eachCloseBUtton) => {
    eachCloseBUtton.addEventListener("click", () => {
      document.querySelectorAll("input[type='radio']").forEach((radio) => {
        radio.checked = false;

        // plus meadi query adjust gareko
        document.querySelector("header").style.position = "static";
      });
    });
  });

//   escape button will hide the form
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll("input[type='radio']").forEach((radio) => {
      radio.checked = false;
    });

    // plus meadi query adjust gareko
    document.querySelector("header").style.position = "static";
  }
});

// making condition on meadia query. 700px width huda k garni ?
var widthOfScreeen = window.matchMedia("(max-width: 700px)");
if (widthOfScreeen.matches) {
  document.querySelectorAll("span.button").forEach((eachButton) => {
    eachButton.addEventListener("click", () => {
      document.querySelector("header").style.position = "fixed";
    });
  });
}
