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

			for (var i = response.length - 1; i >= 0; i--) {
				
				var messageId = response[i].id;
				var messageUrl = '/messages/' + messageId 
				var createdAt = response[i].created_at;
				var userId = response[i].user_id;
				var userMessage = response[i].message;
				var userNickName = response[i].user.nickname;
				idCounter ++;
				// console.log( messageId +" "+ createdAt +" "+ userMessage +" "+ userId);
			
					var divsize = 50
	    		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	    		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
	    		// var posy = (Math.random() * (25 - 0) + 0).toFixed();
	    		var sceneId = (Math.random() * (4 - 1) + 1).toFixed();
	    		var dataDepth = (Math.random() * (1 - 0.20) + 0).toFixed(2);
	    		var documentHeight = $(window).height().toFixed();
	    		console.log(documentHeight);

					var blobDiv = $("<li />", {
					    class : 'layer blob',
					    id : 'blob'+idCounter,
					    'data-depth' : dataDepth,
					    'data-id' : messageId,
					    'data-messageurl' : messageUrl,
					    'data-nickname' : userNickName,
					    'data-message' : userMessage,
					    'data-date' : createdAt 
	        }).appendTo( '#scene' );

	        var blobText = $("<p />", {
	        	text : userNickName,
	        }).appendTo( '#blob'+idCounter );

				  	$('#blob'+idCounter).velocity({
				  		'left' : posx+'px',
				  		'top' : posy+'px',
							},
							'1000'
							);
			}; // end for loop

				
				// start parallax 
				var $scene = $('#scene').parallax();
				$scene.parallax('scalar', 28, 280);
				$scene.parallax('friction', 0.2, 0.2);
				$scene.parallax('origin', 0.0, 0.0);
				$scene.parallax('enable');
				// $scene.parallax('updateLayers');
				// $scene.parallax('calibrate', false, true);
				// $scene.parallax('invert', false, true);
				// $scene.parallax('limit', false, 10);
		});
	}			
	blobs.makeBlobs();

}); // end document ready


