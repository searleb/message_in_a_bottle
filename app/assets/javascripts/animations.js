// on blob click, jump and drop blob animation
$('#messages-container').on('click', '.blob', function() {
	var documentHeight = $(window).height().toFixed();
	var $this = $(this);
	var $top = $(this).position();
 	$top = ($top.top - 20);
	
	$this.velocity({ 
			top: $top+'px'
	}, {
	    duration: 300,
	    easing: "ease-out",
	    complete: function() {
				$this.velocity({ 
						top: documentHeight+'px',
				}, {
				    duration: 200,
				    easing: "linear",
				    complete: function() {
							$this.remove();
						}
					});
	    }
		});
}); //end function

// sign in logo animations
$(document).ready(function(){
	$("#sign-in").velocity("transition.slideDownBigIn", { delay: 2000 });
	$(".sign-in-link").velocity("transition.slideRightBigIn", { delay: 3000 });
	$(".twitter-ico").velocity("transition.slideLeftBigIn", { delay: 3000 });
});

// Color changing background using mouse y position, just for fun.
$(document).on( "mousemove", function(event) {
	var $body = $('body');
	var y = event.pageY;

	$body.css({
		'background': '-webkit-radial-gradient(circle, #1C1C1C, #1C1C1C, #1C1C1C, #1C1C1C, #125'+y+')'
	});
});
