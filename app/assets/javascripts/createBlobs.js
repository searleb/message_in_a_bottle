// set up global blobs object
var blobs = blobs || {};

// counter used to loop animation
var idCounter = 1

blobs.animate = function(counterID){
	// define size of blob
	var divsize = 60
	// generate random position within the current window size
	var posx = (Math.random() * ($(window).width() - divsize)).toFixed();
	var posy = (Math.random() * ($(window).height() - divsize)).toFixed();
	// animate each blob to its position over a second time span
	$('#blob'+counterID).velocity({
		'left' : posx+'px',
		'top' : posy+'px',
	},
	'1000'
	);
};

$(document).ready(function() {
	
	blobs.makeBlobs = function () {
		// make a get request for a sample of the database
		$.ajax({
			url: '/messages/sample',
			type: 'get',
			dataType: 'json',
		}).done(function(response){
			blobs.response = response
			// for each response object create a blob
			for (var i = response.length - 1; i >= 0; i--) {
				
				var messageId = response[i].id;
				var messageUrl = '/messages/' + messageId 
				var createdAt = response[i].created_at;
				var userId = response[i].user_id;
				var userMessage = response[i].message;
				var userNickName = response[i].user.nickname;
				var userImage = response[i].user.image;
				idCounter ++;
				// randomly generate a depth value for paralllax.js
				var dataDepth = (Math.random() * (1 - 0.20) + 0).toFixed(2);
				// Create and append all blobs to #scene
				var blobDiv = $("<li />", {
					class : 'layer blob',
					id : 'blob'+idCounter,
					'data-depth' : dataDepth,
					'data-id' : messageId,
					'data-messageurl' : messageUrl,
					'data-nickname' : userNickName,
					'data-message' : userMessage,
					'data-date' : createdAt,
				}).css({
					'background-image': 'url(' + userImage + ')'
				}).appendTo( '#scene' );

				// append username text to the blob per message
				var blobText = $("<p />", {
					text : userNickName,
				}).appendTo( '#blob'+idCounter );
				// call the animate function to animate each blob one by one as they are created	
				(function () {
					var c = idCounter;
					setTimeout(function () {blobs.animate(c) }, Math.random() * 3000);
				})();
			}; // end for loop


				// start parallax 
				var $scene = $('#scene').parallax();
				$scene.parallax('scalar', 28, 280);
				$scene.parallax('friction', 0.2, 0.2);
				$scene.parallax('origin', 0.0, 0.0);
				$scene.parallax('enable');
				$scene.parallax('updateLayers');
				$scene.parallax('calibrate', false, true);
			});
}	
// new search button, clears the page and reruns makeBlobs
$('#reset').on('click', function(){
		$('#scene').empty();	
		blobs.makeBlobs();
}); 
// start on document.ready
blobs.makeBlobs();
}); // end document ready


