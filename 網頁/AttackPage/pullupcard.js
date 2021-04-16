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
	
	var SDCpart1Control = document.getElementsByClassName('SDCpart1')[0];
	var SDCpart1TitleControl = document.getElementsByClassName('SDCpart1Title')[0];
	var SDCpart1ContenttextControl = document.getElementsByClassName('SDCpart1Contenttext')[0];
	var SDCpart1ContentControl = document.getElementsByClassName('SDCpart1Content')[0];
	var SDC1BAControl = document.getElementsByClassName('SDC1BA')[0];

	
	var SDCpart2Control = document.getElementsByClassName('SDCpart2')[0];
	var SDCpart2TitleControl = document.getElementsByClassName('SDCpart2Title')[0];
  	var SDCpart2ContenttextControl = document.getElementsByClassName('SDCpart2Contenttext')[0];
	var SDCpart2ContentControl = document.getElementsByClassName('SDCpart2Content')[0];
	var SDC2BAControl = document.getElementsByClassName('SDC2BA')[0];

	
	var SDCpart3Control = document.getElementsByClassName('SDCpart3')[0];
	var SDCpart3TitleControl = document.getElementsByClassName('SDCpart3Title')[0];
  	var SDCpart3ContenttextControl = document.getElementsByClassName('SDCpart3Contenttext')[0];
	var SDCpart3ContentControl = document.getElementsByClassName('SDCpart3Content')[0];
	var SDC3BAControl = document.getElementsByClassName('SDC3BA')[0];

	
	var SDCpart4Control = document.getElementsByClassName('SDCpart4')[0];
	var SDCpart4TitleControl = document.getElementsByClassName('SDCpart4Title')[0];
  	var SDCpart4ContenttextControl = document.getElementsByClassName('SDCpart4Contenttext')[0];
	var SDCpart4ContentControl = document.getElementsByClassName('SDCpart4Content')[0];
	var SDC4BAControl = document.getElementsByClassName('SDC4BA')[0];


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
  
	  
		document.getElementsByClassName('SDCpart1')[0].onclick =function()
		{
		
			SDCpart1ContentControl.classList.add('open');
			SDCpart1Control.classList.add('open');
			SDCpart1TitleControl.classList.add('open');
			SDCpart1ContenttextControl.classList.add('open');
		
			SDCpart1ContentControl.classList.remove('close');
			SDCpart1Control.classList.remove('close');
			SDCpart1TitleControl.classList.remove('close');
			SDCpart1ContenttextControl.classList.remove('close');
			

			SDCpart1ContentControl.style.zIndex = 18;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1ContentControl.style.opacity = 0.99;
			SDCpart1ContenttextControl.style.opacity = 1;
			SDCpart2Control.style.zIndex = 16;
			SDCpart2TitleControl.style.zIndex = 16;
			SDCpart3Control.style.zIndex = 16;
			SDCpart3TitleControl.style.zIndex = 16;
			SDCpart4Control.style.zIndex = 16;
			SDCpart4TitleControl.style.zIndex = 16;
			SDC1BAControl.style.opacity = 1;




		
		}; 
	  
		document.getElementsByClassName('SDC1BA')[0].onclick =function()
		{
			SDCpart1ContentControl.classList.remove('open');
			SDCpart1Control.classList.remove('open');
			SDCpart1TitleControl.classList.remove('open');
			SDCpart1ContenttextControl.classList.remove('open');
		
			SDCpart1ContentControl.classList.add('close');
			SDCpart1Control.classList.add('close');
			SDCpart1TitleControl.classList.add('close');
			SDCpart1ContenttextControl.classList.add('close');

			SDCpart1ContentControl.style.zIndex = 15;
			SDCpart1Control.style.zIndex = 19;		
			SDCpart2Control.style.zIndex = 19;
			SDCpart2TitleControl.style.zIndex = 19;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3TitleControl.style.zIndex = 19;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4TitleControl.style.zIndex = 19;
			SDC1BAControl.style.opacity = 0;



		
		}; 
		
		document.getElementsByClassName('SDCpart2')[0].onclick =function()
		{
		
			SDCpart2ContentControl.classList.add('open');
			SDCpart2Control.classList.add('open');
			SDCpart2TitleControl.classList.add('open');
			SDCpart2ContenttextControl.classList.add('open');
		
			SDCpart2ContentControl.classList.remove('close');
			SDCpart2Control.classList.remove('close');
			SDCpart2TitleControl.classList.remove('close');
			SDCpart2ContenttextControl.classList.remove('close');

			SDCpart2ContentControl.style.zIndex = 18;
			SDCpart2Control.style.zIndex = 19;
			SDCpart2ContentControl.style.opacity = 0.99;
			SDCpart2ContenttextControl.style.opacity = 1;
			SDCpart1Control.style.zIndex = 16;
			SDCpart1TitleControl.style.zIndex = 16;
			SDCpart3Control.style.zIndex = 16;
			SDCpart3TitleControl.style.zIndex = 16;
			SDCpart4Control.style.zIndex = 16;
			SDCpart4TitleControl.style.zIndex = 16;
			SDC2BAControl.style.opacity = 1;



		
		}; 
	  
		document.getElementsByClassName('SDC2BA')[0].onclick =function()
		{
			SDCpart2ContentControl.classList.remove('open');
			SDCpart2Control.classList.remove('open');
			SDCpart2TitleControl.classList.remove('open');
			SDCpart2ContenttextControl.classList.remove('open');
		
			SDCpart2ContentControl.classList.add('close');
			SDCpart2Control.classList.add('close');
			SDCpart2TitleControl.classList.add('close');
			SDCpart2ContenttextControl.classList.add('close');

			SDCpart2ContentControl.style.zIndex = 15;
			SDCpart2Control.style.zIndex = 19;		
			SDCpart2ContenttextControl.style.opacity = 0;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1TitleControl.style.zIndex = 19;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3TitleControl.style.zIndex = 19;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4TitleControl.style.zIndex = 19;
			SDC2BAControl.style.opacity = 0;


		
		}; 
		document.getElementsByClassName('SDCpart3')[0].onclick =function()
		{
		
			SDCpart3ContentControl.classList.add('open');
			SDCpart3Control.classList.add('open');
			SDCpart3TitleControl.classList.add('open');
			SDCpart3ContenttextControl.classList.add('open');
		
			SDCpart3ContentControl.classList.remove('close');
			SDCpart3Control.classList.remove('close');
			SDCpart3TitleControl.classList.remove('close');
			SDCpart3ContenttextControl.classList.remove('close');

			SDCpart3ContentControl.style.zIndex = 18;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3ContentControl.style.opacity = 0.99;
			SDCpart3ContenttextControl.style.opacity = 1;
			SDCpart1Control.style.zIndex = 16;
			SDCpart1TitleControl.style.zIndex = 16;
			SDCpart2Control.style.zIndex = 16;
			SDCpart2TitleControl.style.zIndex = 16;
			SDCpart4Control.style.zIndex = 16;
			SDCpart4TitleControl.style.zIndex = 16;
			SDC3BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('SDC3BA')[0].onclick =function()
		{
			SDCpart3ContentControl.classList.remove('open');
			SDCpart3Control.classList.remove('open');
			SDCpart3TitleControl.classList.remove('open');
			SDCpart3ContenttextControl.classList.remove('open');
		
			SDCpart3ContentControl.classList.add('close');
			SDCpart3Control.classList.add('close');
			SDCpart3TitleControl.classList.add('close');
			SDCpart3ContenttextControl.classList.add('close');

			SDCpart3ContentControl.style.zIndex = 15;
			SDCpart3Control.style.zIndex = 19;		
			SDCpart3ContenttextControl.style.opacity = 0;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1TitleControl.style.zIndex = 19;
			SDCpart2Control.style.zIndex = 19;
			SDCpart2TitleControl.style.zIndex = 19;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4TitleControl.style.zIndex = 19;
			SDC3BAControl.style.opacity = 0;



		
		}; 
		
		document.getElementsByClassName('SDCpart4')[0].onclick =function()
		{
		
			SDCpart4ContentControl.classList.add('open');
			SDCpart4Control.classList.add('open');
			SDCpart4TitleControl.classList.add('open');
			SDCpart4ContenttextControl.classList.add('open');
		
			SDCpart4ContentControl.classList.remove('close');
			SDCpart4Control.classList.remove('close');
			SDCpart4TitleControl.classList.remove('close');
			SDCpart4ContenttextControl.classList.remove('close');

			SDCpart4ContentControl.style.zIndex = 18;
			SDCpart4Control.style.zIndex = 19;
			SDCpart4ContentControl.style.opacity = 0.99;
			SDCpart4ContenttextControl.style.opacity = 1;
			SDCpart1Control.style.zIndex = 16;
			SDCpart1TitleControl.style.zIndex = 16;
			SDCpart2Control.style.zIndex = 16;
			SDCpart2TitleControl.style.zIndex = 16;
			SDCpart3Control.style.zIndex = 16;
			SDCpart3TitleControl.style.zIndex = 16;
			SDC4BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('SDC4BA')[0].onclick =function()
		{
			SDCpart4ContentControl.classList.remove('open');
			SDCpart4Control.classList.remove('open');
			SDCpart4TitleControl.classList.remove('open');
			SDCpart4ContenttextControl.classList.remove('open');
		
			SDCpart4ContentControl.classList.add('close');
			SDCpart4Control.classList.add('close');
			SDCpart4TitleControl.classList.add('close');
			SDCpart4ContenttextControl.classList.add('close');

			SDCpart4ContentControl.style.zIndex = 15;
			SDCpart4Control.style.zIndex = 19;		
			SDCpart4ContenttextControl.style.opacity = 0;
			SDCpart1Control.style.zIndex = 19;
			SDCpart1TitleControl.style.zIndex = 19;
			SDCpart2Control.style.zIndex = 19;
			SDCpart2TitleControl.style.zIndex = 19;
			SDCpart3Control.style.zIndex = 19;
			SDCpart3TitleControl.style.zIndex = 19;
			SDC4BAControl.style.opacity = 0;


		
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

			
		};	
	
  	} 
  
};

