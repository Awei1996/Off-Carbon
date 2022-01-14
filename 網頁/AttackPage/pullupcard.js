var textcardSDC = document.getElementsByClassName('SpeciesDiversityContent')[0];
var textcardOAC = document.getElementsByClassName('OceanAcidificationContent')[0];
var textcardMIC = document.getElementsByClassName('MeltingIceContent')[0];
var textcardFFC = document.getElementsByClassName('FireForestContent')[0];
var textcardHWC = document.getElementsByClassName('HeatWaveContent')[0];
var textcardECC = document.getElementsByClassName('ExtremeClimateContent')[0];
var textcardDSC = document.getElementsByClassName('DiseaseContent')[0];
var textcardFSC = document.getElementsByClassName('FoodShortageContent')[0];
var textcardESC = document.getElementsByClassName('EconomicShockContent')[0];
var MainMenuControl = document.getElementsByClassName('MainMenu')[0];
var SteamControl = document.getElementsByClassName('Steam')[0];
var DisasterControl = document.getElementsByClassName('Disaster')[0];
var SDCBGControl = document.getElementsByClassName('SDCBG')[0];
var OACBGControl = document.getElementsByClassName('OACBG')[0];
var MICBGControl = document.getElementsByClassName('MICBG')[0];
var FFCBGControl = document.getElementsByClassName('FFCBG')[0];
var HWCBGControl = document.getElementsByClassName('HWCBG')[0];
var ECCBGControl = document.getElementsByClassName('ECCBG')[0];
var DSCBGControl = document.getElementsByClassName('DSCBG')[0];
var FSCBGControl = document.getElementsByClassName('FSCBG')[0];
var ESCBGControl = document.getElementsByClassName('ESCBG')[0];
var BbtnControl = document.getElementsByClassName('Backbutton')[0];

																




document.getElementsByClassName('SpeciesDiversity')[0].onclick = function() {
	
	var SDCContentControl = document.getElementsByClassName('SDCContent')[0];
	var SDCBAControl = document.getElementsByClassName('SDCBA')[0];
	
	var SDCpart1Control = document.getElementsByClassName('SDCpart1')[0];
	var SDCpart1TitleControl = document.getElementsByClassName('SDCpart1Title')[0];
	var SDCpart1ContenttextControl = document.getElementsByClassName('SDCpart1Contenttext')[0];
	

	
	var SDCpart2Control = document.getElementsByClassName('SDCpart2')[0];
	var SDCpart2TitleControl = document.getElementsByClassName('SDCpart2Title')[0];
	var SDCpart2ContenttextControl = document.getElementsByClassName('SDCpart2Contenttext')[0];
	

	
	var SDCpart3Control = document.getElementsByClassName('SDCpart3')[0];
	var SDCpart3TitleControl = document.getElementsByClassName('SDCpart3Title')[0];
	var SDCpart3ContenttextControl = document.getElementsByClassName('SDCpart3Contenttext')[0];
	

	
	var SDCpart4Control = document.getElementsByClassName('SDCpart4')[0];
	var SDCpart4TitleControl = document.getElementsByClassName('SDCpart4Title')[0];
	var SDCpart4ContenttextControl = document.getElementsByClassName('SDCpart4Contenttext')[0];
	location.href = "#Menu";


	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardSDC.classList.remove('close'); 
		textcardSDC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		SDCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		SDCpart1ContenttextControl.style.opacity = 0;
		SDCpart2ContenttextControl.style.opacity = 0;
		SDCpart3ContenttextControl.style.opacity = 0;
		SDCpart4ContenttextControl.style.opacity = 0;
 
		document.getElementsByClassName('SDCpart1')[0].onclick =function()
		{
							
			SDCContentControl.classList.add('open');
			SDCpart1Control.classList.add('open');
			SDCpart1TitleControl.classList.add('open');
			SDCpart1ContenttextControl.classList.add('open');

			SDCContentControl.classList.remove('close');
			SDCpart1Control.classList.remove('close');
			SDCpart1TitleControl.classList.remove('close');

			SDCContentControl.style.zIndex = 18;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1TitleControl.style.zIndex = 19;
			SDCpart1ContenttextControl.style.zIndex = 19;
			SDCpart2Control.style.zIndex = 16;
			SDCpart2TitleControl.style.zIndex = 16;
			SDCpart2ContenttextControl.style.zIndex = 16;
			SDCpart3Control.style.zIndex = 16;
			SDCpart3TitleControl.style.zIndex = 16;
			SDCpart3ContenttextControl.style.zIndex = 16;
			SDCpart4Control.style.zIndex = 16;
			SDCpart4TitleControl.style.zIndex = 16;
			SDCpart4ContenttextControl.style.zIndex = 16;
			SDCBAControl.style.opacity = 1;

			SDCpart1ContenttextControl.style.opacity = 1;
			
			SDCpart1ContenttextControl.style.display = 'flex';
			SDCpart2ContenttextControl.style.display = 'none';
			SDCpart3ContenttextControl.style.display = 'none';
			SDCpart4ContenttextControl.style.display = 'none';

		
		}; 
		
		document.getElementsByClassName('SDCpart2')[0].onclick =function()
		{
		
			SDCContentControl.classList.add('open');
			SDCpart2Control.classList.add('open');
			SDCpart2TitleControl.classList.add('open');
			SDCpart2ContenttextControl.classList.add('open');
		
			SDCContentControl.classList.remove('close');
			SDCpart2Control.classList.remove('close');
			SDCpart2TitleControl.classList.remove('close');
			
			SDCContentControl.style.zIndex = 18;
			SDCpart1Control.style.zIndex = 16;
			SDCpart1TitleControl.style.zIndex = 16;
			SDCpart1ContenttextControl.style.zIndex = 16;
			SDCpart2Control.style.zIndex = 19;
			SDCpart2TitleControl.style.zIndex = 19;
			SDCpart2ContenttextControl.style.zIndex = 19;
			SDCpart3Control.style.zIndex = 16;
			SDCpart3TitleControl.style.zIndex = 16;
			SDCpart3ContenttextControl.style.zIndex = 16;
			SDCpart4Control.style.zIndex = 16;
			SDCpart4TitleControl.style.zIndex = 16;
			SDCpart4ContenttextControl.style.zIndex = 16;
			SDCBAControl.style.opacity = 1;
			
			SDCpart2ContenttextControl.style.opacity = 1;
			
			SDCpart1ContenttextControl.style.display = 'none';
			SDCpart2ContenttextControl.style.display = 'flex';
			SDCpart3ContenttextControl.style.display = 'none';
			SDCpart4ContenttextControl.style.display = 'none';

		}; 
		
		document.getElementsByClassName('SDCpart3')[0].onclick =function()
		{
		
			SDCContentControl.classList.add('open');
			SDCpart3Control.classList.add('open');
			SDCpart3TitleControl.classList.add('open');
			SDCpart3ContenttextControl.classList.add('open');
		
			SDCContentControl.classList.remove('close');
			SDCpart3Control.classList.remove('close');
			SDCpart3TitleControl.classList.remove('close');

			SDCContentControl.style.zIndex = 18;
			SDCpart1Control.style.zIndex = 16;
			SDCpart1TitleControl.style.zIndex = 16;
			SDCpart1ContenttextControl.style.zIndex = 16;
			SDCpart2Control.style.zIndex = 16;
			SDCpart2TitleControl.style.zIndex = 16;
			SDCpart2ContenttextControl.style.zIndex = 16;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3TitleControl.style.zIndex = 19;
			SDCpart3ContenttextControl.style.zIndex = 19;
			SDCpart4Control.style.zIndex = 16;
			SDCpart4TitleControl.style.zIndex = 16;
			SDCpart4ContenttextControl.style.zIndex = 16;
			SDCBAControl.style.opacity = 1;
	
			SDCpart3ContenttextControl.style.opacity = 1;
			
			SDCpart1ContenttextControl.style.display = 'none';
			SDCpart2ContenttextControl.style.display = 'none';
			SDCpart3ContenttextControl.style.display = 'flex';
			SDCpart4ContenttextControl.style.display = 'none';
		
		}; 
		
		document.getElementsByClassName('SDCpart4')[0].onclick =function()
		{
		
			SDCContentControl.classList.add('open');
			SDCpart4Control.classList.add('open');
			SDCpart4TitleControl.classList.add('open');
			SDCpart4ContenttextControl.classList.add('open');
		
			SDCContentControl.classList.remove('close');
			SDCpart4Control.classList.remove('close');
			SDCpart4TitleControl.classList.remove('close');
			
			SDCContentControl.style.zIndex = 18;
			SDCpart1Control.style.zIndex = 16;
			SDCpart1TitleControl.style.zIndex = 16;
			SDCpart1ContenttextControl.style.zIndex = 16;
			SDCpart2Control.style.zIndex = 16;
			SDCpart2TitleControl.style.zIndex = 16;
			SDCpart2ContenttextControl.style.zIndex = 16;
			SDCpart3Control.style.zIndex = 16;
			SDCpart3TitleControl.style.zIndex = 16;
			SDCpart3ContenttextControl.style.zIndex = 16;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4TitleControl.style.zIndex = 19;
			SDCpart4ContenttextControl.style.zIndex = 19;
			SDCBAControl.style.opacity = 1;
			
			SDCpart4ContenttextControl.style.opacity = 1;
			
			SDCpart1ContenttextControl.style.display = 'none';
			SDCpart2ContenttextControl.style.display = 'none';
			SDCpart3ContenttextControl.style.display = 'none';
			SDCpart4ContenttextControl.style.display = 'flex';
			
		}; 
		
		document.getElementsByClassName('SDCBA')[0].onclick =function()
		{
			SDCContentControl.classList.remove('open');
			
			SDCpart1Control.classList.remove('open');
			SDCpart1TitleControl.classList.remove('open');
			SDCpart1ContenttextControl.classList.remove('open');
			SDCpart2Control.classList.remove('open');
			SDCpart2TitleControl.classList.remove('open');
			SDCpart2ContenttextControl.classList.remove('open');
			SDCpart3Control.classList.remove('open');
			SDCpart3TitleControl.classList.remove('open');
			SDCpart3ContenttextControl.classList.remove('open');
			SDCpart4Control.classList.remove('open');
			SDCpart4TitleControl.classList.remove('open');
			SDCpart4ContenttextControl.classList.remove('open');
			
			SDCContentControl.classList.add('close');
			
			SDCpart1Control.classList.add('close');
			SDCpart1TitleControl.classList.add('close');
			
			SDCpart2Control.classList.add('close');
			SDCpart2TitleControl.classList.add('close');
			
			SDCpart3Control.classList.add('close');
			SDCpart3TitleControl.classList.add('close');
		
			SDCpart4Control.classList.add('close');
			SDCpart4TitleControl.classList.add('close');
		
			SDCContentControl.style.zIndex = 15;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1TitleControl.style.zIndex = 19;
			SDCpart2Control.style.zIndex = 19;
			SDCpart2TitleControl.style.zIndex = 19;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3TitleControl.style.zIndex = 19;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4TitleControl.style.zIndex = 19;
			SDCBAControl.style.opacity = 0;
			
			SDCpart1ContenttextControl.style.opacity = 0;
			SDCpart2ContenttextControl.style.opacity = 0;
			SDCpart3ContenttextControl.style.opacity = 0;
			SDCpart4ContenttextControl.style.opacity = 0;
			
			SDCpart1ContenttextControl.style.display = 'flex';
			SDCpart2ContenttextControl.style.display = 'flex';
			SDCpart3ContenttextControl.style.display = 'flex';
			SDCpart4ContenttextControl.style.display = 'flex';
			
			
		}; 

  
		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('SpeciesDiversity')[0].value = 'close';
			textcardSDC.classList.remove('open'); 
			textcardSDC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			SDCContentControl.classList.remove('open');
			SDCpart1Control.classList.remove('open');
			SDCpart1TitleControl.classList.remove('open');
			SDCpart2Control.classList.remove('open');
			SDCpart2TitleControl.classList.remove('open');	
			SDCpart3Control.classList.remove('open');
			SDCpart3TitleControl.classList.remove('open');
			SDCpart4Control.classList.remove('open');
			SDCpart4TitleControl.classList.remove('open');
			
			SDCContentControl.style.zIndex = 15;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1TitleControl.style.zIndex = 19;
			SDCpart2Control.style.zIndex = 19;
			SDCpart2TitleControl.style.zIndex = 19;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3TitleControl.style.zIndex = 19;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4TitleControl.style.zIndex = 19;
			SDCBAControl.style.opacity = 0;
			
			SDCpart1ContenttextControl.style.display = 'flex';
			SDCpart2ContenttextControl.style.display = 'flex';
			SDCpart3ContenttextControl.style.display = 'flex';
			SDCpart4ContenttextControl.style.display = 'flex';
		};	
	
	} 
  
};

