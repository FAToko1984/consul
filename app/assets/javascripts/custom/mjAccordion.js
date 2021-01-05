/*
	Author		: Michael Janea
	Version		: 1.0
	Author URL	: www.michaeljanea.me
*/

(function($){

	//define plugin
    $.fn.mjAccordion = function(options){

		//extends
		var mjSettings = $.extend({
			duration: 300,
			toggle	: true
		}, options);

		//function
		return this.each(function(){

			//on item click
			$(this).find('.mj_accordion_item').on('click', function(){

				//if toggle is true
				if(mjSettings.toggle){

					//hidden
					if(!$(this).hasClass('active')){

						$(this).addClass('active').siblings('.mj_accordion_content').stop(true, true).slideDown(mjSettings.duration, function(){

							//add active class and remove inline css generated by jquery
							$(this).addClass('active').removeAttr('style');

						});

					//shown
					}else{

						$(this).siblings('.mj_accordion_content').stop(true, true).slideUp(mjSettings.duration, function(){

							//remove active class and remove inline css generated by jquery
							$(this).removeClass('active').removeAttr('style').siblings('.mj_accordion_item').removeClass('active');

						});

					}

				//toggle if false
				}else{

					//show content
					$(this).addClass('active').siblings('.mj_accordion_content').stop(true, true).slideDown(mjSettings.duration, function(){

						//add active class and remove inline css generated by jquery
						$(this).addClass('active').removeAttr('style');

					});

					//hide all others
					$(this).parent().siblings().find('.mj_accordion_content').stop(true, true).slideUp(mjSettings.duration, function(){

						//remove active class and remove inline css generated by jquery
						$(this).removeClass('active').removeAttr('style').siblings('.mj_accordion_item').removeClass('active');

					});

				}

			});

		});

    };

})(jQuery);