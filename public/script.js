function login() {
  const name = document.getElementById("login-name").value;
  const pass = document.getElementById("login-pass").value;
  const storedName = localStorage.getItem("user");
  const storedPass = localStorage.getItem("pass");
  const msg = document.getElementById("auth-msg");

  if (name === storedName && pass === storedPass) {
    msg.textContent = "Вход выполнен!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Неверное имя или пароль.";
    msg.style.color = "red";
  }
}

function register() {
  const name = document.getElementById("register-name").value;
  const pass = document.getElementById("register-pass").value;
  const msg = document.getElementById("auth-msg");

  if (name && pass) {
    localStorage.setItem("user", name);
    localStorage.setItem("pass", pass);
    msg.textContent = "Регистрация успешна!";
    msg.style.color = "green";
  } else {
    msg.textContent = "Введите имя и пароль!";
    msg.style.color = "red";
  }
}

function filterJobs() {
  const search = document.getElementById("search").value.toLowerCase();
  const jobs = document.querySelectorAll(".job-card");

  jobs.forEach(job => {
    const text = job.textContent.toLowerCase();
    job.style.display = text.includes(search) ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("job-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("form-msg").textContent = "Вакансия добавлена (тестовый режим).";
      form.reset();
    });
  }
});
