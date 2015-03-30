head.ready(function() {

	// fullPageJs

	function indexFullPage(){
		$('.js-fullpage-index').fullpage({
			resize: true,
			menu: "#menu",
			anchors: ['main', 'products', 'company', 'contacts'],
			afterLoad: function(anchorLink, index){
				//section 1
				if(anchorLink == 'main'){
					$('.header').removeClass('is-small');
				}
			},
			onLeave: function(index, nextIndex, direction){
				if(index == 1 && direction =='down'){
	                $('.header').addClass('is-small');
	            }
			}	
		});
	}
	indexFullPage();

	function productFullPage(){
		$('.js-fullpage-product').fullpage({
			resize: true,
			//fixedElements: '.js-menu',
			anchors: ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9', 'product10', 'product11'],
			afterRender: function(){
	            $('.logo a').addClass('js-link').attr('href', 'main');
	        },
			onLeave: function(index, nextIndex, direction){

	            //after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	            }
	            // after returning to section 1
	            else if(index == 2 && direction == 'up'){
	            	$('.js-menu').removeClass('is-fixed');	
	                $('.header').removeAttr('hidden');
	            }
	        }	
		});
	}

	$('body').on('click', '.js-link', function(){
		var link = $(this).attr('href');
		$.ajax({
			url: 'ajax/' + link + '.html',
			cache: false,
			success: function(html) {
				$('.container').html(html);
				
				if (link == 'main') {
					indexFullPage();
					slick();
					gallery();
					slick2();
					clients();
				}
				else {
					productFullPage();
					dragSlider();
	            	tooltip();
	            	catalog();
	            	slick2();
				}
			}
		});
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
		$('.gallery .slick-prev, .gallery .slick-next, .gallery .slick-dots').wrapAll('<div class="slick-controls">');
	}
	gallery();
	

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
		}
		
	});

	$('body').on('click', '.js-nav-drop-close', function(){
		$('body').removeClass('no-scroll');
		$('.js-nav-drop').hide();
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
			$('.js-size').find('a').removeClass('is-active');
			$(this).addClass('is-active');
			return false;
		});
	});

	// resize
	if ($(window).width() <= 767) {
		$('.js-fullpage-index').fullpage.destroy('all');
		$('.js-fullpage-product').fullpage.destroy('all');
	};
	$(window).resize(function(){
		
		if ($(window).width() <= 767) {
			$('.js-fullpage-index').fullpage.destroy('all');
			$('.js-fullpage-product').fullpage.destroy('all');
		};

	});


});