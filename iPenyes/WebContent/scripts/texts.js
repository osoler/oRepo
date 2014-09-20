var texts = function () {
	var h = new Object();
	
	h['back'] 	= 'Tornar';
	h['list'] 	= 'Llista';
	h['map']  	= 'Mapa';
	h['filter'] = 'Filtre';
	h['area'] 	= 'Àrea';
	h['fundation'] 	= 'Fundació';
	h['affiliates'] = 'Socis';
	h['reset'] 	= 'esborrar';
	h['search'] = 'cercar';	
	h['connectionFailed'] = 'Error de connexió';
	h['more'] = 'mostrar més';	
	
	h['address'] = 'Adreça';	
	h['president'] = 'President';	
	h['vicepresident'] = 'Vicepresident';	
	h['phone'] = 'Telèfon';	
	h['email'] = 'email';
	h['website'] = 'Website';	
	
	function loadTexts() {
		
		 $("#ios-arrow-left").empty();
		 $("#ios-arrow-left").append(h.back);		
		 $(".tabList").empty();
		 $(".tabList").append(h.list);
		 $(".tabMap").empty();
		 $(".tabMap").append(h.map);
		 $("#titleFilter").empty();
		 $("#titleFilter").append(h.filter);
		 $("#titleArea").empty();
		 $("#titleArea").append(h.area);	
		 $("#titleFundation").empty();
		 $("#titleFundation").append(h.fundation);	
		 $("#titleAffiliates").empty();
		 $("#titleAffiliates").append(h.affiliates);	
		 $("#textReset").empty();
		 $("#textReset").append(h.reset);	
		 $("#textSearch").empty();
		 $("#textSearch").append(h.search);	
		
	}
	
	
	return { 
		"h" : function () {
			return h; 
	    },
		"loadTexts" : function () {
			loadTexts(); 
	    }
	  }; // end of the return
}();