/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  console.log('jQuery ready');
  const createTweetElement = function(tweetObject) {
    return $(`
    <article class="tweet">
        <h2>Tweetone</h2>
        <header>
            <span>
              <img src="${tweetObject.user.avatars}">
              <p class="name">${tweetObject.user.name}</p>
            </span> 
            <p class="tweeter-id">${tweetObject.user.handle}</p>
          </header>
        <section>
          <p>${tweetObject.content.text}</p>
        </section>
        <footer>
          <span class="date">${timeago.format(tweetObject["created_at"])}</span>
          <span class="icons-box"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span>
        </footer>
      </article>
    `);
  };



  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]
  let tweetData;

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
    .then(function(data) {
      console.log(`success: received tweetData ${data}`);
      renderTweets(data);
    });
  };

  const renderTweets = function(tweetArray) {
    let $tweet;
    for (const tweetObject of tweetArray) {
      $tweet = createTweetElement(tweetObject);
      $('.tweet-box').prepend($tweet);
    }
  };

  loadTweets();
  // renderTweets(data);

  $('#submit-form').on('submit', function(event) {
    $.ajax('/tweets', { method: 'POST' });
    event.preventDefault();
    console.log('preventing default');
    const $data = $(this).serialize();

    $.post('/tweets', $data, console.log('Post to /tweets success'));
    loadTweets();
    $('#new-tweet-text').val("");
  });
  // $('#submit-tweet').on('click', function(event) {
  //   $.ajax('/tweets.html', { method: 'POST' });
  //   event.preventDefault();
  // });


});
