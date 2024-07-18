mainObj.news = // в главном обьекте создаем обьект news
{
	item: document.querySelectorAll('._item'),// находим все div item(это массив)
	move()//в обьекте news создаем метод move
	{
		for(let i = 1; i < this.item.length; i++)//в move с помощью for проходим по массиву item
		{
			let first = this.item[i].querySelectorAll('._wr')[0]//для выделения нужных нам тегов создаем массив first из 0вых элементов массива item
			this.item[i-1].innerHTML += first.innerHTML//оброщаемся к 0му элементу массива item и к 1му с помощью смещения и перекладываем в него внутряк элементов first
			first.remove()//удаляем ненужные нам блоки из массива first находящиеся в исходных блоках
		}
	}	
}
//баг: кнопка срабатывает повторно, return и break не работают