<div data-role="page" id="detailPenyes">
	<div data-role="header" data-position="fixed"  data-id="header" data-tap-toggle="false">
		<div>
			<div  id="detailLeft"><a id="ios-arrow-left" data-role="button" onclick="detailPenyes.back()"></a></div>
			<div  id="detailRight"><a id="mapLogoLink" onclick="detailPenyes.showPenyaInMap()"><img class="mapLogo"></a></div>		
			<div  class="headerLogoImg">&nbsp;</div>		
		</div>	
		<div class="infiniteShadowTop"><div class="innerInfiniteShadowTop"></div></div>
	</div><!-- /header --> 
			
    <div data-role="content" id="contentDetailPenyes">
    	<div id="penyaSelected-info0" class="detailPenyes_divheader ui-corner-all ui-shadow div_padding_v">
				<div>
					<div class="detailPenyes_coat"><img id="penyaSelected-logo" class="desc-icon" src="/images/spinner.gif" onclick="detailPenyes.openLogo()"></div>
					<div class="detailPenyes_description"> 
						<div id="penyaSelected-name" class="detailPenyes_name"></div>
						<div id="penyaSelected-socisfundation" class="detailPenyes_socis_fundation">
							<div id="penyaSelected-socis" class="detailPenyes_socis"></div>
							<div id="penyaSelected-fundation" class="detailPenyes_fundation"></div>
						</div>
					</div>				
				</div>
		</div>   
		<div id="penyaSelected-info1" class=" detailPenyes_div  ui-corner-all ui-shadow div_padding_v"></div>						
		<div id="penyaSelected-info2" class=" detailPenyes_div  ui-corner-all ui-shadow div_padding_v"></div>  
		
					 
    </div><!-- /content -->
	<div data-role="footer" data-position="fixed" data-tap-toggle="false"  data-id="footer" id="detailFooter">	
		<div class="infiniteShadowBottom"><div class="innerInfiniteShadowBottom"></div></div>
	</div>    
</div>

