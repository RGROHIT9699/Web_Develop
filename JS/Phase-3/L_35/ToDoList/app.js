let title = document.getElementById('title')
let btn = document.getElementById('add-btn')
let list = document.getElementById('list')

btn.addEventListener('click',function() {
    let qq = title.value;
    let item = document.createElement('li');
    item.innerText = qq;
    list.appendChild(item);
    title.value = '';

    item.addEventListener('click',function() {
        item.remove();
    })
})