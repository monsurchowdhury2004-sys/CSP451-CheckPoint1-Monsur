console.log("CSP451 CheckPoint 1 loaded successfully.");

const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
  msg.textContent = "Button clicked! Check the console too.";
  console.log("User clicked the button.");
});
