var configuration = function () {
	var urlserver = "http://192.168.0.225:8080/iPenyesServer";

	
	return { 
	    "getUrlServer" : function () {
	    	return urlserver;
	    }
	  }; // end of the return
}();
