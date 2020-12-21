var FoodAnimationControl = document.getElementsByClassName('FoodAnimation')[0];
var LifeAnimationControl = document.getElementsByClassName('LifeAnimation')[0];
var HappyAnimationControl = document.getElementsByClassName('HappyAnimation')[0];
var VideoTitleControl = document.getElementsByClassName('VideoTitle')[0];
var BackControl = document.getElementsByClassName('Back')[0];


var FAVideoControl = document.getElementsByClassName('FAVideo')[0];
var FATextControl = document.getElementsByClassName('FAText')[0];
var FATitleControl = document.getElementsByClassName('FATitle')[0];
var FoodVideoTitleControl = document.getElementsByClassName('Food')[0];

var LAVideoControl = document.getElementsByClassName('LAVideo')[0];
var LATextControl = document.getElementsByClassName('LAText')[0];
var LATitleControl = document.getElementsByClassName('LATitle')[0];
var LifeVideoTitleControl = document.getElementsByClassName('Life')[0];

var HAVideoControl = document.getElementsByClassName('HAVideo')[0];
var HATextControl = document.getElementsByClassName('HAText')[0];
var HATitleControl = document.getElementsByClassName('HATitle')[0];
var HappyVideoTitleControl = document.getElementsByClassName('Happy')[0];


document.getElementsByClassName('FoodAnimation')[0].onclick = function() 
{	
	
	FoodAnimationControl.classList.add('open');
	FATitleControl.classList.add('open'); 	 
	FAVideoControl.classList.add('open');
	FATextControl.classList.add('open');
	VideoTitleControl.classList.add('open');
	FoodVideoTitleControl.classList.add('open');

	LifeAnimationControl.style.zIndex = 5;
	HappyAnimationControl.style.zIndex = 5;
	BackControl.style.opacity = 1;



	
  
};
document.getElementsByClassName('Back')[0].onclick = function() {
		
		FoodAnimationControl.classList.remove('open');
		FATitleControl.classList.remove('open'); 	 
		FAVideoControl.classList.remove('open');
		FATextControl.classList.remove('open');
		VideoTitleControl.classList.add('open');
		FoodVideoTitleControl.classList.remove('open');
	
		LifeAnimationControl.classList.remove('open');
		LATitleControl.classList.remove('open'); 	 
		LAVideoControl.classList.remove('open');
		LATextControl.classList.remove('open');
		LifeVideoTitleControl.classList.remove('open');
	
		HappyAnimationControl.classList.remove('open');
		HATitleControl.classList.remove('open'); 	 
		HAVideoControl.classList.remove('open');
		HATextControl.classList.remove('open');
		VideoTitleControl.classList.remove('open');
		HappyVideoTitleControl.classList.remove('open');

		LifeAnimationControl.style.zIndex = 6;
		FoodAnimationControl.style.zIndex = 6;
		HappyAnimationControl.style.zIndex = 6;
		BackControl.style.opacity = 0;		

};
		




document.getElementsByClassName('LifeAnimation')[0].onclick = function() 
{	
	




	LifeAnimationControl.classList.add('open');
	LATitleControl.classList.add('open'); 	 
	LAVideoControl.classList.add('open');
	VideoTitleControl.classList.add('open');
	LATextControl.classList.add('open');
	LifeVideoTitleControl.classList.add('open');


	FoodAnimationControl.style.zIndex = 5;
	HappyAnimationControl.style.zIndex = 5;
	BackControl.style.opacity = 1;





  
};

document.getElementsByClassName('HappyAnimation')[0].onclick = function() 
{	
	var HAVideoControl = document.getElementsByClassName('HAVideo')[0];
	var HATextControl = document.getElementsByClassName('HAText')[0];
	var HATitleControl = document.getElementsByClassName('HATitle')[0];
	var HappyVideoTitleControl = document.getElementsByClassName('Happy')[0];




	HappyAnimationControl.classList.add('open');
	HATitleControl.classList.add('open'); 	 
	HAVideoControl.classList.add('open');
	HATextControl.classList.add('open');
	HappyVideoTitleControl.classList.add('open');


	LifeAnimationControl.style.zIndex = 5;
	FoodAnimationControl.style.zIndex = 5;
	BackControl.style.opacity = 1;





  
};

