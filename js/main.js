        $('#toggleMenu').sidr({
            name: 'sidr-main',
            source: '#navigation',
            side: 'right'
        });


        $('#toggleMenu').click( function(){

            $(window).resize(function(e) {
                $.sidr('close', 'sidr-main');
                $(this).off(e);
            });
            
        });
        
        
		var scroll_pos = 0;
		var scroll_time;
		
		$(window).scroll(function() {
		    clearTimeout(scroll_time);
		    var current_scroll = $(window).scrollTop();
		    
		    if (current_scroll >= $('#topNav').outerHeight()) {
		        if (current_scroll <= scroll_pos) {
		            $('.nav').removeClass('hide');    
		        }
		        else {
		            $('.nav').addClass('hide');  
		        }
		    }
		        
		    scroll_time = setTimeout(function() {
		        scroll_pos = $(window).scrollTop();
		    }, 100);
		});
		
		
//		showItBitch = $(".wrap").fadeTo(0, 0);
//		
//		$(window).scroll(function(d,h) {
//		    showItBitch.each(function(i) {
//		        a = $(this).offset().top + $(this).height();
//		        b = $(window).scrollTop() + $(window).height();
//		        if (a < b) $(this).fadeTo(500,1);
//		    });
//		});
		
		$(document).ready(function(){
			$('a[href^="#"]').on('click',function (e) {
			    e.preventDefault();
		
			    var target = this.hash,
			    $target = $(target);
		
			    $('html, body').stop().animate({
			        'scrollTop': $target.offset().top
			    }, 800, 'easeInOutQuad', function () {
			        window.location.hash = target;
			    });
			});
		});