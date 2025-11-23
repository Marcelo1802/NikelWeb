function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]@[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
  
  if (email.length < 5 || email.length > 254) {
    return false;
  }
  
  if (email.startsWith('.') || email.startsWith('@') || email.endsWith('.') || email.endsWith('@')) {
    return false;
  }
  
  if (email.includes('..') || email.includes('@@')) {
    return false;
  }
  
  return emailRegex.test(email);
}

function validateValue(value) {
  return !isNaN(value) && value > 0 && isFinite(value);
}

function formatCurrency(value) {
  return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
}

function showToast(message, type = 'success') {
  const existingToast = document.getElementById('toast-container');
  if (existingToast) {
    existingToast.remove();
  }

  const toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  toastContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 9999;
    min-width: 300px;
  `;

  const colors = {
    success: { bg: '#28a745', icon: '✓' },
    error: { bg: '#dc3545', icon: '✕' },
    warning: { bg: '#ffc107', icon: '⚠' },
    info: { bg: '#17a2b8', icon: 'ℹ' }
  };

  const color = colors[type] || colors.success;

  toastContainer.innerHTML = `
    <div class="toast show" role="alert" style="
      background-color: ${color.bg};
      color: white;
      padding: 15px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 10px;
      animation: slideIn 0.3s ease-out;
    ">
      <span style="font-size: 20px;">${color.icon}</span>
      <span style="flex: 1;">${message}</span>
      <button type="button" class="btn-close btn-close-white" onclick="this.closest('#toast-container').remove()" style="margin-left: 10px;"></button>
    </div>
  `;

  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toastContainer);

  setTimeout(() => {
    if (toastContainer.parentNode) {
      toastContainer.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => toastContainer.remove(), 300);
    }
  }, 4000);
}

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

function saveAccount(accountData) {
  localStorage.setItem(accountData.login, JSON.stringify(accountData));
}

function saveSession(email, persist) {
  if (persist) {
    localStorage.setItem("session", email);
  }
  sessionStorage.setItem("loged", email);
}

function checkSession(redirectIfNotLogged = true) {
  const session = localStorage.getItem("session");
  let loged = sessionStorage.getItem("loged");

  if (session && !loged) {
    sessionStorage.setItem("loged", session);
    loged = session;
  }

  if (!loged && redirectIfNotLogged) {
    window.location.href = "index.html";
    return null;
  }

  return loged;
}

