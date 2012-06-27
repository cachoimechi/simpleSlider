# Simple Slider
## A robust, simple to use jQuery slider

### Overview

This project is designed to provide a simple, yet robust slider that is easy to setup and use. To include Simple Slider into your project, you have three options:

1. use the included template to start your project from scratch

2. paste the relevant sections from either the template index.html or this README

3. or use the custom builder to generate a specific configuration as either a zipped template, or snippets of code you can paste into your page.

### Coming Soon: Custom Builder
This section will contain the documentation for the web app designed for those who don't like getting their hands messy with code (or are too lazy to do it themselves). In the meantime you can use the following usage notes to get up and running the old fashioned way.

_**Note:** knowledge of working with html, css, and javascript required_

### Usage

If you'd rather set the slider up yourself (aren't you fancy), here is all you need to know to get started.

By default, we have included a separate simpleSlider.css file to contain all styles associated with the slider. Add the following link to the head of all pages displaying the slider.

_**Note:** All associated files are organized into separate folders by default, i.e. scripts, styles, img_

```html
<link rel="stylesheet" href="styles/simpleSlider.css">
```

As this is a jQuery slider, you will first need to include the jQuery library. You can access to latest version [here](http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js). The simpleSlider.js file contains all of the slider's functionality, and should be followed by another script tag calling the function.

Here is an example of what you might include at the bottom of your body tag.

```html
<script type="text/javascript">
    slider(1,"#simpleSlider");
</script>
```

All together there are five parameters that can be passed (in order):

* **slidesVisible** - number of slides visible at one time (default: 1)

* **sliderSelector** - css selector of the slider element (default: #simpleSlider)

* **rotateSpeed** - controls the speed (in milliseconds) of the slider's rotation (default: 7000)

* **arrowLeft** - css selector of the left arrow element (default: #sliderArrowLeft)

* **arrowRight** - css selector of the right arrow element (default: sliderArrowRight)

All of these parameters are optional, so if you don't need to change any defaults, you only need to include the following:
```html
<script type="text/javascript">
	slider();
</script>
```

If you need to change any defaults, however, you must pass all parameters up to that point, in the correct order. See the following examples.
```html
<!-- Only the first default changed -->
<script type="text/javascript">
	slider(2);
</script>

<!-- First three changed -->
<script type="text/javascript">
	slider(3, "#mySlider", 5000);
</script>

<!-- All changed -->
<script type="text/javascript">
	slider(2, "#mainSlider", 6000, "#mainLeftArrow", "#mainRightArrow");
</script>
```

This should get you up and running with simpleSlider. If you encounter any issues, or would care to offer suggestions, feel free to file bugs/comment on this repo.