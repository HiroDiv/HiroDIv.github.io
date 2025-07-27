const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.kobe1');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', () => {
  question.innerHTML = ' :)';
});

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 10;

  const maxX = wrapper.clientWidth - btnWidth - padding;
  const maxY = wrapper.clientHeight - btnHeight - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  noBtn.classList.remove('shake');
  void noBtn.offsetWidth;
  noBtn.classList.add('shake');
}
