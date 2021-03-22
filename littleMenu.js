///ㄍㄋㄋ跑不動Q
var mybutton = document.getElementById("myBtn");
var BtnControl = document.getElementsByClassName('myBtn')[0];
var AllCrossControl = document.getElementsByClassName('AllCross')[0];
var Cross1Control = document.getElementsByClassName('Cross1')[0];
var Cross2Control = document.getElementsByClassName('Cross2')[0];
var Cross3Control = document.getElementsByClassName('Cross3')[0];
var MenuContentControl = document.getElementsByClassName('MenuContent')[0];
var MenuBtnControl = document.getElementsByClassName('MenuBtn')[0];


var MenuValue = 0 ;




// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		mybutton.style.display = "block"; 
	  	mybutton.style.opacity = 0.98;
		AllCrossControl.style.display = "block"; 
	  	AllCrossControl.style.opacity = 1;
		

		
	
	
	} 
	else {
    mybutton.style.display = "none";
    AllCrossControl.style.display = "none";
  	BtnControl.classList.remove('open');
	Cross1Control.classList.remove('open');
	Cross2Control.classList.remove('open');
	Cross3Control.classList.remove('open');
	MenuContentControl.classList.remove('open');
	MenuValue = 0;
  }
}

document.getElementsByClassName('AllCross')[0].onclick = function() {
	MenuValue = MenuValue + 1 ;
	
	if(MenuValue%2 == 1){
		BtnControl.classList.add('open');
		Cross1Control.classList.add('open');
		Cross2Control.classList.add('open');
		Cross3Control.classList.add('open');
		MenuContentControl.classList.add('open');
		MenuBtnControl.classList.add('open');
		MenuContentControl.style.zIndex = 50;


	
	}
	
	if(MenuValue%2 == 0){
		BtnControl.classList.remove('open');
		Cross1Control.classList.remove('open');
		Cross2Control.classList.remove('open');
		Cross3Control.classList.remove('open');
		MenuBtnControl.classList.remove('open');
		MenuContentControl.classList.remove('open');

		
	}	
		
}

	

	

// When the user clicks on the button, scroll to the top of the document
