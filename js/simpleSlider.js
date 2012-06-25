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
	$(".sliderCircles li:eq(0)", insertedCircles).addClass("activeCircle");
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
			//change .activeCircle to last circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:last-child", insertedCircles).addClass("activeCircle");
		} else {
			currentSlide--;
			//animate normally
			$(selector).animate({
				left: "+=" + outerWidth
			}, "slow");
			//change .activeCircle to previous circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:nth-child(" + currentSlide + ")", insertedCircles).addClass("activeCircle");
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
			//change .activeCircle to first circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:eq(0)", insertedCircles).addClass("activeCircle");
		} else {
			//animate normally
			$(selector).animate({
				left: "-=" + outerWidth
			}, "slow");
			//change .activeCircle to next circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:nth-child(" + currentSlide + ")", insertedCircles).addClass("activeCircle");
		}
	});
	//Circle Click
	$(".circle").click(function () {
		var clickedCircle = $(this).index(),
			movePx = "-" + clickedCircle * outerWidth + "px";
		currentSlide = clickedCircle + 1;
		$(selector).animate({
			left: movePx
		}, "slow");
		//change.activeCircle to circle clicked
		$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
		$(this).addClass("activeCircle");
	});
}