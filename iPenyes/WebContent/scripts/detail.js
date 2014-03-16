var detailPenyes = function () {
	var resizeTimer;
	function checkOrientation() {
		if (window.orientation === 0 || window.orientation === 180){
			//portrait orientation
			$( 'div.photopenyaitem' ).each(function(){
				$(this).removeClass('horizontal');
			});
			$('div.iosSlider').removeClass('horizontal');
		}else{
			//Landscape orientation
			$( 'div.photopenyaitem' ).each(function(){
				$(this).addClass('horizontal');	
			});
			$('div.iosSlider').addClass('horizontal');	
		}
		return false; 
	};
	
	function refreshSlider() {
		$('.iosSlider').iosSlider({desktopClickDrag: true});
		return false; 
	};	

	function showHideCross() {
	  var currentScale = window.outerWidth;
	  if (currentScale === 320)
	  {
	  	$("#closer").show();
	  } else  {
	  	$("#closer").hide();
	  }
	};

	function fullScreen() {
		$.mobile.changePage($("#fullScreen"),{ transition: "pop", changeHash: false });
		return false; 
	};
	
	function backFullScreen() {	
		$.mobile.changePage($("#detailPenyes"),{ transition: "pop", reverse: true });		
		return false; 
	};

	function goToDetail() {
		event.preventDefault();
		$(".innerInfiniteShadowTop").hide();
		$(".innerInfiniteShadowBottom").hide();
		$.mobile.changePage( "#detailPenyes" ,{ transition: "slide", changeHash: false });
		return false; 
	};
	
	function backToList() {
		$(".innerInfiniteShadowTop").hide();
		$(".innerInfiniteShadowBottom").hide();
		return false; 
	};	
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
	};	
return { 
    "checkOrientation" : function () {
    	checkOrientation();
    },
    "refreshSlider" : function () {
    	refreshSlider(); 
    },
    "showHideCross" : function () {
    	showHideCross(); 
    },
    "fullScreen" : function () {
    	fullScreen();
    },
    "backFullScreen" : function () {
    	backFullScreen(); 
    },
    "goToDetail" : function () {
    	goToDetail(); 
    },
    "backToList" : function () {
    	backToList(); 
    },
    "setResizeTimer" : function (newValue) {
    	resizeTimer = newValue; 
    },
    "getResizeTimer" : function () {
    	return resizeTimer; 
    },      
    "noScrollSlide" : function (name, reverse, to, from) {
    	return noScrollSlide(name, reverse, to, from);
    }   
  }; // end of the return
}();


//Events

$.mobile.transitionHandlers["slide"] = detailPenyes.noScrollSlide;

$(document).on('pageshow', '#detailPenyes',function(e,data){ 
	$(".innerInfiniteShadowTop").fadeIn( "slow" );
	$(".innerInfiniteShadowBottom").fadeIn( "slow" );
});

$(document).on('pagehide', '#detailPenyes',function(e,data){ 
$(".innerInfiniteShadowTop").hide();
$(".innerInfiniteShadowBottom").hide();
});

$(document).on('pageshow', '#detailPenyes',function(e,data){ 
detailPenyes.checkOrientation();
detailPenyes.refreshSlider() ;
});

$(document).on('gestureend','#fullScreen',function(e,data) {
    clearTimeout(detailPenyes.getResizeTimer());
    detailPenyes.setResizeTimer(setTimeout(detailPenyes.showHideCross, 600));
});

$(document).on('doubletap','#fullScreen',function(e,data) {
    clearTimeout(detailPenyes.getResizeTimer());
    detailPenyes.setResizeTimer(setTimeout(detailPenyes.showHideCross, 600));
});