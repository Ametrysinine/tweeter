$(document).ready(function() {
  console.log($("#tweet-text:focus"));
  $("#tweet-text").on("input", function() {
    const maxChars = 140;
    let charCount = this.value.length;
    let counter = maxChars - charCount;
  });
});
