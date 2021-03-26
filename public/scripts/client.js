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
  // {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png"
  //     ,
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // },
  // {
  //   "user": {
  //     "name": "Descartes",
  //     "avatars": "https://i.imgur.com/nlhLi3I.png",
  //     "handle": "@rd" },
  //   "content": {
  //     "text": "Je pense , donc je suis"
  //   },
  //   "created_at": 1461113959088
  // }
]


$(document).ready(function () {

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
  function myFunction() {
    let d = new Date();
    let n = d.toLocaleString();
    return (n);
  }

  const newDate = myFunction();
  // takes tweet object and places values data into appropriate html structure.
  const createTweetElement = function(tweetObject) {
    const $articleTweet = $("<section></section>").addClass("oldPostsContainer")
    const tweet = (
                
                  `<article class="tweet">` +
                    `<header>` +
                      `<img src="${tweetObject.user.avatars}">` +
                      `<h4 class="name">${tweetObject.user.name}</h4><h4 class="username">${tweetObject.user.handle}</h4>` +
                    `</header>` +
                    `<p class="tweet">${escape(tweetObject.content.text)}</p>` +
                    `<footer>` +
                      `<h6 class="date">${newDate}</h6><h6 class="smButtons">☟ ♺ ♥</h6>` +
                    `</footer>` +
                  `</article>` 
                
              );
              const resultingTweet = $articleTweet.prepend(tweet);
    return resultingTweet;
  }

  

  const renderTweets = function(tweets) {

    // Loops through tweets data and calls createTweetElement function for each tweet
    const newContainer = $(".tweet").html("");
    // const newTime = $(this).find(".date").html("");  
          // An attempt at adding live dates to all posted tweets.
    for (const twit of tweets) {
      tweet = createTweetElement(twit);
      $(newContainer).prepend(tweet);
    }
  }
  
  $(".postNewTweet").on("submit", function(event) {
    event.preventDefault();

    //defining textarea and error message from tweet form
    $textInput = $(this).closest("form").find("#tweetInput");
    $errorMsg = $(this).closest("form").find(".errorMsg");

    $textData = $textInput.val().trim();
    $textLength = $textData.length;

    if ($textData === null || $textData === "") {
      $errorMsg.text("Error. Your tweet is empty!").toggle(true);
     
    } 
    if ($textLength > 140) {
      $errorMsg.text("Error. Your tweet is too long!").toggle(true);
   
    }
    if (!($textData === null) && !($textLength > 140)) {
      let url = "/tweets/"
      const data = $(this).serialize();
      console.log("data = ", data);
  
      $.ajax({
        url: url,
        method: "POST",
        data: data,
      // }).done(function(response) {
      //   console.log("Loading your tweets.")
      //   loadTweets();
      // })
      }).then((result) => {
        console.log("ajax callback called");
        loadTweets();
        $('#tweetInput').val('');
        // $('#tweetInput').siblings(".button-and-counter").find(".counter").html('0');
        $("#countNumber").text("0");
      }).catch(err => {
        console.log("ajax error");
        console.log(err);
      });

    }
  })

    const loadTweets = function() {
      $.ajax({
        url: "/tweets/",
        type: "GET",
        url: "/tweets/",
        dataType: "JSON"
      }).then((result) => {
        console.log("ajax GET callback called");
        console.log("result = ", result);
        renderTweets(result); 
      })
      // .done(function(tweets) {
      //   console.log("SUCCESS!", data);
      //   renderTweets(data);
      // });
  };
  loadTweets();
  // renderTweets(data);
});
  // const tweetElement = createTweetElement(data);
  
  // Test / driver code (temporary)
  // console.log($tweetElement); // to see what it looks like
  // newContainer.append(tweetElement); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  


  // renderTweets(data);
  
  
  

