-- ТЕСТОВЫЕ ДАННЫЕ ДЛЯ БД "ЛИЧНЫЙ ФИНАНСОВЫЙ МЕНЕДЖЕР"

-- === USERS ===
INSERT INTO Users (username, email) VALUES
('alex', 'alex@example.com'),
('maria', 'maria@example.com');

-- === ACCOUNTS ===
INSERT INTO Accounts (name, balance, user_id) VALUES
('Основной счёт', 25000, 1),
('Карта Тинькофф', 5200, 1),
('Семейный счёт', 100000, 2);

-- === CATEGORIES ===
INSERT INTO Categories (name, type, description) VALUES
('Зарплата', 'income', 'Основной доход с работы'),
('Продукты', 'expense', 'Покупка продуктов питания'),
('Развлечения', 'expense', 'Кино, музыка, кафе'),
('Инвестиции', 'income', 'Доход от инвестиций');

-- === TRANSACTIONS ===
-- user_id УБРАН, он теперь определяется через счёт
INSERT INTO Transactions (amount, description, date, account_id, category_id) VALUES
(80000, 'Зарплата за октябрь', '2025-11-01', 1, 1),
(-3000, 'Покупка продуктов в Пятёрочке', '2025-11-02', 2, 2),
(-1500, 'Кино с друзьями', '2025-11-03', 2, 3),
(12000, 'Дивиденды от акций', '2025-11-04', 3, 4),
(-2500, 'Ужин в ресторане', '2025-11-05', 3, 3);
