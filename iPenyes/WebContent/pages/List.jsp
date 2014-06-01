<div data-role="page" id="listPenyes">
	<div data-role="header" data-position="fixed" data-tap-toggle="false" data-id="header">
		<div>
			<div  class="voidHeader">&nbsp;</div>
			<div  class="filterLinkHeader">
				<div class="filterLogo"><a id="filterLink" onclick="filterPenyes.openFilter()"><img class="magnifingGlass"/></a></div>
				<div class="voidLogo"></div>				
			</div>	
			<div class="headerLogoImg">&nbsp;</div>			
		</div>	
		<div class="infiniteShadowTop"><div class="innerInfiniteShadowTop"></div></div>	
	</div><!-- /header -->
	<div data-role="footer" data-position="fixed" data-tap-toggle="false" data-id="footer" id="listFooter">	
		<div class="infiniteShadowBottom"><div class="innerInfiniteShadowBottom"></div></div>
	    <div data-role="navbar" class="navMenu">
	        <ul>
	            <li><a href="#listPenyes" id="tabList" data-icon="custom" data-transition="pop" class="ui-btn-active ui-state-persist">List</a></li>
	            <li><a href="#mapPenyes"  id="tabMap"  data-icon="custom" data-transition="pop">Map</a></li>
	        </ul>
	     </div> 
	</div>
	<div data-role="content"  id="contentlistPenyes"> 
		<%@ include file="Filter.jsp"%>     		  
	</div><!-- /content -->         
</div><!-- /page -->

		   