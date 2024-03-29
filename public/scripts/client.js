/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  console.log('jQuery ready');
  const error = document.querySelector('#error');

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  const createTweetElement = function(tweetObject) {
    return $(`
    <article class="tweet">
        <h2>Tweetone</h2>
        <header>
            <span>
              <img src="${escape(tweetObject.user.avatars)}">
              <p class="name">${escape(tweetObject.user.name)}</p>
            </span> 
            <p class="tweeter-id">${escape(tweetObject.user.handle)}</p>
          </header>
        <section>
          <p>${escape(tweetObject.content.text)}</p>
        </section>
        <footer>
          <span class="date">${timeago.format(tweetObject["created_at"])}</span>
          <span class="icons-box"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span>
        </footer>
      </article>
    `);
  };

  const loadTweets = function() {
    $('.tweet-box').empty();
    $.ajax('/tweets', { method: 'GET', success: function(data) { renderTweets(data); }, });
  };

  const renderTweets = function(tweetArray) {
    let $tweet;
    for (const tweetObject of tweetArray) {
      $tweet = createTweetElement(tweetObject);
      $('.tweet-box').prepend($tweet);
    }
  };

  loadTweets();

  $('#submit-form').on('submit', function(event) {
    error.style.display = 'none';

    const textSubmission = document.querySelector('#new-tweet-text').value.trim();
    if (textSubmission === "" || textSubmission === null) {
      $('#error').slideDown('slow');
      error.innerHTML = 'Your tweet is blank.';
      return;
    }

    if (textSubmission.length > 140) {
      $('#error').slideDown('slow');
      error.innerHTML = 'Your tweet exceeds 140 characters.';
      return;
    }

    let $data = $(this).serialize();
    $.post('/tweets', $data, loadTweets);

    $('#new-tweet-text').val("");
    $('.counter').val(140);
  });
});
