var photoPenyes = function () {

	
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
		detailPenyes.loadDetailPenya(detailPenyes.getSelectedPenya().id);
		$.mobile.changePage( "#detailPenyes" ,{ transition: "pop", changeHash: false });
		return false; 
	}	
		
	return { 
	    "backToDetail" : function () {
	    	backToDetail(); 
	    },
	    "showHideCross" : function () {
	    	showHideCross(); 
	    }
	  }; // end of the return
}();


//Events

$(document).on('gestureend','#fullScreen',function(e,data) {

    setTimeout(photoPenyes.showHideCross, 1000);
});

$(document).on('doubletap','#fullScreen',function(e,data) {
	setTimeout(photoPenyes.showHideCross, 1000);
});