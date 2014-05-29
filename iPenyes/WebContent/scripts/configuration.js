var configuration = function () {
	//var urlserver = "http://ipenyes.jelastic.elastx.net/iPenyesServer";
	var urlserver = "http://192.168.0.230:8080/iPenyesServer";
	  return {
	    "getUrlServer" : function () {
	    	return urlserver;
	    }
	  }; // end of the return
}();

