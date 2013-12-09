<!DOCTYPE html>
<html>
<%@ include file="HeaderInfo.html"%>           
<body>
<!-- div data-role="page" id="splashPage"> 
	<div data-role="content">
		<div id="WelcomeWrapper">
			<div id="WelcomeLogo" data-iscroll="true">
				<img id="ValkomenLogo" src="/images/logo_fcb_penyes_250x90.png">
			</div>
		</div> 	
	</div><!-- /content -->         
<!-- /div -->
<div data-role="page" id="listPenyes">  
	<%@ include file="List-Header.jsp"%>
	<div data-role="content"  data-iscroll="true" id="contentlistPenyes"> 
		<ul  data-role="listview" data-inset="true" data-filter="false">
			<%@ include file="penyainfinite.jsp"%>
			<li id="loadmoreajaxloader">&nbsp;</li>																											
		</ul>        
	</div><!-- /content -->         
	<%@ include file="List-Footer.jsp"%> 	
</div><!-- /page -->
</body>
</html>
		   