// jQuery call to the accordion() method.
$(document).ready(function() {
    $("#accordian").accordian(
    {
        event: "mouseover",
        heightStyle: "content",
        collapsible: true
    });
});