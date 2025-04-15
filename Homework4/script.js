const answer = Math.floor(Math.random() * 100) + 1;
let tries = 0;
const maxTries = 10;

const input = document.getElementById('user-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');
const chances = document.getElementById('chances');

btn.addEventListener('click', function () {
  const guess = parseInt(input.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.textContent = '1부터 100 사이 숫자를 입력하세요!';
    return;
  }

  tries++;
  chances.textContent = maxTries - tries;

  if (guess === answer) {
    result.textContent = `정답입니다! ${answer}`;
    btn.disabled = true;
    input.disabled = true;
  } else if (tries === maxTries) {
    result.textContent = "실패!";
    btn.disabled = true;
    input.disabled = true;
  } else if (guess < answer) {
    result.textContent = `${guess} ▲ UP!`;
  } else {
    result.textContent = `${guess} ▼ DOWN!`;
  }

  input.value = '';
  input.focus();
});
