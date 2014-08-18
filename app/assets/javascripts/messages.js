$(document).ready(function() {

	var displayBlob = function () {
		$.ajax({
			url: '/ajax/lookup',
			type: 'get',
			dataType: 'json',
		}).done(function(response){
			for (var i = response.message.length - 1; i >= 0; i--) {
				var messageId = response.message[i].id
				var messageUrl = '#modal' + messageId 
				
				var newBlobModal = $("<div />", {
					class : 'remodal',
					'data-remodal-id' : "#modal"+messageId,
					text : messageId
				}).css({
					'display' : 'hidden'
				}).appendTo('html');

					var newBlobLink = $("<a />", {
					    href : messageUrl,
					    text : messageId,
					    class : ('layer', 'remodal-bg'),
					    'data-depth' : '0.40'
					  });

					var divsize = 50
	    		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
	    		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

	    		newBlobLink.css({
	        	'position':'absolute',
	        	'left':posx+'px',
	        	'top':posy+'px',
	        	// 'display':'none'
	    		}).appendTo( '#container' ).fadeIn(100);
			};
		});
	}
displayBlob();
});


// $(document).ready(function(){
// 	$('#scene').parallax();
// })