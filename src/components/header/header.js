mainObj.header =
{
	headerWrap:document.querySelector('._header__wrap'),

	show(instance)
	{
		if(instance.classList.contains('active'))
		{
			instance.classList.remove('active')
			this.headerWrap.classList.remove('active')
		}
		else
		{
			instance.classList.add('active')
			this.headerWrap.classList.add('active')
		}
	}
}
