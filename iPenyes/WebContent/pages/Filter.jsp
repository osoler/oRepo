<div id="filterPopup">
	<div data-role="fieldcontain">
		<div>
			<div class="voidHeader">&nbsp;</div>
			<div class="filterLinkHeader">
				<div class="filterLogo filter">
					<div class="closer filter" onclick="filterPenyes.closeFilter()"></div>
				</div>
				<div class="voidLogo"></div>
			</div>
			<div id="titleFilter" class="innerTextfilterPopupHeader"></div>
		</div>
		<div id="innerfilterPopup">
			<form id="filterForm">
				<div id="titleArea" class="filterPopupInputTitle"></div>
				<div class="filterPopupInput bottomLine">
					<fieldset data-role="controlgroup" data-type="horizontal"
						style="text-align: center">
						<input type="radio" name="radio-area" id="radio-area1"
							value="catalonia" checked="checked" /> <label for="radio-area1"
							class="custom-button catalonia"></label> <input type="radio"
							name="radio-area" id="radio-area2" value="spain" /> <label
							for="radio-area2" class="custom-button spain"></label> <input
							type="radio" name="radio-area" id="radio-area3" value="world" />
						<label for="radio-area3" class="custom-button world"></label>
					</fieldset>
				</div>
				<div id="titleFundation" class="filterPopupInputTitle"></div>
				<div class="filterPopupInput bottomLine">
					<div data-role="rangeslider">
						<input type="range" name="yearFrom" id="yearFrom" min="1957"
							max="2015" value="1957"> <input type="range"
							name="yearTo" id="yearTo" min="1957" max="2015" value="2015">
					</div>
				</div>
				<div id="titleName" class="filterPopupInputTitle"></div>
				<div class="filterPopupInput">
					<input type="search" name="search" id="search-basic" value="" />
				</div>
			</form>
		</div>
		<div id="innerfilterPopupBottom">
			<div class="innerTextfilterPopupBottom reset">
				<div id="textReset" onclick="filterPenyes.resetFilter()"
					class="buttonHover"></div>
			</div>
			<div class="innerTextfilterPopupBottom search">
				<div id="textSearch" onclick="filterPenyes.search()"
					class="buttonHover"></div>
			</div>
		</div>
	</div>
</div>

