/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

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


$(document).ready(function () {

  // takes tweet object and places values data into appropriate html structure.
  const createTweetElement = function(tweetObject) {
    const $articleTweet = $("<section></section>").addClass("oldPostsContainer")
    const tweet = (
                `<div class="singlePostContainer">` +
                  `<article class="tweet">` +
                    `<header>` +
                      `<img src="${tweetData.user.avatars}">` +
                      `<h4 class="name">${tweetData.user.name}</h4><h4 class="username">${tweetData.user.handle}</h4>` +
                    `</header>` +
                    `<p class="tweet">${tweetData.content.text}</p>` +
                    `<footer>` +
                      `<h6 class="date">${tweetData.created_at}</h6><h6 class="smButtons">☟ ♺ ♥</h6>` +
                    `</footer>` +
                  `</article>` +
                `</div>`
              );
              const resultingTweet = $articleTweet.append(tweet);
    return resultingTweet;
  }

  


  const renderTweets = function(tweets) {

    // Loops through tweets data and calls createTweetElement function for each tweet
    const newContainer = $(".tweet").html("");
    for (let twit in tweets) {
      tweet = createTweetElement(tweets[twit]);
      $(newContainer).append(tweet);
    }
  }
  
  
  // const tweetElement = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  // console.log($tweetElement); // to see what it looks like
  // newContainer.append(tweetElement); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  


  // renderTweets(data);
  renderTweets(data);
  
  
});

