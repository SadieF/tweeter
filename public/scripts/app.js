$(document).ready(function() {

    //Builds the DOM tree using JQuery
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
            $('#tweets-container').prepend($tweet);
        });
    }

    function sendTweet(tweet) {
        $.post('/tweets/', tweet).done(loadTweets)
    }

    //Handles the error messaging for tweets
    $('.new-tweet form').on('submit', function(e) {
        e.preventDefault();
        const text = $(this).find('textarea').val().trim();
        if (text === '') {
            $.flash('Please enter a valid Tweet!');
            $('.counter').html(140);
        } else if (text.length > 140) {
            $.flash('Whoa there tiger, you can only use 140 characters!');
            $('.counter').html(140).removeClass('error');
        } else {
            sendTweet({ text });
            $('.counter').html(140);
            this.reset();
        }
    })

    function loadTweets() {
        $.get('/tweets/').done(renderTweets);
    }

    //Slides the Compose Tweet text box up an down when Compose button is pressed
    $(':button').click(function() {
        $('.new-tweet').slideToggle()
        $('textarea').focus();
    }); //button click function ends

    //calling loadTweets while document gets loaded.
    loadTweets();
}); //document function ends here