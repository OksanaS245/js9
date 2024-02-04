const text = document.querySelector('.text');
const btn = document.querySelector('button');

text.addEventListener('scroll', function() {
    if (text.scrollTop > 100) {
        btn.classList.add('active');} else {
            btn.classList.remove('active');
        }
});

btn.addEventListener('click', function() {
    text.scrollTop = 0;
});