<%@page import="com.ophone.Utils"%>
<div class="coat"><img class="desc-icon" src="/images/escudos/<%= Utils.randomEscudo() %>" ></div>
<div  class="description"> 
	<div  class="namePenya"><span><%= Utils.randomName() %></span></div>
</div>
<div id="penyaMoreInfo" class="moreinfo">
	<div id="penyaLocation" class="location"><span><%= Utils.randomCity() %>, <%= Utils.randomCountry() %></span></div>
	<div id="penyaNumSocios" class="numSocios"><%= Utils.randomSocios() %> socios</div>
	<div id="penyaFundationYear" class="fundationYear">Fundación: <%= Utils.randomYear() %></div>
</div>	
