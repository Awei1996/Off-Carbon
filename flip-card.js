function flip(event){
	var element = event.currentTarget;
	if (element.className == "card") {
		if(element.style.webkitTransform == "rotateY(180deg)") {
			element.style.webkitTransform = "rotateY(0deg)";
		}
		else {
			element.style.webkitTransform = "rotateY(180deg)";
		}
	}
	
	
  
}// JavaScript Document

$(document).ready(function () {
	
	var count = 0;
	var counting = setInterval(function(){
		if(count < 100) {
			$('.CountTo100').text('Loading '+ count + '%');
			count++					
					
		}
			else {
				clearInterval(counting)
				
			}
		}, 30);
	$(window).load(function(){
		count = 100;
		$(".LoadingAnimate").fadeOut(500);
		$('.CountTo100').text('Loading '+ count + '%');
	});
		
});
