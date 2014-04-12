var navigation = function () {
	var timeouts = [];
	var currentPage;
	
	function setCurrentPage(page){
		currentPage = page;
	}
	
	function getCurrentPage(){
		return currentPage;
	}	
	
	function clearAllTimeouts(){
		   for(var i = 0, z = timeouts.length; i < z; i++){
		       clearTimeout(timeouts[i]);
		   }
		   timeouts = [];
	}
	
	return { 
	    "getCurrentPage" : function () {
	    	getCurrentPage();
	    },
	    "setCurrentPage" : function (page) {
	    	setCurrentPage(page); 
	    },
	    "setTimeout" : function (timeout) {
	    	timeouts.push(timeout);
	    },
	    "clearAllTimeouts" : function () {
	    	clearAllTimeouts();
	    }
	  }; // end of the return
}();