document.getElementsByClassName('OceanAcidification')[0].onclick = function() {
	
	var OACContentControl = document.getElementsByClassName('OACContent')[0];
	var OACBAControl = document.getElementsByClassName('OACBA')[0];
	
	var OACpart1Control = document.getElementsByClassName('OACpart1')[0];
	var OACpart1TitleControl = document.getElementsByClassName('OACpart1Title')[0];
	var OACpart1ContenttextControl = document.getElementsByClassName('OACpart1Contenttext')[0];
	
	var OACpart2Control = document.getElementsByClassName('OACpart2')[0];
	var OACpart2TitleControl = document.getElementsByClassName('OACpart2Title')[0];
	var OACpart2ContenttextControl = document.getElementsByClassName('OACpart2Contenttext')[0];
	
	var OACpart3Control = document.getElementsByClassName('OACpart3')[0];
	var OACpart3TitleControl = document.getElementsByClassName('OACpart3Title')[0];
	var OACpart3ContenttextControl = document.getElementsByClassName('OACpart3Contenttext')[0];
	
	var OACpart4Control = document.getElementsByClassName('OACpart4')[0];
	var OACpart4TitleControl = document.getElementsByClassName('OACpart4Title')[0];
	var OACpart4ContenttextControl = document.getElementsByClassName('OACpart4Contenttext')[0];
	location.href = "#Menu";

	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardOAC.classList.remove('close'); 
		textcardOAC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		OACBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		OACpart1ContenttextControl.style.opacity = 0;
		OACpart2ContenttextControl.style.opacity = 0;
		OACpart3ContenttextControl.style.opacity = 0;
		OACpart4ContenttextControl.style.opacity = 0;
		
		document.getElementsByClassName('OACpart1')[0].onclick =function()
		{
							
			OACContentControl.classList.add('open');
			OACpart1Control.classList.add('open');
			OACpart1TitleControl.classList.add('open');
			OACpart1ContenttextControl.classList.add('open');

			OACContentControl.classList.remove('close');
			OACpart1Control.classList.remove('close');
			OACpart1TitleControl.classList.remove('close');

			OACContentControl.style.zIndex = 18;
			OACpart1Control.style.zIndex = 19;
			OACpart1TitleControl.style.zIndex = 19;
			OACpart1ContenttextControl.style.zIndex = 19;
			OACpart2Control.style.zIndex = 16;
			OACpart2TitleControl.style.zIndex = 16;
			OACpart2ContenttextControl.style.zIndex = 16;
			OACpart3Control.style.zIndex = 16;
			OACpart3TitleControl.style.zIndex = 16;
			OACpart3ContenttextControl.style.zIndex = 16;
			OACpart4Control.style.zIndex = 16;
			OACpart4TitleControl.style.zIndex = 16;
			OACpart4ContenttextControl.style.zIndex = 16;
			OACBAControl.style.opacity = 1;

			OACpart1ContenttextControl.style.opacity = 1;
			
			OACpart1ContenttextControl.style.display = 'flex';
			OACpart2ContenttextControl.style.display = 'none';
			OACpart3ContenttextControl.style.display = 'none';
			OACpart4ContenttextControl.style.display = 'none';
			
		}; 
		
		document.getElementsByClassName('OACpart2')[0].onclick =function()
		{
		
			OACContentControl.classList.add('open');
			OACpart2Control.classList.add('open');
			OACpart2TitleControl.classList.add('open');
			OACpart2ContenttextControl.classList.add('open');
		
			OACContentControl.classList.remove('close');
			OACpart2Control.classList.remove('close');
			OACpart2TitleControl.classList.remove('close');

			OACContentControl.style.zIndex = 18;
			OACpart1Control.style.zIndex = 16;
			OACpart1TitleControl.style.zIndex = 16;
			OACpart1ContenttextControl.style.zIndex = 16;
			OACpart2Control.style.zIndex = 19;
			OACpart2TitleControl.style.zIndex = 19;
			OACpart2ContenttextControl.style.zIndex = 19;
			OACpart3Control.style.zIndex = 16;
			OACpart3TitleControl.style.zIndex = 16;
			OACpart3ContenttextControl.style.zIndex = 16;
			OACpart4Control.style.zIndex = 16;
			OACpart4TitleControl.style.zIndex = 16;
			OACpart4ContenttextControl.style.zIndex = 16;
			OACBAControl.style.opacity = 1;
			
			OACpart2ContenttextControl.style.opacity = 1;
			
			OACpart1ContenttextControl.style.display = 'none';
			OACpart2ContenttextControl.style.display = 'flex';
			OACpart3ContenttextControl.style.display = 'none';
			OACpart4ContenttextControl.style.display = 'none';

		}; 
		
		document.getElementsByClassName('OACpart3')[0].onclick =function()
		{
		
			OACContentControl.classList.add('open');
			OACpart3Control.classList.add('open');
			OACpart3TitleControl.classList.add('open');
			OACpart3ContenttextControl.classList.add('open');
		
			OACContentControl.classList.remove('close');
			OACpart3Control.classList.remove('close');
			OACpart3TitleControl.classList.remove('close');

			OACContentControl.style.zIndex = 18;
			OACpart1Control.style.zIndex = 16;
			OACpart1TitleControl.style.zIndex = 16;
			OACpart1ContenttextControl.style.zIndex = 16;
			OACpart2Control.style.zIndex = 16;
			OACpart2TitleControl.style.zIndex = 16;
			OACpart2ContenttextControl.style.zIndex = 16;
			OACpart3Control.style.zIndex = 19;
			OACpart3TitleControl.style.zIndex = 19;
			OACpart3ContenttextControl.style.zIndex = 19;
			OACpart4Control.style.zIndex = 16;
			OACpart4TitleControl.style.zIndex = 16;
			OACpart4ContenttextControl.style.zIndex = 16;
			OACBAControl.style.opacity = 1;
	
			OACpart3ContenttextControl.style.opacity = 1;
			
			OACpart1ContenttextControl.style.display = 'none';
			OACpart2ContenttextControl.style.display = 'none';
			OACpart3ContenttextControl.style.display = 'flex';
			OACpart4ContenttextControl.style.display = 'none';
			
		}; 
		
		document.getElementsByClassName('OACpart4')[0].onclick =function()
		{
		
			OACContentControl.classList.add('open');
			OACpart4Control.classList.add('open');
			OACpart4TitleControl.classList.add('open');
			OACpart4ContenttextControl.classList.add('open');
		
			OACContentControl.classList.remove('close');
			OACpart4Control.classList.remove('close');
			OACpart4TitleControl.classList.remove('close');

			OACContentControl.style.zIndex = 18;
			OACpart1Control.style.zIndex = 16;
			OACpart1TitleControl.style.zIndex = 16;
			OACpart1ContenttextControl.style.zIndex = 16;
			OACpart2Control.style.zIndex = 16;
			OACpart2TitleControl.style.zIndex = 16;
			OACpart2ContenttextControl.style.zIndex = 16;
			OACpart3Control.style.zIndex = 16;
			OACpart3TitleControl.style.zIndex = 16;
			OACpart3ContenttextControl.style.zIndex = 16;
			OACpart4Control.style.zIndex = 19;
			OACpart4TitleControl.style.zIndex = 19;
			OACpart4ContenttextControl.style.zIndex = 19;
			OACBAControl.style.opacity = 1;
			
			OACpart4ContenttextControl.style.opacity = 1;
			
			OACpart1ContenttextControl.style.display = 'none';
			OACpart2ContenttextControl.style.display = 'none';
			OACpart3ContenttextControl.style.display = 'none';
			OACpart4ContenttextControl.style.display = 'flex';
			
		}; 
		
		document.getElementsByClassName('OACBA')[0].onclick =function()
		{
			OACContentControl.classList.remove('open');
			
			OACpart1Control.classList.remove('open');
			OACpart1TitleControl.classList.remove('open');
			OACpart1ContenttextControl.classList.remove('open');
			OACpart2Control.classList.remove('open');
			OACpart2TitleControl.classList.remove('open');
			OACpart2ContenttextControl.classList.remove('open');
			OACpart3Control.classList.remove('open');
			OACpart3TitleControl.classList.remove('open');
			OACpart3ContenttextControl.classList.remove('open');
			OACpart4Control.classList.remove('open');
			OACpart4TitleControl.classList.remove('open');
			OACpart4ContenttextControl.classList.remove('open');
			
			OACContentControl.classList.add('close');
			
			OACpart1Control.classList.add('close');
			OACpart1TitleControl.classList.add('close');
			
			OACpart2Control.classList.add('close');
			OACpart2TitleControl.classList.add('close');
			
			OACpart3Control.classList.add('close');
			OACpart3TitleControl.classList.add('close');
		
			OACpart4Control.classList.add('close');
			OACpart4TitleControl.classList.add('close');
		
			OACContentControl.style.zIndex = 15;
			OACpart1Control.style.zIndex = 19;
			OACpart1TitleControl.style.zIndex = 19;
			OACpart2Control.style.zIndex = 19;
			OACpart2TitleControl.style.zIndex = 19;
			OACpart3Control.style.zIndex = 19;
			OACpart3TitleControl.style.zIndex = 19;
			OACpart4Control.style.zIndex = 19;
			OACpart4TitleControl.style.zIndex = 19;
			OACBAControl.style.opacity = 0;
			
			OACpart1ContenttextControl.style.opacity = 0;
			OACpart2ContenttextControl.style.opacity = 0;
			OACpart3ContenttextControl.style.opacity = 0;
			OACpart4ContenttextControl.style.opacity = 0;
			
			OACpart1ContenttextControl.style.display = 'flex';
			OACpart2ContenttextControl.style.display = 'flex';
			OACpart3ContenttextControl.style.display = 'flex';
			OACpart4ContenttextControl.style.display = 'flex';
				
		}; 
		
		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('OceanAcidification')[0].value = 'close';
			textcardOAC.classList.remove('open'); 
			textcardOAC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			OACContentControl.classList.remove('open');
			OACpart1Control.classList.remove('open');
			OACpart1TitleControl.classList.remove('open');
			OACpart2Control.classList.remove('open');
			OACpart2TitleControl.classList.remove('open');	
			OACpart3Control.classList.remove('open');
			OACpart3TitleControl.classList.remove('open');
			OACpart4Control.classList.remove('open');
			OACpart4TitleControl.classList.remove('open');
			
			OACContentControl.style.zIndex = 15;
			OACpart1Control.style.zIndex = 19;
			OACpart1TitleControl.style.zIndex = 19;
			OACpart2Control.style.zIndex = 19;
			OACpart2TitleControl.style.zIndex = 19;
			OACpart3Control.style.zIndex = 19;
			OACpart3TitleControl.style.zIndex = 19;
			OACpart4Control.style.zIndex = 19;
			OACpart4TitleControl.style.zIndex = 19;
			OACBAControl.style.opacity = 0;
			
			OACpart1ContenttextControl.style.display = 'flex';
			OACpart2ContenttextControl.style.display = 'flex';
			OACpart3ContenttextControl.style.display = 'flex';
			OACpart4ContenttextControl.style.display = 'flex';
		};	
	
	}  
  
};
	


