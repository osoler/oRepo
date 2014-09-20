<div data-role="page" id="mapPenyes" >
	<div data-role="header" data-position="fixed" data-tap-toggle="false" data-transition="none" data-id="header">
		<div>
			<div  class="voidHeader">&nbsp;</div>
			<div  class="filterLinkHeader">
				<div class="filterLogo"><a id="filterLink" onclick="filterPenyes.openFilter()"><img class="magnifingGlass"/></a></div>
				<div class="voidLogo"></div>				
			</div>	
			<div class="headerLogoImg">&nbsp;</div>			
		</div>	
	</div><!-- /header -->
	<div data-role="footer" data-position="fixed" data-tap-toggle="false" data-id="footer" id="mapFooter">	
	    <div data-role="navbar" class="navMenu">
	        <ul>
	            <li><a href="#listPenyes"class="tabList" data-icon="custom" data-transition="pop"></a></li>
	            <li><a href="#mapPenyes"  class="tabMap"  data-icon="custom" data-transition="pop" class="ui-btn-active ui-state-persist"></a></li>
	        </ul>
	     </div> 
	</div>			
    <div data-role="content" id="contentMap">
 		<div id="map_canvasWrapper" class="ui-corner-all ui-shadow">
 			<div id="map_canvas"></div>
 		</div>
  	</div> 

</div><!-- /page -->
