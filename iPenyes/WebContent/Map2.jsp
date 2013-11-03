<!DOCTYPE html>
<html>
<%@ include file="HeaderInfo.html"%>           
<body>
<div data-role="page" id="mapPenyes2" >
	<%@ include file="Header.jsp"%> 
			
    <div data-role="content" id="contentMap">
 		<div id="map_canvasWrapper" class="ui-bar-b ui-corner-all ui-shadow">
 			<div id="map_canvas" data-iscroll="true"></div>
 		</div>
  	</div> 
	<%@ include file="Map-Footer.jsp"%> 
</div><!-- /page -->
</body>
</html>