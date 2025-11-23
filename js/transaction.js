if (typeof validateValue === 'undefined' || typeof showToast === 'undefined') {
  console.warn('utils.js não foi carregado. Certifique-se de incluí-lo antes deste arquivo.');
}

const myModal = new bootstrap.Modal("#transaction-modal");
let loged = sessionStorage.getItem("loged");
const session = localStorage.getItem("session");
let data = {
  transactions: [],
};

document.getElementById("button-logout").addEventListener("click", logout);

document.addEventListener("DOMContentLoaded", function () {
  const name = sessionStorage.getItem("name");
  if (name) {
    document.getElementById("user-name").innerText = `Olá ${name},`;
  }
});

document
  .getElementById("transaction-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const description = document.getElementById("description-input").value;
    const value = parseFloat(document.getElementById("value-input").value);
    const date = document.getElementById("date-input").value;
    const type = document.querySelector(
      'input[name="type-input"]:checked'
    ).value;

    if (!description || description.trim() === '') {
      showToast('Por favor, preencha a descrição.', 'error');
      return;
    }

    if (!validateValue(value)) {
      showToast('Por favor, insira um valor válido maior que zero.', 'error');
      return;
    }

    if (!date) {
      showToast('Por favor, selecione uma data.', 'error');
      return;
    }

    data.transactions.unshift({
      description: description.trim(),
      value: parseFloat(value),
      date: date,
      type: type,
    });

    saveData();
    e.target.reset();
    myModal.hide();

    getTransactions();

    showToast('Transação cadastrada com sucesso!', 'success');
  });

checkLoged();

function checkLoged() {
  if (session) {
    sessionStorage.setItem("loged", session);
    loged = session;
  }
  if (!loged) {
    window.location.href = "index.html";
    return;
  }
  const dataUser = localStorage.getItem(loged);
  if (dataUser) {
    try {
      data = JSON.parse(dataUser);
      if (!data.transactions) {
        data.transactions = [];
      }
    } catch (e) {
      console.error('Erro ao parsear dados do usuário:', e);
      data = { transactions: [] };
    }
  } else {
    data = { transactions: [] };
  }

  getTransactions();
}

function logout() {
  sessionStorage.removeItem("loged");
  localStorage.removeItem("session");
  window.location.href = "index.html";
}

function getTransactions() {
  const transactions = data.transactions;
  let transactionsHtml = ``;

  if (transactions.length) {
    transactions.forEach((item, index) => {
      let type = "Entrada";
      let typeClass = "text-success";
      if (item.type === "2") {
        type = "Saída";
        typeClass = "text-danger";
      }

      transactionsHtml += `
          <tr>
            <td>${formatDate(item.date)}</td>
            <td>R$ ${item.value.toFixed(2).replace('.', ',')}</td>
            <td class="${typeClass}">${type}</td>
            <td>${escapeHtml(item.description)}</td>
            <td><button class="btn btn-sm btn-outline-danger delete-btn" data-index="${index}" title="Excluir transação"><i class="bi bi-trash"></i></button></td>
          </tr>
        `;
    });
  } else {
    transactionsHtml = `
      <tr>
        <td colspan="5" class="text-center text-muted py-4">
          Nenhuma transação cadastrada ainda.
        </td>
      </tr>
    `;
  }

  document.getElementById("transaction-list").innerHTML = transactionsHtml;

  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));  

      if (isNaN(index) || index < 0) {
        showToast('Erro ao identificar transação.', 'error');
        return;
      }
      
      if (confirm("Você tem certeza que deseja excluir esta transação?")) {
        deleteTransaction(index); 
      }
    });
  });
}

function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('pt-BR');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}


function deleteTransaction(index) {
  if (index < 0 || index >= data.transactions.length) {
    showToast('Erro ao excluir transação. Índice inválido.', 'error');
    return;
  }
  
  data.transactions.splice(index, 1);  
  
  saveData();  
  getTransactions();

  showToast('Transação excluída com sucesso!', 'success');
}

function saveData() {
  if (!loged) {
    console.error('Usuário não está logado');
    return;
  }
  localStorage.setItem(loged, JSON.stringify(data));
}
