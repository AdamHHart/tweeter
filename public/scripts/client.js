/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



// const data = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//     "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

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
                
                  `<article class="tweet">` +
                    `<header>` +
                      `<img src="${tweetObject.user.avatars}">` +
                      `<h4 class="name">${tweetObject.user.name}</h4><h4 class="username">${tweetObject.user.handle}</h4>` +
                    `</header>` +
                    `<p class="tweet">${tweetObject.content.text}</p>` +
                    `<footer>` +
                      `<h6 class="date">${tweetObject.created_at}</h6><h6 class="smButtons">☟ ♺ ♥</h6>` +
                    `</footer>` +
                  `</article>` 
                
              );
              const resultingTweet = $articleTweet.append(tweet);
    return resultingTweet;
  }

  

  const renderTweets = function(tweets) {

    // Loops through tweets data and calls createTweetElement function for each tweet
    const newContainer = $(".tweet").html("");
    for (const twit of tweets) {
      tweet = createTweetElement(twit);
      $(newContainer).append(tweet);
    }
  }
  
  $(".postNewTweet").on("submit", function(event) {
    event.preventDefault();

    let url = "/tweets/"
    const data = $(this).serialize();
    console.log("data = ", data);

    $.ajax({
      url: url,
      method: "POST",
      data: data,
    }).then((result) => {
      console.log("ajax callback called");
      renderTweets(result);
    }).catch(err => {
      console.log("ajax error");
      console.log(err);
    });
  });



  renderTweets(data);
  // const tweetElement = createTweetElement(data);
  
  // Test / driver code (temporary)
  // console.log($tweetElement); // to see what it looks like
  // newContainer.append(tweetElement); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  


  // renderTweets(data);
  
  
  
});

