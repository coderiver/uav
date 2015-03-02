head.ready(function() {

	var hash_var = document.location.hash;
	hash_var = hash_var.substr(1);

	if (hash_var == "") {
		$.ajax({
		  url: 'page1.html',
		  cache: false,
		  success: function(html) { 
		  	$('.container').html(html).show(); 
		  }
		});
	}
	else {
		$.ajax({
		  url: hash_var +'.html',
		  cache: false,
		  before: function(){
		  	$('.container').hide();
		  },
		  success: function(html) { 
		  	$('.container').html(html).hide().fadeIn(300); 
		  }
		});
	}


	$('.js-link').click(function(){
		$('.container').fadeOut(300);
		var link = $(this).attr('href');
		$.ajax({
		  url: link + '.html',
		  cache: false,
		  success: function(html) { 
		  	$('.container').html(html).hide().fadeIn(300);
		  	if (link == 'page1') {
		  		// remove fragment as much as it can go without adding an entry in browser history:
		  		window.location.replace("#");

		  		// slice off the remaining '#' in HTML5:    
		  		if (typeof window.history.replaceState == 'function') {
		  		  history.replaceState({}, '', window.location.href.slice(0, -1));
		  		}
		  	}
		  	else {
		  		document.location.hash =''+link+'';
		  	}
		  }
		});
		return false;
	});


});