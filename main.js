function updateclock() {
  const now = new Date();
  let hours = now.getHours();
  let time = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let timestring = `${hours}:${minutes}:${seconds} ${"  "} ${time}`;
  document.getElementById("clock").textContent = timestring;
}
updateclock();
setInterval(updateclock, 1000);
