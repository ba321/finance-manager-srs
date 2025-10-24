(function () {
  const dateInput = document.getElementById('dateInput');
  const typeInput = document.getElementById('typeInput');
  const amountInput = document.getElementById('amountInput');
  const categoryInput = document.getElementById('categoryInput');
  const noteInput = document.getElementById('noteInput');
  const addBtn = document.getElementById('addBtn');
  const entryList = document.getElementById('entryList');

  const incomeEl = document.getElementById('income');
  const expenseEl = document.getElementById('expense');
  const balanceEl = document.getElementById('balance');

  
  const today = new Date().toISOString().slice(0, 10);
  dateInput.value = today;

  function updateTotals() {
    let income = 0;
    let expense = 0;
    for (const li of entryList.children) {
      const type = li.dataset.type;
      const amount = parseFloat(li.dataset.amount || '0');
      if (type === 'income') income += amount;
      else expense += amount;
    }
    incomeEl.textContent = income.toFixed(2);
    expenseEl.textContent = expense.toFixed(2);
    balanceEl.textContent = (income - expense).toFixed(2);
  }

  function createEntryItem({ date, type, amount, category, note }) {
    const li = document.createElement('li');
    li.dataset.type = type;
    li.dataset.amount = amount;

    const dateSpan = document.createElement('span');
    dateSpan.textContent = date;

    const typeSpan = document.createElement('span');
    typeSpan.textContent = type === 'income' ? 'Доход' : 'Расход';

    const categorySpan = document.createElement('span');
    categorySpan.textContent = category || '—';

    const noteSpan = document.createElement('span');
    noteSpan.textContent = note || '—';

    const amountSpan = document.createElement('span');
    amountSpan.className = 'amount ' + type;
    amountSpan.textContent = (type === 'expense' ? '-' : '+') + amount.toFixed(2) + ' ₽';

    const actions = document.createElement('div');
    actions.className = 'actions';
    const delBtn = document.createElement('button');
    delBtn.className = 'delete';
    delBtn.type = 'button';
    delBtn.textContent = 'Удалить';
    delBtn.addEventListener('click', () => {
      if (confirm('Удалить запись?')) {
        li.remove();
        updateTotals();
      }
    });
    actions.appendChild(delBtn);

    li.appendChild(dateSpan);
    li.appendChild(typeSpan);
    li.appendChild(categorySpan);
    li.appendChild(noteSpan);
    li.appendChild(amountSpan);
    li.appendChild(actions);

    return li;
  }

  function addEntry() {
    const date = dateInput.value;
    const type = typeInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value.trim();
    const note = noteInput.value.trim();

    if (!date) return alert('Укажите дату.');
    if (!amount || amount <= 0) return alert('Введите сумму > 0.');

    const li = createEntryItem({ date, type, amount, category, note });
    entryList.prepend(li);


    amountInput.value = '';
    categoryInput.value = '';
    noteInput.value = '';
    amountInput.focus();

    updateTotals();
  }

  addBtn.addEventListener('click', addEntry);
  amountInput.addEventListener('keydown', e => { if (e.key === 'Enter') addEntry(); });
})();
