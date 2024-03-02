window.addEventListener("keydown", (e) => {
  document.getElementById(
    "result"
  ).innerHTML = `You Pressed <span>${e.key}</span><span> ${e.keyCode}</span>`;
});
