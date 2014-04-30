jQuery(document).ready(function() {

	// Header Effect on Scroll

	var op1 = '0.'+dt_styles.header_scroll_opacity+'';
	if(dt_styles.header_scroll_opacity == 100) {
		op1 = ''+dt_styles.header_scroll_opacity+'';
	}

	var def_color = dt_styles.default_color;

	jQuery(".transparent-header").css({"background":"rgba("+dt_styles.header_bg+","+op1+")", "box-shadow": "none"});
	jQuery(".transparent-header ul#mainnav li ul li a").css({"background":"rgba("+dt_styles.header_bg+","+op1+")", "box-shadow": "none"});
	jQuery("#header.solid-header ul#mainnav li ul li a").css({'background': 'rgba('+dt_styles.header_bg+', 1)'});

	jQuery(window).scroll( function() {
		var value = jQuery(this).scrollTop();
		if ( value > 120 )	{
			jQuery("#header").addClass("scrolled-header");
			jQuery("#header").css({"padding-top": "15px", "padding-bottom": "15px"});
			jQuery(".scrolled-header").css({"background":"rgba("+dt_styles.header_bg+", "+op1+")", "box-shadow": "0px 0px 3px rgba(0, 0, 0, 0.3)"});
			jQuery(".no-rgba .scrolled-header").css({"background": def_color});
			jQuery(".logo img").css({"height": "30px", "width": "auto"});
			jQuery(".scrolled-header #mainnav").css({"padding-top": "2px"});
			jQuery(".scrolled-header ul#mainnav li ul li a").css({'background': 'rgba('+dt_styles.header_bg+', '+op1+')'});
			jQuery(".no-rgba .scrolled-header ul#mainnav li ul li a").css({"background": def_color});
			
			jQuery("#header.no-header").addClass("show");
			
			jQuery(".no-csstransforms .no-header").css({"display": "block"});
		
		}
		else {
			jQuery("#header").removeClass("scrolled-header");
			jQuery("#header.transparent-header, #header.solid-header").css({"padding-top": "55px", "padding-bottom": "25px"});
			jQuery(".logo img").css({"width": dt_styles.logo_width, "height": dt_styles.logo_height});
			jQuery("#header #mainnav").css({"padding-top": "10px"});
			
			jQuery(".transparent-header").css({"background":"rgba("+dt_styles.header_bg+","+op1+")", "box-shadow": "none"});
			jQuery(".no-rgba .transparent-header").css({"background": def_color});
			jQuery(".solid-header").css({"background":"rgb("+dt_styles.header_bg+")", "box-shadow": "none"});
			
			jQuery("#header.no-header .logo img").css({"height": "30px", "width": "auto"});
			jQuery("#header.no-header").removeClass("show");
			jQuery(".no-csstransforms .no-header").css({"display": "none"});		

			jQuery("#header.solid-header ul#mainnav li ul li a").css({'background': 'rgba('+dt_styles.header_bg+', 1)'});		
			
		}
	});	
	
});