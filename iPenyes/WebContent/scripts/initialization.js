var addToHomeConfig = {	touchIcon : true,	returningVisitor : false,	expire : 0};
var initPenyes = function() {

	function init() {
		
		loadImages(goToList);
		texts.loadTexts();
	
	}

	function loadImages(callBack) {
		var loadedImagesCount = 0;
		var imageNames = configuration.getImages();
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
			filterPenyes.newSearch(0, function (){
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

//Events

$(document).on('pageshow', '#initPenyes', function(e, data) {
	initPenyes.init();
});
