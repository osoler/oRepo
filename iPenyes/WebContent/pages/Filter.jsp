<div id="filterPopup">
	<div data-role="fieldcontain">
		<div>
			<div  class="voidHeader">&nbsp;</div>
			<div  class="filterLinkHeader">
				<div class="filterLogo filter"><div class="closer filter" onclick="filterPenyes.closeFilter()"></div></div>
				<div class="voidLogo"></div>				
			</div>	
			<div id="titleFilter" class="innerTextfilterPopupHeader"></div>			
		</div>
		<div id="innerfilterPopup">
			<form id="filterForm">
				<div id="titleArea" class="filterPopupInputTitle"></div>
				<div class="filterPopupInput bottomLine">
				    <fieldset data-role="controlgroup" data-type="horizontal" style="text-align: center" >
				         	<input type="radio" name="radio-area" id="radio-area1" value="catalonia" checked="checked"/>
				         	<label for="radio-area1" class="custom-button catalonia"></label>
				
				         	<input type="radio" name="radio-area" id="radio-area2" value="spain"  />
				         	<label for="radio-area2" class="custom-button spain"></label>			
			
				         	<input type="radio" name="radio-area" id="radio-area3" value="world" />
				         	<label for="radio-area3" class="custom-button world"></label>
				    </fieldset>
			    </div>
			    <div id="titleFundation" class="filterPopupInputTitle"></div>
			    <div class="filterPopupInput bottomLine">
				    <div data-role="rangeslider">
	                        <input type="range" name="yearFrom" id="yearFrom" min="1899" max="2014" value="1899">
	                        <input type="range" name="yearTo" id="yearTo" min="1899" max="2014" value="2014">
	                 </div>
                 </div>
                 <div id="titleAffiliates" class="filterPopupInputTitle"></div> 
                 <div class="filterPopupInput">            
	           	     <div data-role="rangeslider">
	                        <input type="range" name="numFansFrom" id="numFansFrom" min="1" max="5555" value="1">
	                        <input type="range" name="numFansTo" id="numFansTo" min="1" max="5555" value="5555">
	                 </div>
	             </div>    
			</form>    
		</div>
	    <div id="innerfilterPopupBottom">
			<div class="innerTextfilterPopupBottom reset"><div  id="textReset" onclick="filterPenyes.resetFilter()" class="buttonHover"></div></div>
			<div class="innerTextfilterPopupBottom search"><div id="textSearch" onclick="filterPenyes.search()" class="buttonHover"></div></div>			
		</div>	
	</div>	
</div>

