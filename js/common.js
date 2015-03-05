head.ready(function() {

	// main page slider
	function slick(){
		$('.js-slick').slick({
			fade: true,
			speed: 600,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
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

	//ajax load
	// var hash_var = document.location.hash;
	// hash_var = hash_var.substr(1);

	// if (hash_var == "") {
	// 	$.ajax({
	// 	  url: 'main.html',
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
	// 	  url: link + '.html',
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
		menu_links = menu.find('.js-menu-links'),
		menu_btn = menu.find('.js-menu-btn');
	menu_trigger.on('click', function () {
		menu.toggleClass('is-fixed');
	});
	menu_btn.on('click', function () {
		menu_links.toggleClass('is-show');
	});

});