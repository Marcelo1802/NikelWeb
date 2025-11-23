if (typeof validateEmail === 'undefined' || typeof showToast === 'undefined' || typeof getAccount === 'undefined' || typeof saveAccount === 'undefined' || typeof saveSession === 'undefined') {
  console.warn('utils.js não foi carregado. Certifique-se de incluí-lo antes deste arquivo.');
}

const myModal = new bootstrap.Modal("#register-modal");
let loged = sessionStorage.getItem("loged");
const session = localStorage.getItem("session");

checkLoged();

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const session = document.getElementById("session-check").checked;

  if (!email || email.trim() === '') {
    showToast('Por favor, preencha o e-mail.', 'error');
    return;
  }

  if (!password || password.trim() === '') {
    showToast('Por favor, preencha a senha.', 'error');
    return;
  }

  const account = getAccount(email.trim());

  if (!account) {
    showToast('Usuário ou senha inválido.', 'error');
    return;
  }

  if (account.password !== password) {
    showToast('Usuário ou senha inválido.', 'error');
    return;
  }

  saveSession(email.trim(), session);
  sessionStorage.setItem("name", account.name);

  showToast('Login realizado com sucesso!', 'success');
  
  setTimeout(() => {
    window.location.href = "home.html";
  }, 500);
});


document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();


  const name = document.getElementById("create-name-input").value.trim();
  const email = document.getElementById("create-e-mail-input").value.trim();
  const password = document.getElementById("password-create-input").value;

  if (!name || name.length < 2) {
    showToast('Por favor, preencha um nome válido (mínimo 2 caracteres).', 'error');
    return;
  }

  if (!email || !validateEmail(email)) {
    showToast('Por favor, cadastre um e-mail válido.', 'error');
    return;
  }

  if (getAccount(email)) {
    showToast('Este e-mail já está cadastrado. Tente fazer login.', 'warning');
    return;
  }

  if (!password || password.length < 4) {
    showToast('A senha deve ter no mínimo 4 caracteres.', 'error');
    return;
  }

  saveAccount({
    name: name,
    login: email,
    password: password,
    transactions: [],
  });

  myModal.hide();

  showToast('Conta criada com sucesso! Faça login para continuar.', 'success');
});

function checkLoged() {
  if(session) {
    sessionStorage.setItem("loged", session);
    loged = session;
  }
  if (loged) {
    saveSession(loged, session);
    window.location.href = "home.html";
  }
}

if (typeof saveAccount === 'undefined') {
  function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
  }
}

if (typeof saveSession === 'undefined') {
  function saveSession(data, saveSession) {
    if (saveSession) {
      localStorage.setItem("session", data);
    }
    sessionStorage.setItem("loged", data);
  }
}

if (typeof getAccount === 'undefined') {
  function getAccount(key) {
    const account = localStorage.getItem(key);
    if (account) {
      try {
        return JSON.parse(account);
      } catch (e) {
        console.error('Erro ao parsear conta:', e);
        return null;
      }
    }
    return null;
  }
}
