const form = document.querySelector('form');
const outputDiv = document.querySelector('div');
const inputs = document.querySelectorAll('input');


    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        let outputText = 'Спасибо за отправку формы, ваши данные:';

        inputs.forEach(function(input) {
            const label = input.previousElementSibling.textContent.trim();
            const value = input.value;
            outputText += `${label} : '${value}'` + '. ';
        });

        outputDiv.innerHTML = outputText;
    });
