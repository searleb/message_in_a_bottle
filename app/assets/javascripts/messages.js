$(document).ready(function() {

	var displayBlob = function () {
		$.ajax({
			url: '/ajax/lookup',
			type: 'get',
			dataType: 'json',
		}).done(function(response){
			for (var i = response.message.length - 1; i >= 0; i--) {
				var id = response.message[i].id
				var message_url = /messages/ + id 
				var divsize = 50
				
				var newBlob = $("<a />", {
				    href : message_url,
				    text : id,
				    class : 'layer',
				    'data-depth' : '0.40'
				  });
    
    		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
    		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

    		newBlob.css({
        	'position':'absolute',
        	'left':posx+'px',
        	'top':posy+'px',
        	'display':'none'
    		}).appendTo( '#container' ).fadeIn(100)
			};
		})
	}
displayBlob();
});


$(document).ready(function(){
	$('#scene').parallax();
})