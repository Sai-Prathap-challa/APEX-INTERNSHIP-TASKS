
const images = [
  "https://i.pinimg.com/1200x/7a/76/1d/7a761d0c69df3858fceff11ef8708f48.jpg",
  "https://i.pinimg.com/736x/21/f5/71/21f571579df9f7aeda51a04c3f5e3c74.jpg",
  "https://i.pinimg.com/1200x/18/be/1f/18be1f7af1db345172b4096613fef6a2.jpg"
]; 
let currentIndex = 0;

function showImage(index) {
  document.getElementById("carousel-image").src = images[index];
}
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}
setInterval(nextImage, 3000); // Auto slide every 3s
showImage(currentIndex);

function checkAnswer(answer) {
  const result = answer === "Paris" ? "Correct! 🇫🇷" : "Wrong! Try again.";
  document.getElementById("quiz-result").innerText = result;
}

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
    });
}
