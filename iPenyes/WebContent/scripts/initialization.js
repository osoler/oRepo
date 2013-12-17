$(document).bind("mobileinit", function(){
    $.mobile.defaultDialogTransition = "none";
    $.mobile.defaultPageTransition = "none";
});
$.mobile.getMaxScrollForTransition = function () { return 65536; } ;