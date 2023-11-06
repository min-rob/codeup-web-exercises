const handleCountdown = (countdown) => {
  console.log(countdown);
};

//IIFE
(() => {
  //the setInterval Method
  let countdown = 10;
  console.log(countdown);
  //   const countdownTimer = setInterval(() => {
  //     countdown--;
  //     handleCountdown(countdown);
  //     if (countdown === 0) {
  //       clearInterval(countdownTimer);
  //     }
  //   }, 1000);

  //the setTimeout Method

  //   const adPopUp = setTimeout(() => {
  //     console.log("Ad PopUp");
  //   }, 5000);

  //   const noAdsBtn = document.querySelector("button");
  //   noAdsBtn.addEventListener("click", () => {
  //     clearTimeout(adPopUp);
  //   });

  //Location object
  console.log(window.location);
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 5000);
})();
