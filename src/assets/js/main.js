"use strict"
window.onload = function()
{
	mainObj.inition()
}
let mainObj =
{
	inition()
	{
		this.production.initSlider()
		this.actionResise()
	},
	actionClass(tags, className, action)
	{
		tags.forEach((el)=>
		{
			action === 'add' ?
			el.classList.add(className):
			el.classList.remove(className)
		})
	},
	actionResise()
	{
		window.addEventListener('resize', () => {
  			this.news.move();
		});
	}
}