/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  console.log('ready');
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
          <span class="date">${tweetObject["created_at"]}</span>
          <span class="icons-box"><i class="fa-solid fa-flag"></i><i class="fa-solid fa-retweet"></i><i class="fa-solid fa-heart"></i></span>
        </footer>
      </article>
    `);
  };



  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]



  const renderTweets = function(tweetArray) {
    let $tweet;
    for (const tweetObject of tweetArray) {
      $tweet = createTweetElement(tweetObject);
      $('.tweet-box').append($tweet);
    }
  };


  renderTweets(data);
});
