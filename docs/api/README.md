# FinanceManager API Documentation

## Mock Server URL
https://44605cef-1355-42be-a214-442382b62e91.mock.pstmn.io

---

# Endpoints

## Auth
POST /auth/login — авторизация

## Transactions
GET /transactions — получить все  
POST /transactions — создать  
PATCH /transactions/:id — обновить  
DELETE /transactions/:id — удалить  

## Categories
GET /categories — получить категории

---

# Examples

## Auth — Login (Success)

URL:  
{{base_url}}/auth/login?username=ab

Request:
email: ab  
password: 123

Response:
token: mock_token_123  
user_id: 1  
email: ab@example.com  
message: Login successful

---

## Auth — Error (Invalid Credentials)

URL:  
{{base_url}}/auth/login?username=ab1

Response:
error: Invalid username or password

---

# Transactions — Get All

## Success — With Data

URL:  
{{base_url}}/transactions?type=all

Response:
transactions:
- id: 1  
  title: Покупка продуктов  
  amount: 1250.50  
  type: expense  
  category_id: 2  
  date: 2025-11-29  

- id: 2  
  title: Зарплата  
  amount: 86000  
  type: income  
  category_id: 1  
  date: 2025-11-28  

### Empty Response
transactions: []

---

# Transactions — Create

URL:  
{{base_url}}/transactions  

Response (201):
transaction_id: 3  
message: Transaction created successfully

### Error — Validation Failed
error: validation failed  
details:  
title: Title is required

---

# Transactions — Update

URL:  
{{base_url}}/transactions/{{transaction_id}}

Response:
transaction_id: 3  
updated: true  
message: Transaction updated successfully

### Error — Not Found
error: Transaction not found

---

# Transactions — Delete

URL:  
{{base_url}}/transactions/{{transaction_id}}

Response:
transaction_id: 3  
deleted: true  
message: Transaction deleted successfully

### Error — Not Found
error: Transaction not found  
message: Unable to delete: ID does not exist

---

# Categories — Get All

URL:  
{{base_url}}/categories

Response:
- id: 1, name: Продукты  
- id: 2, name: Транспорт  
- id: 3, name: Подписки  
