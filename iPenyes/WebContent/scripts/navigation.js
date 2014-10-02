var navigation = function () {
	var timeouts = [];
	var lastPage;
	
	function showAlert(message){	
		$('#alertPopUp').bPopup({
            onOpen: function() {
            	$('#alertPopUp').empty();
            	$('#alertPopUp').append(message);
            },
            onClose: function() {
            	$('#alertPopUp').empty();
            },
            fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
            followSpeed: 500, //can be a string ('slow'/'fast') or int
            modalColor: '#170C4A'
        });
	}
	
	function showInfo(message){	
		$('#infoPopUp').css('display', 'inline-block');
		$('#infoPopUp').empty();
        $('#infoPopUp').append(message);
           
	}
	
	function hideInfo(message){	
		showInfo(message);
		navigation.setTimeout(setTimeout(function(){ $('#infoPopUp').hide('slow');} , 1000));
           
	}
	
	function setLastPage(page){
		lastPage = page;
	}
	
	function clearAllTimeouts(){
		   for(var i = 0, z = timeouts.length; i < z; i++){
		       clearTimeout(timeouts[i]);
		   }
		   timeouts = [];
	}
	
	function showPageLoading() {
		$.mobile.showPageLoadingMsg();
		$(".ui-loader").css("display", "block");
	}
	
	function hidePageLoading() {
		$.mobile.hidePageLoadingMsg();
    	$(".ui-loader").css("display", "none");
	}
	
	function loadLogo(img, src){		       
        var image = new Image();
        image.src = configuration.getEscudos() + src;
        image.onload = function(){
        	$(img).attr("src", image.src);
        };   
	}

	function loadSpinner(img){		       
        var image = new Image();
        image.src = configuration.getDomain() +"/"+ configuration.getSpinner();
        image.onload = function(){
        	$(img).attr("src", image.src);
        };   
	}
	
	
	
	function showShadows(){
		if (filterPenyes.getListOfFanClubs() != undefined && filterPenyes.getListOfFanClubs().length > 0){
			$(".innerInfiniteShadowTop").fadeIn( "slow" );
		}
		$(".innerInfiniteShadowBottom").fadeIn( "slow" );
	};
	
	function hideShadows(){
		$(".innerInfiniteShadowTop").hide();
		$(".innerInfiniteShadowBottom").hide();
	};
	
	return { 
	    "showPageLoading" : function () {
	    	showPageLoading();
	    },
	    "hidePageLoading" : function () {
	    	hidePageLoading();
	    },	
	    "showShadows" : function () {
	    	showShadows(); 	    	
	    },
	    "hideShadows" : function () {
	    	hideShadows(); 	    	
	    },   
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
	    },
	    "loadLogo" : function (img, src) {
	    	loadLogo(img, src); 
	    },
	    "loadSpinner" : function (img) {
	    	loadSpinner(img); 
		},
	    "alert" : function (message) {
	    	showAlert(message);
	    },
	    "info" : function (message) {
	    	showInfo(message);
	    },
	    "hideInfo" : function (message) {
	    	hideInfo(message);
	    }
	  }; // end of the return
}();
