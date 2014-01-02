<div data-role="page" id="listPenyes">  
	<%@ include file="List-Header.jsp"%>
	<%@ include file="List-Footer.jsp"%> 	
	<div data-role="content"  id="contentlistPenyes"> 
		<ul id="listviewpenyes" data-role="listview" data-inset="true" data-filter="false">
			<%@ include file="penyainfinite.jsp"%>
			<li id="loadmoreajaxloader">&nbsp;</li>																											
		</ul>        
	</div><!-- /content -->         

</div><!-- /page -->

		   