var configuration = function () {
	var urlserver = "http://192.168.0.224:8080/iPenyesServer";

	
	return { 
	    "getUrlServer" : function () {
	    	return urlserver;
	    }
	  }; // end of the return
}();
