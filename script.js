// COUNTDOWN
const targetDate = new Date("2027-04-07T00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  days.innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.innerText = Math.floor((diff / (1000 * 60)) % 60);
  seconds.innerText = Math.floor((diff / 1000) % 60);
}, 1000);

// SOUND TOGGLE (FIXED)
function toggleSound() {
  const video = document.getElementById("bgVideo");
  const btn = document.getElementById("soundBtn");

  video.muted = !video.muted;
  btn.innerText = video.muted ? "🔇 SOUND OFF" : "🔊 SOUND ON";
}

// SCROLL REVEAL
const cards = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
cards.forEach(card => observer.observe(card));
