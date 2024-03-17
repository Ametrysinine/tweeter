$(document).ready(function() {
  console.log($("#tweet-text:focus"));
  $("#tweet-text").on("input", function() {
    const counter = $(this).siblings(".footer").children()[0];

    const maxChars = 140;
    let charCount = this.value.length;
    let currentCount = maxChars - charCount;
    
    if (currentCount < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "maroon";
    }
    //Update counter in HTML/CSS
    counter.value = currentCount;
  });
});