document.getElementsByClassName('MeltingIce')[0].onclick = function() {
	
	var MICContentControl = document.getElementsByClassName('MICContent')[0];
	var MICBAControl = document.getElementsByClassName('MICBA')[0];
	
	var MICpart1Control = document.getElementsByClassName('MICpart1')[0];
	var MICpart1TitleControl = document.getElementsByClassName('MICpart1Title')[0];
	var MICpart1ContenttextControl = document.getElementsByClassName('MICpart1Contenttext')[0];

	var MICpart2Control = document.getElementsByClassName('MICpart2')[0];
	var MICpart2TitleControl = document.getElementsByClassName('MICpart2Title')[0];
	var MICpart2ContenttextControl = document.getElementsByClassName('MICpart2Contenttext')[0];
	
	var MICpart3Control = document.getElementsByClassName('MICpart3')[0];
	var MICpart3TitleControl = document.getElementsByClassName('MICpart3Title')[0];
	var MICpart3ContenttextControl = document.getElementsByClassName('MICpart3Contenttext')[0];
	
	var MICpart4Control = document.getElementsByClassName('MICpart4')[0];
	var MICpart4TitleControl = document.getElementsByClassName('MICpart4Title')[0];
	var MICpart4ContenttextControl = document.getElementsByClassName('MICpart4Contenttext')[0];
	location.href = "#Menu";


	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardMIC.classList.remove('close'); 
		textcardMIC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		MICBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		
		MICpart1ContenttextControl.style.opacity = 0;
		MICpart2ContenttextControl.style.opacity = 0;
		MICpart3ContenttextControl.style.opacity = 0;
		MICpart4ContenttextControl.style.opacity = 0;
  
		document.getElementsByClassName('MICpart1')[0].onclick =function()
		{
							
			MICContentControl.classList.add('open');
			MICpart1Control.classList.add('open');
			MICpart1TitleControl.classList.add('open');
			MICpart1ContenttextControl.classList.add('open');

			MICContentControl.classList.remove('close');
			MICpart1Control.classList.remove('close');
			MICpart1TitleControl.classList.remove('close');

			MICContentControl.style.zIndex = 18;
			MICpart1Control.style.zIndex = 19;
			MICpart1TitleControl.style.zIndex = 19;
			MICpart1ContenttextControl.style.zIndex = 19;
			MICpart2Control.style.zIndex = 16;
			MICpart2TitleControl.style.zIndex = 16;
			MICpart2ContenttextControl.style.zIndex = 16;
			MICpart3Control.style.zIndex = 16;
			MICpart3TitleControl.style.zIndex = 16;
			MICpart3ContenttextControl.style.zIndex = 16;
			MICpart4Control.style.zIndex = 16;
			MICpart4TitleControl.style.zIndex = 16;
			MICpart4ContenttextControl.style.zIndex = 16;
			MICBAControl.style.opacity = 1;

			MICpart1ContenttextControl.style.opacity = 1;
			
			MICpart1ContenttextControl.style.display = 'flex';
			MICpart2ContenttextControl.style.display = 'none';
			MICpart3ContenttextControl.style.display = 'none';
			MICpart4ContenttextControl.style.display = 'none';
	
		}; 
		
		document.getElementsByClassName('MICpart2')[0].onclick =function()
		{
		
			MICContentControl.classList.add('open');
			MICpart2Control.classList.add('open');
			MICpart2TitleControl.classList.add('open');
			MICpart2ContenttextControl.classList.add('open');
		
			MICContentControl.classList.remove('close');
			MICpart2Control.classList.remove('close');
			MICpart2TitleControl.classList.remove('close');
			
			MICContentControl.style.zIndex = 18;
			MICpart1Control.style.zIndex = 16;
			MICpart1TitleControl.style.zIndex = 16;
			MICpart1ContenttextControl.style.zIndex = 16;
			MICpart2Control.style.zIndex = 19;
			MICpart2TitleControl.style.zIndex = 19;
			MICpart2ContenttextControl.style.zIndex = 19;
			MICpart3Control.style.zIndex = 16;
			MICpart3TitleControl.style.zIndex = 16;
			MICpart3ContenttextControl.style.zIndex = 16;
			MICpart4Control.style.zIndex = 16;
			MICpart4TitleControl.style.zIndex = 16;
			MICpart4ContenttextControl.style.zIndex = 16;
			MICBAControl.style.opacity = 1;
			
			MICpart2ContenttextControl.style.opacity = 1;
			
			MICpart1ContenttextControl.style.display = 'none';
			MICpart2ContenttextControl.style.display = 'flex';
			MICpart3ContenttextControl.style.display = 'none';
			MICpart4ContenttextControl.style.display = 'none';

		}; 
		
		document.getElementsByClassName('MICpart3')[0].onclick =function()
		{
		
			MICContentControl.classList.add('open');
			MICpart3Control.classList.add('open');
			MICpart3TitleControl.classList.add('open');
			MICpart3ContenttextControl.classList.add('open');
		
			MICContentControl.classList.remove('close');
			MICpart3Control.classList.remove('close');
			MICpart3TitleControl.classList.remove('close');

			MICContentControl.style.zIndex = 18;
			MICpart1Control.style.zIndex = 16;
			MICpart1TitleControl.style.zIndex = 16;
			MICpart1ContenttextControl.style.zIndex = 16;
			MICpart2Control.style.zIndex = 16;
			MICpart2TitleControl.style.zIndex = 16;
			MICpart2ContenttextControl.style.zIndex = 16;
			MICpart3Control.style.zIndex = 19;
			MICpart3TitleControl.style.zIndex = 19;
			MICpart3ContenttextControl.style.zIndex = 19;
			MICpart4Control.style.zIndex = 16;
			MICpart4TitleControl.style.zIndex = 16;
			MICpart4ContenttextControl.style.zIndex = 16;
			MICBAControl.style.opacity = 1;
	
			MICpart3ContenttextControl.style.opacity = 1;
			
			MICpart1ContenttextControl.style.display = 'none';
			MICpart2ContenttextControl.style.display = 'none';
			MICpart3ContenttextControl.style.display = 'flex';
			MICpart4ContenttextControl.style.display = 'none';	
		
		}; 
		
		document.getElementsByClassName('MICpart4')[0].onclick =function()
		{
		
			MICContentControl.classList.add('open');
			MICpart4Control.classList.add('open');
			MICpart4TitleControl.classList.add('open');
			MICpart4ContenttextControl.classList.add('open');
		
			MICContentControl.classList.remove('close');
			MICpart4Control.classList.remove('close');
			MICpart4TitleControl.classList.remove('close');
			
			MICContentControl.style.zIndex = 18;
			MICpart1Control.style.zIndex = 16;
			MICpart1TitleControl.style.zIndex = 16;
			MICpart1ContenttextControl.style.zIndex = 16;
			MICpart2Control.style.zIndex = 16;
			MICpart2TitleControl.style.zIndex = 16;
			MICpart2ContenttextControl.style.zIndex = 16;
			MICpart3Control.style.zIndex = 16;
			MICpart3TitleControl.style.zIndex = 16;
			MICpart3ContenttextControl.style.zIndex = 16;
			MICpart4Control.style.zIndex = 19;
			MICpart4TitleControl.style.zIndex = 19;
			MICpart4ContenttextControl.style.zIndex = 19;
			MICBAControl.style.opacity = 1;
			
			MICpart4ContenttextControl.style.opacity = 1;
			
			MICpart1ContenttextControl.style.display = 'none';
			MICpart2ContenttextControl.style.display = 'none';
			MICpart3ContenttextControl.style.display = 'none';
			MICpart4ContenttextControl.style.display = 'flex';
			
		}; 
		
		document.getElementsByClassName('MICBA')[0].onclick =function()
		{
			MICContentControl.classList.remove('open');
			
			MICpart1Control.classList.remove('open');
			MICpart1TitleControl.classList.remove('open');
			MICpart1ContenttextControl.classList.remove('open');
			MICpart2Control.classList.remove('open');
			MICpart2TitleControl.classList.remove('open');
			MICpart2ContenttextControl.classList.remove('open');
			MICpart3Control.classList.remove('open');
			MICpart3TitleControl.classList.remove('open');
			MICpart3ContenttextControl.classList.remove('open');
			MICpart4Control.classList.remove('open');
			MICpart4TitleControl.classList.remove('open');
			MICpart4ContenttextControl.classList.remove('open');
			
			MICContentControl.classList.add('close');
			
			MICpart1Control.classList.add('close');
			MICpart1TitleControl.classList.add('close');
			
			MICpart2Control.classList.add('close');
			MICpart2TitleControl.classList.add('close');
			
			MICpart3Control.classList.add('close');
			MICpart3TitleControl.classList.add('close');
		
			MICpart4Control.classList.add('close');
			MICpart4TitleControl.classList.add('close');
		
			MICContentControl.style.zIndex = 15;
			MICpart1Control.style.zIndex = 19;
			MICpart1TitleControl.style.zIndex = 19;
			MICpart2Control.style.zIndex = 19;
			MICpart2TitleControl.style.zIndex = 19;
			MICpart3Control.style.zIndex = 19;
			MICpart3TitleControl.style.zIndex = 19;
			MICpart4Control.style.zIndex = 19;
			MICpart4TitleControl.style.zIndex = 19;
			MICBAControl.style.opacity = 0;
			
			MICpart1ContenttextControl.style.opacity = 0;
			MICpart2ContenttextControl.style.opacity = 0;
			MICpart3ContenttextControl.style.opacity = 0;
			MICpart4ContenttextControl.style.opacity = 0;
			
			MICpart1ContenttextControl.style.display = 'flex';
			MICpart2ContenttextControl.style.display = 'flex';
			MICpart3ContenttextControl.style.display = 'flex';
			MICpart4ContenttextControl.style.display = 'flex';
			
		}; 

		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('MeltingIce')[0].value = 'close';
			textcardMIC.classList.remove('open'); 
			textcardMIC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			MICContentControl.classList.remove('open');
			MICpart1Control.classList.remove('open');
			MICpart1TitleControl.classList.remove('open');
			MICpart2Control.classList.remove('open');
			MICpart2TitleControl.classList.remove('open');	
			MICpart3Control.classList.remove('open');
			MICpart3TitleControl.classList.remove('open');
			MICpart4Control.classList.remove('open');
			MICpart4TitleControl.classList.remove('open');
			
			MICContentControl.style.zIndex = 15;
			MICpart1Control.style.zIndex = 19;
			MICpart1TitleControl.style.zIndex = 19;
			MICpart2Control.style.zIndex = 19;
			MICpart2TitleControl.style.zIndex = 19;
			MICpart3Control.style.zIndex = 19;
			MICpart3TitleControl.style.zIndex = 19;
			MICpart4Control.style.zIndex = 19;
			MICpart4TitleControl.style.zIndex = 19;
			MICBAControl.style.opacity = 0;
			
			MICpart1ContenttextControl.style.display = 'flex';
			MICpart2ContenttextControl.style.display = 'flex';
			MICpart3ContenttextControl.style.display = 'flex';
			MICpart4ContenttextControl.style.display = 'flex';
		};	
	
	}
  
};

