function slider(slidesVisible, selector, arrowLeft, arrowRight) {
	"use strict";
	//default values for arrows
	arrowLeft = arrowLeft || "#sliderArrowLeft";
	arrowRight = arrowRight || "#sliderArrowRight";
		//initialize position to first slide
	var current = 0,
		//initialize number to first slide
		currentSlide = 1,
		//number of slides,
		numSlides = $(selector + " li").length,
		//calculate total number of slides not visible
		extraSlides = numSlides - (slidesVisible - 1),
		//calculate true width of li item (margin, padding, borders)
		outerWidth = $(selector + " li:eq(0)").outerWidth(true),
		//Dynamically created circle list items
		circleHTML = "";
	//Insert circle indicators
	for (var x = 0; x < numSlides; x++) {
		circleHTML += "<li class=\"circle\"></li>";
	}
	var insertedCircles = $(selector).parent().append("<ul class=\"sliderCircles\">" + circleHTML + "</ul>");
	$("li:eq(0)", insertedCircles).addClass("activeCircle");
	//Left Arrow Click
	$(arrowLeft).click(function (event) {
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
	$(arrowRight).click(function (event) {
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