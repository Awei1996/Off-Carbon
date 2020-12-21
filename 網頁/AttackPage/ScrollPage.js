///ㄍㄋㄋ跑不動Q

(document).on("click", 'a[href^="#"]', function (event) {
	event.preventDefault();

  $("html").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});