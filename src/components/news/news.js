mainObj.news =
{
	item: document.querySelectorAll('._item'),
	// перенесли переменную heig в метод move
	move()
	{
		let heig = document.querySelectorAll('._heig')
		//if(this.item[0].querySelectorAll('.news__item-el').lenght > 1) return;
		if(window.innerWidth <= 1100)
		{
			mainObj.actionClass(heig, 'heig', 'remove');
			for(let i = 1; i < this.item.length; i++)
			{
				let first = this.item[i].querySelector('._wr')
				this.item[i-1].innerHTML += first.outerHTML
				first.remove();
			}
		}
		if(window.innerWidth > 1100)
		{
			mainObj.actionClass(heig, 'heig', 'add'); // использовали нашу переменную heig вместо document.querySelectorAll('_heig')
			for(let i = 0; i < this.item.length; i++)
			{
				if(!this.item[i+1]) return;
				let last = this.item[i].querySelectorAll('._wr')[1]
				this.item[i+1].innerHTML += last.outerHTML
				last.remove();
			}
		}
	}	
}