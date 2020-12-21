var boxOne = document.getElementsByClassName('textcardgas')[0];

document.getElementsByClassName('gas')[0].on = function() {
  if(this.value === 'close') 
  { 
    this.value = 'open';
	boxOne.classList.remove('close'); 
    boxOne.classList.add('open');
	
  } 
  else {
    this.value = 'close';
    var computedStyle = window.getComputedStyle(boxOne),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxOne.style.marginLeft = marginLeft;
    boxOne.classList.remove('open'); 
	boxOne.classList.add('close');
  }  
}

var boxTwo = document.getElementsByClassName('textcardsun')[0];

document.getElementsByClassName('sun')[0].on = function() {
  if(this.value === 'close') 
  { 
    this.value = 'open';
	boxTwo.classList.remove('close'); 
    boxTwo.classList.add('open');
	
  } 
  else {
    this.value = 'close';
    var computedStyle = window.getComputedStyle(boxTwo),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxTwo.style.marginLeft = marginLeft;
    boxTwo.classList.remove('open'); 
	boxTwo.classList.add('close');
  }  
}

var boxThree = document.getElementsByClassName('textcardoil')[0];

document.getElementsByClassName('oil')[0].on = function() {
  if(this.value === 'close') 
  { 
    this.value = 'open';
	boxThree.classList.remove('close'); 
    boxThree.classList.add('open');
	
  } 
  else {
    this.value = 'close';
    var computedStyle = window.getComputedStyle(boxThree),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxThree.style.marginLeft = marginLeft;
    boxThree.classList.remove('open'); 
	boxThree.classList.add('close');
  }  
}

var boxFour = document.getElementsByClassName('textcardlife')[0];

document.getElementsByClassName('life')[0].on = function() {
  if(this.value === 'close') 
  { 
    this.value = 'open';
	boxFour.classList.remove('close'); 
    boxFour.classList.add('open');
	
  } 
  else {
    this.value = 'close';
    var computedStyle = window.getComputedStyle(boxFour),
        marginLeft = computedStyle.getPropertyValue('margin-left');
    boxFour.style.marginLeft = marginLeft;
    boxFour.classList.remove('open'); 
	boxFour.classList.add('close');
  }  
}



