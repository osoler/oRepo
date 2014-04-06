var navigation = function () {
	var currentPage;
	
	function setCurrentPage(page){
		currentPage = page;
	}
	
	function getCurrentPage(){
		return currentPage;
	}	
	
	return { 
	    "getCurrentPage" : function () {
	    	getCurrentPage();
	    },
	    "setCurrentPage" : function (page) {
	    	setCurrentPage(page); 
	    }
	  }; // end of the return
}();