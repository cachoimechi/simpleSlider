#Simple Slider

##A minimal jQuery slider for web content

This project serves as a bare bones slider with limited functionality, best used as a quick and dirty solution, or for minimalist wireframe demos.

###Usage

By default, we have included a separate simpleSlider.css file to contain all styles associated with the slider. You can link to this file as follows, adjusting the relative link as necessary.

```html
<link rel="stylesheet" href="simpleSlider.css">
```

As this is a jQuery slider, you will first need to include the jQuery library. You can access to latest version [here](http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js). The simpleSlider.js file contains all of the slider's functionality, and should be followed by another script tag calling the function.

Here is an example of what you should include at the bottom of your body tag.

```html
<script type="text/javascript">
    slider(1,"#simpleSlider");
</script>
```

You'll notice two parameters passed into this function. The first is a 1, which defines how many slides you can see at any one time. The second is "#simpleSlider", which is the css selector given to the slider's ul element. These are likely the values you will use, but feel free to change these if they don't fit your needs.

This should get you up and running with simpleSlider. If you encounter any issues, or would care to offer suggestions, feel free to file bugs/comment on this repo.

##Coming Soon: Custom simpleSlider Builder
A web app for those who don't like thinking.