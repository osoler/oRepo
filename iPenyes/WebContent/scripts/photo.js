var photoPenyes = function () {
	var resizeTimer;
	
	function showHideCross() {
		  var currentScale = window.outerWidth;
		  if (currentScale === 320)
		  {
		  	$("#photoCloser").show();
		  } else  {
		  	$("#photoCloser").hide();
		  }
	}
		
	function backToDetail() {	
		$.mobile.changePage($("#detailPenyes"),{ transition: "pop", reverse: true });		
		return false; 
	}	
		
	return { 
	    "backToDetail" : function () {
	    	backToDetail(); 
	    },
	    "showHideCross" : function () {
	    	showHideCross(); 
	    },
	    "setResizeTimer" : function (newValue) {
	    	resizeTimer = newValue; 
	    },
	    "getResizeTimer" : function () {
	    	return resizeTimer; 
	    }
	  }; // end of the return
}();

$.fn.doubleTap = function(doubleTapCallback) {
    return this.each(function(){
		var elm = this;
		var lastTap = 0;
		$(elm).on('vmousedown', function (e) {
                            var now = (new Date()).valueOf();
			var diff = (now - lastTap);
                            lastTap = now ;
                            if (diff < 250) {
	                    if($.isFunction( doubleTapCallback ))
	                    {
	                       doubleTapCallback.call(elm);
	                    }
                            }      
		});
     });
};

//Events

$(document).on('gestureend','#fullScreen',function(e,data) {
    clearTimeout(photoPenyes.getResizeTimer());
    photoPenyes.setResizeTimer(setTimeout(photoPenyes.showHideCross, 600));
});

$(document).on('doubletap','#fullScreen',function(e,data) {
    clearTimeout(detailPenyes.getResizeTimer());
    detailPenyes.setResizeTimer(setTimeout(photoPenyes.showHideCross, 600));
});