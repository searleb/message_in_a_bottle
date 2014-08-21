var blobs = blobs || {};
var idCounter = 1

blobs.animate = function(counterID){
	var divsize = 50
	var posx = (Math.random() * ($(window).width() - divsize)).toFixed();
	var posy = (Math.random() * ($(window).height() - divsize)).toFixed();
	
	$('#blob'+counterID).velocity({
		'left' : posx+'px',
		'top' : posy+'px',
	},
	'1000'
	);
};

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
				var userImage = response[i].user.image;
				idCounter ++;
				console.log(messageId);

				var dataDepth = (Math.random() * (1 - 0.20) + 0).toFixed(2);

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

				var blobText = $("<p />", {
					text : userNickName,
				}).appendTo( '#blob'+idCounter );

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
				// $scene.parallax('invert', false, true);
				// $scene.parallax('limit', false, 10);
			});
}			
blobs.makeBlobs();

}); // end document ready


