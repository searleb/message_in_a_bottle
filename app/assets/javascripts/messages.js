var blobs = blobs || {};
var idCounter = 1
$(document).ready(function() {

	blobs.makeBlobs = function () {
		$.ajax({
			url: '/ajax/lookup',
			type: 'get',
			dataType: 'json',
		}).done(function(response){
			console.log(response);
			for (var i = response.message.length - 1; i >= 0; i--) {
				var messageId = response.message[i].id;
				var messageUrl = '/messages/' + messageId 
				var createdAt = response.message[i].created_at;
				var userId = response.message[i].user_id;
				var userMessage = response.message[i].message;
				
				console.log( messageId +" "+ createdAt +" "+ userMessage +" "+ userId);
			
					var divsize = 50
	    		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	    		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

					var blobDiv = $("<div />", {
					    class : 'blob',
					    id : 'blob'+idCounter,
					    'data-id' : messageId,
					    'data-message' : userMessage,
					    'data-date' : createdAt 
					  }).css({
	        	'position':'absolute',
	        	'left':posx+'px',
	        	'top':posy+'px',
	        }).appendTo( '#messages-container' );

					// var blobAhref = $("<a />", {

					// }).appendTo('#blob'+idCounter);
					// idCounter ++


	    		

			blobs.modal = function(htmlmessage, date){
				vex.dialog.open({
	  		message: "You have found a message from " + userId + "." + '<br>' + "The message reads: " + "'" + htmlmessage + "'" + "<br>" + "Dated: " + date + '<a href="https://twitter.com/intent/tweet?screen_name=Bill_Searle&text=What%3F" class="twitter-mention-button" data-size="large" data-related="Bill_Searle">Tweet to @Bill_Searle</a>',
	  			buttons: [
	    							$.extend({}, vex.dialog.buttons.YES, {
	      						text: 'Tweet @' + userId,
	    							}), $.extend({}, vex.dialog.buttons.NO, {
	      						text: 'Back'
	   							 })
	  			],
	  			callback: function(data) {
	    			if (data === false) {
	      		console.log('no')
	    			} //else
	    			console.log('tweet');
	  			}
					});
				}; // end modal

			}; // end for loop
		});
	}
			

	blobs.makeBlobs();

}); // end document ready

