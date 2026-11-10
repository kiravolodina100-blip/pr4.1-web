// ==========================================
// ПРАКТИЧНА РОБОТА: Шаблонні рядки та Інтерполяція
// ==========================================

// Пункт 3: Занести назву бургера і шлях до картинки в 2 окремі змінні
const burgerTitle = 'Стандартний бургер';
const burgerImgSrc = './image/burger.png';

// Отримуємо контейнер з HTML для виведення даних (в index.html це форма модального вікна або блок content)
const formAnswers = document.getElementById('formAnswers');

// Пункт 4: Функція виведення даних на сторінку в шаблоні HTML (через інтерполяцію)
function renderBurgerCard(title, imgSrc) {
  // Використовуємо зворотні лапки `` та синтаксис ${} для інтерполяції
  const burgerTemplate = `
    <div class="answers-item d-flex flex-column align-items-center mx-auto text-center py-3">
      <h3 class="logo-text mb-3">${title}</h3>
      <div class="border rounded p-2 bg-white shadow-sm">
        <img class="answerImg img-fluid" src="${imgSrc}" alt="${title}" style="max-width: 180px;">
      </div>
      <span class="mt-2 text-muted">Атрибут src: <code>${imgSrc}</code></span>
    </div>
  `;

  // Виводимо сформований HTML у DOM-структуру
  if (formAnswers) {
    formAnswers.innerHTML = burgerTemplate;
  }
}

// Запуск після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  renderBurgerCard(burgerTitle, burgerImgSrc);
});