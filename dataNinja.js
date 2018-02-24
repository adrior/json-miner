
var result = [...document.querySelectorAll('.n-snippet-cell2')].map(el => { 
    let item = {}
    item.title = el.querySelector('.n-snippet-cell2__title').innerText.replace('Смартфон ', '');     // Получить текст элемента
    item.price = el.querySelector('.price').innerText;
    item.img = el.querySelector('img.image').src;                           // Получить адрес у картинки
//  item.bg = el.querySelector('...').style.backgroundImage.replace(/url\(['"]?(.+?)['"]?\)/, '$1');
    return item;
})

console.log(
    JSON.stringify(result, null, 4)
)