document.getElementsByClassName('FireForest')[0].onclick = function() {
	
	var FFCContentControl = document.getElementsByClassName('FireForestContent')[0];
	var FFCContenttextControl = document.getElementsByClassName('FFCContenttext')[0];
	var FFCBAControl = document.getElementsByClassName('FFCBA')[0];
	
	var FFCAmazonControl = document.getElementsByClassName('FFCAmazon')[0];
	var FFCAmazonContenttextControl = document.getElementsByClassName('FFCAmazonContenttext')[0];

	var FFCNAEUJPControl = document.getElementsByClassName('FFCNAEUJP')[0];
	var FFCNAEUJPContenttextControl = document.getElementsByClassName('FFCNAEUJPContenttext')[0];
	
	var FFCSBLControl = document.getElementsByClassName('FFCSBL')[0];
	var FFCSBLContenttextControl = document.getElementsByClassName('FFCSBLContenttext')[0];
	
	var FFCAUSControl = document.getElementsByClassName('FFCAUS')[0];
	var FFCAUSContenttextControl = document.getElementsByClassName('FFCAUSContenttext')[0];
	
	var FFCIconControl = document.getElementsByClassName('FFCIcon')[0];
	var FFCIconContenttextControl = document.getElementsByClassName('FFCIconContenttext')[0];
	location.href = "#Menu";
	
	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardFFC.classList.remove('close'); 
		textcardFFC.classList.add('open');
		
		FFCContentControl.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		FFCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
  
		document.getElementsByClassName('FFCAmazon')[0].onclick =function()
		{
							
			FFCContenttextControl.classList.add('open');
			FFCAmazonControl.classList.add('open');
			FFCAmazonContenttextControl.classList.add('open');

			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open');
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open');
			FFCAUSControl.classList.remove('open');
			FFCAUSContenttextControl.classList.remove('open');
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open');
			
			FFCBAControl.style.opacity = 1;
			FFCAmazonContenttextControl.style.zIndex = 19;
			FFCNAEUJPContenttextControl.style.zIndex = 16;
			FFCSBLContenttextControl.style.zIndex = 16;
			FFCAUSContenttextControl.style.zIndex = 16;
			FFCIconContenttextControl.style.zIndex = 16;
			
		}; 
		
		document.getElementsByClassName('FFCNAEUJP')[0].onclick =function()
		{
							
			FFCContenttextControl.classList.add('open');
			FFCNAEUJPControl.classList.add('open');
			FFCNAEUJPContenttextControl.classList.add('open');
			
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open');
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open');
			FFCAUSControl.classList.remove('open');
			FFCAUSContenttextControl.classList.remove('open');
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open');
			
			FFCBAControl.style.opacity = 1;			
			FFCAmazonContenttextControl.style.zIndex = 16;
			FFCNAEUJPContenttextControl.style.zIndex = 19;
			FFCSBLContenttextControl.style.zIndex = 16;
			FFCAUSContenttextControl.style.zIndex = 16;
			FFCIconContenttextControl.style.zIndex = 16;
			
		};
		
		document.getElementsByClassName('FFCSBL')[0].onclick =function()
		{
							
			FFCContenttextControl.classList.add('open');
			FFCSBLControl.classList.add('open');
			FFCSBLContenttextControl.classList.add('open');
			
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open');
			FFCAUSControl.classList.remove('open');
			FFCAUSContenttextControl.classList.remove('open');
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open');
			
			FFCBAControl.style.opacity = 1;
			FFCAmazonContenttextControl.style.zIndex = 16;
			FFCNAEUJPContenttextControl.style.zIndex = 16;
			FFCSBLContenttextControl.style.zIndex = 19;
			FFCAUSContenttextControl.style.zIndex = 16;
			FFCIconContenttextControl.style.zIndex = 16;
			
		};
		
		document.getElementsByClassName('FFCAUS')[0].onclick =function()
		{
							
			FFCContenttextControl.classList.add('open');
			FFCAUSControl.classList.add('open');
			FFCAUSContenttextControl.classList.add('open');
			
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open');
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open');
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open');
			
			FFCBAControl.style.opacity = 1;
			FFCAmazonContenttextControl.style.zIndex = 16;
			FFCNAEUJPContenttextControl.style.zIndex = 16;
			FFCSBLContenttextControl.style.zIndex = 16;
			FFCAUSContenttextControl.style.zIndex = 19;
			FFCIconContenttextControl.style.zIndex = 16;
				
		};
		
		document.getElementsByClassName('FFCIcon')[0].onclick =function()
		{
							
			FFCContenttextControl.classList.add('open');
			FFCIconControl.classList.add('open');
			FFCIconContenttextControl.classList.add('open');
			
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open');
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open');
			FFCAUSControl.classList.remove('open');
			FFCAUSContenttextControl.classList.remove('open');
			
			FFCBAControl.style.opacity = 1;
			FFCAmazonContenttextControl.style.zIndex = 16;
			FFCNAEUJPContenttextControl.style.zIndex = 16;
			FFCSBLContenttextControl.style.zIndex = 16;
			FFCAUSContenttextControl.style.zIndex = 16;
			FFCIconContenttextControl.style.zIndex = 19;
			
			
		};
		
		document.getElementsByClassName('FFCBA')[0].onclick =function()
		{
			
			FFCContenttextControl.classList.remove('open');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open');
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open');
			FFCAUSControl.classList.remove('open');
			FFCAUSContenttextControl.classList.remove('open');
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open');
			
			FFCAmazonContenttextControl.style.zIndex = 16;
			FFCNAEUJPContenttextControl.style.zIndex = 16;
			FFCSBLContenttextControl.style.zIndex = 16;
			FFCAUSContenttextControl.style.zIndex = 16;
			FFCIconContenttextControl.style.zIndex = 16;
			
			FFCBAControl.style.opacity = 0;
		}; 
		
		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('FireForest')[0].value = 'close';
			textcardFFC.classList.remove('open'); 
			textcardFFC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			FFCContentControl.classList.remove('open');
			FFCContenttextControl.classList.remove('open');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open')
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open')
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open')
			FFCAUSControl.classList.remove('open');
			FFCAUSContenttextControl.classList.remove('open')
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open')
			
			FFCContentControl.style.zIndex = 15;
			FFCAmazonContenttextControl.style.zIndex = 16;
			FFCNAEUJPContenttextControl.style.zIndex = 16;
			FFCSBLContenttextControl.style.zIndex = 16;
			FFCAUSContenttextControl.style.zIndex = 16;
			FFCIconContenttextControl.style.zIndex = 16;
			
			FFCBAControl.style.opacity = 0;
			
		};	
	}
}