document.getElementsByClassName('OceanAcidification')[0].onclick = function() {
	
	var OACpart1Control = document.getElementsByClassName('OACpart1')[0];
	var OACpart1TitleControl = document.getElementsByClassName('OACpart1Title')[0];
  	var OACpart1ContenttextControl = document.getElementsByClassName('OACpart1Contenttext')[0];
	var OACpart1ContentControl = document.getElementsByClassName('OACpart1Content')[0];
	
	var OACpart2Control = document.getElementsByClassName('OACpart2')[0];
	var OACpart2TitleControl = document.getElementsByClassName('OACpart2Title')[0];
  	var OACpart2ContenttextControl = document.getElementsByClassName('OACpart2Contenttext')[0];
	var OACpart2ContentControl = document.getElementsByClassName('OACpart2Content')[0];
	
	var OACpart3Control = document.getElementsByClassName('OACpart3')[0];
	var OACpart3TitleControl = document.getElementsByClassName('OACpart3Title')[0];
  	var OACpart3ContenttextControl = document.getElementsByClassName('OACpart3Contenttext')[0];
	var OACpart3ContentControl = document.getElementsByClassName('OACpart3Content')[0];
	
	var OACpart4Control = document.getElementsByClassName('OACpart4')[0];
	var OACpart4TitleControl = document.getElementsByClassName('OACpart4Title')[0];
  	var OACpart4ContenttextControl = document.getElementsByClassName('OACpart4Contenttext')[0];
	var OACpart4ContentControl = document.getElementsByClassName('OACpart4Content')[0];
	
	var OAC1BAControl = document.getElementsByClassName('OAC1BA')[0];
	var OAC2BAControl = document.getElementsByClassName('OAC2BA')[0];
	var OAC3BAControl = document.getElementsByClassName('OAC3BA')[0];
	var OAC4BAControl = document.getElementsByClassName('OAC4BA')[0];


	
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

  
	  
		document.getElementsByClassName('OACpart1')[0].onclick =function()
		{
		
			OACpart1ContentControl.classList.add('open');
			OACpart1Control.classList.add('open');
			OACpart1TitleControl.classList.add('open');
			OACpart1ContenttextControl.classList.add('open');
		
			OACpart1ContentControl.classList.remove('close');
			OACpart1Control.classList.remove('close');
			OACpart1TitleControl.classList.remove('close');
			OACpart1ContenttextControl.classList.remove('close');

			OACpart1ContentControl.style.zIndex = 18;
			OACpart1Control.style.zIndex = 19;
			OACpart1ContentControl.style.opacity = 0.99;
			OACpart1ContenttextControl.style.opacity = 1;
			OACpart2Control.style.zIndex = 16;
			OACpart2TitleControl.style.zIndex = 16;
			OACpart3Control.style.zIndex = 16;
			OACpart3TitleControl.style.zIndex = 16;
			OACpart4Control.style.zIndex = 16;
			OACpart4TitleControl.style.zIndex = 16;
			OAC1BAControl.style.opacity = 1;




		
		}; 
	  
		document.getElementsByClassName('OAC1BA')[0].onclick =function()
		{
			OACpart1ContentControl.classList.remove('open');
			OACpart1Control.classList.remove('open');
			OACpart1TitleControl.classList.remove('open');
			OACpart1ContenttextControl.classList.remove('open');
		
			OACpart1ContentControl.classList.add('close');
			OACpart1Control.classList.add('close');
			OACpart1TitleControl.classList.add('close');
			OACpart1ContenttextControl.classList.add('close');

			OACpart1ContentControl.style.zIndex = 15;
			OACpart1Control.style.zIndex = 19;		
			OACpart2Control.style.zIndex = 19;
			OACpart2TitleControl.style.zIndex = 19;
			OACpart3Control.style.zIndex = 19;
			OACpart3TitleControl.style.zIndex = 19;
			OACpart4Control.style.zIndex = 19;
			OACpart4TitleControl.style.zIndex = 19;
			OAC1BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('OACpart2')[0].onclick =function()
		{
		
			OACpart2ContentControl.classList.add('open');
			OACpart2Control.classList.add('open');
			OACpart2TitleControl.classList.add('open');
			OACpart2ContenttextControl.classList.add('open');
		
			OACpart2ContentControl.classList.remove('close');
			OACpart2Control.classList.remove('close');
			OACpart2TitleControl.classList.remove('close');
			OACpart2ContenttextControl.classList.remove('close');

			OACpart2ContentControl.style.zIndex = 18;
			OACpart2Control.style.zIndex = 19;
			OACpart2ContentControl.style.opacity = 0.99;
			OACpart2ContenttextControl.style.opacity = 1;
			OACpart1Control.style.zIndex = 16;
			OACpart1TitleControl.style.zIndex = 16;
			OACpart3Control.style.zIndex = 16;
			OACpart3TitleControl.style.zIndex = 16;
			OACpart4Control.style.zIndex = 16;
			OACpart4TitleControl.style.zIndex = 16;
			OAC2BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('OAC2BA')[0].onclick =function()
		{
			OACpart2ContentControl.classList.remove('open');
			OACpart2Control.classList.remove('open');
			OACpart2TitleControl.classList.remove('open');
			OACpart2ContenttextControl.classList.remove('open');
		
			OACpart2ContentControl.classList.add('close');
			OACpart2Control.classList.add('close');
			OACpart2TitleControl.classList.add('close');
			OACpart2ContenttextControl.classList.add('close');

			OACpart2ContentControl.style.zIndex = 15;
			OACpart2Control.style.zIndex = 19;		
			OACpart2ContenttextControl.style.opacity = 0;
			OACpart1Control.style.zIndex = 19;
			OACpart1TitleControl.style.zIndex = 19;
			OACpart3Control.style.zIndex = 19;
			OACpart3TitleControl.style.zIndex = 19;
			OACpart4Control.style.zIndex = 19;
			OACpart4TitleControl.style.zIndex = 19;
			OAC2BAControl.style.opacity = 0;

		
		}; 
		document.getElementsByClassName('OACpart3')[0].onclick =function()
		{
		
			OACpart3ContentControl.classList.add('open');
			OACpart3Control.classList.add('open');
			OACpart3TitleControl.classList.add('open');
			OACpart3ContenttextControl.classList.add('open');
		
			OACpart3ContentControl.classList.remove('close');
			OACpart3Control.classList.remove('close');
			OACpart3TitleControl.classList.remove('close');
			OACpart3ContenttextControl.classList.remove('close');

			OACpart3ContentControl.style.zIndex = 18;
			OACpart3Control.style.zIndex = 19;
			OACpart3ContentControl.style.opacity = 0.99;
			OACpart3ContenttextControl.style.opacity = 1;
			OACpart1Control.style.zIndex = 16;
			OACpart1TitleControl.style.zIndex = 16;
			OACpart2Control.style.zIndex = 16;
			OACpart2TitleControl.style.zIndex = 16;
			OACpart4Control.style.zIndex = 16;
			OACpart4TitleControl.style.zIndex = 16;
			OAC3BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('OAC3BA')[0].onclick =function()
		{
			OACpart3ContentControl.classList.remove('open');
			OACpart3Control.classList.remove('open');
			OACpart3TitleControl.classList.remove('open');
			OACpart3ContenttextControl.classList.remove('open');
		
			OACpart3ContentControl.classList.add('close');
			OACpart3Control.classList.add('close');
			OACpart3TitleControl.classList.add('close');
			OACpart3ContenttextControl.classList.add('close');

			OACpart3ContentControl.style.zIndex = 15;
			OACpart3Control.style.zIndex = 19;		
			OACpart3ContenttextControl.style.opacity = 0;
			OACpart1Control.style.zIndex = 19;
			OACpart1TitleControl.style.zIndex = 19;
			OACpart2Control.style.zIndex = 19;
			OACpart2TitleControl.style.zIndex = 19;
			OACpart4Control.style.zIndex = 19;
			OACpart4TitleControl.style.zIndex = 19;
			OAC3BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('OACpart4')[0].onclick =function()
		{
		
			OACpart4ContentControl.classList.add('open');
			OACpart4Control.classList.add('open');
			OACpart4TitleControl.classList.add('open');
			OACpart4ContenttextControl.classList.add('open');
		
			OACpart4ContentControl.classList.remove('close');
			OACpart4Control.classList.remove('close');
			OACpart4TitleControl.classList.remove('close');
			OACpart4ContenttextControl.classList.remove('close');

			OACpart4ContentControl.style.zIndex = 18;
			OACpart4Control.style.zIndex = 19;
			OACpart4ContentControl.style.opacity = 0.99;
			OACpart4ContenttextControl.style.opacity = 1;
			OACpart1Control.style.zIndex = 16;
			OACpart1TitleControl.style.zIndex = 16;
			OACpart2Control.style.zIndex = 16;
			OACpart2TitleControl.style.zIndex = 16;
			OACpart3Control.style.zIndex = 16;
			OACpart3TitleControl.style.zIndex = 16;
			OAC4BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('OAC4BA')[0].onclick =function()
		{
			OACpart4ContentControl.classList.remove('open');
			OACpart4Control.classList.remove('open');
			OACpart4TitleControl.classList.remove('open');
			OACpart4ContenttextControl.classList.remove('open');
		
			OACpart4ContentControl.classList.add('close');
			OACpart4Control.classList.add('close');
			OACpart4TitleControl.classList.add('close');
			OACpart4ContenttextControl.classList.add('close');

			OACpart4ContentControl.style.zIndex = 15;
			OACpart4Control.style.zIndex = 19;		
			OACpart4ContenttextControl.style.opacity = 0;
			OACpart1Control.style.zIndex = 19;
			OACpart1TitleControl.style.zIndex = 19;
			OACpart2Control.style.zIndex = 19;
			OACpart2TitleControl.style.zIndex = 19;
			OACpart3Control.style.zIndex = 19;
			OACpart3TitleControl.style.zIndex = 19;
			OAC4BAControl.style.opacity = 0;


		
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

		};	
	
  	} 
  
};
	


document.getElementsByClassName('MeltingIce')[0].onclick = function() {
	
	var MICpart1Control = document.getElementsByClassName('MICpart1')[0];
	var MICpart1TitleControl = document.getElementsByClassName('MICpart1Title')[0];
  	var MICpart1ContenttextControl = document.getElementsByClassName('MICpart1Contenttext')[0];
	var MICpart1ContentControl = document.getElementsByClassName('MICpart1Content')[0];
	
	var MICpart2Control = document.getElementsByClassName('MICpart2')[0];
	var MICpart2TitleControl = document.getElementsByClassName('MICpart2Title')[0];
  	var MICpart2ContenttextControl = document.getElementsByClassName('MICpart2Contenttext')[0];
	var MICpart2ContentControl = document.getElementsByClassName('MICpart2Content')[0];
	
	var MICpart3Control = document.getElementsByClassName('MICpart3')[0];
	var MICpart3TitleControl = document.getElementsByClassName('MICpart3Title')[0];
  	var MICpart3ContenttextControl = document.getElementsByClassName('MICpart3Contenttext')[0];
	var MICpart3ContentControl = document.getElementsByClassName('MICpart3Content')[0];
	
	var MICpart4Control = document.getElementsByClassName('MICpart4')[0];
	var MICpart4TitleControl = document.getElementsByClassName('MICpart4Title')[0];
  	var MICpart4ContenttextControl = document.getElementsByClassName('MICpart4Contenttext')[0];
	var MICpart4ContentControl = document.getElementsByClassName('MICpart4Content')[0];
	
	var MIC1BAControl = document.getElementsByClassName('MIC1BA')[0];
	var MIC2BAControl = document.getElementsByClassName('MIC2BA')[0];
	var MIC3BAControl = document.getElementsByClassName('MIC3BA')[0];
	var MIC4BAControl = document.getElementsByClassName('MIC4BA')[0];
	
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
  
	  
		document.getElementsByClassName('MICpart1')[0].onclick =function()
		{
		
			MICpart1ContentControl.classList.add('open');
			MICpart1Control.classList.add('open');
			MICpart1TitleControl.classList.add('open');
			MICpart1ContenttextControl.classList.add('open');
		
			MICpart1ContentControl.classList.remove('close');
			MICpart1Control.classList.remove('close');
			MICpart1TitleControl.classList.remove('close');
			MICpart1ContenttextControl.classList.remove('close');

			MICpart1ContentControl.style.zIndex = 18;
			MICpart1Control.style.zIndex = 19;
			MICpart1ContentControl.style.opacity = 0.99;
			MICpart1ContenttextControl.style.opacity = 1;
			MICpart2Control.style.zIndex = 16;
			MICpart2TitleControl.style.zIndex = 16;
			MICpart3Control.style.zIndex = 16;
			MICpart3TitleControl.style.zIndex = 16;
			MICpart4Control.style.zIndex = 16;
			MICpart4TitleControl.style.zIndex = 16;
			MIC1BAControl.style.opacity = 1;			




		
		}; 
	  
		document.getElementsByClassName('MIC1BA')[0].onclick =function()
		{
			MICpart1ContentControl.classList.remove('open');
			MICpart1Control.classList.remove('open');
			MICpart1TitleControl.classList.remove('open');
			MICpart1ContenttextControl.classList.remove('open');
		
			MICpart1ContentControl.classList.add('close');
			MICpart1Control.classList.add('close');
			MICpart1TitleControl.classList.add('close');
			MICpart1ContenttextControl.classList.add('close');

			MICpart1ContentControl.style.zIndex = 15;
			MICpart1Control.style.zIndex = 19;		
			MICpart2Control.style.zIndex = 19;
			MICpart2TitleControl.style.zIndex = 19;
			MICpart3Control.style.zIndex = 19;
			MICpart3TitleControl.style.zIndex = 19;
			MICpart4Control.style.zIndex = 19;
			MICpart4TitleControl.style.zIndex = 19;
			MIC1BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('MICpart2')[0].onclick =function()
		{
		
			MICpart2ContentControl.classList.add('open');
			MICpart2Control.classList.add('open');
			MICpart2TitleControl.classList.add('open');
			MICpart2ContenttextControl.classList.add('open');
		
			MICpart2ContentControl.classList.remove('close');
			MICpart2Control.classList.remove('close');
			MICpart2TitleControl.classList.remove('close');
			MICpart2ContenttextControl.classList.remove('close');

			MICpart2ContentControl.style.zIndex = 18;
			MICpart2Control.style.zIndex = 19;
			MICpart2ContentControl.style.opacity = 0.99;
			MICpart2ContenttextControl.style.opacity = 1;
			MICpart1Control.style.zIndex = 16;
			MICpart1TitleControl.style.zIndex = 16;
			MICpart3Control.style.zIndex = 16;
			MICpart3TitleControl.style.zIndex = 16;
			MICpart4Control.style.zIndex = 16;
			MICpart4TitleControl.style.zIndex = 16;
			MIC2BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('MIC2BA')[0].onclick =function()
		{
			MICpart2ContentControl.classList.remove('open');
			MICpart2Control.classList.remove('open');
			MICpart2TitleControl.classList.remove('open');
			MICpart2ContenttextControl.classList.remove('open');
		
			MICpart2ContentControl.classList.add('close');
			MICpart2Control.classList.add('close');
			MICpart2TitleControl.classList.add('close');
			MICpart2ContenttextControl.classList.add('close');

			MICpart2ContentControl.style.zIndex = 15;
			MICpart2Control.style.zIndex = 19;		
			MICpart2ContenttextControl.style.opacity = 0;
			MICpart1Control.style.zIndex = 19;
			MICpart1TitleControl.style.zIndex = 19;
			MICpart3Control.style.zIndex = 19;
			MICpart3TitleControl.style.zIndex = 19;
			MICpart4Control.style.zIndex = 19;
			MICpart4TitleControl.style.zIndex = 19;
			MIC2BAControl.style.opacity = 0;

		
		}; 
		document.getElementsByClassName('MICpart3')[0].onclick =function()
		{
		
			MICpart3ContentControl.classList.add('open');
			MICpart3Control.classList.add('open');
			MICpart3TitleControl.classList.add('open');
			MICpart3ContenttextControl.classList.add('open');
		
			MICpart3ContentControl.classList.remove('close');
			MICpart3Control.classList.remove('close');
			MICpart3TitleControl.classList.remove('close');
			MICpart3ContenttextControl.classList.remove('close');

			MICpart3ContentControl.style.zIndex = 18;
			MICpart3Control.style.zIndex = 19;
			MICpart3ContentControl.style.opacity = 0.99;
			MICpart3ContenttextControl.style.opacity = 1;
			MICpart1Control.style.zIndex = 16;
			MICpart1TitleControl.style.zIndex = 16;
			MICpart2Control.style.zIndex = 16;
			MICpart2TitleControl.style.zIndex = 16;
			MICpart4Control.style.zIndex = 16;
			MICpart4TitleControl.style.zIndex = 16;
			MIC3BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('MIC3BA')[0].onclick =function()
		{
			MICpart3ContentControl.classList.remove('open');
			MICpart3Control.classList.remove('open');
			MICpart3TitleControl.classList.remove('open');
			MICpart3ContenttextControl.classList.remove('open');
		
			MICpart3ContentControl.classList.add('close');
			MICpart3Control.classList.add('close');
			MICpart3TitleControl.classList.add('close');
			MICpart3ContenttextControl.classList.add('close');

			MICpart3ContentControl.style.zIndex = 15;
			MICpart3Control.style.zIndex = 19;		
			MICpart3ContenttextControl.style.opacity = 0;
			MICpart1Control.style.zIndex = 19;
			MICpart1TitleControl.style.zIndex = 19;
			MICpart2Control.style.zIndex = 19;
			MICpart2TitleControl.style.zIndex = 19;
			MICpart4Control.style.zIndex = 19;
			MICpart4TitleControl.style.zIndex = 19;
			MIC3BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('MICpart4')[0].onclick =function()
		{
		
			MICpart4ContentControl.classList.add('open');
			MICpart4Control.classList.add('open');
			MICpart4TitleControl.classList.add('open');
			MICpart4ContenttextControl.classList.add('open');
		
			MICpart4ContentControl.classList.remove('close');
			MICpart4Control.classList.remove('close');
			MICpart4TitleControl.classList.remove('close');
			MICpart4ContenttextControl.classList.remove('close');

			MICpart4ContentControl.style.zIndex = 18;
			MICpart4Control.style.zIndex = 19;
			MICpart4ContentControl.style.opacity = 0.99;
			MICpart4ContenttextControl.style.opacity = 1;
			MICpart1Control.style.zIndex = 16;
			MICpart1TitleControl.style.zIndex = 16;
			MICpart2Control.style.zIndex = 16;
			MICpart2TitleControl.style.zIndex = 16;
			MICpart3Control.style.zIndex = 16;
			MICpart3TitleControl.style.zIndex = 16;
			MIC4BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('MIC4BA')[0].onclick =function()
		{
			MICpart4ContentControl.classList.remove('open');
			MICpart4Control.classList.remove('open');
			MICpart4TitleControl.classList.remove('open');
			MICpart4ContenttextControl.classList.remove('open');
		
			MICpart4ContentControl.classList.add('close');
			MICpart4Control.classList.add('close');
			MICpart4TitleControl.classList.add('close');
			MICpart4ContenttextControl.classList.add('close');

			MICpart4ContentControl.style.zIndex = 15;
			MICpart4Control.style.zIndex = 19;		
			MICpart4ContenttextControl.style.opacity = 0;
			MICpart1Control.style.zIndex = 19;
			MICpart1TitleControl.style.zIndex = 19;
			MICpart2Control.style.zIndex = 19;
			MICpart2TitleControl.style.zIndex = 19;
			MICpart3Control.style.zIndex = 19;
			MICpart3TitleControl.style.zIndex = 19;
			MIC4BAControl.style.opacity = 0;


		
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
			
		};	
	
  	} 
};

document.getElementsByClassName('FireForest')[0].onclick = function() {
	
	var FFCAmazonControl = document.getElementsByClassName('FFCAmazon')[0];
	/*var FFCAmazonTitleControl = document.getElementsByClassName('FFCAmazonTitle')[0];*/
  	var FFCAmazonContenttextControl = document.getElementsByClassName('FFCAmazonContenttext')[0];
	var FFCAmazonContentControl = document.getElementsByClassName('FFCAmazonContent')[0];
	
	var FFCNAEUJPControl = document.getElementsByClassName('FFCNAEUJP')[0];
  	var FFCNAEUJPContenttextControl = document.getElementsByClassName('FFCNAEUJPContenttext')[0];
	var FFCNAEUJPContentControl = document.getElementsByClassName('FFCNAEUJPContent')[0];
	
	var FFCSBLControl = document.getElementsByClassName('FFCSBL')[0];
  	var FFCSBLContenttextControl = document.getElementsByClassName('FFCSBLContenttext')[0];
	var FFCSBLContentControl = document.getElementsByClassName('FFCSBLContent')[0];
	
	var FFCAusControl = document.getElementsByClassName('FFCAus')[0];
  	var FFCAusContenttextControl = document.getElementsByClassName('FFCAusContenttext')[0];
	var FFCAusContentControl = document.getElementsByClassName('FFCAusContent')[0];
	
	var FFCIconControl = document.getElementsByClassName('FFCIcon')[0];
	/*var FFCIconTitleControl = document.getElementsByClassName('FFCIconTitle')[0];*/
  	var FFCIconContenttextControl = document.getElementsByClassName('FFCIconContenttext')[0];
	var FFCIconContentControl = document.getElementsByClassName('FFCIconContent')[0];
	
	var FFCBAControl = document.getElementsByClassName('FFCBA')[0];

	
	if(this.value === 'close') 
  	{ 
    	this.value = 'open';
		textcardFFC.classList.remove('close'); 
    	textcardFFC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		FFCBGControl.classList.add('open');
		FFCAmazonContenttextControl.style.opacity = 0;
  		BbtnControl.classList.add('open');

	  
		document.getElementsByClassName('FFCAmazon')[0].onclick =function()
		{
		
			FFCAmazonContentControl.classList.add('open');
			FFCAmazonControl.classList.add('open');
			FFCAmazonContenttextControl.classList.add('open');
		
			FFCAmazonContentControl.classList.remove('close');
			FFCAmazonControl.classList.remove('close');
			FFCAmazonContenttextControl.classList.remove('close');
			/*FFCAmazonTitleControl.classList.add('open');*/
			
			FFCNAEUJPContentControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCSBLContentControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCSBLControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCAusContentControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCAusControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCIconContentControl.classList.remove('open');
			FFCIconControl.classList.add('close');
			FFCIconControl.classList.remove('open');
			FFCIconControl.classList.add('close');


			FFCAmazonContentControl.style.zIndex = 18;
			FFCAmazonControl.style.zIndex = 19;
			FFCAmazonContentControl.style.opacity = 0.99;
			FFCAmazonContenttextControl.style.opacity = 1;
			FFCNAEUJPControl.style.zIndex = 16;
			FFCSBLControl.style.zIndex = 16;
			FFCAusControl.style.zIndex = 16;
			FFCIconControl.style.zIndex = 16;
			FFCNAEUJPContentControl.style.zIndex = 17;
			FFCSBLContentControl.style.zIndex = 17;
			FFCAusContentControl.style.zIndex = 17;
			FFCIconContentControl.style.zIndex = 17;
			
			FFCNAEUJPContentControl.style.opacity = 0;
			FFCSBLContentControl.style.opacity = 0;
			FFCAusContentControl.style.opacity = 0;
			FFCIconContentControl.style.opacity = 0;

			
			FFCBAControl.style.opacity = 1;


			



		
		}; 
	  
		
		
		document.getElementsByClassName('FFCNAEUJP')[0].onclick =function()
		{
		
			FFCNAEUJPContentControl.classList.add('open');
			FFCNAEUJPControl.classList.add('open');
			FFCNAEUJPContenttextControl.classList.add('open');

		
			FFCNAEUJPContentControl.classList.remove('close');
			FFCNAEUJPControl.classList.remove('close');
			FFCNAEUJPContenttextControl.classList.remove('close');
			FFCAmazonContentControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			
			FFCSBLContentControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCSBLControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCAusContentControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCAusControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCIconContentControl.classList.remove('open');
			FFCIconControl.classList.add('close');
			FFCIconControl.classList.remove('open');
			FFCIconControl.classList.add('close');

		

			FFCNAEUJPContentControl.style.zIndex = 18;
			FFCNAEUJPControl.style.zIndex = 19;
			FFCNAEUJPContentControl.style.opacity = 0.99;
			FFCNAEUJPContenttextControl.style.opacity = 1;
			FFCAmazonControl.style.zIndex = 16;
			FFCSBLControl.style.zIndex = 16;
			FFCAusControl.style.zIndex = 16;
			FFCIconControl.style.zIndex = 16;
			
			FFCAmazonContentControl.style.zIndex = 17;
			FFCSBLContentControl.style.zIndex = 17;
			FFCAusContentControl.style.zIndex = 17;
			FFCIconContentControl.style.zIndex = 17;
			
			FFCAmazonContentControl.style.opacity = 0;
			FFCSBLContentControl.style.opacity = 0;
			FFCAusContentControl.style.opacity = 0;
			FFCIconContentControl.style.opacity = 0;


			
			FFCBAControl.style.opacity = 1;


		
		}; 
	  
		
		document.getElementsByClassName('FFCSBL')[0].onclick =function()
		{
		
			FFCSBLContentControl.classList.add('open');
			FFCSBLControl.classList.add('open');
			FFCSBLContenttextControl.classList.add('open');
		
			FFCSBLContentControl.classList.remove('close');
			FFCSBLControl.classList.remove('close');
			FFCSBLContenttextControl.classList.remove('close');
			FFCAmazonContentControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			
			FFCNAEUJPContentControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			
			FFCAusContentControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCAusControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCIconContentControl.classList.remove('open');
			FFCIconControl.classList.add('close');
			FFCIconControl.classList.remove('open');
			FFCIconControl.classList.add('close');

			FFCSBLContentControl.style.zIndex = 18;
			FFCSBLControl.style.zIndex = 19;
			FFCSBLContentControl.style.opacity = 0.99;
			FFCSBLContenttextControl.style.opacity = 1;
			FFCAmazonControl.style.zIndex = 16;
			FFCNAEUJPControl.style.zIndex = 16;
			FFCAusControl.style.zIndex = 16;
			FFCIconControl.style.zIndex = 16;
			
			FFCAmazonContentControl.style.zIndex = 17;
			FFCNAEUJPContentControl.style.zIndex = 17;
			FFCAusContentControl.style.zIndex = 17;
			FFCIconContentControl.style.zIndex = 17;
			
			FFCAmazonContentControl.style.opacity = 0;
			FFCNAEUJPContentControl.style.opacity = 0;
			
			FFCAusContentControl.style.opacity = 0;
			FFCIconContentControl.style.opacity = 0;
			
			FFCBAControl.style.opacity = 1;

		
		}; 
	  
		
		
		document.getElementsByClassName('FFCAus')[0].onclick =function()
		{
		
			FFCAusContentControl.classList.add('open');
			FFCAusControl.classList.add('open');
			FFCAusContenttextControl.classList.add('open');
		
			FFCAusContentControl.classList.remove('close');
			FFCAusControl.classList.remove('close');
			FFCAusContenttextControl.classList.remove('close');
			
			FFCAmazonContentControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			FFCNAEUJPContentControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCSBLContentControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCSBLControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCIconContentControl.classList.remove('open');
			FFCIconControl.classList.add('close');
			FFCIconControl.classList.remove('open');
			FFCIconControl.classList.add('close');
			

			FFCAusContentControl.style.zIndex = 18;
			FFCAusControl.style.zIndex = 19;
			FFCAusContentControl.style.opacity = 0.99;
			FFCAusContenttextControl.style.opacity = 1;
			FFCAmazonControl.style.zIndex = 16;
			FFCNAEUJPControl.style.zIndex = 16;
			FFCSBLControl.style.zIndex = 16;
			FFCIconControl.style.zIndex = 16;
			
			FFCAmazonContentControl.style.zIndex = 17;
			FFCNAEUJPContentControl.style.zIndex = 17;
			FFCSBLContentControl.style.zIndex = 17;
			FFCIconContentControl.style.zIndex = 17;
			
			FFCAmazonContentControl.style.opacity = 0;
			FFCNAEUJPContentControl.style.opacity = 0;
			FFCSBLContentControl.style.opacity = 0;
			FFCIconContentControl.style.opacity = 0;
			
			FFCBAControl.style.opacity = 1;

		
		}; 
	  
		
		
		document.getElementsByClassName('FFCIcon')[0].onclick =function()
		{
		
			FFCIconContentControl.classList.add('open');
			FFCIconControl.classList.add('open');
			FFCIconContenttextControl.classList.add('open');
		
			FFCIconContentControl.classList.remove('close');
			FFCIconControl.classList.remove('close');
			FFCIconContenttextControl.classList.remove('close');
			FFCAmazonContentControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonControl.classList.add('close');
			FFCNAEUJPContentControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPControl.classList.add('close');
			FFCSBLContentControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCSBLControl.classList.remove('open');
			FFCSBLControl.classList.add('close');
			FFCAusContentControl.classList.remove('open');
			FFCAusControl.classList.add('close');
			FFCAusControl.classList.remove('open');
			FFCAusControl.classList.add('close');




			FFCIconContentControl.style.zIndex = 18;
			FFCIconControl.style.zIndex = 19;
			FFCIconContentControl.style.opacity = 0.99;
			FFCIconContenttextControl.style.opacity = 1;
			FFCAmazonControl.style.zIndex = 16;
			FFCNAEUJPControl.style.zIndex = 16;
			FFCSBLControl.style.zIndex = 16;
			FFCAusControl.style.zIndex = 16;
			
			FFCAmazonContentControl.style.zIndex = 17;
			FFCNAEUJPContentControl.style.zIndex = 17;
			FFCSBLContentControl.style.zIndex = 17;
			FFCAusContentControl.style.zIndex = 17;
			
			FFCAmazonContentControl.style.opacity = 0;
			FFCNAEUJPContentControl.style.opacity = 0;
			FFCSBLContentControl.style.opacity = 0;
			FFCAusContentControl.style.opacity = 0;
			
			FFCBAControl.style.opacity = 1;

		
		}; 
		
		document.getElementsByClassName('FFCBA')[0].onclick =function()
		{
			FFCAmazonContentControl.classList.remove('open');
			FFCAmazonControl.classList.remove('open');
			FFCAmazonContenttextControl.classList.remove('open');
			/*FFCAmazonTitleControl.classList.remove('open');*/

		
			FFCAmazonContentControl.classList.add('close');
			FFCAmazonControl.classList.add('close');
			FFCAmazonContenttextControl.classList.add('close');
			
			FFCNAEUJPContentControl.classList.remove('open');
			FFCNAEUJPControl.classList.remove('open');
			FFCNAEUJPContenttextControl.classList.remove('open');
		
			FFCNAEUJPContentControl.classList.add('close');
			FFCNAEUJPControl.classList.add('close');
			FFCNAEUJPContenttextControl.classList.add('close');
			
			FFCSBLContentControl.classList.remove('open');
			FFCSBLControl.classList.remove('open');
			FFCSBLContenttextControl.classList.remove('open');
		
			FFCSBLContentControl.classList.add('close');
			FFCSBLControl.classList.add('close');
			FFCSBLContenttextControl.classList.add('close');
			
			FFCAusContentControl.classList.remove('open');
			FFCAusControl.classList.remove('open');
			FFCAusContenttextControl.classList.remove('open');
		
			FFCAusContentControl.classList.add('close');
			FFCAusControl.classList.add('close');
			FFCAusContenttextControl.classList.add('close');

			
			FFCIconContentControl.classList.remove('open');
			FFCIconControl.classList.remove('open');
			FFCIconContenttextControl.classList.remove('open');
		
			FFCIconContentControl.classList.add('close');
			FFCIconControl.classList.add('close');
			FFCIconContenttextControl.classList.add('close');
			
			

			FFCIconContentControl.style.zIndex = 15;

			FFCIconControl.style.zIndex = 19;		
			FFCIconContenttextControl.style.opacity = 0;
			FFCAmazonControl.style.zIndex = 19;
			FFCNAEUJPControl.style.zIndex = 19;
			FFCSBLControl.style.zIndex = 19;
			FFCAusControl.style.zIndex = 19;
			FFCBAControl.style.opacity = 0;
			
			FFCAmazonContentControl.style.zIndex = 17;
			FFCNAEUJPContentControl.style.zIndex = 17;
			FFCSBLContentControl.style.zIndex = 17;
			FFCAusContentControl.style.zIndex = 17;
			FFCIconContentControl.style.zIndex = 17;


		
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
			
		};	
	
  	} 
  
};

document.getElementsByClassName('HeatWave')[0].onclick = function() {
	
	/*var FFCIconTitleControl = document.getElementsByClassName('FFCIconTitle')[0];*/
  	var HWCALLContenttextControl = document.getElementsByClassName('HWCALLContenttext')[0];
	var HWCALLContentControl = document.getElementsByClassName('HWCALLContent')[0];
	
	var HWCpart1Control = document.getElementsByClassName('HWCpart1')[0];
  	var HWCpart1ContenttextControl = document.getElementsByClassName('HWCpart1Contenttext')[0];
	var HWCpart1ContentControl = document.getElementsByClassName('HWCpart1Content')[0];
	
	var HWCpart2Control = document.getElementsByClassName('HWCpart2')[0];
  	var HWCpart2ContenttextControl = document.getElementsByClassName('HWCpart2Contenttext')[0];
	var HWCpart2ContentControl = document.getElementsByClassName('HWCpart2Content')[0];
	
	var HWCpart3Control = document.getElementsByClassName('HWCpart3')[0];
  	var HWCpart3ContenttextControl = document.getElementsByClassName('HWCpart3Contenttext')[0];
	var HWCpart3ContentControl = document.getElementsByClassName('HWCpart3Content')[0];
	
	var HWCpart4Control = document.getElementsByClassName('HWCpart4')[0];
  	var HWCpart4ContenttextControl = document.getElementsByClassName('HWCpart4Contenttext')[0];
	var HWCpart4ContentControl = document.getElementsByClassName('HWCpart4Content')[0];
	
	var HWCBAControl = document.getElementsByClassName('HWCBA')[0];
	
	
  	if(this.value === 'close') 
  	{ 
    	this.value = 'open';
		textcardHWC.classList.remove('close'); 
    	textcardHWC.classList.add('open');
		MainMenuControl.classList.add('close');
		MainMenuControl.classList.remove('open');
		SteamControl.classList.add('open');
		SteamControl.classList.remove('close');
		DisasterControl.classList.add('open');
		DisasterControl.classList.remove('close');
		HWCBGControl.classList.add('open');
  		BbtnControl.classList.add('open');

	  
		document.getElementsByClassName('HWCpart1')[0].onclick =function()
		{
			
			HWCALLContentControl.classList.add('close');
			HWCpart1ContentControl.classList.add('open');
			HWCpart1Control.classList.add('open');
			HWCpart1ContenttextControl.classList.add('open');
		
			HWCpart1ContentControl.classList.remove('close');
			HWCpart1Control.classList.remove('close');
			HWCpart1ContenttextControl.classList.remove('close');

			HWCpart1ContentControl.style.zIndex = 18;
			HWCpart1Control.style.zIndex = 19;
			HWCpart1ContentControl.style.opacity = 0.99;
			HWCpart1ContenttextControl.style.opacity = 1;
			HWCpart2Control.style.zIndex = 16;
			HWCpart3Control.style.zIndex = 16;
			HWCpart4Control.style.zIndex = 16;
			HWCALLContentControl.style.zIndex = 16;
			
			HWCpart2ContentControl.style.zIndex = 17;
			HWCpart3ContentControl.style.zIndex = 17;
			HWCpart4ContentControl.style.zIndex = 17;
			HWCALLContentControl.style.zIndex = 17;
			
			
			HWCpart2ContentControl.style.opacity = 0;
			HWCpart3ContentControl.style.opacity = 0;
			HWCpart4ContentControl.style.opacity = 0;
			
			
			HWCBAControl.style.opacity = 1;
			
			HWCpart2ContentControl.classList.remove('open');
			HWCpart2Control.classList.add('close');
			HWCpart2Control.classList.remove('open');
			HWCpart2Control.classList.add('close');
			HWCpart3ContentControl.classList.remove('open');
			HWCpart3Control.classList.add('close');
			HWCpart3Control.classList.remove('open');
			HWCpart3Control.classList.add('close');
			HWCpart4ContentControl.classList.remove('open');
			HWCpart4Control.classList.add('close');
			HWCpart4Control.classList.remove('open');
			HWCpart4Control.classList.add('close');
			HWCALLContentControl.classList.remove('open');
			


		
		}; 
	  
		
		
		document.getElementsByClassName('HWCpart2')[0].onclick =function()
		{
			HWCALLContentControl.classList.add('close');		
			HWCpart2ContentControl.classList.add('open');
			HWCpart2Control.classList.add('open');
			HWCpart2ContenttextControl.classList.add('open');
		
			HWCpart2ContentControl.classList.remove('close');
			HWCpart2Control.classList.remove('close');
			HWCpart2ContenttextControl.classList.remove('close');

			HWCpart2ContentControl.style.zIndex = 18;
			HWCpart2Control.style.zIndex = 19;
			HWCpart2ContentControl.style.opacity = 0.99;
			HWCpart2ContenttextControl.style.opacity = 1;
			HWCpart1Control.style.zIndex = 16;
			HWCpart3Control.style.zIndex = 16;
			HWCpart4Control.style.zIndex = 16;
			HWCALLContentControl.style.zIndex = 16;
			
			HWCpart1ContentControl.style.zIndex = 17;
			HWCpart3ContentControl.style.zIndex = 17;
			HWCpart4ContentControl.style.zIndex = 17;
			HWCALLContentControl.style.zIndex = 17;
			
			HWCpart1ContentControl.style.opacity = 0;
			HWCpart3ContentControl.style.opacity = 0;
			HWCpart4ContentControl.style.opacity = 0;
			
			HWCBAControl.style.opacity = 1;

			
			HWCpart1ContentControl.classList.remove('open');
			HWCpart1Control.classList.add('close');
			HWCpart1Control.classList.remove('open');
			HWCpart1Control.classList.add('close');
			HWCpart3ContentControl.classList.remove('open');
			HWCpart3Control.classList.add('close');
			HWCpart3Control.classList.remove('open');
			HWCpart3Control.classList.add('close');
			HWCpart4ContentControl.classList.remove('open');
			HWCpart4Control.classList.add('close');
			HWCpart4Control.classList.remove('open');
			HWCpart4Control.classList.add('close');
			HWCALLContentControl.classList.remove('open');


		
		}; 
	  
		
		document.getElementsByClassName('HWCpart3')[0].onclick =function()
		{
			HWCALLContentControl.classList.add('close');
			HWCpart3ContentControl.classList.add('open');
			HWCpart3Control.classList.add('open');
			HWCpart3ContenttextControl.classList.add('open');
		
			HWCpart3ContentControl.classList.remove('close');
			HWCpart3Control.classList.remove('close');
			HWCpart3ContenttextControl.classList.remove('close');

			HWCpart3ContentControl.style.zIndex = 18;
			HWCpart3Control.style.zIndex = 19;
			HWCpart3ContentControl.style.opacity = 0.99;
			HWCpart3ContenttextControl.style.opacity = 1;
			HWCpart1Control.style.zIndex = 16;
			HWCpart2Control.style.zIndex = 16;
			HWCpart4Control.style.zIndex = 16;
			HWCALLContentControl.style.zIndex = 16;
			
			HWCpart1ContentControl.style.zIndex = 17;
			HWCpart2ContentControl.style.zIndex = 17;
			HWCpart4ContentControl.style.zIndex = 17;
			HWCALLContentControl.style.zIndex = 17;
			
			HWCpart1ContentControl.style.opacity = 0;
			HWCpart2ContentControl.style.opacity = 0;
			HWCpart4ContentControl.style.opacity = 0;
			
			HWCBAControl.style.opacity = 1;

			
			HWCpart2ContentControl.classList.remove('open');
			HWCpart2Control.classList.add('close');
			HWCpart2Control.classList.remove('open');
			HWCpart2Control.classList.add('close');
			HWCpart1ContentControl.classList.remove('open');
			HWCpart1Control.classList.add('close');
			HWCpart1Control.classList.remove('open');
			HWCpart1Control.classList.add('close');
			HWCpart4ContentControl.classList.remove('open');
			HWCpart4Control.classList.add('close');
			HWCpart4Control.classList.remove('open');
			HWCpart4Control.classList.add('close');
			HWCALLContentControl.classList.remove('open');

		
		}; 
	  
		
		
		document.getElementsByClassName('HWCpart4')[0].onclick =function()
		{
			HWCALLContentControl.classList.add('close');		
			HWCpart4ContentControl.classList.add('open');
			HWCpart4Control.classList.add('open');
			HWCpart4ContenttextControl.classList.add('open');
		
			HWCpart4ContentControl.classList.remove('close');
			HWCpart4Control.classList.remove('close');
			HWCpart4ContenttextControl.classList.remove('close');

			HWCpart4ContentControl.style.zIndex = 18;
			HWCpart4Control.style.zIndex = 19;
			HWCpart4ContentControl.style.opacity = 0.99;
			HWCpart4ContenttextControl.style.opacity = 1;
			HWCpart1Control.style.zIndex = 16;
			HWCpart2Control.style.zIndex = 16;
			HWCpart3Control.style.zIndex = 16;
			HWCALLContentControl.style.zIndex = 16;
			
			HWCpart1ContentControl.style.zIndex = 17;
			HWCpart2ContentControl.style.zIndex = 17;
			HWCpart3ContentControl.style.zIndex = 17;
			HWCALLContentControl.style.zIndex = 17;
			
			HWCpart1ContentControl.style.opacity = 0;
			HWCpart2ContentControl.style.opacity = 0;
			HWCpart3ContentControl.style.opacity = 0;
			
			HWCBAControl.style.opacity = 1;

			
			HWCpart2ContentControl.classList.remove('open');
			HWCpart2ContentControl.classList.add('close');
			HWCpart2Control.classList.remove('open');
			HWCpart2Control.classList.add('close');
			HWCpart3ContentControl.classList.remove('open');
			HWCpart3ContentControl.classList.add('close');
			HWCpart3Control.classList.remove('open');
			HWCpart3Control.classList.add('close');
			HWCpart1ContentControl.classList.remove('open');
			HWCpart1ContentControl.classList.add('close');
			HWCpart1Control.classList.remove('open');
			HWCpart1Control.classList.add('close');
			HWCALLContentControl.classList.remove('open');

		
		}; 
	  
		document.getElementsByClassName('HWCBA')[0].onclick =function()
		{
			HWCALLContentControl.classList.remove('close');
			
			HWCpart1ContentControl.classList.remove('open');
			HWCpart1Control.classList.remove('open');
			HWCpart1ContenttextControl.classList.remove('open');
		
			HWCpart1ContentControl.classList.add('close');
			HWCpart1Control.classList.add('close');
			HWCpart1ContenttextControl.classList.add('close');
			
			HWCpart2ContentControl.classList.remove('open');
			HWCpart2Control.classList.remove('open');
			HWCpart2ContenttextControl.classList.remove('open');
		
			HWCpart2ContentControl.classList.add('close');
			HWCpart2Control.classList.add('close');
			HWCpart2ContenttextControl.classList.add('close');
			
			HWCpart3ContentControl.classList.remove('open');
			HWCpart3Control.classList.remove('open');
			HWCpart3ContenttextControl.classList.remove('open');
		
			HWCpart3ContentControl.classList.add('close');
			HWCpart3Control.classList.add('close');
			HWCpart3ContenttextControl.classList.add('close');
			
			HWCpart4ContentControl.classList.remove('open');
			HWCpart4Control.classList.remove('open');
			HWCpart4ContenttextControl.classList.remove('open');
		
			HWCpart4ContentControl.classList.add('close');
			HWCpart4Control.classList.add('close');
			HWCpart4ContenttextControl.classList.add('close');

			HWCpart4ContentControl.style.zIndex = 15;
			HWCpart4Control.style.zIndex = 19;		
			HWCpart4ContenttextControl.style.opacity = 0;
			HWCpart1Control.style.zIndex = 19;
			HWCpart2Control.style.zIndex = 19;
			HWCpart3Control.style.zIndex = 19;
			HWCALLContentControl.style.zIndex = 18;
			
			HWCpart1ContentControl.style.zIndex = 17;
			HWCpart2ContentControl.style.zIndex = 17;
			HWCpart3ContentControl.style.zIndex = 17;
			HWCpart4ContentControl.style.zIndex = 17;
			

			
			HWCBAControl.style.opacity = 0;



		
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
			
		};	
	
  	} 
  
};

document.getElementsByClassName('ExtremeClimate')[0].onclick = function() {
	
	/*var FFCIconTitleControl = document.getElementsByClassName('FFCIconTitle')[0];*/
  	var ECCALLContenttextControl = document.getElementsByClassName('ECCALLContenttext')[0];
	var ECCALLContentControl = document.getElementsByClassName('ECCALLContent')[0];
	
	var ECCpart1Control = document.getElementsByClassName('ECCpart1')[0];
  	var ECCpart1ContenttextControl = document.getElementsByClassName('ECCpart1Contenttext')[0];
	var ECCpart1ContentControl = document.getElementsByClassName('ECCpart1Content')[0];
	
	var ECCpart2Control = document.getElementsByClassName('ECCpart2')[0];
  	var ECCpart2ContenttextControl = document.getElementsByClassName('ECCpart2Contenttext')[0];
	var ECCpart2ContentControl = document.getElementsByClassName('ECCpart2Content')[0];
	
	var ECCpart3Control = document.getElementsByClassName('ECCpart3')[0];
  	var ECCpart3ContenttextControl = document.getElementsByClassName('ECCpart3Contenttext')[0];
	var ECCpart3ContentControl = document.getElementsByClassName('ECCpart3Content')[0];
	
	var ECCpart4Control = document.getElementsByClassName('ECCpart4')[0];
  	var ECCpart4ContenttextControl = document.getElementsByClassName('ECCpart4Contenttext')[0];
	var ECCpart4ContentControl = document.getElementsByClassName('ECCpart4Content')[0];
	
	var ECCpart5Control = document.getElementsByClassName('ECCpart5')[0];
  	var ECCpart5ContenttextControl = document.getElementsByClassName('ECCpart5Contenttext')[0];
	var ECCpart5ContentControl = document.getElementsByClassName('ECCpart5Content')[0];
	
	var ECCIconControl = document.getElementsByClassName('ECCIcon')[0];
	/*var ECCIconTitleControl = document.getElementsByClassName('ECCIconTitle')[0];*/
  	var ECCIconContenttextControl = document.getElementsByClassName('ECCIconContenttext')[0];
	var ECCIconContentControl = document.getElementsByClassName('ECCIconContent')[0];
	
	var ECCBAControl = document.getElementsByClassName('ECCBA')[0];
	
	
	
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

	  
		document.getElementsByClassName('ECCpart1')[0].onclick =function()
		{
			
			ECCALLContentControl.classList.add('close');
			ECCpart1ContentControl.classList.add('open');
			ECCpart1Control.classList.add('open');
			ECCpart1ContenttextControl.classList.add('open');
		
			ECCpart1ContentControl.classList.remove('close');
			ECCpart1Control.classList.remove('close');
			ECCpart1ContenttextControl.classList.remove('close');

			ECCpart1ContentControl.style.zIndex = 18;
			ECCpart1Control.style.zIndex = 19;
			ECCpart1ContentControl.style.opacity = 0.99;
			ECCpart1ContenttextControl.style.opacity = 1;
			ECCpart2Control.style.zIndex = 16;
			ECCpart3Control.style.zIndex = 16;
			ECCpart4Control.style.zIndex = 16;
			ECCpart5Control.style.zIndex = 16;
			ECCIconControl.style.zIndex = 16;
			
			ECCpart2ContentControl.style.zIndex = 17;
			ECCpart3ContentControl.style.zIndex = 17;
			ECCpart4ContentControl.style.zIndex = 17;
			ECCpart5ContentControl.style.zIndex = 17;
			ECCIconContentControl.style.zIndex = 17;
			
			ECCpart2ContentControl.style.opacity = 0;
			ECCpart3ContentControl.style.opacity = 0;
			ECCpart4ContentControl.style.opacity = 0;
			ECCpart5ContentControl.style.opacity = 0;
			ECCIconContentControl.style.opacity = 0;
			
			
			ECCBAControl.style.opacity = 1;

			
			ECCpart2ContentControl.classList.remove('open');
			ECCpart2ContentControl.classList.add('close');
			ECCpart2Control.classList.remove('open');
			ECCpart2Control.classList.add('close');
			ECCpart3ContentControl.classList.remove('open');
			ECCpart3ContentControl.classList.add('close');
			ECCpart3Control.classList.remove('open');
			ECCpart3Control.classList.add('close');
			ECCpart4ContentControl.classList.remove('open');
			ECCpart4ContentControl.classList.add('close');
			ECCpart4Control.classList.remove('open');
			ECCpart4Control.classList.add('close');
			ECCpart5ContentControl.classList.remove('open');
			ECCpart5ContentControl.classList.add('close');
			ECCpart5Control.classList.remove('open');
			ECCpart5Control.classList.add('close');
			ECCALLContentControl.classList.remove('open');
			ECCIconContentControl.classList.remove('open');
			ECCIconControl.classList.remove('open');
			ECCIconControl.classList.add('close');

		
		}; 
	  
		
		
		document.getElementsByClassName('ECCpart2')[0].onclick =function()
		{
			ECCALLContentControl.classList.add('close');		
			ECCpart2ContentControl.classList.add('open');
			ECCpart2Control.classList.add('open');
			ECCpart2ContenttextControl.classList.add('open');
		
			ECCpart2ContentControl.classList.remove('close');
			ECCpart2Control.classList.remove('close');
			ECCpart2ContenttextControl.classList.remove('close');

			ECCpart2ContentControl.style.zIndex = 18;
			ECCpart2Control.style.zIndex = 19;
			ECCpart2ContentControl.style.opacity = 0.99;
			ECCpart2ContenttextControl.style.opacity = 1;
			ECCpart1Control.style.zIndex = 16;
			ECCpart3Control.style.zIndex = 16;
			ECCpart4Control.style.zIndex = 16;
			ECCpart5Control.style.zIndex = 16;	
			ECCIconControl.style.zIndex = 16;
			
			ECCpart1ContentControl.style.zIndex = 17;
			ECCpart3ContentControl.style.zIndex = 17;
			ECCpart4ContentControl.style.zIndex = 17;
			ECCpart5ContentControl.style.zIndex = 17;
			ECCIconContentControl.style.zIndex = 17;
			
			ECCpart1ContentControl.style.opacity = 0;
			ECCpart3ContentControl.style.opacity = 0;
			ECCpart4ContentControl.style.opacity = 0;
			ECCpart5ContentControl.style.opacity = 0;
			ECCIconContentControl.style.opacity = 0;
			
			ECCBAControl.style.opacity = 1;


			
			ECCpart1ContentControl.classList.remove('open');
			ECCpart1ContentControl.classList.add('close');
			ECCpart1Control.classList.remove('open');
			ECCpart1Control.classList.add('close');
			ECCpart3ContentControl.classList.remove('open');
			ECCpart3ContentControl.classList.add('close');
			ECCpart3Control.classList.remove('open');
			ECCpart3Control.classList.add('close');
			ECCpart4ContentControl.classList.remove('open');
			ECCpart4ContentControl.classList.add('close');
			ECCpart4Control.classList.remove('open');
			ECCpart4Control.classList.add('close');
			ECCpart5ContentControl.classList.remove('open');
			ECCpart5ContentControl.classList.add('close');
			ECCpart5Control.classList.remove('open');
			ECCpart5Control.classList.add('close');
			ECCALLContentControl.classList.remove('open');
			ECCIconContentControl.classList.remove('open');
			ECCIconControl.classList.remove('open');
			ECCIconControl.classList.add('close');


		
		}; 
	  
		
		document.getElementsByClassName('ECCpart3')[0].onclick =function()
		{
			ECCALLContentControl.classList.add('close');
			ECCpart3ContentControl.classList.add('open');
			ECCpart3Control.classList.add('open');
			ECCpart3ContenttextControl.classList.add('open');
		
			ECCpart3ContentControl.classList.remove('close');
			ECCpart3Control.classList.remove('close');
			ECCpart3ContenttextControl.classList.remove('close');

			ECCpart3ContentControl.style.zIndex = 18;
			ECCpart3Control.style.zIndex = 19;
			ECCpart3ContentControl.style.opacity = 0.99;
			ECCpart3ContenttextControl.style.opacity = 1;
			ECCpart1Control.style.zIndex = 16;
			ECCpart2Control.style.zIndex = 16;
			ECCpart4Control.style.zIndex = 16;
			ECCpart5Control.style.zIndex = 16;
			ECCIconControl.style.zIndex = 16;
			
			ECCpart1ContentControl.style.zIndex = 17;
			ECCpart2ContentControl.style.zIndex = 17;
			ECCpart4ContentControl.style.zIndex = 17;
			ECCpart5ContentControl.style.zIndex = 17;
			ECCIconContentControl.style.zIndex = 17;
			
			ECCpart1ContentControl.style.opacity = 0;
			ECCpart2ContentControl.style.opacity = 0;
			ECCpart4ContentControl.style.opacity = 0;
			ECCpart5ContentControl.style.opacity = 0;
			ECCIconContentControl.style.opacity = 0;
			
			ECCBAControl.style.opacity = 1;
			
			ECCpart2ContentControl.classList.remove('open');
			ECCpart2ContentControl.classList.add('close');
			ECCpart2Control.classList.remove('open');
			ECCpart2Control.classList.add('close');
			ECCpart1ContentControl.classList.remove('open');
			ECCpart1ContentControl.classList.add('close');
			ECCpart1Control.classList.remove('open');
			ECCpart1Control.classList.add('close');
			ECCpart4ContentControl.classList.remove('open');
			ECCpart4ContentControl.classList.add('close');
			ECCpart4Control.classList.remove('open');
			ECCpart4Control.classList.add('close');
			ECCpart5ContentControl.classList.remove('open');
			ECCpart5ContentControl.classList.add('close');
			ECCpart5Control.classList.remove('open');
			ECCpart5Control.classList.add('close');
			ECCALLContentControl.classList.remove('open');
			ECCIconContentControl.classList.remove('open');
			ECCIconControl.classList.remove('open');
			ECCIconControl.classList.add('close');

		
		}; 
	  
		
		
		document.getElementsByClassName('ECCpart4')[0].onclick =function()
		{
			ECCALLContentControl.classList.add('close');		
			ECCpart4ContentControl.classList.add('open');
			ECCpart4Control.classList.add('open');
			ECCpart4ContenttextControl.classList.add('open');
		
			ECCpart4ContentControl.classList.remove('close');
			ECCpart4Control.classList.remove('close');
			ECCpart4ContenttextControl.classList.remove('close');

			ECCpart4ContentControl.style.zIndex = 18;
			ECCpart4Control.style.zIndex = 19;
			ECCpart4ContentControl.style.opacity = 0.99;
			ECCpart4ContenttextControl.style.opacity = 1;
			ECCpart1Control.style.zIndex = 16;
			ECCpart2Control.style.zIndex = 16;
			ECCpart3Control.style.zIndex = 16;
			ECCpart5Control.style.zIndex = 16;
			ECCIconControl.style.zIndex = 16;
			
			ECCpart1ContentControl.style.zIndex = 17;
			ECCpart2ContentControl.style.zIndex = 17;
			ECCpart3ContentControl.style.zIndex = 17;
			ECCpart5ContentControl.style.zIndex = 17;
			ECCIconContentControl.style.zIndex = 17;
			
			ECCpart1ContentControl.style.opacity = 0;
			ECCpart2ContentControl.style.opacity = 0;
			ECCpart3ContentControl.style.opacity = 0;
			ECCpart5ContentControl.style.opacity = 0;
			ECCIconContentControl.style.opacity = 0;
			
			ECCBAControl.style.opacity = 1;
			
			ECCpart2ContentControl.classList.remove('open');
			ECCpart2ContentControl.classList.add('close');
			ECCpart2Control.classList.remove('open');
			ECCpart2Control.classList.add('close');
			ECCpart3ContentControl.classList.remove('open');
			ECCpart3ContentControl.classList.add('close');
			ECCpart3Control.classList.remove('open');
			ECCpart3Control.classList.add('close');
			ECCpart1ContentControl.classList.remove('open');
			ECCpart1ContentControl.classList.add('close');
			ECCpart1Control.classList.remove('open');
			ECCpart1Control.classList.add('close');
			ECCpart5ContentControl.classList.remove('open');
			ECCpart5ContentControl.classList.add('close');
			ECCpart5Control.classList.remove('open');
			ECCpart5Control.classList.add('close');
			ECCALLContentControl.classList.remove('open');
			ECCIconContentControl.classList.remove('open');
			ECCIconControl.classList.remove('open');
			ECCIconControl.classList.add('close');

		
		}; 
	  
		
		
		document.getElementsByClassName('ECCpart5')[0].onclick =function()
		{
			
			ECCALLContentControl.classList.add('close');
			ECCpart5ContentControl.classList.add('open');
			ECCpart5Control.classList.add('open');
			ECCpart5ContenttextControl.classList.add('open');
		
			ECCpart5ContentControl.classList.remove('close');
			ECCpart5Control.classList.remove('close');
			ECCpart5ContenttextControl.classList.remove('close');

			ECCpart5ContentControl.style.zIndex = 18;
			ECCpart5Control.style.zIndex = 19;
			ECCpart5ContentControl.style.opacity = 0.99;
			ECCpart5ContenttextControl.style.opacity = 1;
			ECCpart2Control.style.zIndex = 16;
			ECCpart3Control.style.zIndex = 16;
			ECCpart4Control.style.zIndex = 16;
			ECCpart1Control.style.zIndex = 16;
			ECCIconControl.style.zIndex = 16;
			
			ECCpart1ContentControl.style.zIndex = 17;
			ECCpart2ContentControl.style.zIndex = 17;
			ECCpart3ContentControl.style.zIndex = 17;
			ECCpart4ContentControl.style.zIndex = 17;
			ECCIconContentControl.style.zIndex = 17;
			
			ECCpart1ContentControl.style.opacity = 0;
			ECCpart2ContentControl.style.opacity = 0;
			ECCpart3ContentControl.style.opacity = 0;
			ECCpart4ContentControl.style.opacity = 0;
			ECCIconContentControl.style.opacity = 0;
			
			ECCBAControl.style.opacity = 1;
			
			ECCpart2ContentControl.classList.remove('open');
			ECCpart2ContentControl.classList.add('close');
			ECCpart2Control.classList.remove('open');
			ECCpart2Control.classList.add('close');
			ECCpart3ContentControl.classList.remove('open');
			ECCpart3ContentControl.classList.add('close');
			ECCpart3Control.classList.remove('open');
			ECCpart3Control.classList.add('close');
			ECCpart4ContentControl.classList.remove('open');
			ECCpart4ContentControl.classList.add('close');
			ECCpart4Control.classList.remove('open');
			ECCpart4Control.classList.add('close');
			ECCpart1ContentControl.classList.remove('open');
			ECCpart1ContentControl.classList.add('close');
			ECCpart1Control.classList.remove('open');
			ECCpart1Control.classList.add('close');
			ECCALLContentControl.classList.remove('open');
			ECCIconContentControl.classList.remove('open');
			ECCIconControl.classList.remove('open');
			ECCIconControl.classList.add('close');
			


		
		}; 
	  
		
			


		
	} 
		
		document.getElementsByClassName('ECCIcon')[0].onclick =function()
		{
			
			ECCALLContentControl.classList.add('close');
			ECCIconContentControl.classList.add('open');
			ECCIconControl.classList.add('open');
			ECCIconContenttextControl.classList.add('open');
		
			ECCIconContentControl.classList.remove('close');
			ECCIconControl.classList.remove('close');
			ECCIconContenttextControl.classList.remove('close');

			ECCIconContentControl.style.zIndex = 18;
			ECCIconControl.style.zIndex = 19;
			ECCIconContentControl.style.opacity = 0.99;
			ECCIconContenttextControl.style.opacity = 1;
			ECCpart2Control.style.zIndex = 16;
			ECCpart3Control.style.zIndex = 16;
			ECCpart4Control.style.zIndex = 16;
			ECCpart1Control.style.zIndex = 16;
			ECCpart5Control.style.zIndex = 16;
			
			ECCpart1ContentControl.style.zIndex = 17;
			ECCpart2ContentControl.style.zIndex = 17;
			ECCpart3ContentControl.style.zIndex = 17;
			ECCpart4ContentControl.style.zIndex = 17;
			ECCpart5ContentControl.style.zIndex = 17;
			
			ECCpart1ContentControl.style.opacity = 0;
			ECCpart2ContentControl.style.opacity = 0;
			ECCpart3ContentControl.style.opacity = 0;
			ECCpart4ContentControl.style.opacity = 0;
			ECCpart5ContentControl.style.opacity = 0;
			
			ECCBAControl.style.opacity = 1;
			
			ECCpart2ContentControl.classList.remove('open');
			ECCpart2ContentControl.classList.add('close');
			ECCpart2Control.classList.remove('open');
			ECCpart2Control.classList.add('close');
			ECCpart3ContentControl.classList.remove('open');
			ECCpart3ContentControl.classList.add('close');
			ECCpart3Control.classList.remove('open');
			ECCpart3Control.classList.add('close');
			ECCpart4ContentControl.classList.remove('open');
			ECCpart4ContentControl.classList.add('close');
			ECCpart4Control.classList.remove('open');
			ECCpart4Control.classList.add('close');
			ECCpart1ContentControl.classList.remove('open');
			ECCpart1ContentControl.classList.add('close');
			ECCpart1Control.classList.remove('open');
			ECCpart1Control.classList.add('close');
			ECCALLContentControl.classList.remove('open');
			ECCpart5ContentControl.classList.remove('open');
			ECCpart5ContentControl.classList.add('close');
			ECCpart5Control.classList.remove('open');
			ECCpart5Control.classList.add('close');
			


		
		}; 
	  
		document.getElementsByClassName('ECCBA')[0].onclick =function()
		{
			ECCALLContentControl.classList.remove('close');
			ECCpart1ContentControl.classList.remove('open');
			ECCpart1Control.classList.remove('open');
			ECCpart1ContenttextControl.classList.remove('open');
		
			ECCpart1ContentControl.classList.add('close');
			ECCpart1Control.classList.add('close');
			ECCpart1ContenttextControl.classList.add('close');
			
			ECCpart2ContentControl.classList.remove('open');
			ECCpart2Control.classList.remove('open');
			ECCpart2ContenttextControl.classList.remove('open');
		
			ECCpart2ContentControl.classList.add('close');
			ECCpart2Control.classList.add('close');
			ECCpart2ContenttextControl.classList.add('close');
			
			ECCpart3ContentControl.classList.remove('open');
			ECCpart3Control.classList.remove('open');
			ECCpart3ContenttextControl.classList.remove('open');
		
			ECCpart3ContentControl.classList.add('close');
			ECCpart3Control.classList.add('close');
			ECCpart3ContenttextControl.classList.add('close');
			
			ECCpart4ContentControl.classList.remove('open');
			ECCpart4Control.classList.remove('open');
			ECCpart4ContenttextControl.classList.remove('open');
		
			ECCpart4ContentControl.classList.add('close');
			ECCpart4Control.classList.add('close');
			ECCpart4ContenttextControl.classList.add('close');
			
			ECCpart5ContentControl.classList.remove('open');
			ECCpart5Control.classList.remove('open');
			ECCpart5ContenttextControl.classList.remove('open');
		
			ECCpart5ContentControl.classList.add('close');
			ECCpart5Control.classList.add('close');
			ECCpart5ContenttextControl.classList.add('close');
			
			ECCIconContentControl.classList.remove('open');
			ECCIconControl.classList.remove('open');
			ECCIconContenttextControl.classList.remove('open');
		
			ECCIconContentControl.classList.add('close');
			ECCIconControl.classList.add('close');
			ECCIconContenttextControl.classList.add('close');

			ECCpart1ContentControl.style.zIndex = 15;
			ECCpart1Control.style.zIndex = 19;		
			ECCpart2Control.style.zIndex = 19;
			ECCpart3Control.style.zIndex = 19;
			ECCpart4Control.style.zIndex = 19;
			ECCpart5Control.style.zIndex = 19;
			ECCIconControl.style.zIndex = 19;
			ECCBAControl.style.opacity = 0;


		
		}; 


	  
		document.getElementsByClassName('Backbutton')[0].onclick =function()
		{
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
	
	var DSCpart1Control = document.getElementsByClassName('DSCpart1')[0];
	var DSCpart1TitleControl = document.getElementsByClassName('DSCpart1Title')[0];
  	var DSCpart1ContenttextControl = document.getElementsByClassName('DSCpart1Contenttext')[0];
	var DSCpart1ContentControl = document.getElementsByClassName('DSCpart1Content')[0];
	
	var DSCpart2Control = document.getElementsByClassName('DSCpart2')[0];
	var DSCpart2TitleControl = document.getElementsByClassName('DSCpart2Title')[0];
  	var DSCpart2ContenttextControl = document.getElementsByClassName('DSCpart2Contenttext')[0];
	var DSCpart2ContentControl = document.getElementsByClassName('DSCpart2Content')[0];
	
	var DSCpart3Control = document.getElementsByClassName('DSCpart3')[0];
	var DSCpart3TitleControl = document.getElementsByClassName('DSCpart3Title')[0];
  	var DSCpart3ContenttextControl = document.getElementsByClassName('DSCpart3Contenttext')[0];
	var DSCpart3ContentControl = document.getElementsByClassName('DSCpart3Content')[0];
	
	var DSCpart4Control = document.getElementsByClassName('DSCpart4')[0];
	var DSCpart4TitleControl = document.getElementsByClassName('DSCpart4Title')[0];
  	var DSCpart4ContenttextControl = document.getElementsByClassName('DSCpart4Contenttext')[0];
	var DSCpart4ContentControl = document.getElementsByClassName('DSCpart4Content')[0];
	
	var DSC1BAControl = document.getElementsByClassName('DSC1BA')[0];
	var DSC2BAControl = document.getElementsByClassName('DSC2BA')[0];
	var DSC3BAControl = document.getElementsByClassName('DSC3BA')[0];
	var DSC4BAControl = document.getElementsByClassName('DSC4BA')[0];
	
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

	  
		document.getElementsByClassName('DSCpart1')[0].onclick =function()
		{
		
			DSCpart1ContentControl.classList.add('open');
			DSCpart1Control.classList.add('open');
			DSCpart1TitleControl.classList.add('open');
			DSCpart1ContenttextControl.classList.add('open');
		
			DSCpart1ContentControl.classList.remove('close');
			DSCpart1Control.classList.remove('close');
			DSCpart1TitleControl.classList.remove('close');
			DSCpart1ContenttextControl.classList.remove('close');

			DSCpart1ContentControl.style.zIndex = 18;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1ContentControl.style.opacity = 0.99;
			DSCpart1ContenttextControl.style.opacity = 1;
			DSCpart2Control.style.zIndex = 16;
			DSCpart2TitleControl.style.zIndex = 16;
			DSCpart3Control.style.zIndex = 16;
			DSCpart3TitleControl.style.zIndex = 16;
			DSCpart4Control.style.zIndex = 16;
			DSCpart4TitleControl.style.zIndex = 16;
			DSC1BAControl.style.opacity = 1;



		
		}; 
	  
		document.getElementsByClassName('DSC1BA')[0].onclick =function()
		{
			DSCpart1ContentControl.classList.remove('open');
			DSCpart1Control.classList.remove('open');
			DSCpart1TitleControl.classList.remove('open');
			DSCpart1ContenttextControl.classList.remove('open');
		
			DSCpart1ContentControl.classList.add('close');
			DSCpart1Control.classList.add('close');
			DSCpart1TitleControl.classList.add('close');
			DSCpart1ContenttextControl.classList.add('close');

			DSCpart1ContentControl.style.zIndex = 15;
			DSCpart1Control.style.zIndex = 19;		
			DSCpart2Control.style.zIndex = 19;
			DSCpart2TitleControl.style.zIndex = 19;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3TitleControl.style.zIndex = 19;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4TitleControl.style.zIndex = 19;
			DSC1BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('DSCpart2')[0].onclick =function()
		{
		
			DSCpart2ContentControl.classList.add('open');
			DSCpart2Control.classList.add('open');
			DSCpart2TitleControl.classList.add('open');
			DSCpart2ContenttextControl.classList.add('open');
		
			DSCpart2ContentControl.classList.remove('close');
			DSCpart2Control.classList.remove('close');
			DSCpart2TitleControl.classList.remove('close');
			DSCpart2ContenttextControl.classList.remove('close');

			DSCpart2ContentControl.style.zIndex = 18;
			DSCpart2Control.style.zIndex = 19;
			DSCpart2ContentControl.style.opacity = 0.99;
			DSCpart2ContenttextControl.style.opacity = 1;
			DSCpart1Control.style.zIndex = 16;
			DSCpart1TitleControl.style.zIndex = 16;
			DSCpart3Control.style.zIndex = 16;
			DSCpart3TitleControl.style.zIndex = 16;
			DSCpart4Control.style.zIndex = 16;
			DSCpart4TitleControl.style.zIndex = 16;
			DSC2BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('DSC2BA')[0].onclick =function()
		{
			DSCpart2ContentControl.classList.remove('open');
			DSCpart2Control.classList.remove('open');
			DSCpart2TitleControl.classList.remove('open');
			DSCpart2ContenttextControl.classList.remove('open');
		
			DSCpart2ContentControl.classList.add('close');
			DSCpart2Control.classList.add('close');
			DSCpart2TitleControl.classList.add('close');
			DSCpart2ContenttextControl.classList.add('close');

			DSCpart2ContentControl.style.zIndex = 15;
			DSCpart2Control.style.zIndex = 19;		
			DSCpart2ContenttextControl.style.opacity = 0;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1TitleControl.style.zIndex = 19;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3TitleControl.style.zIndex = 19;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4TitleControl.style.zIndex = 19;
			DSC2BAControl.style.opacity = 0;

		
		}; 
		document.getElementsByClassName('DSCpart3')[0].onclick =function()
		{
		
			DSCpart3ContentControl.classList.add('open');
			DSCpart3Control.classList.add('open');
			DSCpart3TitleControl.classList.add('open');
			DSCpart3ContenttextControl.classList.add('open');
		
			DSCpart3ContentControl.classList.remove('close');
			DSCpart3Control.classList.remove('close');
			DSCpart3TitleControl.classList.remove('close');
			DSCpart3ContenttextControl.classList.remove('close');

			DSCpart3ContentControl.style.zIndex = 18;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3ContentControl.style.opacity = 0.99;
			DSCpart3ContenttextControl.style.opacity = 1;
			DSCpart1Control.style.zIndex = 16;
			DSCpart1TitleControl.style.zIndex = 16;
			DSCpart2Control.style.zIndex = 16;
			DSCpart2TitleControl.style.zIndex = 16;
			DSCpart4Control.style.zIndex = 16;
			DSCpart4TitleControl.style.zIndex = 16;
			DSC3BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('DSC3BA')[0].onclick =function()
		{
			DSCpart3ContentControl.classList.remove('open');
			DSCpart3Control.classList.remove('open');
			DSCpart3TitleControl.classList.remove('open');
			DSCpart3ContenttextControl.classList.remove('open');
		
			DSCpart3ContentControl.classList.add('close');
			DSCpart3Control.classList.add('close');
			DSCpart3TitleControl.classList.add('close');
			DSCpart3ContenttextControl.classList.add('close');

			DSCpart3ContentControl.style.zIndex = 15;
			DSCpart3Control.style.zIndex = 19;		
			DSCpart3ContenttextControl.style.opacity = 0;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1TitleControl.style.zIndex = 19;
			DSCpart2Control.style.zIndex = 19;
			DSCpart2TitleControl.style.zIndex = 19;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4TitleControl.style.zIndex = 19;
			DSC3BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('DSCpart4')[0].onclick =function()
		{
		
			DSCpart4ContentControl.classList.add('open');
			DSCpart4Control.classList.add('open');
			DSCpart4TitleControl.classList.add('open');
			DSCpart4ContenttextControl.classList.add('open');
		
			DSCpart4ContentControl.classList.remove('close');
			DSCpart4Control.classList.remove('close');
			DSCpart4TitleControl.classList.remove('close');
			DSCpart4ContenttextControl.classList.remove('close');

			DSCpart4ContentControl.style.zIndex = 18;
			DSCpart4Control.style.zIndex = 19;
			DSCpart4ContentControl.style.opacity = 0.99;
			DSCpart4ContenttextControl.style.opacity = 1;
			DSCpart1Control.style.zIndex = 16;
			DSCpart1TitleControl.style.zIndex = 16;
			DSCpart2Control.style.zIndex = 16;
			DSCpart2TitleControl.style.zIndex = 16;
			DSCpart3Control.style.zIndex = 16;
			DSCpart3TitleControl.style.zIndex = 16;
			DSC4BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('DSC4BA')[0].onclick =function()
		{
			DSCpart4ContentControl.classList.remove('open');
			DSCpart4Control.classList.remove('open');
			DSCpart4TitleControl.classList.remove('open');
			DSCpart4ContenttextControl.classList.remove('open');
		
			DSCpart4ContentControl.classList.add('close');
			DSCpart4Control.classList.add('close');
			DSCpart4TitleControl.classList.add('close');
			DSCpart4ContenttextControl.classList.add('close');

			DSCpart4ContentControl.style.zIndex = 15;
			DSCpart4Control.style.zIndex = 19;		
			DSCpart4ContenttextControl.style.opacity = 0;
			DSCpart1Control.style.zIndex = 19;
			DSCpart1TitleControl.style.zIndex = 19;
			DSCpart2Control.style.zIndex = 19;
			DSCpart2TitleControl.style.zIndex = 19;
			DSCpart3Control.style.zIndex = 19;
			DSCpart3TitleControl.style.zIndex = 19;
			DSC4BAControl.style.opacity = 0;


		
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
			
		};	
	
  	} 
  
};
document.getElementsByClassName('FoodShortage')[0].onclick = function() {
	
	var FSCpart1Control = document.getElementsByClassName('FSCpart1')[0];
	var FSCpart1TitleControl = document.getElementsByClassName('FSCpart1Title')[0];
  	var FSCpart1ContenttextControl = document.getElementsByClassName('FSCpart1Contenttext')[0];
	var FSCpart1ContentControl = document.getElementsByClassName('FSCpart1Content')[0];
	
	var FSCpart2Control = document.getElementsByClassName('FSCpart2')[0];
	var FSCpart2TitleControl = document.getElementsByClassName('FSCpart2Title')[0];
  	var FSCpart2ContenttextControl = document.getElementsByClassName('FSCpart2Contenttext')[0];
	var FSCpart2ContentControl = document.getElementsByClassName('FSCpart2Content')[0];
	
	var FSCpart3Control = document.getElementsByClassName('FSCpart3')[0];
	var FSCpart3TitleControl = document.getElementsByClassName('FSCpart3Title')[0];
  	var FSCpart3ContenttextControl = document.getElementsByClassName('FSCpart3Contenttext')[0];
	var FSCpart3ContentControl = document.getElementsByClassName('FSCpart3Content')[0];
	
	var FSCpart4Control = document.getElementsByClassName('FSCpart4')[0];
	var FSCpart4TitleControl = document.getElementsByClassName('FSCpart4Title')[0];
  	var FSCpart4ContenttextControl = document.getElementsByClassName('FSCpart4Contenttext')[0];
	var FSCpart4ContentControl = document.getElementsByClassName('FSCpart4Content')[0];
	
	var FSC1BAControl = document.getElementsByClassName('FSC1BA')[0];
	var FSC2BAControl = document.getElementsByClassName('FSC2BA')[0];
	var FSC3BAControl = document.getElementsByClassName('FSC3BA')[0];
	var FSC4BAControl = document.getElementsByClassName('FSC4BA')[0];
	
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

	  
		document.getElementsByClassName('FSCpart1')[0].onclick =function()
		{
		
			FSCpart1ContentControl.classList.add('open');
			FSCpart1Control.classList.add('open');
			FSCpart1TitleControl.classList.add('open');
			FSCpart1ContenttextControl.classList.add('open');
		
			FSCpart1ContentControl.classList.remove('close');
			FSCpart1Control.classList.remove('close');
			FSCpart1TitleControl.classList.remove('close');
			FSCpart1ContenttextControl.classList.remove('close');

			FSCpart1ContentControl.style.zIndex = 18;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1ContentControl.style.opacity = 0.99;
			FSCpart1ContenttextControl.style.opacity = 1;
			FSCpart2Control.style.zIndex = 16;
			FSCpart2TitleControl.style.zIndex = 16;
			FSCpart3Control.style.zIndex = 16;
			FSCpart3TitleControl.style.zIndex = 16;
			FSCpart4Control.style.zIndex = 16;
			FSCpart4TitleControl.style.zIndex = 16;
			FSC1BAControl.style.opacity = 1;



		
		}; 
	  
		document.getElementsByClassName('FSC1BA')[0].onclick =function()
		{
			FSCpart1ContentControl.classList.remove('open');
			FSCpart1Control.classList.remove('open');
			FSCpart1TitleControl.classList.remove('open');
			FSCpart1ContenttextControl.classList.remove('open');
		
			FSCpart1ContentControl.classList.add('close');
			FSCpart1Control.classList.add('close');
			FSCpart1TitleControl.classList.add('close');
			FSCpart1ContenttextControl.classList.add('close');

			FSCpart1ContentControl.style.zIndex = 15;
			FSCpart1Control.style.zIndex = 19;		
			FSCpart2Control.style.zIndex = 19;
			FSCpart2TitleControl.style.zIndex = 19;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3TitleControl.style.zIndex = 19;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4TitleControl.style.zIndex = 19;
			FSC1BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('FSCpart2')[0].onclick =function()
		{
		
			FSCpart2ContentControl.classList.add('open');
			FSCpart2Control.classList.add('open');
			FSCpart2TitleControl.classList.add('open');
			FSCpart2ContenttextControl.classList.add('open');
		
			FSCpart2ContentControl.classList.remove('close');
			FSCpart2Control.classList.remove('close');
			FSCpart2TitleControl.classList.remove('close');
			FSCpart2ContenttextControl.classList.remove('close');

			FSCpart2ContentControl.style.zIndex = 18;
			FSCpart2Control.style.zIndex = 19;
			FSCpart2ContentControl.style.opacity = 0.99;
			FSCpart2ContenttextControl.style.opacity = 1;
			FSCpart1Control.style.zIndex = 16;
			FSCpart1TitleControl.style.zIndex = 16;
			FSCpart3Control.style.zIndex = 16;
			FSCpart3TitleControl.style.zIndex = 16;
			FSCpart4Control.style.zIndex = 16;
			FSCpart4TitleControl.style.zIndex = 16;
			FSC2BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('FSC2BA')[0].onclick =function()
		{
			FSCpart2ContentControl.classList.remove('open');
			FSCpart2Control.classList.remove('open');
			FSCpart2TitleControl.classList.remove('open');
			FSCpart2ContenttextControl.classList.remove('open');
		
			FSCpart2ContentControl.classList.add('close');
			FSCpart2Control.classList.add('close');
			FSCpart2TitleControl.classList.add('close');
			FSCpart2ContenttextControl.classList.add('close');

			FSCpart2ContentControl.style.zIndex = 15;
			FSCpart2Control.style.zIndex = 19;		
			FSCpart2ContenttextControl.style.opacity = 0;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1TitleControl.style.zIndex = 19;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3TitleControl.style.zIndex = 19;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4TitleControl.style.zIndex = 19;
			FSC2BAControl.style.opacity = 0;

		
		}; 
		document.getElementsByClassName('FSCpart3')[0].onclick =function()
		{
		
			FSCpart3ContentControl.classList.add('open');
			FSCpart3Control.classList.add('open');
			FSCpart3TitleControl.classList.add('open');
			FSCpart3ContenttextControl.classList.add('open');
		
			FSCpart3ContentControl.classList.remove('close');
			FSCpart3Control.classList.remove('close');
			FSCpart3TitleControl.classList.remove('close');
			FSCpart3ContenttextControl.classList.remove('close');

			FSCpart3ContentControl.style.zIndex = 18;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3ContentControl.style.opacity = 0.99;
			FSCpart3ContenttextControl.style.opacity = 1;
			FSCpart1Control.style.zIndex = 16;
			FSCpart1TitleControl.style.zIndex = 16;
			FSCpart2Control.style.zIndex = 16;
			FSCpart2TitleControl.style.zIndex = 16;
			FSCpart4Control.style.zIndex = 16;
			FSCpart4TitleControl.style.zIndex = 16;
			FSC3BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('FSC3BA')[0].onclick =function()
		{
			FSCpart3ContentControl.classList.remove('open');
			FSCpart3Control.classList.remove('open');
			FSCpart3TitleControl.classList.remove('open');
			FSCpart3ContenttextControl.classList.remove('open');
		
			FSCpart3ContentControl.classList.add('close');
			FSCpart3Control.classList.add('close');
			FSCpart3TitleControl.classList.add('close');
			FSCpart3ContenttextControl.classList.add('close');

			FSCpart3ContentControl.style.zIndex = 15;
			FSCpart3Control.style.zIndex = 19;		
			FSCpart3ContenttextControl.style.opacity = 0;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1TitleControl.style.zIndex = 19;
			FSCpart2Control.style.zIndex = 19;
			FSCpart2TitleControl.style.zIndex = 19;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4TitleControl.style.zIndex = 19;
			FSC3BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('FSCpart4')[0].onclick =function()
		{
		
			FSCpart4ContentControl.classList.add('open');
			FSCpart4Control.classList.add('open');
			FSCpart4TitleControl.classList.add('open');
			FSCpart4ContenttextControl.classList.add('open');
		
			FSCpart4ContentControl.classList.remove('close');
			FSCpart4Control.classList.remove('close');
			FSCpart4TitleControl.classList.remove('close');
			FSCpart4ContenttextControl.classList.remove('close');

			FSCpart4ContentControl.style.zIndex = 18;
			FSCpart4Control.style.zIndex = 19;
			FSCpart4ContentControl.style.opacity = 0.99;
			FSCpart4ContenttextControl.style.opacity = 1;
			FSCpart1Control.style.zIndex = 16;
			FSCpart1TitleControl.style.zIndex = 16;
			FSCpart2Control.style.zIndex = 16;
			FSCpart2TitleControl.style.zIndex = 16;
			FSCpart3Control.style.zIndex = 16;
			FSCpart3TitleControl.style.zIndex = 16;
			FSC4BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('FSC4BA')[0].onclick =function()
		{
			FSCpart4ContentControl.classList.remove('open');
			FSCpart4Control.classList.remove('open');
			FSCpart4TitleControl.classList.remove('open');
			FSCpart4ContenttextControl.classList.remove('open');
		
			FSCpart4ContentControl.classList.add('close');
			FSCpart4Control.classList.add('close');
			FSCpart4TitleControl.classList.add('close');
			FSCpart4ContenttextControl.classList.add('close');

			FSCpart4ContentControl.style.zIndex = 15;
			FSCpart4Control.style.zIndex = 19;		
			FSCpart4ContenttextControl.style.opacity = 0;
			FSCpart1Control.style.zIndex = 19;
			FSCpart1TitleControl.style.zIndex = 19;
			FSCpart2Control.style.zIndex = 19;
			FSCpart2TitleControl.style.zIndex = 19;
			FSCpart3Control.style.zIndex = 19;
			FSCpart3TitleControl.style.zIndex = 19;
			FSC4BAControl.style.opacity = 0;


		
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
			
		};
	
	} 
  
};
document.getElementsByClassName('EconomicShock')[0].onclick = function() {
	
	var ESCpart1Control = document.getElementsByClassName('ESCpart1')[0];
	var ESCpart1TitleControl = document.getElementsByClassName('ESCpart1Title')[0];
  	var ESCpart1ContenttextControl = document.getElementsByClassName('ESCpart1Contenttext')[0];
	var ESCpart1ContentControl = document.getElementsByClassName('ESCpart1Content')[0];
	
	var ESCpart2Control = document.getElementsByClassName('ESCpart2')[0];
	var ESCpart2TitleControl = document.getElementsByClassName('ESCpart2Title')[0];
  	var ESCpart2ContenttextControl = document.getElementsByClassName('ESCpart2Contenttext')[0];
	var ESCpart2ContentControl = document.getElementsByClassName('ESCpart2Content')[0];
	
	var ESCpart3Control = document.getElementsByClassName('ESCpart3')[0];
	var ESCpart3TitleControl = document.getElementsByClassName('ESCpart3Title')[0];
  	var ESCpart3ContenttextControl = document.getElementsByClassName('ESCpart3Contenttext')[0];
	var ESCpart3ContentControl = document.getElementsByClassName('ESCpart3Content')[0];
	
	var ESCpart4Control = document.getElementsByClassName('ESCpart4')[0];
	var ESCpart4TitleControl = document.getElementsByClassName('ESCpart4Title')[0];
  	var ESCpart4ContenttextControl = document.getElementsByClassName('ESCpart4Contenttext')[0];
	var ESCpart4ContentControl = document.getElementsByClassName('ESCpart4Content')[0];
	
	var ESC1BAControl = document.getElementsByClassName('ESC1BA')[0];
	var ESC2BAControl = document.getElementsByClassName('ESC2BA')[0];
	var ESC3BAControl = document.getElementsByClassName('ESC3BA')[0];
	var ESC4BAControl = document.getElementsByClassName('ESC4BA')[0];
	
	
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

	  
		document.getElementsByClassName('ESCpart1')[0].onclick =function()
		{
		
			ESCpart1ContentControl.classList.add('open');
			ESCpart1Control.classList.add('open');
			ESCpart1TitleControl.classList.add('open');
			ESCpart1ContenttextControl.classList.add('open');
		
			ESCpart1ContentControl.classList.remove('close');
			ESCpart1Control.classList.remove('close');
			ESCpart1TitleControl.classList.remove('close');
			ESCpart1ContenttextControl.classList.remove('close');

			ESCpart1ContentControl.style.zIndex = 18;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1ContentControl.style.opacity = 0.99;
			ESCpart1ContenttextControl.style.opacity = 1;
			ESCpart2Control.style.zIndex = 16;
			ESCpart2TitleControl.style.zIndex = 16;
			ESCpart3Control.style.zIndex = 16;
			ESCpart3TitleControl.style.zIndex = 16;
			ESCpart4Control.style.zIndex = 16;
			ESCpart4TitleControl.style.zIndex = 16;
			ESC1BAControl.style.opacity = 1;



		
		}; 
	  
		document.getElementsByClassName('ESC1BA')[0].onclick =function()
		{
			ESCpart1ContentControl.classList.remove('open');
			ESCpart1Control.classList.remove('open');
			ESCpart1TitleControl.classList.remove('open');
			ESCpart1ContenttextControl.classList.remove('open');
		
			ESCpart1ContentControl.classList.add('close');
			ESCpart1Control.classList.add('close');
			ESCpart1TitleControl.classList.add('close');
			ESCpart1ContenttextControl.classList.add('close');

			ESCpart1ContentControl.style.zIndex = 15;
			ESCpart1Control.style.zIndex = 19;		
			ESCpart2Control.style.zIndex = 19;
			ESCpart2TitleControl.style.zIndex = 19;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3TitleControl.style.zIndex = 19;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4TitleControl.style.zIndex = 19;
			ESC1BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('ESCpart2')[0].onclick =function()
		{
		
			ESCpart2ContentControl.classList.add('open');
			ESCpart2Control.classList.add('open');
			ESCpart2TitleControl.classList.add('open');
			ESCpart2ContenttextControl.classList.add('open');
		
			ESCpart2ContentControl.classList.remove('close');
			ESCpart2Control.classList.remove('close');
			ESCpart2TitleControl.classList.remove('close');
			ESCpart2ContenttextControl.classList.remove('close');

			ESCpart2ContentControl.style.zIndex = 18;
			ESCpart2Control.style.zIndex = 19;
			ESCpart2ContentControl.style.opacity = 0.99;
			ESCpart2ContenttextControl.style.opacity = 1;
			ESCpart1Control.style.zIndex = 16;
			ESCpart1TitleControl.style.zIndex = 16;
			ESCpart3Control.style.zIndex = 16;
			ESCpart3TitleControl.style.zIndex = 16;
			ESCpart4Control.style.zIndex = 16;
			ESCpart4TitleControl.style.zIndex = 16;
			ESC2BAControl.style.opacity = 1;


		
		}; 
	  
		document.getElementsByClassName('ESC2BA')[0].onclick =function()
		{
			ESCpart2ContentControl.classList.remove('open');
			ESCpart2Control.classList.remove('open');
			ESCpart2TitleControl.classList.remove('open');
			ESCpart2ContenttextControl.classList.remove('open');
		
			ESCpart2ContentControl.classList.add('close');
			ESCpart2Control.classList.add('close');
			ESCpart2TitleControl.classList.add('close');
			ESCpart2ContenttextControl.classList.add('close');

			ESCpart2ContentControl.style.zIndex = 15;
			ESCpart2Control.style.zIndex = 19;		
			ESCpart2ContenttextControl.style.opacity = 0;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1TitleControl.style.zIndex = 19;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3TitleControl.style.zIndex = 19;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4TitleControl.style.zIndex = 19;
			ESC2BAControl.style.opacity = 0;

		
		}; 
		document.getElementsByClassName('ESCpart3')[0].onclick =function()
		{
		
			ESCpart3ContentControl.classList.add('open');
			ESCpart3Control.classList.add('open');
			ESCpart3TitleControl.classList.add('open');
			ESCpart3ContenttextControl.classList.add('open');
		
			ESCpart3ContentControl.classList.remove('close');
			ESCpart3Control.classList.remove('close');
			ESCpart3TitleControl.classList.remove('close');
			ESCpart3ContenttextControl.classList.remove('close');

			ESCpart3ContentControl.style.zIndex = 18;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3ContentControl.style.opacity = 0.99;
			ESCpart3ContenttextControl.style.opacity = 1;
			ESCpart1Control.style.zIndex = 16;
			ESCpart1TitleControl.style.zIndex = 16;
			ESCpart2Control.style.zIndex = 16;
			ESCpart2TitleControl.style.zIndex = 16;
			ESCpart4Control.style.zIndex = 16;
			ESCpart4TitleControl.style.zIndex = 16;
			ESC3BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('ESC3BA')[0].onclick =function()
		{
			ESCpart3ContentControl.classList.remove('open');
			ESCpart3Control.classList.remove('open');
			ESCpart3TitleControl.classList.remove('open');
			ESCpart3ContenttextControl.classList.remove('open');
		
			ESCpart3ContentControl.classList.add('close');
			ESCpart3Control.classList.add('close');
			ESCpart3TitleControl.classList.add('close');
			ESCpart3ContenttextControl.classList.add('close');

			ESCpart3ContentControl.style.zIndex = 15;
			ESCpart3Control.style.zIndex = 19;		
			ESCpart3ContenttextControl.style.opacity = 0;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1TitleControl.style.zIndex = 19;
			ESCpart2Control.style.zIndex = 19;
			ESCpart2TitleControl.style.zIndex = 19;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4TitleControl.style.zIndex = 19;
			ESC3BAControl.style.opacity = 0;


		
		}; 
		
		document.getElementsByClassName('ESCpart4')[0].onclick =function()
		{
		
			ESCpart4ContentControl.classList.add('open');
			ESCpart4Control.classList.add('open');
			ESCpart4TitleControl.classList.add('open');
			ESCpart4ContenttextControl.classList.add('open');
		
			ESCpart4ContentControl.classList.remove('close');
			ESCpart4Control.classList.remove('close');
			ESCpart4TitleControl.classList.remove('close');
			ESCpart4ContenttextControl.classList.remove('close');

			ESCpart4ContentControl.style.zIndex = 18;
			ESCpart4Control.style.zIndex = 19;
			ESCpart4ContentControl.style.opacity = 0.99;
			ESCpart4ContenttextControl.style.opacity = 1;
			ESCpart1Control.style.zIndex = 16;
			ESCpart1TitleControl.style.zIndex = 16;
			ESCpart2Control.style.zIndex = 16;
			ESCpart2TitleControl.style.zIndex = 16;
			ESCpart3Control.style.zIndex = 16;
			ESCpart3TitleControl.style.zIndex = 16;
			ESC4BAControl.style.opacity = 1;

		
		}; 
	  
		document.getElementsByClassName('ESC4BA')[0].onclick =function()
		{
			ESCpart4ContentControl.classList.remove('open');
			ESCpart4Control.classList.remove('open');
			ESCpart4TitleControl.classList.remove('open');
			ESCpart4ContenttextControl.classList.remove('open');
		
			ESCpart4ContentControl.classList.add('close');
			ESCpart4Control.classList.add('close');
			ESCpart4TitleControl.classList.add('close');
			ESCpart4ContenttextControl.classList.add('close');

			ESCpart4ContentControl.style.zIndex = 15;
			ESCpart4Control.style.zIndex = 19;		
			ESCpart4ContenttextControl.style.opacity = 0;
			ESCpart1Control.style.zIndex = 19;
			ESCpart1TitleControl.style.zIndex = 19;
			ESCpart2Control.style.zIndex = 19;
			ESCpart2TitleControl.style.zIndex = 19;
			ESCpart3Control.style.zIndex = 19;
			ESCpart3TitleControl.style.zIndex = 19;
			ESC4BAControl.style.opacity = 0;


		
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
			
		};
	
  	} 
  
}; 