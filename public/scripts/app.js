/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.

//take in tweetData
//create new tweet element
//match up user.name to (article.tweet)h2
//match up handle to (article.tweet)h4
//match up content.text to (article.tweet)p
//append these to the element
//return this element to the caller

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


$(document).ready(function() {

    var $tweet = createTweetElement(tweetData);

    function createTweetElement(tweetData) {
      let username = tweetData['user'].name;
      let handle = tweetData['user'].handle;
      let avatar = tweetData['user'].avatars['small'];
      let text = tweetData['content'].text;
      let day = new Date(tweetData.created_at);
      let today = new Date();
      let oneDay = 24*60*60*1000
      let days = Math.round(Math.abs((day-today))/oneDay) + ' days ago.'


      let $tweet = $("<article>").addClass("tweet");

      let $header = $("<header>");
      $tweet.append($header);

      let $img = $("<img>").addClass("avatar");
      $img.attr('src', avatar);
      $header.append($img);

      let $h2 = $("<h2>");
      $h2.text(username);
      $header.append($h2);

      let $h4 = $("<h4>");
      $h4.text(handle);
      $header.append($h4);

      let $p = $("<p>");
      $p.text(text);
      $tweet.append($p);

      let $footer = $("<footer>");
      $tweet.append($footer);

      let $days = $("<p>").addClass("Days");
      $days.text(days);
      $footer.append($days);

      let $pIcon = $("<p>");
      $footer.append($pIcon);

      let $icon = $("<img>").addClass("icon");
      $icon.attr('src', "../images/flag.png");
      $icon.attr('src', "../images/retweet.png");
      $icon.attr('src', "../images/heart.png");
      $pIcon.append($icon);

      $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  });













