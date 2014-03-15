<div id="filterPopup">
	<div data-role="fieldcontain">
		<div id="innerfilterPopupHeader">
			<div class="innerTextfilterPopupHeader cancel"><a onclick="closeFilter()"></a></div>
			<div class="innerTextfilterPopupHeader filter" >Filtro</div>
			<div class="innerTextfilterPopupHeader done"><a onclick="closeFilter()" class="buttonHover">Done</a></div>
		</div>	
		<div id="innerfilterPopup">
			<form id="filterForm">
				<div class="filterPopupInputTitle">Area</div>
				<div class="filterPopupInput bottomLine">
				    <fieldset data-role="controlgroup" data-type="horizontal" style="text-align: center" >
				         	<input type="radio" name="radio-choice-2" id="radio-choice-21" value="choice-1" checked="checked" />
				         	<label for="radio-choice-21" class="custom-button catalonia"></label>
				
				         	<input type="radio" name="radio-choice-2" id="radio-choice-22" value="choice-2"  />
				         	<label for="radio-choice-22" class="custom-button spain"></label>
				
				         	<input type="radio" name="radio-choice-2" id="radio-choice-23" value="choice-3"  />
				         	<label for="radio-choice-23" class="custom-button europe"></label>
			
				         	<input type="radio" name="radio-choice-2" id="radio-choice-24" value="choice-4"  />
				         	<label for="radio-choice-24" class="custom-button world"></label>
				    </fieldset>
			    </div>
			    <div class="filterPopupInputTitle">Año de Fundación</div>
			    <div class="filterPopupInput bottomLine">
				    <div data-role="rangeslider">
	                        <input type="range" name="range-1a" id="range-1a" min="1899" max="2014" value="1899">
	                        <input type="range" name="range-1b" id="range-1b" min="1899" max="2014" value="2014">
	                 </div>
                 </div>
                 <div class="filterPopupInputTitle">Número de Socios</div> 
                 <div class="filterPopupInput">            
	           	     <div data-role="rangeslider">
	                        <input type="range" name="range-2a" id="range-2a" min="1" max="5555" value="1">
	                        <input type="range" name="range-2b" id="range-2b" min="1" max="5555" value="5555">
	                 </div>
	             </div>    
			</form>    
		</div>
	    <div id="innerfilterPopupBottom">
			<div class="innerTextfilterPopupBottom"><a id="resetButton" onclick="resetFilter()" class="buttonHover">Reset</a></div>
		</div>	
	</div>	
</div>

