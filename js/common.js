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
			slidesToShow: 8,
			slidesToScroll: 1,
			responsive: [
				{
			    	breakpoint: 1280,
			    	settings: {
			    		slidesToShow: 3,
			    	}
			    },
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
		$('.popup-slider__prev').on('click', function(){
			$('.js-popup-slider').slick('slickPrev');
		});
		$('.popup-slider__next').on('click', function(){
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

	$('.js-popup-btn').on('click', function(){
		$('body').addClass('no-scroll');
		$('.js-popup').show();
		popupSlider();
		return false;
	});
	$('.js-popup-close').on('click', function(){
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
	
	$('.js-menu-btn').on('click', function () {
		//alert();
		if ($(window).width() >= 601) {
			$('.js-menu-links').toggleClass('is-show');
		}
		else {
			$('body').addClass('no-scroll');
			$('.js-nav-drop').show();
		}
		
	});

	$('.js-nav-drop-close').on('click', function(){
		$('body').removeClass('no-scroll');
		$('.js-nav-drop').hide();
	});

	// drag slider init

	$('.js-drag-slider').slider({
		max: 10,
		min: 1,
		value: 5,
		slide: function( event, ui ) {
        	$( "#amount" ).val( ui.value + ' kg' );
      	}
	});
	$( "#amount" ).val( $(".js-drag-slider").slider("value") + ' kg');

	// tooltip

	function tooltip(){
		var item = $('.js-tooltip');

		item.each(function(){
			
			// click event on plus
			$('.js-tooltip-btn').on('click', function(){
				var style = $(this).parent().attr('style'),
					img = $(this).parent().attr('data-img'),
					text = $(this).parent().attr('data-text'),
					block = $(this).parents('.js-tooltip').find('.el__info'),
					block_img = block.find('.el__preview img'),
					block_text = block.find('.el__text');
				
					console.log(text);
				// get coors for popup from css styles
				function getTop(str) {
				 	var arr = str.split(";"),
				 		top = arr[0].slice(5),
				 		left = arr[1].slice(6);
					block.css({
						top: top,
						left: left
					})
				}
				getTop(style);

				// switching active elememt
				$('.js-tooltip-item').removeClass('is-active');
				$(this).parent().addClass('is-active');
				block_img.attr('src', img);
				block_text.html(text);
				block.show();

			});
		
			// prev next events

			$('.js-tooltip-prev').on('click', function(){
				if ($('.js-tooltip-item.is-active').prev().length) {
					$('.js-tooltip-item.is-active').prev().find('.js-tooltip-btn').trigger('click');
				};
			});
			$('.js-tooltip-next').on('click', function(){
				if ($('.js-tooltip-item.is-active').next().length) {
					$('.js-tooltip-item.is-active').next().find('.js-tooltip-btn').trigger('click');
				};
			});

			// close popup
			$('.js-tooltip-close').on('click', function(){
				$(this).parent().hide();
				$('.js-tooltip-item').removeClass('is-active');
			});
						
		});
	};
	tooltip();

	// small header if page is scrolled

	function headerSmall(){
			var top = $(window).scrollTop();
			if (top > 1) {
				$('.header').addClass('is-small');
			}
			else {
				$('.header').removeClass('is-small');
			}
		};
		headerSmall();

	$(window).scroll(function(){
		headerSmall();
	});

});