var FoodControl = document.getElementsByClassName('Food')[0];
var HousingControl = document.getElementsByClassName('Housing')[0];
var TransportationControl = document.getElementsByClassName('Transportation')[0];
var FoodContentControl = document.getElementsByClassName('FoodContent')[0];
var HousingContentControl = document.getElementsByClassName('HousingContent')[0];
var TransportationContentControl = document.getElementsByClassName('TransportationContent')[0];
var explainControl = document.getElementsByClassName('explain')[0];









document.getElementsByClassName('Food')[0].onclick = function() 
{	
	FoodControl.classList.add('open');
	FoodContentControl.classList.add('open');

	HousingControl.classList.add('close');
	TransportationControl.classList.add('close');
	HousingContentControl.classList.add('close');
	TransportationContentControl.classList.add('close');
	
	FoodControl.classList.remove('close');
	FoodContentControl.classList.remove('close');
	
	HousingControl.classList.remove('open');
	TransportationControl.classList.remove('open');
	HousingContentControl.classList.remove('open');
	TransportationContentControl.classList.remove('open');
	
	FoodContentControl.style.zIndex = 2;
	HousingContentControl.style.zIndex = -1;
	TransportationContentControl.style.zIndex = -1;
	explainControl.style.opacity = 0;




};

document.getElementsByClassName('Housing')[0].onclick = function() 
{	
	HousingControl.classList.add('open');
	HousingContentControl.classList.add('open');
	FoodControl.classList.add('close');
	TransportationControl.classList.add('close');
	FoodContentControl.classList.add('close');
	TransportationContentControl.classList.add('close');

	HousingControl.classList.remove('close');
	HousingContentControl.classList.remove('close');

	
	FoodControl.classList.remove('open');
	TransportationControl.classList.remove('open');
	FoodContentControl.classList.remove('open');
	TransportationContentControl.classList.remove('open');
	
	FoodContentControl.style.zIndex = -1;
	HousingContentControl.style.zIndex = 2;
	TransportationContentControl.style.zIndex = -1;
	explainControl.style.opacity = 0;


};

document.getElementsByClassName('Transportation')[0].onclick = function() 
{	
	TransportationControl.classList.add('open');
	TransportationContentControl.classList.add('open');
	HousingControl.classList.add('close');
	FoodControl.classList.add('close');
	HousingContentControl.classList.add('close');
	TransportationContentControl.classList.add('close');

	TransportationControl.classList.remove('close');
	TransportationContentControl.classList.remove('close');

	
	HousingControl.classList.remove('open');
	FoodControl.classList.remove('open');
	HousingContentControl.classList.remove('open');
	FoodContentControl.classList.remove('open');
	
	FoodContentControl.style.zIndex = -1;
	HousingContentControl.style.zIndex = -1;
	TransportationContentControl.style.zIndex = 2;
	explainControl.style.opacity = 0;


};

