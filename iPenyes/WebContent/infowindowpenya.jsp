<%@page import="com.ophone.Utils"%>
<div class="infowindows">
	<div class="innerinfowindowleft"><img class="desc-icon"  src="/images/escudos/<%= Utils.randomEscudo() %>"></div>
	<div class="innerinfowindowright"><%= Utils.randomName() %></div>
</div>