const btns = document.querySelectorAll('button');
const blocks = document.querySelectorAll('.block');

blocks.forEach(function(block, index) {
    block.setAttribute('data-index', index + 1); //перебор псевдо-массива с блоками, где добавляется атрибут дата-индекс, и значение атрибута равное индексу п/массива + 1
});

btns.forEach(function(btn, index) { //перебор п/массива
    btn.addEventListener('click', function() { //вызываем функцию по клику
        const targetIndex = index + 1; //присваиваем переменной для сравнения значение индекса п/массива с кнопками + 1
        blocks.forEach(function(block) { //перебор блоков
            const blockIndex = block.getAttribute('data-index'); // присваивает переменной значение атрибута дата индекс
            if (blockIndex == targetIndex) {
                block.classList.toggle('active');
            }
        });
    });
});