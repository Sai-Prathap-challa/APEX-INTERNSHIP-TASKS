function showMessage() {
  alert("Thanks for clicking! You're on your way to becoming a developer 🚀");
}

function updateTime() {
  const now = new Date();
  document.getElementById('clock').textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();
