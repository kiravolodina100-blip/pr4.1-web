const burgerTitle = 'Стандартний бургер';
const burgerImgSrc = './image/burger.png';
const formAnswers = document.getElementById('formAnswers');
const btnOpenQuiz = document.getElementById('btnOpenQuiz');
const modalQuiz = document.getElementById('modalQuiz');
const btnClose = document.querySelector('.modal .close');
function renderBurgerCard(title, imgSrc) {
  const burgerTemplate = `
    <div class="answers-item d-flex flex-column align-items-center mx-auto text-center py-3">
      <h3 class="logo-text mb-3">${title}</h3>
      <div class="border rounded p-2 bg-white shadow-sm mb-2">
        <img class="answerImg img-fluid" src="${imgSrc}" alt="${title}" style="max-width: 180px;">
      </div>
      <span class="text-muted">Шлях: <code>${imgSrc}</code></span>
    </div>
  `;

  if (formAnswers) {
    formAnswers.innerHTML = burgerTemplate;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  renderBurgerCard(burgerTitle, burgerImgSrc);
  if (btnOpenQuiz && modalQuiz) {
    btnOpenQuiz.addEventListener('click', () => {
      modalQuiz.style.display = 'block';
      modalQuiz.classList.add('show');
    });
  }
  if (btnClose && modalQuiz) {
    btnClose.addEventListener('click', () => {
      modalQuiz.style.display = 'none';
      modalQuiz.classList.remove('show');
    });
  }
});
