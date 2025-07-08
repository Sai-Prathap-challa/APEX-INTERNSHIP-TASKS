
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Message sent successfully!");
  this.reset();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  li.onclick = () => li.remove();
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
