head.ready(function() {

	// penguin exploded scheme animation
    function getPictures(direction){
    	var container = $('.section.active').find('.js-scheme'),
    		wrap = $('.section.active').find('.js-tooltip'),
    		type = container.data('type'),
    		length = container.data('length');

    	imgCount = parseInt(length,10);
    	imgCount = imgCount + 1;
    	
    	// play animation

		if (direction == 'forward') {
			counter = 1;
			interval = setInterval(function(){
				$('.js-scheme').attr('src', 'img/'+type+'/'+counter+'.png');
				counter++;
				if (counter == imgCount) {
					clearInterval(interval);
				};
			}, 30);
	    	
	    	var delay = 30*imgCount + 200; 
	    	setTimeout(function(){
	    		container.parent().find('.js-tooltip-item').addClass('is-visible');
	    	}, delay);
	    	wrap.addClass('is-animated');
		}
		if (direction == 'back') {
			container.parent().find('.js-tooltip-item').removeClass('is-visible');
			counter = 26;
			interval2 = setInterval(function(){
				$('.js-scheme').attr('src', 'img/'+type+'/'+counter+'.png');
				counter--;
				if (counter == 1) {
					clearInterval(interval2);
				};
			}, 30);
			if (type == 'plain') {
				wrap.removeClass('is-animated');
			};	
		};
    }

    function catTakeoff(){
    	var item = $('.js-cat'),
    		wrap = $('.section.active'),
    		counter = 1;

    	// takeoff animation
    	if (!wrap.hasClass('is-loaded')) {
    		$.fn.fullpage.setAllowScrolling(false);
    		interval = setInterval(function(){
    			item.attr('style', 'background-image:url(img/cat/'+counter+'.jpg);');
    			counter++;
    			if (counter == 27) {
    				clearInterval(interval);
    			};
    		}, 40);
    		
    		$('body').addClass('cat-animation');
    	};
    }
    function catTransform(){
    	var item = $('.js-cat'),
    		wrap = $('.section.active'),
    		counter = 27;
    	// takeoff animation
    	interval = setInterval(function(){
    		item.attr('style', 'background-image:url(img/cat/'+counter+'.png);');
    		counter++;
    		if (counter == 52) {
    			clearInterval(interval);
    		};
    	}, 40);
    	setTimeout(function(){
    		$('.cat-plain').addClass('is-visible');
    		wrap.addClass('is-loaded').removeClass('page_dark');
    		//$.fn.fullpage.setAllowScrolling(true);
    	}, 1200);
    }

    function gsc(){
    	var item = $('.js-gsc'),
    		wrap = $('.section.active'),
    		counter = 2;

    	// takeoff animation
    	if (!wrap.hasClass('is-loaded')) {
    		$.fn.fullpage.setAllowScrolling(false);
    		interval = setInterval(function(){
    			item.attr('style', 'background-image:url(img/gsc/'+counter+'.png);');
    			counter++;
    			if (counter == 27) {
    				clearInterval(interval);
    			};
    		}, 40);
    		
    		setTimeout(function(){
    			wrap.addClass('is-loaded');
    			$('body').addClass('gsc-animation');
    		}, 1000);
    	};
    }

    // allow fullpagejs scroll
    function allowScroll(direction, delay){
    	console.log('wait 2sec for free to scroll...');
    	setTimeout(function(){
    		$.fn.fullpage.setAllowScrolling(true);
    		
    		if (direction == 'up') {
    			$.fn.fullpage.moveSectionUp();
    		}
    		if (direction == 'down') {
    			$.fn.fullpage.moveSectionDown();
    		}
    	}, delay);
	};
	
	$('body').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
        	if ($('body').hasClass('scroll-false')) {
        		getPictures('back');
        		allowScroll('up', 2000);
        		$('body').removeClass('scroll-false');
        	};
        	if ($('body').hasClass('cat-animation')) {
        		$('body').removeClass('cat-animation');
        		allowScroll('up', 0);
        		setTimeout(function(){
        			$('.js-cat').attr('style', 'background-image:url(img/cat/1.jpg);');
        		}, 500);
        	};
        	if ($('body').hasClass('cat-animation2') && !$('body').hasClass('animated')) {
        		$('body').removeClass('cat-animation2').addClass('animated');
        	};
        	if ($('body').hasClass('gsc-animation')) {
        		$('.body').removeClass('gsc-animation');
        		$.fn.fullpage.setAllowScrolling(true);
        		$.fn.fullpage.moveSectionUp();
        	};
        	if ($('body').hasClass('engine-anim')) {
        		$('body').removeClass('engine-anim');
        	};
        }
        else{
        	if ($('body').hasClass('scroll-false') && !$('body').hasClass('animated')) {
        		getPictures('back');
        		allowScroll('down', 2000);
        		$('body').removeClass('scroll-false');
        	};
        	if ($('body').hasClass('cat-animation') && !$('body').hasClass('animated')) {
        		catTransform();
        		$("body").removeClass("cat-animation").delay(300).queue(function(){
        		    $(this).addClass("cat-animation2").dequeue();
        		});
        	};
        	if ($('body').hasClass('cat-animation2') && !$('body').hasClass('animated')) {
        		$('.cat-plain').removeClass('is-visible');
        		$('.fixed-plain').addClass('is-large').show();
        		$('.cat').addClass('is-hidden');
        		setTimeout(function(){
        			$('.fixed-plain').removeClass('is-large');
        		}, 300);
        		setTimeout(function(){
        			$.fn.fullpage.setAllowScrolling(true);
        			$.fn.fullpage.moveSectionDown();
        			$('body').removeClass('cat-animation2').delay(300).queue(function(){
        		    	$(this).addClass("animated").dequeue();
        			});
        		}, 1300);
        	};
        	if ($('body').hasClass('gsc-animation')) {
        		$('.body').removeClass('gsc-animation');
        		$.fn.fullpage.setAllowScrolling(true);
        		$.fn.fullpage.moveSectionDown();
        	};
        	if ($('body').hasClass('engine-anim')) {
        		stopPropeller();
        		
        		setTimeout(function(){
        			$('.engine__wall').addClass('is-hidden');
        			$('.engine__platform').addClass('is-hidden');
        		},200);
        		
        		setTimeout(function(){
        			$('.js-propeller').addClass('is-small');
        		},500);
        		setTimeout(function(){
        			engineRotate();
        		}, 1100);
        		setTimeout(function(){
        			$('.fixed-plain').show();
        			$('.js-propeller').addClass('is-hidden');
        		},1700);
        		setTimeout(function(){
        			$.fn.fullpage.setAllowScrolling(true);
        			$.fn.fullpage.moveSectionDown();
        			$('body').removeClass('engine-anim').addClass('is-animated');
        		},1800);
        	};
        }
    });

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
	            if(index == 2 || index == 5){
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        	} else {
	        		$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	        	};
	            if (index == 3) {
	            	getPictures('forward');
	            };
	            if ($(window).width() < 768) {
	            	$('.quote').removeClass('is-open').removeClass('is-visible');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
	        },
			onLeave: function(index, nextIndex, direction){

	            //after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	                $('.js-build-quote').show();
	            }
	            // after returning to section 1
	            if(nextIndex == 1){
	            	$('.js-menu').removeClass('is-fixed');
	                $('.header').removeAttr('hidden');
	                $('.js-build-quote').hide();
	            }
                if (nextIndex == 2 && direction == 'up') {
	            	$('.fixed-plain').show();
	            	$('.js-tooltip').removeClass('is-visible');
	            }
                if (nextIndex == 3 && direction == 'down') {
	            	$('.flight__plain').addClass('no-animation');
	            	$('.fixed-plain').show();
	            }
	            if (nextIndex == 4 && direction == 'down') {
            		$('.fixed-plain').show();
            		$('.js-tooltip').removeClass('is-visible');
	            }
	            if (nextIndex == 3 && direction == 'up') {
	            	$('.fixed-plain').show();
	            	$('.dimms__arrows').removeClass('is-visible');
	        		$('.dimms__product').removeClass('is-visible');
	            }
	            // after returning to 9
	            if (nextIndex == 9){
	            	$('.js-build-quote').show().addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (nextIndex == 10){
	            	setTimeout(function(){
	            		$('.js-build-quote').hide();
	            	}, 300);
	            }
	            if(index == 9){
	            	$(".quote").removeClass("is-open").delay(300).queue(function(){
	            	    $(this).removeClass("is-visible").dequeue();
	            	});
	            }
	        },
            afterLoad: function(anchorLink, index){
	        	if(index == 2 || index == 5){
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        	} else {
	        		$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	        	};
	        	if (index !== 9 && index !== 10 && index !== 1){
	            	$('.js-build-quote').show().removeClass('is-open');
	            }
	        	if(index == 2){
	        		
	        		setTimeout(function(){
	        			$('.flight__plain').removeClass('no-animation');
	        			$('.fixed-plain').hide();
	        		}, 300);
	        	};
	        	if(index == 3){
	        		$.fn.fullpage.setAllowScrolling(false);
	        		setTimeout(function(){
	        			$('.js-tooltip').addClass('is-visible');
	        			getPictures('forward');
	        			$('.fixed-plain').hide();
	        		}, 300);
	        		
	        		$('body').addClass('scroll-false');
	        		console.log('scroll banned');
	        	};
	        	if (index == 4) {
	        		setTimeout(function(){
	        			$('.dimms__product').addClass('is-visible');
	        			$('.fixed-plain').hide();
	        			$('.dimms__arrows').addClass('is-visible');
	        		}, 300);
	        	};
	        	if (index == 9){
	            	$('.js-build-quote').addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            };
	            if ($(window).width() < 768) {
	            	$('.quote').removeClass('is-open');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
            },
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
	            }
	            if(index == 2){
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        	} else {
	        		$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	        	};
	            if ($(window).width() < 768) {
	            	$('.quote').removeClass('is-open').removeClass('is-visible');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
	        },
	        afterLoad: function(anchorLink, index){
	        	if (index == 2){
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        		if (!$('body').hasClass('animated')) {
	        			catTakeoff();
	        		};
	            }
	            if (index !==2) {
	            	$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	            	$('body').removeClass('cat-animation');
	            	$.fn.fullpage.setAllowScrolling(true);
	            }
	        	if (index == 3){
	        		$('.js-tooltip').addClass('is-visible');
	        		if (!$('.js-tooltip').hasClass('is-animated')) {
	        			getPictures('forward');
	        		};
	        		$('.fixed-plain').hide();
	        		$('body').addClass('animated');
	            };
	            if (index == 4) {
	            	$('.catapult').addClass('is-visible');
	        		setTimeout(function(){
	        			$('.catapult__man').addClass('is-visible');
	        			$('.catapult__el.is-active').addClass('is-visible');
	        			$('.catapult__el.is-active').find('.catapult__dimm').addClass('is-visible');
	        			$('.catapult__el.is-active').find('.catapult__arrows').addClass('is-visible');
	        		}, 300);
	        	};
	        	if (index == 5){
	            	$('.js-build-quote').addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (index !== 5 && index !== 6 && index !== 1){
	            	$('.js-build-quote').show().removeClass('is-open');
	            }
	            if (index !== 5 ){
	            	$('.quote').removeClass('is-visible');
	            }
	            if ($(window).width() < 768) {
	            	$('.quote').removeClass('is-open');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
            },
			onLeave: function(index, nextIndex, direction){

	            //after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	                $('.js-build-quote').show();
	            }
	            
	        	if(nextIndex == 2){
	        		if ($('body').hasClass('animated')) {
	        			$('.js-cat').removeClass('is-hidden');
	        		};
	        	}	
	            // after returning to section 1
	            if(nextIndex == 1){
	            	$('.js-menu').removeClass('is-fixed');
	                $('.header').removeAttr('hidden');
	                $('.js-build-quote').hide();
	            }
	            // after returning to 5 slide
	            if (nextIndex == 5){
	            	$('.js-build-quote').show().addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (nextIndex == 6){
	            	setTimeout(function(){
	            		$('.js-build-quote').hide();
	            	}, 300);
	            }
	            // on leaving slide 5
	            if(index == 5){
	               	$(".quote").removeClass("is-open").delay(300).queue(function(){
	            	    $(this).removeClass("is-visible").dequeue();
	            	});
	            }
	        }
		});
	}
	if ($('.js-fullpage-catapult').length) {
		catapultFullPage();
	};

	// fullPageJs init for gsc slides
	function gscFullPage(){
		$('.js-fullpage-gsc').fullpage({
			resize: true,
			responsive: 767,
			menu: '#gsc-menu',
			anchors: ['index', 'performance', 'exploded_view', 'compartment', 'gsc_options', 'gsc-contacts'],
			afterRender: function(index){
	            $('.logo a').addClass('js-link');
	            $('.nav a.nav__contacts').addClass('js-link');
	            if (index == 1) {
	            	$('body').animate({scrollTop:0}, '10');
	            }
	            if(index == 2){
	            	gsc();
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        	} else {
	        		$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	        	};
	            if ($(window).width() < 768) {
	            	$('.quote').removeClass('is-open').removeClass('is-visible');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
	        },
	        afterLoad: function(anchorLink, index){
	        	if (index == 2){
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        		setTimeout(function(){
	        			gsc();
	        		}, 600);
	        		
	            }
	            if (index !==2) {
	            	$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	            }
	            if (index == 3) {
	            	$('.js-tooltip').addClass('is-visible');
	            	setTimeout(function(){
	            		$('.js-tooltip-item').addClass('is-visible');
	            	}, 200);
	            };
	        	if (index == 5){
	            	$('.js-build-quote').addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (index !== 5 && index !== 6 && index !== 1){
	            	$('.js-build-quote').show().removeClass('is-open');
	            }
	            if (index !== 5 ){
	            	$('.quote').removeClass('is-visible');
	            }
	            if ($(window).width() < 768) {
	            	$('.quote').removeClass('is-open');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
            },
			onLeave: function(index, nextIndex, direction){
				//after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	                $('.js-build-quote').show();
	            }
	            // after returning to section 1
	            if(nextIndex == 1){
	            	$('.js-menu').removeClass('is-fixed');
	                $('.header').removeAttr('hidden');
	                $('.js-build-quote').hide();
	            }
	            // after returning to 5 slide
	            if (nextIndex == 5){
	            	$('.js-build-quote').show().addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (nextIndex == 6){
	            	setTimeout(function(){
	            		$('.js-build-quote').hide();
	            	}, 300);
	            }
	            // on leaving slide 5
	            if(index == 5){
	               	$(".quote").removeClass("is-open").delay(300).queue(function(){
	            	    $(this).removeClass("is-visible").dequeue();
	            	});
	            }
	        }
		});
	}
	if ($('.js-fullpage-gsc').length) {
		gscFullPage();
	};

	// animations for engine
	var	count = 1;

	var interval2 = setInterval(function(){
		$('.js-propeller').attr('style', 'background-image:url(img/engine/'+count+'.png);');
		count++;

		if (count == 4) {
			count = 1;
		};
	}, 60);
	
	function propeller(){
		interval2 = setInterval(function(){
			$('.js-propeller').attr('style', 'background-image:url(img/engine/'+count+'.png);');
			count++;

			if (count == 4) {
				count = 1;
			};
		}, 100);
	}

	function stopPropeller(){
		$('.js-propeller').attr('style', 'background-image:url(img/engine/11.png);');
		clearInterval(interval2);
	}

	function engineRotate(){
		var frame = 11;
		interval3 = setInterval(function(){
			$('.js-propeller').attr('style', 'background-image:url(img/engine/'+frame+'.png);');
			frame++;

			if (frame == 26) {
				clearInterval(interval3);
			};
		}, 40);
	}

	// fullPageJs init for gsc slides
	function engineFullPage(){
		$('.js-fullpage-engine').fullpage({
			resize: true,
			responsive: 767,
			menu: '#engine-menu',
			anchors: ['index', 'performance', 'features', 'integraion', 'engine_options', 'engine-contacts'],
			afterRender: function(index){
	            $('.logo a').addClass('js-link');
	            $('.nav a.nav__contacts').addClass('js-link');
	            if (index == 1) {
	            	$('body').animate({scrollTop:0}, '10');
	            }
	            if(index == 2){
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	        	} else {
	        		$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	        	};
	            if ($(window).width() <= 768) {
	            	$('.quote').removeClass('is-open').removeClass('is-visible');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
	        },
	        afterLoad: function(anchorLink, index){
	        	if (index == 1){
	        		$.fn.fullpage.setAllowScrolling(true, 'down');
	            }
	        	if (index == 2){
	        		if (!$('body').hasClass('is-animated')) {
	        			$.fn.fullpage.setAllowScrolling(false, 'down');
	        			$('body').addClass('engine-anim');
	        		} else {
	        			propeller();
	        			$.fn.fullpage.setAllowScrolling(true, 'down');
	        		}
	        		$('.js-build-quote').find('.build-quote').addClass('build-quote_dark');
	            }
	            if (index !==2) {
	            	$('.js-build-quote').find('.build-quote').removeClass('build-quote_dark');
	            }
	            if (index !==3) {
	            	if (!$('body').hasClass('is-animated')) {
	            		$('.js-tooltip').removeClass('is-visible');
	            	};
	            };
	            if (index == 3) {
	            	$('.js-tooltip').addClass('is-visible');
	            	setTimeout(function(){
	            		$('.fixed-plain').hide();
	            	}, 200);
	            	setTimeout(function(){
	            		$('.js-tooltip-back').addClass('is-visible');
	            	}, 300);
	            };
	        	if (index == 5){
	            	$('.js-build-quote').addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (index !== 5 && index !== 6 && index !== 1){
	            	$('.js-build-quote').show().removeClass('is-open');
	            }
	            if (index !== 5 ){
	            	$('.quote').removeClass('is-visible');
	            }
	            if ($(window).width() <= 768) {
	            	$('.quote').removeClass('is-open');
	            	$('.js-build-quote').removeClass('is-open').hide();
	            };
            },
			onLeave: function(index, nextIndex, direction){
				//after leaving section 1
	            if(index == 1 && direction =='down'){
	                $('.header').attr('hidden', 'hidden');
	                $('.js-menu').addClass('is-fixed');
	                $('.js-build-quote').show();
	            }
	            // after returning to section 1
	            if(nextIndex == 1){
	            	$('.js-menu').removeClass('is-fixed');
	                $('.header').removeAttr('hidden');
	                $('.js-build-quote').hide();
	            }
	            if (nextIndex == 2) {
	            	$('.engine__wall, .engine__platform').removeClass('is-hidden');
	            	$('.js-propeller').attr('style', 'background-image:url(img/engine/11.png);').removeClass('is-small is-hidden');
	            };
	            // after returning to 5 slide
	            if (nextIndex == 5){
	            	$('.js-build-quote').show().addClass('is-open');
	            	$(".quote").addClass("is-visible").delay(300).queue(function(){
	            	    $(this).addClass("is-open").dequeue();
	            	});
	            }
	            if (nextIndex == 6){
	            	setTimeout(function(){
	            		$('.js-build-quote').hide();
	            	}, 300);
	            }
	            // on leaving slide 5
	            if(index == 5){
	               	$(".quote").removeClass("is-open").delay(300).queue(function(){
	            	    $(this).removeClass("is-visible").dequeue();
	            	});
	            }
	        }
		});
	}
	if ($('.js-fullpage-engine').length) {
		engineFullPage();
	};

    // fullPageJs init for one product slides
    function productFullPage(){
        $('.js-fullpage-product').fullpage({
            resize: true,
            responsive: 767,
            menu: '#product-menu',
            anchors: page_anchors,
            afterRender: function(index){
                $('.header').removeAttr('hidden');
                $('.header').removeClass('is-small');
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
    if ($('.js-fullpage-product').length) {
        productFullPage();
    };

    // engine explode scheme rotation

    function engineView(){
    	var img = $('.js-engine-rotation'),
    		linkFront = $('.el__front'),
    		linkBack = $('.el__back');

    		// rotate back
    		function engineAnimation(direction){
    			if (direction == 'front') {
    				var engineFrame = 25;
    				interval4 = setInterval(function(){
    					$('.js-engine-rotation').attr('src', 'img/engine/'+engineFrame+'.png');
    					engineFrame++;
    					if (engineFrame == 38) {
    						clearInterval(interval4);
    					};
    				}, 40);
    				$('.js-engine-rotation').addClass('front');
    			}
    			if (direction == 'back') {
    				var engineFrame2 = 37;
    				interval5 = setInterval(function(){
    					$('.js-engine-rotation').attr('src', 'img/engine/'+engineFrame2+'.png');
    					engineFrame2--;
    					if (engineFrame2 == 24) {
    						clearInterval(interval5);
    					};
    				}, 40);
    				$('.js-engine-rotation').addClass('back');
    			};
    		}

    		// navigation
    		linkFront.on('click', function(){
    			if ($('.js-engine-rotation').hasClass('back')) {
    				$('.js-engine-rotation').removeClass('back');
    				$('.js-tooltip-back').removeClass('is-visible');
    				setTimeout(function(){
						engineAnimation('front');
    				}, 200);
    				setTimeout(function(){
						$('.js-tooltip-front').addClass('is-visible');
    				}, 880);
    			}
    		});
    		linkBack.on('click', function(){
    			if ($('.js-engine-rotation').hasClass('front')) {
    				$('.js-engine-rotation').removeClass('front');
    				$('.js-tooltip-front').removeClass('is-visible');
    				setTimeout(function(){
						engineAnimation('back');
    				}, 200);
    				setTimeout(function(){
						$('.js-tooltip-back').addClass('is-visible');
    				}, 880);
    			}
    		});

    }
	engineView();

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

  	// mobile navigation for slides
  	function mobNav(){
  		var wrap = $('.js-fullpage'),
  			page = wrap.find('.section');

  		page.hide();
  		wrap.find('.section:first-child').show();

  		// nav
  		$('body').on('click', '.js-scroll-prev', function(){
  			var prevPage = $(this).parents('.section').prev();
 
  			if (prevPage.length) {
  				page.hide();
  				$('body, html').animate({
  					scrollTop: 0
  				}, 10);
  				setTimeout(function(){
  					prevPage.show();
  				}, 10);
  			};
  			return false;
  		});
  		$('body').on('click', '.js-scroll-next', function(){
  			var nextPage = $(this).parents('.section').next();
  			
  			if (nextPage.length) {
  				page.hide();
  				$('body, html').animate({
  					scrollTop: 0
  				}, 10);
  				setTimeout(function(){
  					nextPage.show();
  					if (nextPage.find('.js-tabs-3').length) {
  						$('.js-tabs-3').slick('reinit').addClass('is-reinited');
  					};
  					if (nextPage.find('.js-slick-2').length) {
  						$('.js-slick-2').slick('reinit').addClass('is-reinited');
  					};
  				}, 10);
  			};
  			return false;
  		});
  	}
  	if ($(window).width() <768) {
  		mobNav();
  	};

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

	function popupSlider(target){

		$('.js-bg-slider').slick({
			speed: 600,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipe: false,
			//asNavFor: '.js-popup-slider',
			responsive: [
			    {
			    	breakpoint: 768,
			    	settings: {
			    		adaptiveHeight: true
			    	}
			    }
			]
		});
		$('.js-popup-slider').slick({
			speed: 600,
			dots: true,
			arrows: false,
			infinite: true,
			    		slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.js-bg-slider',
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

		$('.js-bg-slider').slick('slickGoTo', target);
		$('.js-popup-slider').slick('slickGoTo', target);
	}

	// popup init

    $('.js-popup-btn').on('click', function(){
		$('body').addClass('no-scroll');
		var link = $(this).data('popup');

		//disabling scrolling
		$.fn.fullpage.setAllowScrolling(false);

		// fires when btn doesn't have data-slide attribute (init first slide then)
		if ($(this).data('slide')) {
			sliderNumber = $(this).data('slide') -1;
		}
		else {
			sliderNumber = 0;
		}

        if($('#' + link).find('.popup__video').length>0){
            $('#' + link + ' .popup__video').oembed($(this).attr('href'), {embedMethod: 'fill'}, function(container, oembed){
                console.log(container, oembed.code);
                $('.video__in', container).html(oembed.code);
                $('.video__title', container).html(oembed.title||'');
                $('.video__info', container).html(oembed.description||'');
            });
        }

		// find popup via id
		$('#' + link).show();

		// init slider in popup
		if ($('#' + link).find('.js-popup-slider').length) {
			if (!$('.js-popup-slider').hasClass('is-inited') && !$('.js-bg-slider').hasClass('is-inited')) {
				popupSlider(sliderNumber);
				$('.js-popup-slider').addClass('is-inited');
				$('.js-bg-slider').addClass('is-inited');
			}
			else {
				$('#' + link).find('.js-popup-slider').slick('slickGoTo', sliderNumber);
				$('#' + link).find('.js-bg-slider').slick('slickGoTo', sliderNumber);
			}
		};

		return false;
	});

	// close popup
	$('body').on('click', '.js-popup-close', function(){
		$('.js-popup').hide();
		$('body').removeClass('no-scroll');
		//enabling scrolling
		$.fn.fullpage.setAllowScrolling(true);
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


    $('.contacts__col_form').on('submit','form',function(e){
        e.preventDefault();
        var data = $(this).serialize();
        var self = this;
        var parent = $(self).parents('.contacts__col_form');
        //$(parent).spin('small');
        $('[type=submit]', self).attr('disabled', 'disabled');
        $.post($(self).attr('action'),data,function(data){
            //$(parent).data('spinner').stop();
            $('> div.form', parent).html(data);
        })
    })

    $('.baq').fancybox({width:1017,height:560, beforeShow: function(){
        $.fn.fullpage.setAllowScrolling(false);
    }, beforeClose: function(){
        if(confirm("Are you sure you want to quit?")){
            $.fn.fullpage.setAllowScrolling(true);
        }else{
            return false;
        }
    }});
    $('form[name=baq]').submit(function(){
        $('a.baq').click();
        return false;
    });

});