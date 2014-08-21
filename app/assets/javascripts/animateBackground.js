$( document ).on( "mousemove", function( event ) {
	var $body = $('body');
	// var x = event.pageX;
	var y = event.pageY;
	// var xy = (x+y);
	// console.log(y);
	$body.css({
		'background': '-webkit-radial-gradient(circle, #1C1C1C, #1C1C1C, #1C1C1C, #1C1C1C, #125'+y+')'
	});
});

	
	
