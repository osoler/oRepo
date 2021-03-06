var detailPenyes = function () {
	var penyaSelected;
	var resizeTimer;
	
	function refreshSlider() {
		$('.iosSlider').iosSlider({desktopClickDrag: true});
		return false; 
	};	

	function openPhoto(url) {
		if (url != undefined){
			var url = "url(" + url + ")";
			$("#fullscreenimage").css('background-image', url);
			$.mobile.changePage($("#fullScreen"),{ transition: "pop", changeHash: false });
		}
		return false; 
	};
	function openLogo() {
		openPhoto(configuration.getEscudos() + penyaSelected.logo);
	}
	function loadDetailPenya(penyaId){
		goToDetailPenya(penyaId, { transition: "slide", changeHash: false });
	}
	
	function loadDetailPenyaPopBack(penyaId){
		goToDetailPenya(penyaId, {transition: "pop", changeHash: false});
	}
	
	function goToDetailPenya(penyaId, transOptions){
		removeDetails();
		hideDetails();
		goToDetail(transOptions,function(){
			navigation.showPageLoading();
			var nocache = new Date().getTime();
			var url = configuration.getUrlServer() + "/loadDetailPenya?penyaId=" + penyaId +  "&cache=" + nocache;
	        $.ajax({
	        	dataType: "json",
		        url: url,
		        success: function(result){
		            if(result)
		            {
		       		    penyaSelected = result;
		            	loadDetails(penyaSelected);
		            	showDetails(penyaSelected);
		            	navigation.hidePageLoading();
		               	setTimeout(navigation.showShadows, 1000);
		   
		            }
		        },
		        error: function (xhr, ajaxOptions, thrownError) {
		        	navigation.hidePageLoading();
		        	navigation.alert(texts.h().conectionFailed);
		        }
	        });	
		});

	};

	function removeDetails(){
		navigation.loadSpinner("#penyaSelected-logo");
		$("#penyaSelected-name").empty();
		$("#penyaSelected-fundation").empty();
		$("#penyaSelected-info1").empty();
		 $("#penyaSelected-info2").empty();
	}
	
	function hideDetails(){
		$("#penyaSelected-info0").hide();
		$("#penyaSelected-info1").hide();
		$("#penyaSelected-info2").hide();
		navigation.showPageLoading();
	}
	
	function showDetails(penya){
		navigation.hidePageLoading();
		$("#penyaSelected-info0").show();
		if (penya.info){$("#penyaSelected-info1").show();}
		if(penya.description){$("#penyaSelected-info2").show();}	
		refreshSlider();
	}

	function loadDetails(penya){
		 navigation.loadLogo("#penyaSelected-logo", penya.logo);
		 $("#penyaSelected-name").empty();
		 $("#penyaSelected-name").append(penya.name);
		 $("#penyaSelected-socis").empty();
		 if (penya.numAffiliates > 0){
			 $("#penyaSelected-socis").append(penya.numAffiliates + " " + texts.h().affiliates);
		 }
		 $("#penyaSelected-fundation").empty();
		 $("#penyaSelected-fundation").append(texts.h().fundation + ":" + penya.fundationYear);
		 
		 $("#penyaSelected-info1").empty();
		 if (penya.info){
			 $.each( penya.info, function( title, value ) {	 
				 if (title === 'email'){
					 value = "<a href='mailto:"+value+"'>" + value + "</a>";
				 }
				 if (value.indexOf("http") == 0){
					 value = "<a href=\"#\" onclick=\"window.open('"+value+"', '_system', 'location=yes'); return false;\">"+value+"</a>";
				 }
				 if(title !== ''){
					 $("#penyaSelected-info1").append("<div class='subdetailPenyes_div'><div class='subdetailPenyes_divheader'>"+texts.h()[title]+":</div><div class='subdetailPenyes_divvalue'>"+value+"</div></div>");
				 }else{
					 $("#penyaSelected-info1").append("<div class='subdetailPenyes_div'>&nbsp;</div>");
				 }
			 });
		 }
		 if (penya.socialNetworks){
			 $("#penyaSelected-info1").append("<div class='socialNetworks'>");
			 $.each( penya.socialNetworks, function( url, socialnetwork ) { 
				 var urlImg = configuration.getSocialIcons() + socialnetwork + ".png";
				 var newdiv  = "<div class='socialneticon'><a href=\"#\" onclick=\"window.open('"+url+"', '_system', 'location=yes'); return false;\"><img class = 'icon' src='"+urlImg+"'></a></div>";	 
				 $(".socialNetworks").append(newdiv);
			 });	
		 }
		 
		 $("#penyaSelected-info2").empty();
		 if(penya.description){
			 var imgIndex = 0;
			 $.each(penya.description, function( type, value ) {
				 if (type.indexOf("text") == 0){	 
					 $("#penyaSelected-info2").append("<div class='descText'>" + value + "</div>");		
				 }
				 if (type.indexOf("images") == 0){	
					 var slidername = 'imgslider' + imgIndex;
					 $("#penyaSelected-info2").append("<div id='"+slidername+"' class='iosSlider'>");
					 var hslidername = '#'+slidername;
					 var subslidername = 'subimgslider' + imgIndex;
					 var hsubslidername = '#'+subslidername;
					 $(hslidername).append("<div  id='"+subslidername+"' class='slider'>");
					 $.each( value, function( key, value ) {
						 value = configuration.getPhotos() + value;
						 var valueStr = "&#39;" + value + "&#39;";
						 var photoClass = "photopenyaitem";
						 if (window.orientation !== 0){ photoClass = "photopenyaitem horizontal";}
						 var newdiv = "<div class='"+photoClass+"' style='background-image:url("+value+");' id= '" + key + "' onclick='detailPenyes.openPhoto("+valueStr+")'></div>";	 
						 $(hsubslidername).append(newdiv);
					 });	
					 imgIndex = imgIndex + 1;
				 }
			 });
		 }
		 
		 return false;
	}
	function goToDetail(options, callBack) {
		event.preventDefault();
		navigation.hideShadows();
		$.mobile.changePage( "#detailPenyes" , options);
		
		if(callBack){
			setTimeout(callBack,1000);
		}
		return false; 
	};
	
	function showPenyaInMap(){	
		$.mobile.changePage($("#mapPenyes"),{ transition: "pop", changeHash: false });
	}	
	
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
    "openPhoto" : function (selection) {
    	openPhoto(selection);
    },
    "openLogo" : function () {
    	openLogo();
    },
    "goToDetail" : function (options, callBack) {
    	goToDetail(options, callBack); 
    },
    "back" : function () {
    	back(); 
    },     
    "noScrollSlide" : function (name, reverse, to, from) {
    	return noScrollSlide(name, reverse, to, from);
    },
    "loadDetailPenya" : function (penyaId) {
    	loadDetailPenya(penyaId); 
    },
    "loadDetailPenyaPopBack" : function (penyaId) {
    	loadDetailPenyaPopBack(penyaId); 
    },
    "getSelectedPenya" : function () {
    	return penyaSelected; 
    },   
    "clearSelectedPenya" : function () {
    	penyaSelected = null; 
    }, 
    "showPenyaInMap" : function () {
    	showPenyaInMap(penyaSelected); 
    }
  }; // end of the return
}();

this.updateOrientation 				= detailPenyes.hola;

$.mobile.transitionHandlers["slide"] = detailPenyes.noScrollSlide;

//Events

$(document).on('pageshow', '#detailPenyes',function(e,data){
	var prevPage = data.prevPage.attr('id');
	if((prevPage === "listPenyes")||(prevPage === "mapPenyes")){
		navigation.setLastPage(prevPage);
	}
});

$(document).on('pagehide', '#detailPenyes',function(e,data){ 
	navigation.hideShadows();
});

$(window).on("orientationchange",function(){
	if ($.mobile.activePage.is("#detailPenyes")){
		detailPenyes.loadDetailPenyaPopBack(detailPenyes.getSelectedPenya().id);
	}
});

