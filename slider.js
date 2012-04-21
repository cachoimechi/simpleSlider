(function(){
	//Setup Variables
	var containerWidth = 600,					//width of container element
		slideSpeed = "slow",					//speed of transition between slides
		current = 0,							//initialize position to first slide
		currentSlide = 1,						//initialize number to first slide
		totalSlides = $('#slider li').length;	//calculate total number of slides

	//Right Arrow
	$('#arrowRight').click(function(event) {
		event = event || window.event;
		event.preventDefault();
		currentSlide++;							//advance currentSlide
		current -= containerWidth;				//calculate target position

		//check if slider has reached the end
		if(currentSlide>totalSlides) {
			currentSlide = 1;
			current = 0;
		}

		$('#slider').animate({"left" : current + "px"}, slideSpeed);	//animate slider
	});

	//Left Arrow
	$('#arrowLeft').click(function(event) {
		event = event || window.event;
		event.preventDefault();

		//check if slider has reached the end
		if(currentSlide === 1) {
			currentSlide = totalSlides;						//advance currentSlide
			current -= containerWidth * (totalSlides -1);	//calculate target position
		} else {	
			currentSlide--;
			current += containerWidth;
		}

		$('#slider').animate({"left" : current + "px"}, slideSpeed);	//animate slider
	});
})(jQuery);