function updateTimer(timer) {
  if (timer == 0) {
    alert("EXTERMINATE!");
    let video = document.getElementById("explosion-video");
    video.style.display = "block";
    let message = document.getElementById("message");
    let button = document.getElementById("defuser");
    message.style.display = "none";
    button.style.display = "none";
  } else if (timer > 0) {
    document.getElementById("timer").innerHTML = timer;
  }
}

function defuseTheBOM(id) {
  setTimeout(() => {
    clearInterval(id);
    clearTimeout(id);
    alert("You have defused the BOM!");
  });
}

(() => {
  let detonationTimer = 5;
  const countdown = setInterval(() => {
    updateTimer(detonationTimer--);
  }, 1000);

  var defuser = document.getElementById("defuser");
  defuser.addEventListener("click", () => {
    defuseTheBOM(countdown);
  });
})();
