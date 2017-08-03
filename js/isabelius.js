//Scroll to a centain element

$(document).ready(function(){
    $(".nipio-illustration").click(function(){
        window.scroll(0, $("#headingOne").offset().top);
    });

    $(".nipio-animation").click(function(){
        window.scroll(0, $("#headingTwo").offset().top);
    });
    
    $(".nipio-miscellaneous").click(function(){
        window.scroll(0, $("#headingThree").offset().top);
    });
});
