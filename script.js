function addTransaction() {
  const typeSelect = document.getElementById('type');
  const descInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');

  const type = typeSelect.value;
  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert('Введите корректное описание и сумму!');
    return;
  }

  const transactionList = document.getElementById('transactions');
  const li = document.createElement('li');
  li.className = `transaction ${type}`;
  li.innerHTML = `
    <span>${description} — ${amount} ₽</span>
    <button onclick="this.parentElement.remove(); updateBalance();">Удалить</button>
  `;
  transactionList.appendChild(li);

  descInput.value = "";
  amountInput.value = "";
  descInput.focus();


  updateBalance();
}

function updateBalance() {
  const items = document.querySelectorAll('#transactions li');
  let balance = 0;
  items.forEach(li => {
    const text = li.textContent;
    const amountMatch = text.match(/(\d+(?:\.\d+)?)/);
    const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;
    if (li.classList.contains('income')) balance += amount;
    if (li.classList.contains('expense')) balance -= amount;
  });
  document.getElementById('balance').textContent = balance.toFixed(2);
}
