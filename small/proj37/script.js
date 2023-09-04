const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');
const form = document.querySelector('.form');

const clearForm = () => {
  document.querySelectorAll('.form-input-wrapper').forEach((item) => {
    item.className = 'form-input-wrapper';
  });
  form.reset();
};

document.querySelector('.signup-btn').addEventListener('click', () => {
  container.classList.add('change');
  setTimeout(() => {
    headingSpan2.textContent = 'Up';
  }, 200);
  form.className = 'form sign-up';
  clearForm();
});

document.querySelector('.signin-btn').addEventListener('click', () => {
  container.classList.remove('change');
  setTimeout(() => {
    headingSpan2.textContent = 'In';
  }, 200);
  form.className = 'form sign-in';
  clearForm();
});

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const error = (inputEl, message) => {
  const inputWrapper = inputEl.parentElement;
  inputWrapper.className = 'form-input-wrapper error';
  inputWrapper.querySelector('.message').textContent = message;
};

const success = (inputEl) => {
  const inputWrapper = inputEl.parentElement;
  inputWrapper.className = 'form-input-wrapper success';
};

const checkEmail = (input) => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (pattern.test(email.value.trim())) {
    success(input);
  } else {
    error(input, 'Email is not valid');
  }
};

const passwordsMatch = (input1, input2) => {
  console.log(input1, input2);
  if (input1.value !== input2.value) {
    error(input2, 'Passwords do not match');
  }
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else if (input.value.length > min) {
    error(input, `${input.id} must be less than ${max} characters`);
  } else {
    success(input);
  }
};

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === '') {
      if (input.id === 'password2') {
        error(input, `Password confirmation is required.`);
        return;
      }
      error(input, `${input.id} is required.`);
    } else {
      success(input);
    }
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (form.classList.contains('sign-in')) {
    checkRequiredFields([email, password]);
  } else {
    checkRequiredFields([username, email, password, password2]);
    checkLength(username, 2, 15);
    checkLength(password, 5, 25);
    passwordsMatch(password, password2);
  }

  checkEmail(email);
});
