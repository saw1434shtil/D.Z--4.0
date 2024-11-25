let inputText = document.querySelector('input');
let dupField = document.querySelector('#duplicateField')


inputText.addEventListener('input',() => {
    dupField.textContent = inputText.value;
})

let Button = document.querySelector ('button');
Button.addEventListener('click', (event) => {
    console.log('', dupField.textContent);
    dupField.textContent = '';
    inputText.value = '';
})

