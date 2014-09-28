var photoPenyes = function () {
		
	function backToDetail() {	
		detailPenyes.loadDetailPenyaPopBack(detailPenyes.getSelectedPenya().id);
		return false;
	}	
		
	return { 
	    "backToDetail" : function () {
	    	backToDetail(); 
	    }
	  }; // end of the return
}();