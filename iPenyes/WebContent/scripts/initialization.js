var addToHomeConfig = {	touchIcon : true,	returningVisitor : false,	expire : 0};
var initPenyes = function() {

	function init() {
		
		loadImages(goToList);
	
	}

	function loadImages(callBack) {
		var loadedImagesCount = 0;
		var imageNames = [ "/images/spinner.gif","/images/ico-close-button.png","/images/close-button.png",
		                   "/images/close-button-blue.png","/images/ajax-loader-infinite.gif",
						   "/images/logo_fcb_penyes_250x90.png", "/images/lupa.png",
						   "/images/map-marker-l.png", "/images/icon_list.png",
						   "/images/map_icon.png", "/images/catalonia.png",
						   "/images/spain.png", "/images/europe.png", "/images/world.png" ];
		var imagesArray = [];
		for ( var i = 0; i < imageNames.length; i++) {
			var image = new Image();
			image.src = imageNames[i];
			image.onload = function() {
				loadedImagesCount++;
				if (loadedImagesCount >= imageNames.length) {
					// loaded all pictures
					callBack();
					
				}
			};
			imagesArray.push(image);
		}
	}
	
	function goToList() {
		var showWebApp = navigator.standalone;
		if (showWebApp) {
			filterPenyes.newSearch(function (){
				$("#logoImg").animate({marginTop : '0px'}, 1000, function() {$.mobile.changePage($("#listPenyes"));});	
			});			
		}
	}
	
	return {
		"init" : function() {
			init();
		}
	}; // end of the return
}();

$(document).on('pageshow', '#initPenyes', function(e, data) {
	initPenyes.init();
});
