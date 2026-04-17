function scrollToTimer() {
  document.getElementById("timerSection").scrollIntoView({behavior:"smooth"});
  startTimer();
}

function startTimer() {
  let time = 10;
  let timer = document.querySelector(".timer");

  let interval = setInterval(() => {
    time--;
    timer.innerText = time;

    if (time === 0) {
      clearInterval(interval);
      document.getElementById("nextBtn").style.display = "block";
    }
  }, 1000);
}

function goToSite3() {
  window.location.href = "https://dating.govtyojanaonline.com/how-to-get-more-matches-on-dating-apps-fast";
}
