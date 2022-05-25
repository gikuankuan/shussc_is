$(document).ready(function() {
    $("#signup").click(function(){
        $("#signin-tab").css("display", "none");
        $("#signup").css("color", "#47C1B9");
        $("#signin").css("color", "#FAFAFA");
        $("#signup-tab").css("display", "");
    }); 
  
    $("#signin").click(function() {
        $("#signup-tab").css("display", "none");
        $("#signin").css("color", "#47C1B9");
        $("#signup").css("color", "#FAFAFA");
        $("#signin-tab").css("display", "");
    });
});

/** 
Resources that helped to build this:

Credit to Ron Evgeniy for his design: https://dribbble.com/shots/2878911-To-Do-App-Concept-Sign-Up

Free, high-res photos:
https://unsplash.com/

Bootstrap (V3) Grid docs:
https://bootstrapdocs.com/v3.0.3/docs/css/

How to create two columns at full height (for both background columns):
http://stackoverflow.com/questions/19089384/twitter-bootstrap-3-two-columns-full-height
https://codepen.io/danield770/pen/pEZmmB

How to center a div within another div: http://stackoverflow.com/questions/15376634/how-can-i-center-a-div-within-another-div

How to place two divs next to each other (ex: Sign in and Sign up divs): 
(Started with this, then moved to flexbox) http://stackoverflow.com/questions/5803023/how-to-place-two-divs-next-to-each-other
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

How to use Gradients in CSS:
https://www.w3schools.com/csS/css3_gradients.asp

Anchor/hyperlink pseudo-classes (:hover, :visited)
https://www.w3schools.com/css/css_pseudo_classes.asp
https://css-tricks.com/pseudo-class-selectors/

Percentage or Pixels in CSS?
http://stackoverflow.com/questions/7285058/css-percentages-or-pixels

Why does zindex not work? Wondering this when I was trying to order the stack of left-side-img, left-side-bg and right-side to show in the proper order (for image overlay too)
http://stackoverflow.com/questions/9191803/why-does-z-index-not-work
**/