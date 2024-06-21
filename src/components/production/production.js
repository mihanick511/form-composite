mainObj.production =
{
	initSlider()
	{
		const swiper = new Swiper('._production',
		{
		// Optional parameters

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar'
		},

		// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

		// And if we need scrollbar
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// },
		});
	}
}