document.getElementsByClassName('HeatWave')[0].onclick = function() {
	
	var HWCContentControl = document.getElementsByClassName('HeatWaveContent')[0];
	var HWCContenttextControl = document.getElementsByClassName('HWCContenttext')[0];
	var HWCBAControl = document.getElementsByClassName('HWCBA')[0];
	
	var HWCWEUControl = document.getElementsByClassName('HWCWEU')[0];
	var HWCWEUContenttextControl = document.getElementsByClassName('HWCWEUContenttext')[0];

	var HWCENNLControl = document.getElementsByClassName('HWCENNL')[0];
	var HWCENNLContenttextControl = document.getElementsByClassName('HWCENNLContenttext')[0];
	
	var HWCSWEControl = document.getElementsByClassName('HWCSWE')[0];
	var HWCSWEContenttextControl = document.getElementsByClassName('HWCSWEContenttext')[0];
	
	var HWCJPControl = document.getElementsByClassName('HWCJP')[0];
	var HWCJPContenttextControl = document.getElementsByClassName('HWCJPContenttext')[0];
	
	var HWCintroductionControl = document.getElementsByClassName('HWCintroduction')[0];
	location.href = "#Menu";
	
	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardHWC.classList.remove('close'); 
		textcardHWC.classList.add('open');
		
		HWCContentControl.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		HWCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		HWCContenttextControl.classList.add('open');
		HWCintroductionControl.classList.add('open');
		
		HWCWEUContenttextControl.style.zIndex = 16;
		HWCENNLContenttextControl.style.zIndex = 16;
		HWCSWEContenttextControl.style.zIndex = 16;
		HWCJPContenttextControl.style.zIndex = 16;
		HWCintroductionControl.style.zIndex = 19;
  
		document.getElementsByClassName('HWCWEU')[0].onclick =function()
		{
							
			HWCWEUControl.classList.add('open');
			HWCWEUContenttextControl.classList.add('open');

			HWCENNLControl.classList.remove('open');
			HWCENNLContenttextControl.classList.remove('open');
			HWCSWEControl.classList.remove('open');
			HWCSWEContenttextControl.classList.remove('open');
			HWCJPControl.classList.remove('open');
			HWCJPContenttextControl.classList.remove('open');
			
			HWCintroductionControl.classList.remove('open');
			
			HWCBAControl.style.opacity = 1;
			HWCWEUContenttextControl.style.zIndex = 19;
			HWCENNLContenttextControl.style.zIndex = 16;
			HWCSWEContenttextControl.style.zIndex = 16;
			HWCJPContenttextControl.style.zIndex = 16;
			HWCintroductionControl.style.zIndex = 16;
			
		}; 
		
		document.getElementsByClassName('HWCENNL')[0].onclick =function()
		{
										
			HWCENNLControl.classList.add('open');
			HWCENNLContenttextControl.classList.add('open');
			
			HWCWEUControl.classList.remove('open');
			HWCWEUContenttextControl.classList.remove('open');
			HWCSWEControl.classList.remove('open');
			HWCSWEContenttextControl.classList.remove('open');
			HWCJPControl.classList.remove('open');
			HWCJPContenttextControl.classList.remove('open');
			
			HWCintroductionControl.classList.remove('open');
			
			HWCBAControl.style.opacity = 1;
			HWCWEUContenttextControl.style.zIndex = 16;
			HWCENNLContenttextControl.style.zIndex = 19;
			HWCSWEContenttextControl.style.zIndex = 16;
			HWCJPContenttextControl.style.zIndex = 16;
			HWCintroductionControl.style.zIndex = 16;
			
		};
		
		document.getElementsByClassName('HWCSWE')[0].onclick =function()
		{
										
			HWCSWEControl.classList.add('open');
			HWCSWEContenttextControl.classList.add('open');
			
			HWCWEUControl.classList.remove('open');
			HWCWEUContenttextControl.classList.remove('open');
			HWCENNLControl.classList.remove('open');
			HWCENNLContenttextControl.classList.remove('open');
			HWCJPControl.classList.remove('open');
			HWCJPContenttextControl.classList.remove('open');
			HWCintroductionControl.classList.remove('open');
			
			HWCBAControl.style.opacity = 1;
			HWCWEUContenttextControl.style.zIndex = 16;
			HWCENNLContenttextControl.style.zIndex = 16;
			HWCSWEContenttextControl.style.zIndex = 19;
			HWCJPContenttextControl.style.zIndex = 16;
			HWCintroductionControl.style.zIndex = 16;
			
		};
		
		document.getElementsByClassName('HWCJP')[0].onclick =function()
		{
			HWCJPControl.classList.add('open');
			HWCJPContenttextControl.classList.add('open');	
			
			HWCWEUControl.classList.remove('open');
			HWCWEUContenttextControl.classList.remove('open');
			HWCENNLControl.classList.remove('open');
			HWCENNLContenttextControl.classList.remove('open');
			HWCSWEControl.classList.remove('open');
			HWCSWEContenttextControl.classList.remove('open');
			HWCintroductionControl.classList.remove('open');
			
			HWCBAControl.style.opacity = 1;
			HWCWEUContenttextControl.style.zIndex = 16;
			HWCENNLContenttextControl.style.zIndex = 16;
			HWCSWEContenttextControl.style.zIndex = 16;
			HWCJPContenttextControl.style.zIndex = 19;
			HWCintroductionControl.style.zIndex = 16;
				
		};
		
		document.getElementsByClassName('HWCBA')[0].onclick =function()
		{
			
			
			HWCWEUControl.classList.remove('open');
			HWCWEUContenttextControl.classList.remove('open');
			HWCENNLControl.classList.remove('open');
			HWCENNLContenttextControl.classList.remove('open');
			HWCSWEControl.classList.remove('open');
			HWCSWEContenttextControl.classList.remove('open');
			HWCJPControl.classList.remove('open');
			HWCJPContenttextControl.classList.remove('open');
			
			HWCintroductionControl.classList.add('open');
			
			HWCBAControl.style.opacity = 0;
			HWCWEUContenttextControl.style.zIndex = 16;
			HWCENNLContenttextControl.style.zIndex = 16;
			HWCSWEContenttextControl.style.zIndex = 16;
			HWCJPContenttextControl.style.zIndex = 16;
			HWCintroductionControl.style.zIndex = 19;
		}; 
		
		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('HeatWave')[0].value = 'close';
			textcardHWC.classList.remove('open'); 
			textcardHWC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');
			HWCContentControl.classList.remove('open');

			HWCWEUControl.classList.remove('open');
			HWCWEUContenttextControl.classList.remove('open');
			HWCENNLControl.classList.remove('open');
			HWCENNLContenttextControl.classList.remove('open');
			HWCSWEControl.classList.remove('open');
			HWCSWEContenttextControl.classList.remove('open');
			HWCJPControl.classList.remove('open');
			HWCJPContenttextControl.classList.remove('open');
			
			HWCintroductionControl.classList.remove('open');
			
			HWCBAControl.style.opacity = 0;
			HWCWEUContenttextControl.style.zIndex = 16;
			HWCENNLContenttextControl.style.zIndex = 16;
			HWCSWEContenttextControl.style.zIndex = 16;
			HWCJPContenttextControl.style.zIndex = 16;
			HWCintroductionControl.style.zIndex = 19;
			
		};	
	}
}

