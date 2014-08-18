var blobs = blobs || {};

$(document).ready(function() {

	blobs.makeBlobs = function () {
		$.ajax({
			url: '/ajax/lookup',
			type: 'get',
			dataType: 'json',
		}).done(function(response){
			console.log(response);
			for (var i = response.message.length - 1; i >= 0; i--) {
				blobs.messageId = response.message[i].id;
				blobs.messageUrl = '/messages/' + blobs.messageId 
				blobs.createdAt = response.message[i].created_at;
				blobs.userId = response.message[i].user_id;
				blobs.userMessage = response.message[i].message;
				
				console.log( blobs.messageId +" "+ blobs.createdAt +" "+ blobs.userMessage +" "+ blobs.userId);
				
				
				// var newBlobModal = $("<div />", {
				// 	class : 'remodal',
				// 	'data-remodal-id' : "#modal"+messageId,
				// 	text : messageId
				// }).css({
				// 	'display' : 'hidden'
				// }).appendTo('html');

					var blobDiv = $("<div />", {
					    class : ('blob')
					  });
					var blobAhref = $("<a />", {
							href : blobs.messageUrl,
							text : blobs.messageId
					}).appendTo(blobDiv);

					var divsize = 50
	    		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	    		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

	    		blobDiv.css({
	        	'position':'absolute',
	        	'left':posx+'px',
	        	'top':posy+'px',
	        	// 'display':'none'
	    		}).appendTo( '#messages-container' ).fadeIn(100);
			};
		});
	}
			
		blobs.modal = function(){
			vex.dialog.open({
  		message: "You have found a message from " + blobs.userId + "." + '<br>' + "The message reads: " + "'" + blobs.userMessage + "'" + "<br>" + "Dated: " + blobs.createdAt + '<a href="https://twitter.com/intent/tweet?screen_name=Bill_Searle&text=What%3F" class="twitter-mention-button" data-size="large" data-related="Bill_Searle">Tweet to @Bill_Searle</a>',
  			buttons: [
    							$.extend({}, vex.dialog.buttons.YES, {
      						text: 'Tweet @' + blobs.userId,
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

	blobs.makeBlobs();

}); // end document ready

