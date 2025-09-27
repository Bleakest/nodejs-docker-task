const root = document.getElementById("root");
root.innerText = "hello world!";

root.style.color = "blue";
root.style.fontSize = "24px";
root.style.padding = "20px";

root.addEventListener("click", () => {
  root.style.color = root.style.color === "blue" ? "red" : "blue";
});
