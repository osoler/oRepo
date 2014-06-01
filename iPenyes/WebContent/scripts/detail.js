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
	
	function loadDetailPenya(penyaId, row){
		goToDetailPenya(penyaId, { transition: "slide", changeHash: false }, row);
	}
	
	function loadDetailPenyaPopBack(penyaId, row){
		goToDetailPenya(penyaId, {transition: "pop", changeHash: false}, row);
	}
	
	function goToDetailPenya(penyaId, transOptions, row){
		if (row){
			listPenyes.setTopCoordinate($(row.parentElement).offset().top);
		}
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
		            	showDetails();
		            	navigation.hidePageLoading();
		               	setTimeout(navigation.showShadows, 1000);
		   
		            }
		        },
		        error: function (xhr, ajaxOptions, thrownError) {
		        	navigation.hidePageLoading();
		        	navigation.alert("Connection failed");
		        }
	        });	
		});

	};

	function removeDetails(){
		navigation.loadLogo("#penyaSelected-logo", "/images/spinner.gif");
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
	
	function showDetails(){
		navigation.hidePageLoading();
		$("#penyaSelected-info0").show();
		$("#penyaSelected-info1").show();
		$("#penyaSelected-info2").show();	
		refreshSlider();
	}

	function loadDetails(penya){
		 navigation.loadLogo("#penyaSelected-logo", penya.logo);
		 $("#penyaSelected-name").empty();
		 $("#penyaSelected-name").append(penya.name);
		 $("#penyaSelected-fundation").empty();
		 $("#penyaSelected-fundation").append("Fundación:" + penya.fundationYear);
		 
		 $("#penyaSelected-info1").empty();
		 $.each( penya.info, function( title, value ) {	 
			 $("#penyaSelected-info1").append("<div class='subdetailPenyes_div'><div class='subdetailPenyes_divheader'>"+title+":</div><div class='subdetailPenyes_divvalue'>"+value+"</div></div>");
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
				 $("#penyaSelected-info2").append("<div>" + value + "</div>");		
			 }
			 if (type === "images"){
				 $("#penyaSelected-info2").append("<div class='iosSlider'>");
				 $(".iosSlider").append("<div class='slider'>");
				 $.each( value, function( key, value ) {
					 var valueStr = "&#39;" + value + "&#39;";
					 var newdiv = "<div class='photopenyaitem' style='background-image:url("+value+");' id= '" + key + "' onclick='detailPenyes.openPhoto("+valueStr+")'></div>";	 
					 $(".slider").append(newdiv);
				 });		 
			 }

		 });
		 
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
    "goToDetail" : function (options, callBack) {
    	goToDetail(options, callBack); 
    },
    "back" : function () {
    	back(); 
    },     
    "noScrollSlide" : function (name, reverse, to, from) {
    	return noScrollSlide(name, reverse, to, from);
    },
    "loadDetailPenya" : function (penyaId,row) {
    	loadDetailPenya(penyaId, row); 
    },
    "loadDetailPenyaPopBack" : function (penyaId, row) {
    	loadDetailPenyaPopBack(penyaId, row); 
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

