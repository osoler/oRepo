var photoPenyes = function () {

	
	function showHideCross() {
		  var currentScale = window.outerWidth;

		  if (this.orientation === 0){
			  currentScale = window.outerWidth;
		  }else{
			  currentScale = window.outerHeight;
		  }

		  if (currentScale === 320)
		  {
		  	$("#photoCloser").show();
		  } else  {
		  	$("#photoCloser").hide();
		  }
	}
		
	function backToDetail() {	
		detailPenyes.loadDetailPenyaPopBack(detailPenyes.getSelectedPenya().id);
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