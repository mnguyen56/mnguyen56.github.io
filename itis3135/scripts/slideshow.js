$(document).ready(function()
{   
    // preloads images onto webpage
    $("#image-gallery a").each(function()
    {
        var loadedImage = new Image();
        loadedImage.src = $(this).attr("href");
    });

    // event handlers for image links
    $("#image-gallery a").click(function(event)
    {
        // swap image link
        var imageLink = $(this).attr("href");
        $("#enlarged-image").attr("src", imageLink);

        // swap image caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancels default action of image link
        event.preventDefault();
    });
});