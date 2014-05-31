var navigation = function () {
	var timeouts = [];
	var lastPage;
	
	function showAlert(message){
		alert(message);
	}
	
	function setLastPage(page){
		lastPage = page;
	}
	
	function clearAllTimeouts(){
		   for(var i = 0, z = timeouts.length; i < z; i++){
		       clearTimeout(timeouts[i]);
		   }
		   timeouts = [];
	}
	
	function showPageLoading() {
		$.mobile.showPageLoadingMsg();
		$(".ui-loader").css("display", "block");
	}
	
	function hidePageLoading() {
		$.mobile.hidePageLoadingMsg();
    	$(".ui-loader").css("display", "none");
	}
	
	return { 
	    "showPageLoading" : function () {
	    	showPageLoading();
	    },
	    "hidePageLoading" : function () {
	    	hidePageLoading();
	    },		
	    "getLastPage" : function () {
	    	return lastPage;
	    },
	    "setLastPage" : function (page) {
	    	lastPage = page;
	    },
	    "setTimeout" : function (timeout) {
	    	timeouts.push(timeout);
	    },
	    "clearAllTimeouts" : function () {
	    	clearAllTimeouts();
	    },
	    "alert" : function (message) {
	    	showAlert();
	    }
	  }; // end of the return
}();
