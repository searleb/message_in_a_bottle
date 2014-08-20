$('#messages-container').on('click', '.blob', function() {
	var documentHeight = $(window).height().toFixed();
	var $this = $(this);
	var $top = $(this).position();
 	$top = ($top.top - 20);
	
	$this.velocity({ 
			top: $top+'px'
	}, {
	    duration: 200,
	    easing: "ease-out",
	    complete: function() {
				$this.velocity({ 
						top: documentHeight+'px',
				}, {
				    duration: 100,
				    easing: "linear",
				    complete: function() {
							$this.remove();
						}
					});
	    }
		});

	
}); //end fucntion
