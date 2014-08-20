$('#messages-container').on('click', '.blob', function() {
	var $this = $(this);
	var $top = $(this).position();

	console.log($top);
	var padding = '20';
	var growWidth = '70';
	var shrinkHeight = '0';
	var shrinkWidth = '0';

	
	$this.velocity({ 
			top: '-100px',
			left: '-100px'
	}, {
	    duration: 1000,
	    easing: "ease-in-out",
	    complete: function() {
				$this.remove();
			}
		});
	
}); //end fucntion