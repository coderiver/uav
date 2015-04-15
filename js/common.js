head.ready(function() {

	// fullPageJs init for index slides
	function indexFullPage(){
		$('.js-fullpage-index').fullpage({
			resize: true,
			responsive: 767,
			menu: "#index-menu",
			anchors: ['home-index', 'home-products', 'home-company', 'home-contacts'],
			afterRender: function(index){
	            $('.header').removeAttr('hidden');
	            $('.header').removeClass('is-small');
	            if (index == 1) {
	            	$('body').animate({scrollTop:0}, '10');
	            };
	        },
			onLeave: function(index, nextIndex, direction){
				if(index == 1 && direction =='down'){
	                $('.header').addClass('is-small');
	            }
	            else if(index == 2 && direction =='up'){
	            	$('.header').removeClass('is-small');
	            }
			}	
		});
	}
	if ($('.js-fullpage-index').length) {
		indexFullPage();
	};
	
	// fullPageJs init for index slides
	function productsFullPage(){
		$('.js-fullpage-products').fullpage({
			resize: true,
			responsive: 767,
			anchors: ['products-index', 'products-contacts'],
			afterRender: function(index){
	            // after render events
	            if (index == 1) {
	            	$('body').animate({scrollTop:0}, '10');
	            };
	        },
			onLeave: function(index, nextIndex, direction){
				// onLeave events
			}	
		});
	}
	if ($('.js-fullpage-products').length) {
		productsFullPage();
	};

	// fullPageJs init for penguin slides
	function penguinFullPage(){
		$('.js-fullpage-penguin').fullpage({
			resize: true,
			responsive: 767,
			menu: "#penguin-menu",
			anchors: ['penguin-index', 'performance', 'exploded_view', 'tech_specs', 'take_off', 
			'engine', 'payload_module', 'pgcs', 'options', 'penguin-contacts'],
			afterRender: function(index){
	            $('.logo a').addClass('js-link');
	            $('.nav a.nav__contacts').addClass('js-link');
	            if (index == 1) {
	            	$('body').animate({scrollTop:0}, '10');
	            };
	        },
			onLeave: function(index, nextIndex, direction){

	            //after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	            }
	            // after returning to section 1
	            else if(nextIndex == 1){
	            	$('.js-menu').removeClass('is-fixed');	
	                $('.header').removeAttr('hidden');
	            }
	        }	
		});
	}
	if ($('.js-fullpage-penguin').length) {
		penguinFullPage();
	};
	

	// fullPageJs init for catapult slides
	function catapultFullPage(){
		$('.js-fullpage-catapult').fullpage({
			resize: true,
			responsive: 767,
			menu: '#catapult-menu',
			anchors: ['performance', 'adaptability', 'exploded_view', 'tech_specs', 'package',
			 'catapult_options', 'catapult-contacts'],
			afterRender: function(index){
	            $('.logo a').addClass('js-link');
	            $('.nav a.nav__contacts').addClass('js-link');
	            if (index == 1) {
	            	$('body').animate({scrollTop:0}, '10');
	            };
	        },
			onLeave: function(index, nextIndex, direction){

	            //after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	            }
	            // after returning to section 1
	            else if(nextIndex == 1){
	            	$('.js-menu').removeClass('is-fixed');	
	                $('.header').removeAttr('hidden');
	            }
	        }	
		});
	}
	if ($('.js-fullpage-catapult').length) {
		catapultFullPage();
	};

	// tabs
	
	function tab() {
		$('.js-tab-group').each(function(){
			var tab_cont = $(this).find('.js-tab-cont');
			tab_cont.hide();
			tab_cont.first().show();

			$('body').on('click', '.btn-tab', function(){
	       		link = $(this).attr('href');
	       		$(this).parents('.js-tab-group').find('.btn-tab').removeClass('is-active');
	       		$(this).addClass('is-active');
	       		$(this).parents('.js-tab-group').find('.js-tab-cont').hide();
	       		$(this).parents('.js-tab-group').find('.' + link).fadeIn(300);
	       		$(this).parents('.js-tab-group').find('.' + link).find('.js-slick-2').slick('reinit');
	       		return false;
	       	});
		});
  	}
  	tab();

  	$('body').on('click', '.js-scroll-prev', function(){
  		var target = $(this).parents('.section').prev('.section');
  		if ($(target).length) {
  			$('body, html').animate({
  				scrollTop: $(target).offset().top
  			}, 300);
  		};
  		return false;
  	});
  	$('body').on('click', '.js-scroll-next', function(){
  		var target = $(this).parents('.section').next('.section');
  		if ($(target).length) {
  			$('body, html').animate({
  				scrollTop: $(target).offset().top
  			}, 300);
  		};
  		return false;
  	});

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
		// On swipe event
		$('.js-slick').on('afterChange', function(event, slick, direction){
			$('.slick-next').css('opacity', '0');
			$('.slick-prev').css('opacity', '0');
		});
	}
	slick();

	function gallery(){
		$('.js-gallery').slick({
			fade: true,
			speed: 600,
			dots: false,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		$('.gallery .slick-prev, .gallery .slick-next, .gallery .slick-dots').wrapAll('<div class="slick-controls">');
	}
	gallery();
	
	function productsMenu(){
		$('.js-products-menu').slick({
			speed: 600,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			    {
			    	breakpoint: 1025,
			    	settings: {
			    		slidesToShow: 4,
			    	}
			    },
			    {
			    	breakpoint: 768,
			    	settings: {
			    		slidesToShow: 3,
			    		centerMode: true,
			    		variableWidth: true
			    	}
			    }
			]
		});
	}
	productsMenu();

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
			    		slidesToShow: 6,
			    	}
			    },
			    {
			    	breakpoint: 900,
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
	
	function slick3(){
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
	}
	slick3();

	function clients(){
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
	}
	clients();

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
		$('body').on('click', '.popup-slider__prev', function(){
			$('.js-popup-slider').slick('slickPrev');
		});
		$('body').on('click', '.popup-slider__next', function(){
			$('.js-popup-slider').slick('slickNext');
		});
	}
	//popupSlider();

	// tabs mobile init

	function tabSlider(){
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
	}
	tabSlider();

	// popup init

	$('body').on('click', '.js-popup-btn', function(){
		$('body').addClass('no-scroll');
		$('.js-popup').show();
		popupSlider();
		return false;
	});
	$('body').on('click', '.js-popup-close', function(){
		$('.js-popup').hide();
		$('body').removeClass('no-scroll');
	});

	// catalog slider init

	function catalog(){
		$('.js-catalog').slick({
			speed: 600,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}
	catalog();

	// menu
	
	$('body').on('click', '.js-menu-btn', function () {
		if ($(window).width() >= 601) {
			$('.js-menu-links').toggleClass('is-show');
			$(this).toggleClass('is-open');
		}
		else {
			$('body').addClass('no-scroll');
			$('.js-nav-drop').show();
			setTimeout(function() {
				$('.nav-drop__logo').addClass('is-open');
			}, 100);
			
		}
		
	});

	$('body').on('click', '.js-nav-drop-close', function(){
		$('body').removeClass('no-scroll');
		$('.js-nav-drop').hide();
		$('.nav-drop__logo').removeClass('is-open');
	});

	// drag slider init

	function dragSlider(){
		$('.js-drag-slider').slider({
			max: 10,
			min: 1,
			value: 5,
			slide: function( event, ui ) {
	        	$( "#amount" ).val( ui.value + ' kg' );
	      	}
		});
		$( "#amount" ).val( $(".js-drag-slider").slider("value") + ' kg');
	}
	dragSlider();

	// tooltip

	function tooltip(){
		var item = $('.js-tooltip');

		item.each(function(){
			
			// click event on plus
			$('body').on('click', '.js-tooltip-btn', function(){
				var style = $(this).parent().attr('style'),
					img = $(this).parent().attr('data-img'),
					text = $(this).parent().attr('data-text'),
					block = $(this).parents('.js-tooltip').find('.el__info'),
					block_img = block.find('.el__preview img'),
					block_text = block.find('.el__text');
				
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

			$('body').on('click', '.js-tooltip-prev', function(){
				if ($('.js-tooltip-item.is-active').prev().length) {
					$('.js-tooltip-item.is-active').prev().find('.js-tooltip-btn').trigger('click');
				};
			});
			$('body').on('click', '.js-tooltip-next', function(){
				if ($('.js-tooltip-item.is-active').next().length) {
					$('.js-tooltip-item.is-active').next().find('.js-tooltip-btn').trigger('click');
				};
			});

			// close popup
			$('body').on('click', '.js-tooltip-close', function(){
				$(this).parent().hide();
				$('.js-tooltip-item').removeClass('is-active');
			});
						
		});
	};
	tooltip();
	
	// size switcher

	$('.js-size').each(function(){
		$(this).find('a').on('click', function(){
			$(this).parent('.js-size').find('a').removeClass('is-active');
			$(this).addClass('is-active');
			return false;
		});
	});

	// catapult dimensions tabs

	function catapultDimms(){
		$('.js-dimm1-btn').on('click', function(){
			if (!$(this).hasClass('is-active')) {
				$('.js-dimm2-btn').removeClass('is-active');
				$(this).addClass('is-active');
				
				// switch image
				$('.js-dimm').removeClass('is-active');
				$('.catapult__arrows').removeClass('is-visible');
				$('.catapult__dimm').removeClass('is-visible');
				setTimeout(function(){
					$('.catapult__bg').removeClass('is-visible');
				},300);
				
				setTimeout(function(){
					if ($('.js-dimm3-btn').hasClass('is-active')) {
						$('.js-dimm1').addClass('is-active');
						$('.js-dimm1').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm1').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm1').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						
						$('.js-dimm1').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm1').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm1').find('.catapult__dimm').addClass('is-visible');
						}, 300);

						// dimensions for dimm1
						$('.js-dimm-width').text('704');
						$('.js-dimm-height').text('543');
						$('.js-dimm-length').text('1313');
						$('.js-dimm-weight').text('110');
					}
					else {
						$('.js-dimm2').addClass('is-active');
						$('.js-dimm2').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm2').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm2').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						// dimensions for dimm2
						$('.js-dimm-width').text('704');
						$('.js-dimm-height').text('543');
						$('.js-dimm-length').text('2313');
						$('.js-dimm-weight').text('140');
					}
				},600);
				
			};
			return false;
		});
		$('.js-dimm2-btn').on('click', function(){
			if (!$(this).hasClass('is-active')) {
				$('.js-dimm1-btn').removeClass('is-active');
				$(this).addClass('is-active');
				
				// switch image
				$('.js-dimm').removeClass('is-active');
				$('.catapult__arrows').removeClass('is-visible');
				$('.catapult__dimm').removeClass('is-visible');
				setTimeout(function(){
					$('.catapult__bg').removeClass('is-visible');
				},300);

				setTimeout(function(){
					if ($('.js-dimm3-btn').hasClass('is-active')) {
						$('.js-dimm3').addClass('is-active');
						$('.js-dimm3').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm3').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm3').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						
						// dimensions for dimm3
						$('.js-dimm-width').text('705');
						$('.js-dimm-height').text('545');
						$('.js-dimm-length').text('1315');
						$('.js-dimm-weight').text('110');
					}
					else {
						$('.js-dimm4').addClass('is-active');
						$('.js-dimm4').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm4').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm4').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						// dimensions for dimm4
						$('.js-dimm-width').text('705');
						$('.js-dimm-height').text('545');
						$('.js-dimm-length').text('1315');
						$('.js-dimm-weight').text('110+40');
					}
				},600);
			};
			return false;
		});
		$('.js-dimm3-btn').on('click', function(){
			if (!$(this).hasClass('is-active')) {
				$('.js-dimm4-btn').removeClass('is-active');
				$(this).addClass('is-active');
				
				// switch image
				$('.js-dimm').removeClass('is-active');
				$('.catapult__arrows').removeClass('is-visible');
				$('.catapult__dimm').removeClass('is-visible');
				setTimeout(function(){
					$('.catapult__bg').removeClass('is-visible');
				},300);

				setTimeout(function(){
					if ($('.js-dimm1-btn').hasClass('is-active')) {
						$('.js-dimm1').addClass('is-active');
						$('.js-dimm1').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm1').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm1').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						// dimensions for dimm1
						$('.js-dimm-width').text('704');
						$('.js-dimm-height').text('543');
						$('.js-dimm-length').text('1313');
						$('.js-dimm-weight').text('110');
					}
					else {
						$('.js-dimm3').addClass('is-active');
						$('.js-dimm3').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm3').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm3').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						// dimensions for dimm3
						$('.js-dimm-width').text('705');
						$('.js-dimm-height').text('545');
						$('.js-dimm-length').text('1315');
						$('.js-dimm-weight').text('110');
					}
				},600);
			};
			return false;
		});
		$('.js-dimm4-btn').on('click', function(){
			if (!$(this).hasClass('is-active')) {
				$('.js-dimm3-btn').removeClass('is-active');
				$(this).addClass('is-active');
				
				// switch image
				$('.js-dimm').removeClass('is-active');
				$('.catapult__arrows').removeClass('is-visible');
				$('.catapult__dimm').removeClass('is-visible');
				setTimeout(function(){
					$('.catapult__bg').removeClass('is-visible');
				},300);

				setTimeout(function(){
					if ($('.js-dimm1-btn').hasClass('is-active')) {
						$('.js-dimm2').addClass('is-active');
						$('.js-dimm2').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm2').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm2').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						// dimensions for dimm2
						$('.js-dimm-width').text('704');
						$('.js-dimm-height').text('543');
						$('.js-dimm-length').text('2313');
						$('.js-dimm-weight').text('140');
					}
					else {
						$('.js-dimm4').addClass('is-active');
						$('.js-dimm4').find('.catapult__bg').addClass('is-visible');
						setTimeout(function(){
							$('.js-dimm4').find('.catapult__arrows').addClass('is-visible');
							$('.js-dimm4').find('.catapult__dimm').addClass('is-visible');
						}, 300);
						// dimensions for dimm4
						$('.js-dimm-width').text('705');
						$('.js-dimm-height').text('545');
						$('.js-dimm-length').text('1315');
						$('.js-dimm-weight').text('110+40');
					}
				},600);
			};
			return false;
		});
	}
	catapultDimms();
	// get year

	var year = new Date().getFullYear();
	$('.js-year').text(year);

	if ($(window).width() <= 767) {
		if ($('.js-fullpage-index').length) {
			if (!$('.js-fullpage-index').hasClass('is-destroyed')) {
				$('.js-fullpage-index').fullpage.destroy('all');
			};
		};
		if ($('.js-fullpage-penguin').length) {
			if (!$('.js-fullpage-penguin').hasClass('is-destroyed')) {
				$('.js-fullpage-penguin').fullpage.destroy('all');
			};
		};
		if ($('.js-fullpage-catapult').length) {
			if (!$('.js-fullpage-catapult').hasClass('is-destroyed')) {
				$('.js-fullpage-catapult').fullpage.destroy('all');
			};
		};
		if ($('.js-fullpage-products').length) {
			if (!$('.js-fullpage-products').hasClass('is-destroyed')) {
				$('.js-fullpage-products').fullpage.destroy('all');
			};
		};
	};

	// resize
	if ($(window).width() <= 767) {
		if ($('.js-fullpage-index').length) {
			if (!$('.js-fullpage-index').hasClass('fp-destroyed')) {
				$('.js-fullpage-index').fullpage.destroy('all');
			};
		};
		if ($('.js-fullpage-penguin').length) {
			if (!$('.js-fullpage-penguin').hasClass('fp-destroyed')) {
				$('.js-fullpage-penguin').fullpage.destroy('all');
			};
		};
		if ($('.js-fullpage-catapult').length) {
			if (!$('.js-fullpage-catapult').hasClass('fp-destroyed')) {
				$('.js-fullpage-catapult').fullpage.destroy('all');
			};
		};
		if ($('.js-fullpage-products').length) {
			if (!$('.js-fullpage-products').hasClass('fp-destroyed')) {
				$('.js-fullpage-products').fullpage.destroy('all');
			};
		};
	};

});