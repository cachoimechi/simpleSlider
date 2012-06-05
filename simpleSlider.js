function slider(slidesVisible, selector) {
	"use strict";
		//initialize position to first slide
	var current = 0,
		//initialize number to first slide
		currentSlide = 1,
		//calculate total number of slides not visible
		extraSlides = $(selector + " li").length - (slidesVisible - 1),
		//calculate true width of li item (margin, padding, borders)
		outerWidth = $(selector + " li:eq(0)").outerWidth(true);
	//Left Arrow Click
	$("#sliderArrowLeft").click(function (event) {
		event.preventDefault();
		//if slider has reached the end
		if (currentSlide === 1) {
			//advance currentSlide
			currentSlide = extraSlides;
			//animate to last slide
			$(selector).animate({
				left: "-" + (outerWidth * (extraSlides - 1))
			}, "slow");
		} else {
			currentSlide--;
			//animate normally
			$(selector).animate({
				left: "+=" + outerWidth
			}, "slow");
		}
	});
	//Right Arrow Click
	$("#sliderArrowRight").click(function (event) {
		event.preventDefault();
		//advance currentSlide
		currentSlide++;
		//if slider has reached the end
		if (currentSlide > extraSlides) {
			//set to first slide
			currentSlide = 1;
			//animate to first slide
			$(selector).animate({
				left: "0px"
			}, "slow");
		} else {
			//animate normally
			$(selector).animate({
				left: "-=" + outerWidth
			}, "slow");
		}
	});
}