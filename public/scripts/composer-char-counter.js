$(document).ready(function() {
  console.log($("#tweet-text:focus"));
  $("#new-tweet-text").on("input", function() {
    const counter = document.querySelector(".counter");

    const maxChars = 140;
    let charCount = this.value.length;
    let currentCount = maxChars - charCount;

    if (currentCount < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "darkslategrey";
    }
    //Update counter in HTML/CSS
    counter.value = currentCount;
  });
});
