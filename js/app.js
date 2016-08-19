//particleground set
$('#particles').particleground({
	dotColor: '#fff',
	particleRadius: 8,
	lineColor: '#fff',
	lineWidth: 1,
	proximity: 110,
	density: 8000,
	parallax: true,
	directionX: "center",
	directionY: "center",
	minSpeedX: 0.1,
	minSpeedY: 0.1,
	maxSpeedX: 0.4,
	maxSpeedY: 0.4,
	parallaxMultiplier: 4,
});

//typing
$(function(){
	var setElm = $('.typing'),
	delaySpeed = 200,
	fadeSpeed = 0;

	setText = setElm.html();

	setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
		var elmThis = $(this);
		if (this.nodeType == 3) {
			var $this = $(this);
			$this.replaceWith($this.text().replace(/(\S)/g, '<span class="typingLoad">$&</span>'));
		}
	});

	$(window).load(function(){
		splitLength = $('.typingLoad').length;

		setElm.find('.typingLoad').each(function(i){
		splitThis = $(this);
		splitTxt = splitThis.text();
		splitThis.delay(i*(delaySpeed)).css({display:'inline-block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
	});

	setTimeout(function(){
		setElm.html(setText);
	},splitLength*delaySpeed+fadeSpeed);

	});

});

//Reload http://piyopiyocs.blog115.fc2.com/blog-entry-980より
$(function(){
	var timer = false;
	var w = 0;

	$(window).load(function() {
    	w = $(window).width();
	});

	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if($(window).width() != w){
				location.reload();
				 w = $(window).width();
			}
		}, 200);
	});
});

//modal

	$(".button").click(function(){

		if (window.matchMedia('(min-width:768px)').matches) {
		if($("#modal-bac")[0]) return false ;
		var modal = $(this).attr("data-target");

		$("body").append('<div id="modal_bac"></div>');
		$("#modal_bac").fadeIn("slow");
		$(modal).fadeIn("slow");

		$("#modal_bac, .close").unbind().click(function(){
	  		$(modal).fadeOut("slow");
	  		$("#modal_bac").fadeOut("slow",function(){
				$("#modal_bac").remove();
	  		});
	 	});
	};
});

//accordion
	$(".button").click(function(){
		if (window.matchMedia("(min-width:320px) and (max-width: 767px)").matches) {
		if($("#accordion")[0]) return false ;
    	var acodion = $(this).attr("data-target");
    	$(acodion).insertAfter(this);
    	$(this).next().toggleClass("active").slideToggle("normal");
    }
    });
