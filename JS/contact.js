var inputs = document.querySelectorAll(".formulario-input");

inputs[0].addEventListener("keyup", () => {
  inputs[0].value.length >= 1
    ? inputs[0].nextElementSibling.classList.add("fix-text")
    : inputs[0].nextElementSibling.classList.remove("fix-text");
});

inputs[1].addEventListener("keyup", () => {
  inputs[1].value.length >= 1
    ? inputs[1].nextElementSibling.classList.add("fix-text")
    : inputs[1].nextElementSibling.classList.remove("fix-text");
});

inputs[2].addEventListener("keyup", () => {
  inputs[2].value.length >= 1
    ? inputs[2].nextElementSibling.classList.add("fix-text")
    : inputs[2].nextElementSibling.classList.remove("fix-text");
});
inputs[3].addEventListener("keyup", () => {
  inputs[3].value.length >= 1
    ? inputs[3].nextElementSibling.classList.add("fix-text")
    : inputs[3].nextElementSibling.classList.remove("fix-text");
});

// for (var i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener("keyup", () => {
//     console.log("Oooweeee");
//     if (inputs[i].value.length >= 1) {
//       console.log("loop");
//       inputs[i].nextElementSibling.classList.add("fix-text");
//     } else {
//       inputs[i].nextElementSibling.classList.remove("fix-text");
//     }
//   });
// }

