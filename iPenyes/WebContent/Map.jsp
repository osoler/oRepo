<div data-role="page" id="mapPenyes" >
	<div data-role="header" data-position="fixed" data-tap-toggle="false" data-transition="none" data-id="header">
		<div>
			<div  class="voidHeader">&nbsp;</div>
			<div  class="filterLinkHeader"><a id="filterLink" onclick="listPenyes.openFilter()"><img class="buttonHover" src="images/lupa.png" width="20px"/></a></div>	
			<div class="headerLogoImg">&nbsp;</div>			
		</div>	
	</div><!-- /header -->
	<div data-role="footer" data-position="fixed" data-tap-toggle="false" data-id="footer" id="mapFooter">	
	    <div data-role="navbar" class="navMenu">
	        <ul>
	            <li><a href="#listPenyes" id="tabList" data-icon="custom" data-transition="pop" >Llista</a></li>
	            <li><a href="#mapPenyes"  id="tabMap"  data-icon="custom" data-transition="pop" class="ui-btn-active ui-state-persist">Mapa</a></li>
	        </ul>
	     </div> 
	</div>			
    <div data-role="content" id="contentMap">
 		<div id="map_canvasWrapper" class="ui-corner-all ui-shadow">
 			<div id="map_canvas"></div>
 		</div>
  	</div> 

</div><!-- /page -->
