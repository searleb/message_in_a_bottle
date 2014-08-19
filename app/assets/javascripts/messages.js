var blobs = blobs || {};
var idCounter = 1
$(document).ready(function() {

	blobs.makeBlobs = function () {
		$.ajax({
			url: '/messages/sample',
			type: 'get',
			dataType: 'json',
		}).done(function(response){
			blobs.response = response
			console.log(response);
			for (var i = response.length - 1; i >= 0; i--) {
				
				var messageId = response[i].id;
				var messageUrl = '/messages/' + messageId 
				var createdAt = response[i].created_at;
				var userId = response[i].user_id;
				var userMessage = response[i].message;
				var userNickName = response[i].user.nickname;

				console.log( messageId +" "+ createdAt +" "+ userMessage +" "+ userId);
			
					var divsize = 50
	    		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	    		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

					var blobDiv = $("<div />", {
					    class : 'blob',
					    id : 'blob'+idCounter,
					    'data-id' : messageId,
					    'data-messageurl' : messageUrl,
					    'data-nickname' : userNickName,
					    'data-message' : userMessage,
					    'data-date' : createdAt 
					  }).css({
	        	'position':'absolute',
	        	'left':posx+'px',
	        	'top':posy+'px',
	        }).appendTo( '#messages-container' );
			}; // end for loop
		});
	}
			
	blobs.makeBlobs();

}); // end document ready

