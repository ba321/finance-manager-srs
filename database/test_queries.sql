-- ПРОВЕРОЧНЫЕ ЗАПРОСЫ ДЛЯ БД "ЛИЧНЫЙ ФИНАНСОВЫЙ МЕНЕДЖЕР"

-- 1. Проверим пользователей
SELECT * FROM Users;

-- 2. Проверим счета каждого пользователя
SELECT u.username, a.name AS account_name, a.balance
FROM Accounts a
JOIN Users u ON u.user_id = a.user_id;

-- 3. Проверим категории
SELECT * FROM Categories;

-- 4. Проверим транзакции с полными связями
SELECT 
    t.transaction_id,
    u.username,
    a.name AS account,
    c.name AS category,
    t.amount,
    t.date,
    t.description
FROM Transactions t
JOIN Users u ON u.user_id = t.user_id
JOIN Accounts a ON a.account_id = t.account_id
JOIN Categories c ON c.category_id = t.category_id;

-- 5. Проверим каскадное удаление (для демонстрации)
-- (удалим пользователя и посмотрим, удалятся ли его счета и транзакции)
DELETE FROM Users WHERE user_id = 1;

-- 6. Проверим, что данные действительно удалились
SELECT * FROM Accounts;
SELECT * FROM Transactions;
