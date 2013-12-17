function noScrollSlide(name, reverse, $to, $from) { 
	var deferred = new $.Deferred() ,
	toScroll = $('body').scrollTop(), 
	toClasses = reverse ? ' slide in reverse' : ' slide in', fromClasses = reverse ? ' slide out reverse' : ' slide out'; 
	$from.addClass( fromClasses ); 
	$to.css({position:'fixed'}).addClass( $.mobile.activePageClass + toClasses ); 
	$to.animationComplete(function(){ 
		$from.removeClass($.mobile.activePageClass).add($to).removeClass('slide in out reverse'); 
		window.scrollTo(0,0); 
		$to.css({position: 'inherit'}); 
		deferred.resolve(); }); 
	return deferred.promise(); 
} 
$.mobile.transitionHandlers["slide"] = noScrollSlide;

$('#listPenyes').bind('pageinit', function() {
  $('#listviewpenyes').listview('refresh');
});
$(document).bind("mobileinit", function(){
    $.mobile.defaultDialogTransition = "none";
    $.mobile.defaultPageTransition = "none";
});
$.mobile.getMaxScrollForTransition = function () { return 65536; } ;
$.mobile.defaultHomeScroll = 0;