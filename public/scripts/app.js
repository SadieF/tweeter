/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

const data = [{
        "user": {
            "name": "Newton",
            "avatars": {
                "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
                "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
                "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
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
            "avatars": {
                "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    },
    {
        "user": {
            "name": "Johann von Goethe",
            "avatars": {
                "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
        },
        "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
        },
        "created_at": 1461113796368
    }
];



$(document).ready(function() {


    function createTweetElement(tweet) {
        let username = tweet['user'].name;
        let handle = tweet['user'].handle;
        let avatar = tweet['user'].avatars['small'];
        let text = tweet['content'].text;
        let days = moment(tweet.created_at).fromNow();


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

        let $icons = $("<p>");
        $footer.append($icons);

        let $flag = $("<img>").addClass("icon");
        $flag.attr('src', "../images/flag.png");
        $icons.append($flag);

        let $retweet = $("<img>").addClass("icon");
        $retweet.attr('src', "../images/retweet.png");
        $icons.append($retweet);

        let $heart = $("<img>").addClass("icon");
        $heart.attr('src', "../images/heart.png");
        $icons.append($heart);

        return $tweet
    }



    function renderTweets(tweetArray) {
        tweetArray.forEach(function(tweet) {
            let $tweet = createTweetElement(tweet);
            $('#tweets-container').append($tweet);
        });

    }



    $('.new-tweet form').on('submit', function(event) {
        event.preventDefault();
        var data = $('.new-tweet form').serialize();
        $.post('/tweets/', data).done(function() {

        })
    })

    renderTweets(data);
});

// $('#new-product form').on('submit', function(e) {
//     // 1. prevent the default behaviour
//     e.preventDefault()

//     // 2. get the data of the form
//     var data = $('#new-product form').serialize()

//     // 3. submit using ajax
//     $.post('/products', data).done(function() {
//         // 4. rerender the product list
//         loadAndRenderProducts()
//     })
// })

// loadAndRenderProducts()