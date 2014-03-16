<%@page import="com.ophone.Penya"%>
<%@page import="com.ophone.Utils"%>
<% Penya penya = Utils.randomPenya();%>
<div class="coat"><img class="desc-icon" src="/images/escudos/<%= penya.logo %>" ></div>
<div  class="description"> 
	<div  class="namePenya"><span><%= penya.name %></span></div>
</div>
<div id="penyaMoreInfo" class="moreinfo">
	<div id="penyaLocation" class="location"><span><%= penya.location %>, <%= penya.country %></span></div>
	<div id="penyaNumSocios" class="numSocios"><%= penya.numAffiliates %> socios</div>
	<div id="penyaFundationYear" class="fundationYear">Fundación: <%= penya.fundationYear %></div>
</div>	
