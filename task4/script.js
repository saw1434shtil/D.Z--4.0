const Prompt = document.querySelector('a');
Prompt.addEventListener ('click', () => {
    prompt('Введите название онлайн школы на англ.');
})
//окно

const text = document.querySelector('#text');
text.addEventListener('click', function Click() {
  text.textContent = 'skillfactory';
});
//изменение текста

const link = document.querySelector('#text')
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Сброс поведения ссылки')
})
//сброс






