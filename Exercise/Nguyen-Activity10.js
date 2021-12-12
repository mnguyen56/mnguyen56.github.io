$(document).ready(function() {

        // preload the image for each link
        $("#image_list a").each(function()
        {
            var loadedImage = new Image();
            loadedImage.src = $(this).attr("href");
        });

        // set up the event handlers for each link
        $("#image_list a").click(function(event)
        {       
                // get the image URL and caption for each image and animate the caption
                var newImage = $(this).attr("href");
                var newCaption = $(this).attr("title");

                $("#image").fadeOut(3000, 
                        function()
                        {       
                                $(this).attr("src", newImage).fadeIn(3000);
                        }
                );

                $("#caption").fadeOut(3000, 
                        function()
                        {
                                $(this).text(newCaption).fadeIn(3000);
                                $(this).animate(
                                        {
                                                fontSize: "2.0em"
                                        },
                                        3000
                                );
                        }
                );

                // cancel the default action of each link
                event.preventDefault();
        });

    // move the focus to the first link
    $("li:first-child a").focus();

}); // end ready