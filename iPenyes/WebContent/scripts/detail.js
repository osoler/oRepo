var detailPenyes = function () {
	var penyaSelected;
	var resizeTimer;
	function checkOrientation() {
		if (window.orientation === 0 || window.orientation === 180){
			//portrait orientation
			$( 'div.photopenyaitem' ).each(function(){
				$(this).removeClass('horizontal');
			});
			$('div.iosSlider').removeClass('horizontal');
		}else{
			//Landscape orientation
			$( 'div.photopenyaitem' ).each(function(){
				$(this).addClass('horizontal');	
			});
			$('div.iosSlider').addClass('horizontal');	
		}
		return false; 
	};
	
	function refreshSlider() {
		$('.iosSlider').iosSlider({desktopClickDrag: true});
		return false; 
	};	

	function showHideCross() {
	  var currentScale = window.outerWidth;
	  if (currentScale === 320)
	  {
	  	$("#closer").show();
	  } else  {
	  	$("#closer").hide();
	  }
	};

	function fullScreen(url) {
		if (url != undefined){
			var url = "url(" + url + ")";
			$("#fullscreenimage").css('background-image', url);
			$.mobile.changePage($("#fullScreen"),{ transition: "pop", changeHash: false });
		}
		return false; 
	};
	
	function backFullScreen() {	
		$.mobile.changePage($("#detailPenyes"),{ transition: "pop", reverse: true });		
		return false; 
	};
	
	function loadDetailPenya(penyaId){
		removeDetails();
		hideDetails();
		goToDetail();
		navigation.showPageLoading();
		var nocache = new Date().getTime();
		var url = configuration.getUrlServer() + "/loadDetailPenya?penyaId=" + penyaId +  "&cache=" + nocache;
        $.ajax({
        	dataType: "json",
	        url: url,
	        success: function(result){
	            if(result)
	            {
	            	loadDetails(result);
	            	showDetails();
	            	navigation.hidePageLoading();
	               	setTimeout(listPenyes.showShadows, 1000);
	   
	            }
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	        	navigation.hidePageLoading();
	        	navigation.alert("Connection failed");
	        }
        });	
	};

	function removeDetails(){
		listPenyes.loadLogo("#penyaSelected-logo", "/images/spinner.gif");
		$("#penyaSelected-name").empty();
		$("#penyaSelected-fundation").empty();
		$("#penyaSelected-info1").empty();
		 $("#penyaSelected-info2").empty();
	}
	function hideDetails(){
		$("#penyaSelected-info0").hide();
		$("#penyaSelected-info1").hide();
		$("#penyaSelected-info2").hide();
		//$("#detailLoader").show();
		navigation.showPageLoading();
	}
	function showDetails(){
		navigation.hidePageLoading();
		$("#penyaSelected-info0").show();
		$("#penyaSelected-info1").show();
		$("#penyaSelected-info2").show();	
		refreshSlider(); 
		listPenyes.showShadows();
	}
	var penyaSelected;
	function loadDetails(penya){
		 penyaSelected = penya;
		 listPenyes.loadLogo("#penyaSelected-logo", penya.logo);
		 $("#penyaSelected-name").empty();
		 $("#penyaSelected-name").append(penya.name);
		 $("#penyaSelected-fundation").empty();
		 $("#penyaSelected-fundation").append("Fundación:" + penya.fundationYear);
		 
		 $("#penyaSelected-info1").empty();
		 $.each( penya.info, function( title, value ) {
			 var newdiv = "<div class='subdetailPenyes_div'><div class='subdetailPenyes_divheader'>"+title+":</div><div class='subdetailPenyes_divvalue'>"+value+"</div></div>";	 
			 $("#penyaSelected-info1").append(newdiv);
		 });
		 if (penya.socialNetworks){
			 $("#penyaSelected-info1").append("<div class='socialNetworks'>");
			 $.each( penya.socialNetworks, function( url, urlImg ) {
				 var newdiv = "<div class='socialneticon'><a href='"+url+"'><img class = 'icon' src='"+urlImg+"'></a></div>";	 
				 $(".socialNetworks").append(newdiv);
			 });	
		 }
		 
		 $("#penyaSelected-info2").empty();
		 $.each( penya.description, function( type, value ) {
			 if (type.indexOf("text") == 0){
				 var newdiv = "<div>" + value + "</div>";	 
				 $("#penyaSelected-info2").append(newdiv);				 
			 }
			 if (type === "images"){
				 $("#penyaSelected-info2").append("<div class='iosSlider'>");
				 $(".iosSlider").append("<div class='slider'>");
				 $.each( value, function( key, value ) {
					 var valueStr = "&#39;" + value + "&#39;";
					 var newdiv = "<div class='photopenyaitem' style='background-image:url("+value+");' id= '" + key + "' onclick='detailPenyes.fullScreen("+valueStr+")'></div>";	 
					 $(".slider").append(newdiv);
				 });		 
			 }

		 });
		 
		 return false;
	}
	function goToDetail() {
		event.preventDefault();
		listPenyes.hideShadows();
		$.mobile.changePage( "#detailPenyes" ,{ transition: "slide", changeHash: false });
		return false; 
	};
	
	function back() {
		$(".innerInfiniteShadowTop").hide();
		$(".innerInfiniteShadowBottom").hide();
		if(navigation.getLastPage() === "listPenyes"){
			$.mobile.changePage( "#listPenyes" ,{ transition: "slide", changeHash: false, reverse :"true" });	
		}
		if(navigation.getLastPage() === "mapPenyes"){
			$.mobile.changePage( "#mapPenyes" ,{ transition: "slide", changeHash: false, reverse :"true" });
		}

		
		return false; 
	};	
	function noScrollSlide(name, reverse, $to, $from) { 
		var deferred = new $.Deferred() ,
		toScroll = $('body').scrollTop(), 
		toClasses = reverse ? ' slide in reverse' : ' slide in', fromClasses = reverse ? ' slide out reverse' : ' slide out'; 
		$from.addClass( fromClasses ); 
		$to.css({position:'fixed'}).addClass( $.mobile.activePageClass + toClasses ); 
		$to.animationComplete(function(){ 
			$from.removeClass($.mobile.activePageClass).add($to).removeClass('slide in out reverse'); 
			window.scrollTo(0,0); 
			$to.css({position: 'inherit'}); 
			deferred.resolve(); }); 
		return deferred.promise(); 
	};	
return { 
    "checkOrientation" : function () {
    	checkOrientation();
    },
    "refreshSlider" : function () {
    	refreshSlider(); 
    },
    "showHideCross" : function () {
    	showHideCross(); 
    },
    "fullScreen" : function (selection) {
    	fullScreen(selection);
    },
    "backFullScreen" : function () {
    	backFullScreen(); 
    },
    "goToDetail" : function () {
    	goToDetail(); 
    },
    "back" : function () {
    	back(); 
    },
    "setResizeTimer" : function (newValue) {
    	resizeTimer = newValue; 
    },
    "getResizeTimer" : function () {
    	return resizeTimer; 
    },      
    "noScrollSlide" : function (name, reverse, to, from) {
    	return noScrollSlide(name, reverse, to, from);
    },
    "loadDetailPenya" : function (penyaId) {
    	loadDetailPenya(penyaId); 
    },
    "showPenyaInMap" : function () {
    	mapPenyes.goToPenya(penyaSelected); 
    }
  }; // end of the return
}();


//Events

$.mobile.transitionHandlers["slide"] = detailPenyes.noScrollSlide;

$(document).on('pageshow', '#detailPenyes',function(e,data){
	var prevPage = data.prevPage.attr('id');
	if((prevPage === "listPenyes")||(prevPage === "mapPenyes")){
		navigation.setLastPage(prevPage);
	}
	
	detailPenyes.checkOrientation();
	detailPenyes.refreshSlider() ;
	
});

$(document).on('pagehide', '#detailPenyes',function(e,data){ 
	listPenyes.hideShadows();
});

$(document).on('gestureend','#fullScreen',function(e,data) {
    clearTimeout(detailPenyes.getResizeTimer());
    detailPenyes.setResizeTimer(setTimeout(detailPenyes.showHideCross, 600));
});

$(document).on('doubletap','#fullScreen',function(e,data) {
    clearTimeout(detailPenyes.getResizeTimer());
    detailPenyes.setResizeTimer(setTimeout(detailPenyes.showHideCross, 600));
});