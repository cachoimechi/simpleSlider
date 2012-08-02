/**
 * simpleSlider
 * Scales across mobile/desktop sizes, and keeps track of the slide last
 * viewed when switching to a different layout.
 * @type {Object}
 */
var slider = {
    //How many slides are visible at one time
    slidesVisible: 1,
    //CSS selector for the sliding element
    selector: "#simpleSlider",
    //CSS selector for the left control (arrow)
    leftControl: "#sliderLeftArrow",
    //CSS selector for the right control (arrow)
    rightControl: "#sliderRightArrow",
    //Enable auto-rotation
    rotate: true,
    //Speed of auto-rotation
    rotateSpeed: 7000,
    //Interval for rotation
    rotateInterval: null,
    //Tracks the currently viewed slide
    currentSlide: 1,
    //Enable circle selectors
    circleSelectors: true,
    //CSS selector for circle elements
    circleSelector: ".circle",
    //Point of insertion for circle selectors
    insertedCircles: "",
    //Enable hiding of controls when necessary
    hideControls: true,
    //Initilizes defaults and binds the slider controls
    start: function () {
        "use strict";
        //Keep object scope in nested functions
        var self = this,
            //Site relative link
            url = window.location.pathname,
            //Counter
            i;
        //Total number of li slide elements
        this.totalSlides = $(this.selector + " li").length;
        //How many slides aren't visible
        this.extraSlides = this.totalSlides - (this.slidesVisible - 1);
        //True width (width, padding, border, and margin) of slider li elements
        this.trueWidth = $(this.selector + " li:eq(0)").outerWidth(true);
        //Dynamically created circle selectors
        this.circleHTML = "";
        //Populate circleHTML if enabled
        if (this.circleSelectors === true) {
            for (i = 0; i < this.totalSlides; i++) {
                this.circleHTML += "<li class=\"circle\"></li>";
            }
            this.insertedCircles = $(this.selector).parent().append("<ul class=\"sliderCircles\">" + this.circleHTML + "</ul>");
            $(".sliderCircles li:eq(0)", this.insertedCircles).addClass("activeCircle");
        }
        //Move to relevent slide if it links to the current page (must be a site
        //relative link)
        $(this.selector + " li").each(function () {
            if ($("a", this).attr("href") === url) {
                self.currentSlide = $(this).index() + 1;
                self.updateLayout();
            }
        });
        //Show/hide controls
        this.viewControls();
        //Start rotation if enabled
        if (this.rotate === true) {
            this.startRotation();
        }
        //Bind left control to sliding events
        $(this.leftControl).click(function (event) {
            event.preventDefault();
            //If the slider has reached the beginning
            if (self.currentSlide === 1 || parseInt($(self.selector).css("left"), 10) === 0) {
                //Set currentSlide to the last slide
                self.currentSlide = self.extraSlides;
                //Animate the slide to the end
                $(self.selector).animate({
                    "left": "-" + (self.trueWidth * (self.extraSlides - 1)) + "px"
                }, "slow");
                //Change .activeCircle to last circle
                $(".sliderCircles li", this.insertedCircles).removeClass("activeCircle");
                $(".sliderCircles li:last-child", this.insertedCircles).addClass("activeCircle");
            //Otherwise
            } else {
                //Update currentSlide
                self.currentSlide--;
                //Animate one element width to the left
                $(self.selector).animate({
                    "left": "+=" + self.trueWidth + "px"
                }, "slow");
                //Change .activeCircle to previous circle
                $(".sliderCircles li", this.insertedCircles).removeClass("activeCircle");
                $(".sliderCircles li:nth-child(" + self.currentSlide + ")", this.insertedCircles).addClass("activeCircle");
            }
            if (self.rotate === true) {
                self.resetRotation();
            }
        });
        //Bind rightControl to sliding events
        $(this.rightControl).click(function (event) {
            event.preventDefault();
            //Update currentSlide
            self.currentSlide++;
            //If the slider has reached the end
            if (self.currentSlide > self.extraSlides) {
                //Set currentSlide to beginning
                self.currentSlide = 1;
                //Animate the slide to the beginning
                $(self.selector).animate({
                    "left": "0px"
                }, "slow");
                //Change .activeCircle to first circle
                $(".sliderCircles li", this.insertedCircles).removeClass("activeCircle");
                $(".sliderCircles li:eq(0)", this.insertedCircles).addClass("activeCircle");
            //Otherwise
            } else {
                //Animate one element width to the right
                $(self.selector).animate({
                    "left": "-=" + self.trueWidth + "px"
                }, "slow");
                //Change .activeCircle to next circle
                $(".sliderCircles li", this.insertedCircles).removeClass("activeCircle");
                $(".sliderCircles li:nth-child(" + self.currentSlide + ")", this.insertedCircles).addClass("activeCircle");
            }
            if (self.rotate === true) {
                self.resetRotation();
            }
        });
        //Bind circle selectors
        $(this.circleSelector).click(function () {
            var clickedCircle = $(this).index(),
                movePx = "-" + clickedCircle * self.trueWidth + "px";
            self.currentSlide = clickedCircle + 1;
            $(self.selector).animate({
                left: movePx
            }, "slow");
            //change.activeCircle to circle clicked
            $(".sliderCircles li", this.insertedCircles).removeClass("activeCircle");
            $(this).addClass("activeCircle");
            self.resetRotation();
        });
        //Sliding Span Hover
        $(".slideSpan + .imageCaption").slideToggle();
        $(".slideSpan").hover(function () {
            $(".slideSpan + .imageCaption").slideToggle("fast");
        }, function () {
            $(".slideSpan +.imageCaption").slideToggle("fast");
        });
    },
    rotateSlider: function () {
        "use strict";
        $(this.rightControl).click();
    },
    startRotation: function () {
        "use strict";
        this.rotateInterval = setInterval(this.rotateSlider, this.rotateSpeed);
    },
    resetRotation: function () {
        "use strict";
        clearInterval(this.rotateInterval);
        this.rotateInterval = setInterval(this.rotateSlider, this.rotateSpeed);
    },
    //Updates properties and updates the left position for the currentSlide
    updateLayout: function () {
        "use strict";
        //Reset properties
        this.totalSlides = $(this.selector + " li").length;
        this.extraSlides = this.totalSlides - (this.slidesVisible - 1);
        this.trueWidth = $(this.selector + " ul li:eq(0)").outerWidth(true);
        //Animate to same position as previous width
        if ((this.totalSlides - this.currentSlide) < this.slidesVisible) {
            $(this.selector).animate({
                "left": "-" + (this.trueWidth * (this.extraSlides - 1))
            }, "slow");
        } else {
            $(this.selector).animate({
                "left": "-" + (this.trueWidth * (this.currentSlide - 1))
            });
        }
        //Show/hide controls
        this.viewControls();
    },
    //Shows/hides the slider controls
    viewControls: function () {
        "use strict";
        //Hide slider controls if all slides are in view
        if (this.slidesVisible >= $(this.selector + " li").length) {
            $(this.leftControl + ", " + this.rightControl).hide();
        //Otherwise make sure they're showing
        } else {
            $(this.leftControl + ", " + this.rightControl).show();
        }
    }
};