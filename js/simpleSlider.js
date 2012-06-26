function slider(slidesVisible, sliderSelector, rotateSpeed, arrowLeft, arrowRight) {
	"use strict";
	//default values
	slidesVisible = slidesVisible || 1;
	sliderSelector = sliderSelector || "#simpleSlider";
	rotateSpeed = rotateSpeed || 7000;
	arrowLeft = arrowLeft || "#sliderArrowLeft";
	arrowRight = arrowRight || "#sliderArrowRight";
	//initialize number to first slide
	var	currentSlide = 1,
		//number of slides,
		numSlides = $(sliderSelector + " li").length,
		//calculate total number of slides not visible
		extraSlides = numSlides - (slidesVisible - 1),
		//calculate true width of li item (margin, padding, borders)
		outerWidth = $(sliderSelector + " li:eq(0)").outerWidth(true),
		//Dynamically created circle list items
		circleHTML = "";
	//Insert circle indicators
	for (var x = 0; x < numSlides; x++) {
		circleHTML += "<li class=\"circle\"></li>";
	}
	var insertedCircles = $(sliderSelector).parent().append("<ul class=\"sliderCircles\">" + circleHTML + "</ul>");
	$(".sliderCircles li:eq(0)", insertedCircles).addClass("activeCircle");
	//Auto Rotation
	function rotateSlider() {
		$(arrowRight).click();
	}
	var rotate = setInterval(rotateSlider, rotateSpeed);
	//Left Arrow Click
	$(arrowLeft).click(function (event) {
		event.preventDefault();
		//if slider has reached the end
		if (currentSlide === 1) {
			//advance currentSlide
			currentSlide = extraSlides;
			//animate to last slide
			$(sliderSelector).animate({
				left: "-" + (outerWidth * (extraSlides - 1))
			}, "slow");
			//change .activeCircle to last circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:last-child", insertedCircles).addClass("activeCircle");
		} else {
			currentSlide--;
			//animate normally
			$(sliderSelector).animate({
				left: "+=" + outerWidth
			}, "slow");
			//change .activeCircle to previous circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:nth-child(" + currentSlide + ")", insertedCircles).addClass("activeCircle");
		}
		clearInterval(rotate);
		rotate = setInterval(rotateSlider, rotateSpeed);
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
			$(sliderSelector).animate({
				left: "0px"
			}, "slow");
			//change .activeCircle to first circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:eq(0)", insertedCircles).addClass("activeCircle");
		} else {
			//animate normally
			$(sliderSelector).animate({
				left: "-=" + outerWidth
			}, "slow");
			//change .activeCircle to next circle
			$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
			$(".sliderCircles li:nth-child(" + currentSlide + ")", insertedCircles).addClass("activeCircle");
		}
		clearInterval(rotate);
		rotate = setInterval(rotateSlider, rotateSpeed);
	});
	//Circle Click
	$(".circle").click(function () {
		var clickedCircle = $(this).index(),
			movePx = "-" + clickedCircle * outerWidth + "px";
		currentSlide = clickedCircle + 1;
		$(sliderSelector).animate({
			left: movePx
		}, "slow");
		//change.activeCircle to circle clicked
		$(".sliderCircles li", insertedCircles).removeClass("activeCircle");
		$(this).addClass("activeCircle");
		clearInterval(rotate);
		rotate = setInterval(rotateSlider, rotateSpeed);
	});
	//Sliding Span Hover
	$(".slideSpan + .imageCaption").slideToggle();
	$(".slideSpan").hover(function () {
		$(".slideSpan + .imageCaption").slideToggle("fast");
	}, function () {
		$(".slideSpan +.imageCaption").slideToggle("fast");
	});
}