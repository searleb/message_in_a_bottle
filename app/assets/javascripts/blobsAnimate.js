$('#messages-container').on('click', '.blob', function() {
	var $this = $(this);
	var growHeight = '70';
	var growWidth = '70';
	var shrinkHeight = '0';
	var shrinkWidth = '0';

	

	$this.velocity({ 
			hight: growHeight+"px",
	    width: growWidth+"px",
	}, {
	    duration: 400,
	    easing: "swing",
	});
	
	// $this.remove();
}); //end fucntion