 // Функция добавления нового блока blat
 function addBlat() {
    const container = document.createElement('div');
    container.className = 'blat-container';

    // Поля ввода
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    
    // Кнопки управления
    const upButton = document.createElement('button');
    upButton.textContent = '⬆️';
    upButton.onclick = () => moveUp(container);
    
    const downButton = document.createElement('button');
    downButton.textContent = '⬇️';
    downButton.onclick = () => moveDown(container);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.onclick = () => deleteBlat(container);
    
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(upButton);
    container.appendChild(downButton);
    container.appendChild(deleteButton);
    
    // Добавляем перед кнопками
    const buttons = document.querySelector('.buttons');
    buttons.parentNode.insertBefore(container, buttons);
  }

  // Функция перемещения блока вверх
  function moveUp(container) {
    const previous = container.previousElementSibling;
    if (previous && previous.classList.contains('blat-container')) {
      container.parentNode.insertBefore(container, previous);
    }
  }

  // Функция перемещения блока вниз
  function moveDown(container) {
    const next = container.nextElementSibling;
    const buttons = document.querySelector('.buttons');
    if (next && next !== buttons) {
      container.parentNode.insertBefore(next, container);
    }
  }

  // Функция удаления блока
  function deleteBlat(container) {
    container.remove();
  }

  // Функция сохранения данных
  function saveData() {
const output = document.getElementById('output');
const data = Array.from(document.querySelectorAll('.blat-container')).map(container => {
  const inputs = container.querySelectorAll('input');
  return `"${inputs[0].value}": "${inputs[1].value}"`; // Форматируем каждую пару
});

// Объединяем все пары в одну строку и оборачиваем в фигурные скобки
output.textContent = `{ ${data.join(', ')} }`;
}