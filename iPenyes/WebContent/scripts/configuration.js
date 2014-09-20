var configuration = function () {
	var urlserver 	= "http://ipenyes.jelastic.elastx.net/iPenyesServer";
	var socialicons = "../images/socialicons/";
	var spinner 	= "/images/spinner.gif";
	var photos 		= "/iPenyesResources/images/photosPenyes/";
	
	var imageNames = [ "/images/spinner.gif","/images/ico-close-button.png","/images/close-button.png",
	                   "/images/close-button-blue.png","/images/ajax-loader-infinite.gif",
					   "/images/logo_fcb_penyes_250x90.png", "/images/lupa.png",
					   "/images/map-marker-l.png", "/images/icon_list.png",'/images/fcb_marker.png',
					   "/images/map_icon.png", "/images/catalonia.png",
					   "/images/spain.png", "/images/europe.png", "/images/world.png" ];
	  return {
	    "getImages" : function () {
	    	return imageNames;
	    }, 
		"getPhotos" : function () {
	    	return photos;
	    }, 
	    "getSpinner" : function () {
	    	return spinner;
	    },  
	    "getSocialIcons" : function () {
	    	return socialicons;
	    },
	    "getUrlServer" : function () {
	    	return urlserver;
	    }
	  }; // end of the return
}();

