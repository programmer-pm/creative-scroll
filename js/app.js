gsap.registerPlugin(ScrollTrigger, ScrollSmoother) // сначала регистрируем плагины
// отключаем на мобилках
if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({
		wrapper: '.wrapper', // оболочка
		content: '.content', // контент
		smooth: 5.5, // скорость скроила
		effects: true // включаем эффекты
	})
	// изначально не прозрачна
	gsap.fromTo(
		'.hero-section',
		{ opacity: 1 },
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.hero-section',
				start: 'center',
				end: '820',
				scrub: true,
			},
		}
	)

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
	itemsL.forEach(item => {
		gsap.fromTo(
			item,
			{ opacity: 0, x: -150 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-950',
					end: '-100',
					scrub: true,
				},
			}
		)
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(
			item,
			{ opacity: 0, x: 150 },
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: '-750',
					end: 'top',
					scrub: true,
				},
			}
		)
	})
}
