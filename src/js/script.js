window.addEventListener('DOMContentLoaded', function() {
	
	'use strict';
	$(document).ready(function(){
		$('.carousel_inner').slick({
			speed: 1200,
			dots: true,
			infinite: false,
			slidesToShow: 1,
			// fade: true,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png"></img></button>',
			nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></img></button>',
		});
	});

	(function($) {
		$(function() {
		  
		  $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
			$(this)
			  .addClass('active').siblings().removeClass('active')
			  .closest('div.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
		  });
		  
		});
		})(jQuery);

	// let tab = document.querySelectorAll('.info-header-tab'),
	// 	info = document.querySelector('.info-header'),
	// 	tabContent = document.querySelectorAll('.info-tabcontent');

	// 	function hideTabContent(a) {
	// 		for (let i = a; i < tabContent.length; i++) {
	// 			tabContent[i].classList.remove('show');
	// 			tabContent[i].classList.add('hide');

	// 		}
	// 	}

	// 	hideTabContent(1);

	// 	function showTabContent(b) {
	// 		if (tabContent[b].classList.contains('hide')) {
	// 			tabContent[b].classList.remove('hide');
	// 			tabContent[b].classList.add('show');
	// 		}
	// 	}

	// 	info.addEventListener('click', function(event) {
	// 		let target = event.target;
	// 		if (target && target.classList.contains('.info-header-tab')) {
	// 			for(let i = 0; i < tab.length; i++) {
	// 				if (target == tab[i]) {
	// 					hideTabContent(0);
	// 					showTabContent(i);
	// 					break;
	// 				}
	// 			}
	// 		}
	// 	});
});