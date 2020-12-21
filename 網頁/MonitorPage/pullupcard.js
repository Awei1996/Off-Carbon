var P11Control = document.getElementsByClassName('P1-1')[0];
var P12Control = document.getElementsByClassName('P1-2')[0];
var P13Control = document.getElementsByClassName('P1-3')[0];
var P14Control = document.getElementsByClassName('P1-4')[0];





document.getElementsByClassName('P1-1Arrow')[0].onclick = function() 
{	
	


	P11Control.classList.add('left');
	P12Control.classList.add('left');


  
};
document.getElementsByClassName('P1-2ArrowL')[0].onclick = function() 
{	
	

	P11Control.classList.remove('left');
	P12Control.classList.remove('left');

  
};
document.getElementsByClassName('P1-2ArrowR')[0].onclick = function() 
{	
	

	P12Control.classList.add('two');
	P13Control.classList.add('left');


  
};

document.getElementsByClassName('P1-3ArrowL')[0].onclick = function() 
{	
	

	P12Control.classList.remove('two');
	P13Control.classList.remove('left');

  
};

document.getElementsByClassName('P1-3ArrowR')[0].onclick = function() 
{	
	

	P13Control.classList.add('two');
	P14Control.classList.add('left');

  
};

document.getElementsByClassName('P1-4ArrowL')[0].onclick = function() 
{	
	

	P13Control.classList.remove('two');
	P14Control.classList.remove('left');

  
};

