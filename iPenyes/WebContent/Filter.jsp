<div id="filterPopup">
	<div data-role="fieldcontain">
		<div id="innerfilterPopupHeader">
			<div class="innerTextfilterPopupHeader filter" >Filter</div>
		</div>	
		<div id="innerfilterPopup">
			<form id="filterForm">
				<div class="filterPopupInputTitle">Location</div>
				<div class="filterPopupInput bottomLine">
				    <fieldset data-role="controlgroup" data-type="horizontal" style="text-align: center" >
				         	<input type="radio" name="radio-area" id="radio-area1" value="catalonia" checked="checked"/>
				         	<label for="radio-area1" class="custom-button catalonia"></label>
				
				         	<input type="radio" name="radio-area" id="radio-area2" value="spain"  />
				         	<label for="radio-area2" class="custom-button spain"></label>
				
				         	<input type="radio" name="radio-area" id="radio-area3" value="europe"   />
				         	<label for="radio-area3" class="custom-button europe"></label>
			
				         	<input type="radio" name="radio-area" id="radio-area4" value="world" />
				         	<label for="radio-area4" class="custom-button world"></label>
				    </fieldset>
			    </div>
			    <div class="filterPopupInputTitle">Fundation</div>
			    <div class="filterPopupInput bottomLine">
				    <div data-role="rangeslider">
	                        <input type="range" name="yearFrom" id="yearFrom" min="1899" max="2014" value="1899">
	                        <input type="range" name="yearTo" id="yearTo" min="1899" max="2014" value="2014">
	                 </div>
                 </div>
                 <div class="filterPopupInputTitle">Affiliates </div> 
                 <div class="filterPopupInput">            
	           	     <div data-role="rangeslider">
	                        <input type="range" name="numFansFrom" id="numFansFrom" min="1" max="5555" value="1">
	                        <input type="range" name="numFansTo" id="numFansTo" min="1" max="5555" value="5555">
	                 </div>
	             </div>    
			</form>    
		</div>
	    <div id="innerfilterPopupBottom">
			<div class="innerTextfilterPopupBottom reset"><a  onclick="filterPenyes.resetFilter()" class="buttonHover">Reset</a></div>
			<div class="innerTextfilterPopupBottom search"><a onclick="filterPenyes.search()" class="buttonHover">Search</a></div>			
		</div>	
	</div>	
</div>

