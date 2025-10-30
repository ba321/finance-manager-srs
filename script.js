// CI test: auto run
// Оптимизация и обработка ошибок

function addTransaction() {
  try {
    const typeSelect = document.getElementById('type');
    const descInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');

    if (!typeSelect || !descInput || !amountInput) {
      throw new Error("Не найдены обязательные элементы формы!");
    }

    const type = typeSelect.value;
    const description = descInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (description === "" || isNaN(amount) || amount <= 0) {
      alert('Введите корректное описание и сумму!');
      return;
    }

    const transactionList = document.getElementById('transactions');
    if (!transactionList) throw new Error("Не найден список транзакций!");

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

  } catch (error) {
    console.error("Ошибка при добавлении транзакции:", error.message);
    alert("Произошла ошибка при добавлении записи. Подробности в консоли.");
  }
}

function updateBalance() {
  try {
    const items = document.querySelectorAll('#transactions li');
    let balance = 0;

    items.forEach(li => {
      const text = li.textContent;
      const amountMatch = text.match(/(\d+(?:\.\d+)?)/);
      const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;
      if (li.classList.contains('income')) balance += amount;
      if (li.classList.contains('expense')) balance -= amount;
    });

    const balanceEl = document.getElementById('balance');
    if (!balanceEl) throw new Error("Элемент баланса не найден!");
    balanceEl.textContent = balance.toFixed(2);

  } catch (error) {
    console.error("Ошибка при обновлении баланса:", error.message);
  }
}

// ===============================================
// Фильтрация и сортировка финансовых записей
// ===============================================

function filterAndSortTransactions(criteria) {
  try {
    const transactions = document.querySelectorAll('#transactions li');
    let sorted = Array.from(transactions);

    console.log("Фильтрация и сортировка по критерию:", criteria);

    if (criteria === 'amount') {
      sorted.sort((a, b) => {
        const getAmount = el => {
          const match = el.textContent.match(/(\d+(?:\.\d+)?)/);
          return match ? parseFloat(match[1]) : 0;
        };
        return getAmount(a) - getAmount(b);
      });
    }

    if (criteria === 'income') {
      sorted = sorted.filter(el => el.classList.contains('income'));
    } else if (criteria === 'expense') {
      sorted = sorted.filter(el => el.classList.contains('expense'));
    }

    const list = document.getElementById('transactions');
    if (!list) throw new Error("Список транзакций не найден!");

    list.innerHTML = "";
    sorted.forEach(el => list.appendChild(el));

  } catch (error) {
    console.error("Ошибка при фильтрации/сортировке:", error.message);
  }
}
