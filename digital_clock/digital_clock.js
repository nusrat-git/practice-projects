let toggle = false;

const toggleFormat = () => {
  toggle = !toggle;
};

const getTime = () => {
  const date = new Date();
  let hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  let time = `${hour}:${min}:${sec}`;

  if (toggle) {
    time = hour > 12 ? `${hour - 12}:${min}pm` : `${hour}:${min}am`;
  }

  return time;
};

document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("time");

  let time = getTime();
  element.innerText = time;

  setInterval(() => {
    time = getTime();
    element.innerText = time;
  }, 1000);
});
