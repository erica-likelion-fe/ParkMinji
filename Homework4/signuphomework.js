const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const role = document.querySelector('#role');

form.addEventListener('submit', function (e) {
  let valid = true;

  if (username.value.trim() === '') {
    alert('아이디를 입력해주세요.');
    valid = false;
  } else if (password.value.trim() === '') {
    alert('비밀번호를 입력해주세요.');
    valid = false;
  } else if (email.value.trim() === '') {
    alert('이메일을 입력해주세요.');
    valid = false;
  } else if (!role.value) {
    alert('역할을 선택해주세요.');
    valid = false;
  } else if (password.value.length < 8) {
    alert('비밀번호는 8자 이상이어야 합니다.');
    valid = false;
  } else if (!/[a-zA-Z]/.test(password.value) || !/\d/.test(password.value)) {
    alert('비밀번호는 영문자와 숫자를 모두 포함해야 합니다.');
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); 
  }
});