document.getElementsByClassName('ExtremeClimate')[0].onclick = function() {
	
	/*var FFCIconTitleControl = document.getElementsByClassName('FFCIconTitle')[0];*/
	var ECCContenttextControl = document.getElementsByClassName('ECCContenttext')[0];
	var ECCintroductionControl = document.getElementsByClassName('ECCintroduction')[0];
	
	var ECCJPControl = document.getElementsByClassName('ECCJP')[0];
	var ECCJPContenttextControl = document.getElementsByClassName('ECCJPContenttext')[0];
	
	var ECCCNControl = document.getElementsByClassName('ECCCN')[0];
	var ECCCNContenttextControl = document.getElementsByClassName('ECCCNContenttext')[0];
	
	var ECCAUSControl = document.getElementsByClassName('ECCAUS')[0];
	var ECCAUSContenttextControl = document.getElementsByClassName('ECCAUSContenttext')[0];
	
	var ECCTWControl = document.getElementsByClassName('ECCTW')[0];
	var ECCTWContenttextControl = document.getElementsByClassName('ECCTWContenttext')[0];
	
	var ECCUSAControl = document.getElementsByClassName('ECCUSA')[0];
	var ECCUSAContenttextControl = document.getElementsByClassName('ECCUSAContenttext')[0];
	
	var ECCIconControl = document.getElementsByClassName('ECCIcon')[0];
	/*var ECCIconTitleControl = document.getElementsByClassName('ECCIconTitle')[0];*/
	var ECCIconContenttextControl = document.getElementsByClassName('ECCIconContenttext')[0];
	
	var ECCBAControl = document.getElementsByClassName('ECCBA')[0];
	location.href = "#Menu";
	

	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardECC.classList.remove('close'); 
		textcardECC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		ECCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		ECCContenttextControl.classList.add('open');
		ECCintroductionControl.classList.add('open');
		
		document.getElementsByClassName('ECCIcon')[0].onclick =function()
		{
			
			ECCintroductionControl.classList.remove('open');
			
			ECCIconControl.classList.add('open');
			ECCIconContenttextControl.classList.add('open');
			
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			ECCIconContenttextControl.style.zIndex = 19;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 16;
			
			ECCBAControl.style.opacity = 1;
			
		
		}; 

		document.getElementsByClassName('ECCJP')[0].onclick =function()
		{
			
			ECCintroductionControl.classList.remove('open');
			
			ECCJPControl.classList.add('open');
			ECCJPContenttextControl.classList.add('open');
			
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 19;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 16;
			
			ECCBAControl.style.opacity = 1;


		}; 
		
		document.getElementsByClassName('ECCCN')[0].onclick =function()
		{	
			ECCintroductionControl.classList.remove('open');
			
			ECCCNControl.classList.add('open');
			ECCCNContenttextControl.classList.add('open');
			
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 19;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 16;
			
			ECCBAControl.style.opacity = 1;
		
		}; 
		
		document.getElementsByClassName('ECCAUS')[0].onclick =function()
		{
			ECCintroductionControl.classList.remove('open');
			
			ECCAUSControl.classList.add('open');
			ECCAUSContenttextControl.classList.add('open');
			
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 19;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 16;
			
			ECCBAControl.style.opacity = 1;
		
		}; 
		
		document.getElementsByClassName('ECCTW')[0].onclick =function()
		{
			ECCintroductionControl.classList.remove('open');
			
			ECCTWControl.classList.add('open');
			ECCTWContenttextControl.classList.add('open');
			
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			
			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 19;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 16;
			
			ECCBAControl.style.opacity = 1;

		};
		
		document.getElementsByClassName('ECCUSA')[0].onclick =function()
		{
			
			ECCintroductionControl.classList.remove('open');
			
			ECCUSAControl.classList.add('open');
			ECCUSAContenttextControl.classList.add('open');
			
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			
			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 19;
			ECCintroductionControl.style.zIndex = 16;
			
			ECCBAControl.style.opacity = 1;
			
		}; 	

	} 
	
		document.getElementsByClassName('ECCBA')[0].onclick =function()
		{
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			ECCintroductionControl.classList.add('open');

			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 19;
			
			ECCBAControl.style.opacity = 0;
		
		}; 

		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
			ECCJPControl.classList.remove('open');
			ECCJPContenttextControl.classList.remove('open');
			ECCCNControl.classList.remove('open');
			ECCCNContenttextControl.classList.remove('open');
			ECCAUSControl.classList.remove('open');
			ECCAUSContenttextControl.classList.remove('open');
			ECCTWControl.classList.remove('open');
			ECCTWContenttextControl.classList.remove('open');
			ECCUSAControl.classList.remove('open');
			ECCUSAContenttextControl.classList.remove('open');
			
			ECCIconContenttextControl.style.zIndex = 16;
			ECCJPContenttextControl.style.zIndex = 16;
			ECCCNContenttextControl.style.zIndex = 16;
			ECCAUSContenttextControl.style.zIndex = 16;
			ECCTWContenttextControl.style.zIndex = 16;
			ECCUSAContenttextControl.style.zIndex = 16;
			ECCintroductionControl.style.zIndex = 19;
			
			ECCintroductionControl.classList.add('open');
			ECCBAControl.style.opacity = 0;
			
			document.getElementsByClassName('ExtremeClimate')[0].value = 'close';
			textcardECC.classList.remove('open'); 
			textcardECC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');
			
		};	
	
};
document.getElementsByClassName('Disease')[0].onclick = function() {
	
	var DSCContentControl = document.getElementsByClassName('DSCContent')[0];
	var DSCBAControl = document.getElementsByClassName('DSCBA')[0];
	
	var DSCpart1Control = document.getElementsByClassName('DSCpart1')[0];
	var DSCpart1TitleControl = document.getElementsByClassName('DSCpart1Title')[0];
	var DSCpart1ContenttextControl = document.getElementsByClassName('DSCpart1Contenttext')[0];

	var DSCpart2Control = document.getElementsByClassName('DSCpart2')[0];
	var DSCpart2TitleControl = document.getElementsByClassName('DSCpart2Title')[0];
	var DSCpart2ContenttextControl = document.getElementsByClassName('DSCpart2Contenttext')[0];
	
	var DSCpart3Control = document.getElementsByClassName('DSCpart3')[0];
	var DSCpart3TitleControl = document.getElementsByClassName('DSCpart3Title')[0];
	var DSCpart3ContenttextControl = document.getElementsByClassName('DSCpart3Contenttext')[0];
	
	var DSCpart4Control = document.getElementsByClassName('DSCpart4')[0];
	var DSCpart4TitleControl = document.getElementsByClassName('DSCpart4Title')[0];
	var DSCpart4ContenttextControl = document.getElementsByClassName('DSCpart4Contenttext')[0];
	location.href = "#Menu";


	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardDSC.classList.remove('close'); 
		textcardDSC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		DSCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		
		DSCpart1ContenttextControl.style.opacity = 0;
		DSCpart2ContenttextControl.style.opacity = 0;
		DSCpart3ContenttextControl.style.opacity = 0;
		DSCpart4ContenttextControl.style.opacity = 0;
  
		document.getElementsByClassName('DSCpart1')[0].onclick =function()
		{
							
			DSCContentControl.classList.add('open');
			DSCpart1Control.classList.add('open');
			DSCpart1TitleControl.classList.add('open');
			DSCpart1ContenttextControl.classList.add('open');

			DSCContentControl.classList.remove('close');
			DSCpart1Control.classList.remove('close');
			DSCpart1TitleControl.classList.remove('close');

			DSCContentControl.style.zIndex = 18;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1TitleControl.style.zIndex = 19;
			DSCpart1ContenttextControl.style.zIndex = 19;
			DSCpart2Control.style.zIndex = 16;
			DSCpart2TitleControl.style.zIndex = 16;
			DSCpart2ContenttextControl.style.zIndex = 16;
			DSCpart3Control.style.zIndex = 16;
			DSCpart3TitleControl.style.zIndex = 16;
			DSCpart3ContenttextControl.style.zIndex = 16;
			DSCpart4Control.style.zIndex = 16;
			DSCpart4TitleControl.style.zIndex = 16;
			DSCpart4ContenttextControl.style.zIndex = 16;
			DSCBAControl.style.opacity = 1;

			DSCpart1ContenttextControl.style.opacity = 1;
			
			DSCpart1ContenttextControl.style.display = 'flex';
			DSCpart2ContenttextControl.style.display = 'none';
			DSCpart3ContenttextControl.style.display = 'none';
			DSCpart4ContenttextControl.style.display = 'none';
	
		}; 
		
		document.getElementsByClassName('DSCpart2')[0].onclick =function()
		{
		
			DSCContentControl.classList.add('open');
			DSCpart2Control.classList.add('open');
			DSCpart2TitleControl.classList.add('open');
			DSCpart2ContenttextControl.classList.add('open');
		
			DSCContentControl.classList.remove('close');
			DSCpart2Control.classList.remove('close');
			DSCpart2TitleControl.classList.remove('close');
			
			DSCContentControl.style.zIndex = 18;
			DSCpart1Control.style.zIndex = 16;
			DSCpart1TitleControl.style.zIndex = 16;
			DSCpart1ContenttextControl.style.zIndex = 16;
			DSCpart2Control.style.zIndex = 19;
			DSCpart2TitleControl.style.zIndex = 19;
			DSCpart2ContenttextControl.style.zIndex = 19;
			DSCpart3Control.style.zIndex = 16;
			DSCpart3TitleControl.style.zIndex = 16;
			DSCpart3ContenttextControl.style.zIndex = 16;
			DSCpart4Control.style.zIndex = 16;
			DSCpart4TitleControl.style.zIndex = 16;
			DSCpart4ContenttextControl.style.zIndex = 16;
			DSCBAControl.style.opacity = 1;
			
			DSCpart2ContenttextControl.style.opacity = 1;
			
			DSCpart1ContenttextControl.style.display = 'none';
			DSCpart2ContenttextControl.style.display = 'flex';
			DSCpart3ContenttextControl.style.display = 'none';
			DSCpart4ContenttextControl.style.display = 'none';

		}; 
		
		document.getElementsByClassName('DSCpart3')[0].onclick =function()
		{
		
			DSCContentControl.classList.add('open');
			DSCpart3Control.classList.add('open');
			DSCpart3TitleControl.classList.add('open');
			DSCpart3ContenttextControl.classList.add('open');
		
			DSCContentControl.classList.remove('close');
			DSCpart3Control.classList.remove('close');
			DSCpart3TitleControl.classList.remove('close');

			DSCContentControl.style.zIndex = 18;
			DSCpart1Control.style.zIndex = 16;
			DSCpart1TitleControl.style.zIndex = 16;
			DSCpart1ContenttextControl.style.zIndex = 16;
			DSCpart2Control.style.zIndex = 16;
			DSCpart2TitleControl.style.zIndex = 16;
			DSCpart2ContenttextControl.style.zIndex = 16;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3TitleControl.style.zIndex = 19;
			DSCpart3ContenttextControl.style.zIndex = 19;
			DSCpart4Control.style.zIndex = 16;
			DSCpart4TitleControl.style.zIndex = 16;
			DSCpart4ContenttextControl.style.zIndex = 16;
			DSCBAControl.style.opacity = 1;
	
			DSCpart3ContenttextControl.style.opacity = 1;
			
			DSCpart1ContenttextControl.style.display = 'none';
			DSCpart2ContenttextControl.style.display = 'none';
			DSCpart3ContenttextControl.style.display = 'flex';
			DSCpart4ContenttextControl.style.display = 'none';	
		
		}; 
		
		document.getElementsByClassName('DSCpart4')[0].onclick =function()
		{
		
			DSCContentControl.classList.add('open');
			DSCpart4Control.classList.add('open');
			DSCpart4TitleControl.classList.add('open');
			DSCpart4ContenttextControl.classList.add('open');
		
			DSCContentControl.classList.remove('close');
			DSCpart4Control.classList.remove('close');
			DSCpart4TitleControl.classList.remove('close');
			
			DSCContentControl.style.zIndex = 18;
			DSCpart1Control.style.zIndex = 16;
			DSCpart1TitleControl.style.zIndex = 16;
			DSCpart1ContenttextControl.style.zIndex = 16;
			DSCpart2Control.style.zIndex = 16;
			DSCpart2TitleControl.style.zIndex = 16;
			DSCpart2ContenttextControl.style.zIndex = 16;
			DSCpart3Control.style.zIndex = 16;
			DSCpart3TitleControl.style.zIndex = 16;
			DSCpart3ContenttextControl.style.zIndex = 16;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4TitleControl.style.zIndex = 19;
			DSCpart4ContenttextControl.style.zIndex = 19;
			DSCBAControl.style.opacity = 1;
			
			DSCpart4ContenttextControl.style.opacity = 1;
			
			DSCpart1ContenttextControl.style.display = 'none';
			DSCpart2ContenttextControl.style.display = 'none';
			DSCpart3ContenttextControl.style.display = 'none';
			DSCpart4ContenttextControl.style.display = 'flex';
			
		}; 
		
		document.getElementsByClassName('DSCBA')[0].onclick =function()
		{
			DSCContentControl.classList.remove('open');
			
			DSCpart1Control.classList.remove('open');
			DSCpart1TitleControl.classList.remove('open');
			DSCpart1ContenttextControl.classList.remove('open');
			DSCpart2Control.classList.remove('open');
			DSCpart2TitleControl.classList.remove('open');
			DSCpart2ContenttextControl.classList.remove('open');
			DSCpart3Control.classList.remove('open');
			DSCpart3TitleControl.classList.remove('open');
			DSCpart3ContenttextControl.classList.remove('open');
			DSCpart4Control.classList.remove('open');
			DSCpart4TitleControl.classList.remove('open');
			DSCpart4ContenttextControl.classList.remove('open');
			
			DSCContentControl.classList.add('close');
			
			DSCpart1Control.classList.add('close');
			DSCpart1TitleControl.classList.add('close');
			
			DSCpart2Control.classList.add('close');
			DSCpart2TitleControl.classList.add('close');
			
			DSCpart3Control.classList.add('close');
			DSCpart3TitleControl.classList.add('close');
		
			DSCpart4Control.classList.add('close');
			DSCpart4TitleControl.classList.add('close');
		
			DSCContentControl.style.zIndex = 15;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1TitleControl.style.zIndex = 19;
			DSCpart2Control.style.zIndex = 19;
			DSCpart2TitleControl.style.zIndex = 19;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3TitleControl.style.zIndex = 19;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4TitleControl.style.zIndex = 19;
			DSCBAControl.style.opacity = 0;
			
			DSCpart1ContenttextControl.style.opacity = 0;
			DSCpart2ContenttextControl.style.opacity = 0;
			DSCpart3ContenttextControl.style.opacity = 0;
			DSCpart4ContenttextControl.style.opacity = 0;
			
			DSCpart1ContenttextControl.style.display = 'flex';
			DSCpart2ContenttextControl.style.display = 'flex';
			DSCpart3ContenttextControl.style.display = 'flex';
			DSCpart4ContenttextControl.style.display = 'flex';
			
		}; 

		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('Disease')[0].value = 'close';
			textcardDSC.classList.remove('open'); 
			textcardDSC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			DSCContentControl.classList.remove('open');
			DSCpart1Control.classList.remove('open');
			DSCpart1TitleControl.classList.remove('open');
			DSCpart2Control.classList.remove('open');
			DSCpart2TitleControl.classList.remove('open');	
			DSCpart3Control.classList.remove('open');
			DSCpart3TitleControl.classList.remove('open');
			DSCpart4Control.classList.remove('open');
			DSCpart4TitleControl.classList.remove('open');
			
			DSCContentControl.style.zIndex = 15;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1TitleControl.style.zIndex = 19;
			DSCpart2Control.style.zIndex = 19;
			DSCpart2TitleControl.style.zIndex = 19;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3TitleControl.style.zIndex = 19;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4TitleControl.style.zIndex = 19;
			DSCBAControl.style.opacity = 0;
			
			DSCpart1ContenttextControl.style.display = 'flex';
			DSCpart2ContenttextControl.style.display = 'flex';
			DSCpart3ContenttextControl.style.display = 'flex';
			DSCpart4ContenttextControl.style.display = 'flex';
		};	
	
	}
  
};
document.getElementsByClassName('FoodShortage')[0].onclick = function() {
	
	var FSCContentControl = document.getElementsByClassName('FSCContent')[0];
	var FSCBAControl = document.getElementsByClassName('FSCBA')[0];
	
	var FSCpart1Control = document.getElementsByClassName('FSCpart1')[0];
	var FSCpart1TitleControl = document.getElementsByClassName('FSCpart1Title')[0];
	var FSCpart1ContenttextControl = document.getElementsByClassName('FSCpart1Contenttext')[0];

	var FSCpart2Control = document.getElementsByClassName('FSCpart2')[0];
	var FSCpart2TitleControl = document.getElementsByClassName('FSCpart2Title')[0];
	var FSCpart2ContenttextControl = document.getElementsByClassName('FSCpart2Contenttext')[0];
	
	var FSCpart3Control = document.getElementsByClassName('FSCpart3')[0];
	var FSCpart3TitleControl = document.getElementsByClassName('FSCpart3Title')[0];
	var FSCpart3ContenttextControl = document.getElementsByClassName('FSCpart3Contenttext')[0];
	
	var FSCpart4Control = document.getElementsByClassName('FSCpart4')[0];
	var FSCpart4TitleControl = document.getElementsByClassName('FSCpart4Title')[0];
	var FSCpart4ContenttextControl = document.getElementsByClassName('FSCpart4Contenttext')[0];
	location.href = "#Menu";


	if(this.value === 'close') 
	{ 
		this.value = 'open';
		textcardFSC.classList.remove('close'); 
		textcardFSC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		FSCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		FSCpart1ContenttextControl.style.opacity = 0;
		FSCpart2ContenttextControl.style.opacity = 0;
		FSCpart3ContenttextControl.style.opacity = 0;
		FSCpart4ContenttextControl.style.opacity = 0;
  
		document.getElementsByClassName('FSCpart1')[0].onclick =function()
		{
							
			FSCContentControl.classList.add('open');
			FSCpart1Control.classList.add('open');
			FSCpart1TitleControl.classList.add('open');
			FSCpart1ContenttextControl.classList.add('open');

			FSCContentControl.classList.remove('close');
			FSCpart1Control.classList.remove('close');
			FSCpart1TitleControl.classList.remove('close');

			FSCContentControl.style.zIndex = 18;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1TitleControl.style.zIndex = 19;
			FSCpart1ContenttextControl.style.zIndex = 19;
			FSCContentControl.style.opacity = 0.99;
			FSCpart2Control.style.zIndex = 16;
			FSCpart2TitleControl.style.zIndex = 16;
			FSCpart2ContenttextControl.style.zIndex = 16;
			FSCpart3Control.style.zIndex = 16;
			FSCpart3TitleControl.style.zIndex = 16;
			FSCpart3ContenttextControl.style.zIndex = 16;
			FSCpart4Control.style.zIndex = 16;
			FSCpart4TitleControl.style.zIndex = 16;
			FSCpart4ContenttextControl.style.zIndex = 16;
			FSCBAControl.style.opacity = 1;

			FSCpart1ContenttextControl.style.opacity = 1;
			
			FSCpart1ContenttextControl.style.display = 'flex';
			FSCpart2ContenttextControl.style.display = 'none';
			FSCpart3ContenttextControl.style.display = 'none';
			FSCpart4ContenttextControl.style.display = 'none';
	
		}; 
		
		document.getElementsByClassName('FSCpart2')[0].onclick =function()
		{
		
			FSCContentControl.classList.add('open');
			FSCpart2Control.classList.add('open');
			FSCpart2TitleControl.classList.add('open');
			FSCpart2ContenttextControl.classList.add('open');
		
			FSCContentControl.classList.remove('close');
			FSCpart2Control.classList.remove('close');
			FSCpart2TitleControl.classList.remove('close');
			
			FSCContentControl.style.zIndex = 18;
			FSCpart1Control.style.zIndex = 16;
			FSCpart1TitleControl.style.zIndex = 16;
			FSCpart1ContenttextControl.style.zIndex = 16;
			FSCContentControl.style.opacity = 0.99;
			FSCpart2Control.style.zIndex = 19;
			FSCpart2TitleControl.style.zIndex = 19;
			FSCpart2ContenttextControl.style.zIndex = 19;
			FSCpart3Control.style.zIndex = 16;
			FSCpart3TitleControl.style.zIndex = 16;
			FSCpart3ContenttextControl.style.zIndex = 16;
			FSCpart4Control.style.zIndex = 16;
			FSCpart4TitleControl.style.zIndex = 16;
			FSCpart4ContenttextControl.style.zIndex = 16;
			FSCBAControl.style.opacity = 1;
			
			FSCpart2ContenttextControl.style.opacity = 1;
			
			FSCpart1ContenttextControl.style.display = 'none';
			FSCpart2ContenttextControl.style.display = 'flex';
			FSCpart3ContenttextControl.style.display = 'none';
			FSCpart4ContenttextControl.style.display = 'none';

		};
		
		document.getElementsByClassName('FSCpart3')[0].onclick =function()
		{
		
			FSCContentControl.classList.add('open');
			FSCpart3Control.classList.add('open');
			FSCpart3TitleControl.classList.add('open');
			FSCpart3ContenttextControl.classList.add('open');
		
			FSCContentControl.classList.remove('close');
			FSCpart3Control.classList.remove('close');
			FSCpart3TitleControl.classList.remove('close');

			FSCContentControl.style.zIndex = 18;
			FSCpart1Control.style.zIndex = 16;
			FSCpart1TitleControl.style.zIndex = 16;
			FSCpart1ContenttextControl.style.zIndex = 16;
			FSCContentControl.style.opacity = 0.99;
			FSCpart2Control.style.zIndex = 16;
			FSCpart2TitleControl.style.zIndex = 16;
			FSCpart2ContenttextControl.style.zIndex = 16;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3TitleControl.style.zIndex = 19;
			FSCpart3ContenttextControl.style.zIndex = 19;
			FSCpart4Control.style.zIndex = 16;
			FSCpart4TitleControl.style.zIndex = 16;
			FSCpart4ContenttextControl.style.zIndex = 16;
			FSCBAControl.style.opacity = 1;
	
			FSCpart3ContenttextControl.style.opacity = 1;
			
			FSCpart1ContenttextControl.style.display = 'none';
			FSCpart2ContenttextControl.style.display = 'none';
			FSCpart3ContenttextControl.style.display = 'flex';
			FSCpart4ContenttextControl.style.display = 'none';	
		
		};
		
		document.getElementsByClassName('FSCpart4')[0].onclick =function()
		{
		
			FSCContentControl.classList.add('open');
			FSCpart4Control.classList.add('open');
			FSCpart4TitleControl.classList.add('open');
			FSCpart4ContenttextControl.classList.add('open');
		
			FSCContentControl.classList.remove('close');
			FSCpart4Control.classList.remove('close');
			FSCpart4TitleControl.classList.remove('close');
			
			FSCContentControl.style.zIndex = 18;
			FSCpart1Control.style.zIndex = 16;
			FSCpart1TitleControl.style.zIndex = 16;
			FSCpart1ContenttextControl.style.zIndex = 16;
			FSCContentControl.style.opacity = 0.99;
			FSCpart2Control.style.zIndex = 16;
			FSCpart2TitleControl.style.zIndex = 16;
			FSCpart2ContenttextControl.style.zIndex = 16;
			FSCpart3Control.style.zIndex = 16;
			FSCpart3TitleControl.style.zIndex = 16;
			FSCpart3ContenttextControl.style.zIndex = 16;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4TitleControl.style.zIndex = 19;
			FSCpart4ContenttextControl.style.zIndex = 19;
			FSCBAControl.style.opacity = 1;
			
			FSCpart4ContenttextControl.style.opacity = 1;
			
			FSCpart1ContenttextControl.style.display = 'none';
			FSCpart2ContenttextControl.style.display = 'none';
			FSCpart3ContenttextControl.style.display = 'none';
			FSCpart4ContenttextControl.style.display = 'flex';
			
		}; 
		
		document.getElementsByClassName('FSCBA')[0].onclick =function()
		{
			FSCContentControl.classList.remove('open');
			
			FSCpart1Control.classList.remove('open');
			FSCpart1TitleControl.classList.remove('open');
			FSCpart1ContenttextControl.classList.remove('open');
			FSCpart2Control.classList.remove('open');
			FSCpart2TitleControl.classList.remove('open');
			FSCpart2ContenttextControl.classList.remove('open');
			FSCpart3Control.classList.remove('open');
			FSCpart3TitleControl.classList.remove('open');
			FSCpart3ContenttextControl.classList.remove('open');
			FSCpart4Control.classList.remove('open');
			FSCpart4TitleControl.classList.remove('open');
			FSCpart4ContenttextControl.classList.remove('open');
			
			FSCContentControl.classList.add('close');
			
			FSCpart1Control.classList.add('close');
			FSCpart1TitleControl.classList.add('close');
			
			FSCpart2Control.classList.add('close');
			FSCpart2TitleControl.classList.add('close');
			
			FSCpart3Control.classList.add('close');
			FSCpart3TitleControl.classList.add('close');
		
			FSCpart4Control.classList.add('close');
			FSCpart4TitleControl.classList.add('close');
		
			FSCContentControl.style.zIndex = 15;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1TitleControl.style.zIndex = 19;
			FSCpart2Control.style.zIndex = 19;
			FSCpart2TitleControl.style.zIndex = 19;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3TitleControl.style.zIndex = 19;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4TitleControl.style.zIndex = 19;
			FSCBAControl.style.opacity = 0;
			
			FSCpart1ContenttextControl.style.opacity = 0;
			FSCpart2ContenttextControl.style.opacity = 0;
			FSCpart3ContenttextControl.style.opacity = 0;
			FSCpart4ContenttextControl.style.opacity = 0;
			
			FSCpart1ContenttextControl.style.display = 'flex';
			FSCpart2ContenttextControl.style.display = 'flex';
			FSCpart3ContenttextControl.style.display = 'flex';
			FSCpart4ContenttextControl.style.display = 'flex';
			
		}; 

		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('FoodShortage')[0].value = 'close';
			textcardFSC.classList.remove('open'); 
			textcardFSC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			FSCContentControl.classList.remove('open');
			FSCpart1Control.classList.remove('open');
			FSCpart1TitleControl.classList.remove('open');
			FSCpart2Control.classList.remove('open');
			FSCpart2TitleControl.classList.remove('open');	
			FSCpart3Control.classList.remove('open');
			FSCpart3TitleControl.classList.remove('open');
			FSCpart4Control.classList.remove('open');
			FSCpart4TitleControl.classList.remove('open');
			
			FSCContentControl.style.zIndex = 15;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1TitleControl.style.zIndex = 19;
			FSCpart2Control.style.zIndex = 19;
			FSCpart2TitleControl.style.zIndex = 19;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3TitleControl.style.zIndex = 19;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4TitleControl.style.zIndex = 19;
			FSCBAControl.style.opacity = 0;
			
			FSCpart1ContenttextControl.style.display = 'flex';
			FSCpart2ContenttextControl.style.display = 'flex';
			FSCpart3ContenttextControl.style.display = 'flex';
			FSCpart4ContenttextControl.style.display = 'flex';
		};	
	
	}
  
};
document.getElementsByClassName('EconomicShock')[0].onclick = function() {
	
	var ESCContentControl = document.getElementsByClassName('ESCContent')[0];
	var ESCBAControl = document.getElementsByClassName('ESCBA')[0];
	
	var ESCpart1Control = document.getElementsByClassName('ESCpart1')[0];
	var ESCpart1TitleControl = document.getElementsByClassName('ESCpart1Title')[0];
	var ESCpart1ContenttextControl = document.getElementsByClassName('ESCpart1Contenttext')[0];

	var ESCpart2Control = document.getElementsByClassName('ESCpart2')[0];
	var ESCpart2TitleControl = document.getElementsByClassName('ESCpart2Title')[0];
	var ESCpart2ContenttextControl = document.getElementsByClassName('ESCpart2Contenttext')[0];
	
	var ESCpart3Control = document.getElementsByClassName('ESCpart3')[0];
	var ESCpart3TitleControl = document.getElementsByClassName('ESCpart3Title')[0];
	var ESCpart3ContenttextControl = document.getElementsByClassName('ESCpart3Contenttext')[0];
	
	var ESCpart4Control = document.getElementsByClassName('ESCpart4')[0];
	var ESCpart4TitleControl = document.getElementsByClassName('ESCpart4Title')[0];
	var ESCpart4ContenttextControl = document.getElementsByClassName('ESCpart4Contenttext')[0];
	location.href = "#Menu";


	if(this.value === 'close') 
	{
		this.value = 'open';
		textcardESC.classList.remove('close'); 
		textcardESC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		ESCBGControl.classList.add('open');
		BbtnControl.classList.add('open');
		
		ESCpart1ContenttextControl.style.opacity = 0;
		ESCpart2ContenttextControl.style.opacity = 0;
		ESCpart3ContenttextControl.style.opacity = 0;
		ESCpart4ContenttextControl.style.opacity = 0;
  
		document.getElementsByClassName('ESCpart1')[0].onclick =function()
		{
							
			ESCContentControl.classList.add('open');
			ESCpart1Control.classList.add('open');
			ESCpart1TitleControl.classList.add('open');
			ESCpart1ContenttextControl.classList.add('open');

			ESCContentControl.classList.remove('close');
			ESCpart1Control.classList.remove('close');
			ESCpart1TitleControl.classList.remove('close');

			ESCContentControl.style.zIndex = 18;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1TitleControl.style.zIndex = 19;
			ESCpart1ContenttextControl.style.zIndex = 19;
			ESCContentControl.style.opacity = 0.99;
			ESCpart2Control.style.zIndex = 16;
			ESCpart2TitleControl.style.zIndex = 16;
			ESCpart2ContenttextControl.style.zIndex = 16;
			ESCpart3Control.style.zIndex = 16;
			ESCpart3TitleControl.style.zIndex = 16;
			ESCpart3ContenttextControl.style.zIndex = 16;
			ESCpart4Control.style.zIndex = 16;
			ESCpart4TitleControl.style.zIndex = 16;
			ESCpart4ContenttextControl.style.zIndex = 16;
			ESCBAControl.style.opacity = 1;

			ESCpart1ContenttextControl.style.opacity = 1;
			
			ESCpart1ContenttextControl.style.display = 'flex';
			ESCpart2ContenttextControl.style.display = 'none';
			ESCpart3ContenttextControl.style.display = 'none';
			ESCpart4ContenttextControl.style.display = 'none';
	
		}; 
		
		document.getElementsByClassName('ESCpart2')[0].onclick =function()
		{
		
			ESCContentControl.classList.add('open');
			ESCpart2Control.classList.add('open');
			ESCpart2TitleControl.classList.add('open');
			ESCpart2ContenttextControl.classList.add('open');
		
			ESCContentControl.classList.remove('close');
			ESCpart2Control.classList.remove('close');
			ESCpart2TitleControl.classList.remove('close');
			
			ESCContentControl.style.zIndex = 18;
			ESCpart1Control.style.zIndex = 16;
			ESCpart1TitleControl.style.zIndex = 16;
			ESCpart1ContenttextControl.style.zIndex = 16;
			ESCContentControl.style.opacity = 0.99;
			ESCpart2Control.style.zIndex = 19;
			ESCpart2TitleControl.style.zIndex = 19;
			ESCpart2ContenttextControl.style.zIndex = 19;
			ESCpart3Control.style.zIndex = 16;
			ESCpart3TitleControl.style.zIndex = 16;
			ESCpart3ContenttextControl.style.zIndex = 16;
			ESCpart4Control.style.zIndex = 16;
			ESCpart4TitleControl.style.zIndex = 16;
			ESCpart4ContenttextControl.style.zIndex = 16;
			ESCBAControl.style.opacity = 1;
			
			ESCpart2ContenttextControl.style.opacity = 1;
			
			ESCpart1ContenttextControl.style.display = 'none';
			ESCpart2ContenttextControl.style.display = 'flex';
			ESCpart3ContenttextControl.style.display = 'none';
			ESCpart4ContenttextControl.style.display = 'none';

		}; 
		
		document.getElementsByClassName('ESCpart3')[0].onclick =function()
		{
		
			ESCContentControl.classList.add('open');
			ESCpart3Control.classList.add('open');
			ESCpart3TitleControl.classList.add('open');
			ESCpart3ContenttextControl.classList.add('open');
		
			ESCContentControl.classList.remove('close');
			ESCpart3Control.classList.remove('close');
			ESCpart3TitleControl.classList.remove('close');

			ESCContentControl.style.zIndex = 18;
			ESCpart1Control.style.zIndex = 16;
			ESCpart1TitleControl.style.zIndex = 16;
			ESCpart1ContenttextControl.style.zIndex = 16;
			ESCContentControl.style.opacity = 0.99;
			ESCpart2Control.style.zIndex = 16;
			ESCpart2TitleControl.style.zIndex = 16;
			ESCpart2ContenttextControl.style.zIndex = 16;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3TitleControl.style.zIndex = 19;
			ESCpart3ContenttextControl.style.zIndex = 19;
			ESCpart4Control.style.zIndex = 16;
			ESCpart4TitleControl.style.zIndex = 16;
			ESCpart4ContenttextControl.style.zIndex = 16;
			ESCBAControl.style.opacity = 1;
	
			ESCpart3ContenttextControl.style.opacity = 1;
			
			ESCpart1ContenttextControl.style.display = 'none';
			ESCpart2ContenttextControl.style.display = 'none';
			ESCpart3ContenttextControl.style.display = 'flex';
			ESCpart4ContenttextControl.style.display = 'none';	
		
		}; 
		
		document.getElementsByClassName('ESCpart4')[0].onclick =function()
		{
		
			ESCContentControl.classList.add('open');
			ESCpart4Control.classList.add('open');
			ESCpart4TitleControl.classList.add('open');
			ESCpart4ContenttextControl.classList.add('open');
		
			ESCContentControl.classList.remove('close');
			ESCpart4Control.classList.remove('close');
			ESCpart4TitleControl.classList.remove('close');
			
			ESCContentControl.style.zIndex = 18;
			ESCpart1Control.style.zIndex = 16;
			ESCpart1TitleControl.style.zIndex = 16;
			ESCpart1ContenttextControl.style.zIndex = 16;
			ESCContentControl.style.opacity = 0.99;
			ESCpart2Control.style.zIndex = 16;
			ESCpart2TitleControl.style.zIndex = 16;
			ESCpart2ContenttextControl.style.zIndex = 16;
			ESCpart3Control.style.zIndex = 16;
			ESCpart3TitleControl.style.zIndex = 16;
			ESCpart3ContenttextControl.style.zIndex = 16;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4TitleControl.style.zIndex = 19;
			ESCpart4ContenttextControl.style.zIndex = 19;
			ESCBAControl.style.opacity = 1;
			
			ESCpart4ContenttextControl.style.opacity = 1;
			
			ESCpart1ContenttextControl.style.display = 'none';
			ESCpart2ContenttextControl.style.display = 'none';
			ESCpart3ContenttextControl.style.display = 'none';
			ESCpart4ContenttextControl.style.display = 'flex';
			
		}; 
		
		document.getElementsByClassName('ESCBA')[0].onclick =function()
		{
			ESCContentControl.classList.remove('open');
			
			ESCpart1Control.classList.remove('open');
			ESCpart1TitleControl.classList.remove('open');
			ESCpart1ContenttextControl.classList.remove('open');
			ESCpart2Control.classList.remove('open');
			ESCpart2TitleControl.classList.remove('open');
			ESCpart2ContenttextControl.classList.remove('open');
			ESCpart3Control.classList.remove('open');
			ESCpart3TitleControl.classList.remove('open');
			ESCpart3ContenttextControl.classList.remove('open');
			ESCpart4Control.classList.remove('open');
			ESCpart4TitleControl.classList.remove('open');
			ESCpart4ContenttextControl.classList.remove('open');
			
			ESCContentControl.classList.add('close');
			
			ESCpart1Control.classList.add('close');
			ESCpart1TitleControl.classList.add('close');
			
			ESCpart2Control.classList.add('close');
			ESCpart2TitleControl.classList.add('close');
			
			ESCpart3Control.classList.add('close');
			ESCpart3TitleControl.classList.add('close');
		
			ESCpart4Control.classList.add('close');
			ESCpart4TitleControl.classList.add('close');
		
			ESCContentControl.style.zIndex = 15;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1TitleControl.style.zIndex = 19;
			ESCpart2Control.style.zIndex = 19;
			ESCpart2TitleControl.style.zIndex = 19;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3TitleControl.style.zIndex = 19;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4TitleControl.style.zIndex = 19;
			ESCBAControl.style.opacity = 0;
			
			ESCpart1ContenttextControl.style.opacity = 0;
			ESCpart2ContenttextControl.style.opacity = 0;
			ESCpart3ContenttextControl.style.opacity = 0;
			ESCpart4ContenttextControl.style.opacity = 0;
			
			ESCpart1ContenttextControl.style.display = 'flex';
			ESCpart2ContenttextControl.style.display = 'flex';
			ESCpart3ContenttextControl.style.display = 'flex';
			ESCpart4ContenttextControl.style.display = 'flex';
			
		}; 

		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
			document.getElementsByClassName('EconomicShock')[0].value = 'close';
			textcardESC.classList.remove('open'); 
			textcardESC.classList.add('close');
			MainMenuControl.classList.remove('close');
			MainMenuControl.classList.add('open');
			SteamControl.classList.remove('open');
			SteamControl.classList.add('close');
			DisasterControl.classList.add('close');
			DisasterControl.classList.remove('open');
			BbtnControl.classList.remove('open');

			ESCContentControl.classList.remove('open');
			ESCpart1Control.classList.remove('open');
			ESCpart1TitleControl.classList.remove('open');
			ESCpart2Control.classList.remove('open');
			ESCpart2TitleControl.classList.remove('open');	
			ESCpart3Control.classList.remove('open');
			ESCpart3TitleControl.classList.remove('open');
			ESCpart4Control.classList.remove('open');
			ESCpart4TitleControl.classList.remove('open');
			
			ESCContentControl.style.zIndex = 15;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1TitleControl.style.zIndex = 19;
			ESCpart2Control.style.zIndex = 19;
			ESCpart2TitleControl.style.zIndex = 19;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3TitleControl.style.zIndex = 19;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4TitleControl.style.zIndex = 19;
			ESCBAControl.style.opacity = 0;
			
			ESCpart1ContenttextControl.style.display = 'flex';
			ESCpart2ContenttextControl.style.display = 'flex';
			ESCpart3ContenttextControl.style.display = 'flex';
			ESCpart4ContenttextControl.style.display = 'flex';
		};	
	
	}
  
}; 