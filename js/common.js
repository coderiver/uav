head.ready(function() {

	// sliders init
	function slick(){
		$('.js-slick').slick({
			fade: true,
			speed: 600,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
			    {
			      breakpoint: 481,
			      settings: {
			        dots: false
			      }
			    }
			  ]
		});
	}
	slick();

	function gallery(){
		$('.js-gallery').slick({
			fade: true,
			speed: 600,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}
	gallery();
	$('.gallery .slick-prev, .gallery .slick-next, .gallery .slick-dots').wrapAll('<div class="slick-controls">');

	function slick2(){
		$('.js-slick-2').slick({
			speed: 600,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			    {
			    	breakpoint: 768,
			    	settings: {
			    		slidesToShow: 3,
			    	}
			    }
			]
		});
	}
	slick2();
	
	$('.js-slick-3').slick({
			speed: 600,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			    {
			    	breakpoint: 768,
			    	settings: {
			    		slidesToShow: 3,
			    	}
			    },
			    {
			    	breakpoint: 569,
			    	settings: {
			    		slidesToShow: 2,
			    	}
			    },
			    {
			    	breakpoint: 481,
			    	settings: {
			    		slidesToShow: 1,
			    	}
			    }
			]
		});

	$('.js-clients').slick({
			speed: 600,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			    {
			    	breakpoint: 768,
			    	settings: {
			    		slidesToShow: 3,
			    	}
			    },
			    {
			    	breakpoint: 481,
			    	settings: {
			    		slidesToShow: 2,
			    	}
			    },
			    {
			    	breakpoint: 321,
			    	settings: {
			    		slidesToShow: 1,
			    	}
			    }
			]
		});

	function popupSlider(){
		$('.js-popup-slider').slick({
			speed: 600,
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
			    {
			    	breakpoint: 768,
			    	settings: {
			    		adaptiveHeight: true
			    	}
			    }
			]
		});
		$('.popup-slider__prev').on('touchstart click', function(){
			$('.js-popup-slider').slick('slickPrev');
		});
		$('.popup-slider__next').on('touchstart click', function(){
			$('.js-popup-slider').slick('slickNext');
		});
	}

	// tabs mobile init

	$('.js-tabs-3').slick({
		infinite: false,
		speed: 600,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		    {
		    	breakpoint: 768,
		    	settings: {
		    		slidesToShow: 1,
		    	}
		    }
		]
	});

	// popup init

	$('.js-popup-btn').on('touchstart click', function(){
		$('body').addClass('no-scroll');
		$('.js-popup').show();
		popupSlider();
		return false;
	});
	$('.js-popup-close').on('touchstart click', function(){
		$('.js-popup').hide();
		$('body').removeClass('no-scroll');
	});

	// catalog slider init

	$('.js-catalog').slick({
		speed: 600,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	//ajax load
	// var hash_var = document.location.hash;
	// hash_var = hash_var.substr(1);

	// if (hash_var == "") {
	// 	$.ajax({
	// 	  url: 'ajax/main.html',
	// 	  cache: false,
	// 	  success: function(html) { 
	// 	  	$('.container').html(html).show(); 
	// 	  	slick();
	// 	  }
	// 	});
	// }
	// else {
	// 	$.ajax({
	// 	  url: hash_var +'.html',
	// 	  cache: false,
	// 	  before: function(){
	// 	  	$('.container').hide();
	// 	  },
	// 	  success: function(html) { 
	// 	  	$('.container').html(html).hide().fadeIn(300); 
	// 	  }
	// 	});
	// }


	// $('.js-link').click(function(){
	// 	$('.container').fadeOut(300);
	// 	var link = $(this).attr('href');
	// 	$.ajax({
	// 	  url: 'ajax/' + link + '.html',
	// 	  cache: false,
	// 	  success: function(html) { 
	// 	  	$('.container').html(html).hide().fadeIn(300);
	// 	  	if (link == 'page1') {
	// 	  		// remove fragment as much as it can go without adding an entry in browser history:
	// 	  		window.location.replace("#");

	// 	  		// slice off the remaining '#' in HTML5:    
	// 	  		if (typeof window.history.replaceState == 'function') {
	// 	  		  history.replaceState({}, '', window.location.href.slice(0, -1));
	// 	  		}
	// 	  	}
	// 	  	else {
	// 	  		document.location.hash =''+link+'';
	// 	  	}
	// 	  }
	// 	});
	// 	return false;
	// });


	

	// menu
	var menu_trigger = $('.js-menu-trigger'),
		menu = $('.js-menu'),
		menu_links = $('.js-menu-links'),
		menu_btn = $('.js-menu-btn');
	menu_trigger.on('click', function () {
		menu.toggleClass('is-fixed');
	});
	menu_btn.on('touchstart click', function () {
		menu_links.toggleClass('is-show');
	});

});