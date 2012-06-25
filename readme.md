# Simple Slider #
## A robust, simple to use jQuery slider ##

### Overview

This project is designed to provide a simple, yet robust slider that is easy to setup and use. To include Simple Slider into your project, you can:
*use the included template to start your project from scratch
*paste the relevant sections from either the template index.html or this README
*or use the custom builder to generate a specific configuration as either a zipped template, or snippets of code you can paste into your page.

### Coming Soon: Custom Builder
A web app for those who don't like thinking. In the meantime you can use the following usage notes to get up and running the old fashioned way.

_**Note:** knowledge of working with html, css, and javascript required_

### Usage

By default, we have included a separate simpleSlider.css file to contain all styles associated with the slider. Add the following link to the head of all pages displaying the slider.

_**Note:** All associated files are organized into separate folders by default, i.e. scripts, styles, img_

```html
<link rel="stylesheet" href="styles/simpleSlider.css">
```

As this is a jQuery slider, you will first need to include the jQuery library. You can access to latest version [here](http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js). The simpleSlider.js file contains all of the slider's functionality, and should be followed by another script tag calling the function.

Here is an example of what you should include at the bottom of your body tag.

```html
<script type="text/javascript">
    slider(1,"#simpleSlider");
</script>
```

You'll notice two parameters passed into this function. The first defines how many slides you can see at any one time (1 slide in this case). The second is the css selector given to the slider's ul element, "#simpleSlider" in this case. These are likely the values you will use, but feel free to change these if they don't fit your needs.

This should get you up and running with simpleSlider. If you encounter any issues, or would care to offer suggestions, feel free to file bugs/comment on this repo.