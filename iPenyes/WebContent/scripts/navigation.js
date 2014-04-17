var navigation = function () {
	var timeouts = [];
	var lastPage;
	
	function setLastPage(page){
		lastPage = page;
	}
	
	function clearAllTimeouts(){
		   for(var i = 0, z = timeouts.length; i < z; i++){
		       clearTimeout(timeouts[i]);
		   }
		   timeouts = [];
	}
	
	return { 
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
	    }
	  }; // end of the return
}();
