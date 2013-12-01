<%@page import="com.ophone.Utils"%>
<li data-icon="false"><a href="Detail.jsp" data-transition="slide" class="penyaBean" >
			<div id="detailPenyaBean">		
					<div class="coat"><img class="ui-li-icon" src="/images/escudos/<%= Utils.randomEscudo() %>" ></div>
					<div  class="description"> 
						<div  class="namePenya"><span><%= Utils.randomName() %></span></div>
					</div>
					<div class="rightarrow"><img class="icon-arrow" src="/images/icon-arrow-black.png"></div>						
					<div id="penyaMoreInfo" class="moreinfo">
						<div id="penyaLocation" class="location"><span><%= Utils.randomCity() %></span></div>
						<div id="penyaFundationYear" class="fundationYear">Fundación: <%= Utils.randomYear() %></div>
					</div>									
			</div>	
</a></li>
				