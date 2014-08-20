	vex.defaultOptions.className = 'vex-theme-flat-attack';

	$('#messages-container').on('click', '.blob', function(){
		var $this = $(this);
		var message = $this.data('message');
		var date = $this.data('date');
		var nickname = $this.data('nickname');
		var messageUrl = $this.data('messageurl');
		var fullLink = "http://tweet-in-a-bottle.herokuapp.com" + messageUrl;
		var greeting = "I found your message! " + fullLink; 
		
		vex.dialog.open({
			message: date + '<br>' + "'" + message + "'" +'<br> Signed, ' + nickname + ".",
			buttons: [
    				$.extend({}, vex.dialog.buttons.YES, { text: 'Tweet @'+nickname }),
    				$.extend({}, vex.dialog.buttons.NO, { text: 'Back'})
  				],
			callback: function(data) {
    	if (data === true) {

    		var leftPosition = (screen.width/2)-(400/2);
    		var topPosition = (screen.height/2)-(400/2); 

      window.open("https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&screen_name=" + nickname + "&text=" + greeting + "&hashtags=MessageInABottle&share_with_retweet=never&tw_p=tweetbutton", 'title', 'height=400,width=400,left=' + leftPosition + ',' + 'top=' + topPosition)
    	};
    },
	});
});


	// toggling animationg from different places