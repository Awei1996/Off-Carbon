///ㄍㄋㄋ跑不動Q

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
	mybutton.style.opacity = 0.7;  
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	
}


(document).on("click", 'a[href^="#"]', function (event) {
	event.preventDefault();

  $("html").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

