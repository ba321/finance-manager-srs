FinanceManager API Documentation
Mock Server URL

https://44605cef-1355-42be-a214-442382b62e91.mock.pstmn.io

Endpoints
Authentication

POST /auth/login — авторизация пользователя

Transactions

GET /transactions — получить все транзакции

POST /transactions — создать транзакцию

PATCH /transactions/:id — обновить транзакцию

DELETE /transactions/:id — удалить транзакцию

Categories

GET /categories — получить список категорий

Examples
AUTHENTICATION
Success — Login

URL:
{{base_url}}/auth/login?username=ab

Request body:

{
  "email": "ab",
  "password": "123"
}


Response:

{
  "token": "mock_token_123",
  "user_id": 1,
  "email": "ab@example.com",
  "message": "Login successful"
}

AUTHENTICATION — ERROR

Invalid Credentials

URL:
{{base_url}}/auth/login?username=ab1

Response:

{
  "error": "Invalid username or password"
}

TRANSACTIONS — GET ALL
Success — With Data

URL:
{{base_url}}/transactions?type=all

Response:

{
  "transactions": [
    {
      "id": 1,
      "title": "Покупка продуктов",
      "amount": 1250.50,
      "type": "expense",
      "category_id": 2,
      "date": "2025-11-29"
    },
    {
      "id": 2,
      "title": "Зарплата",
      "amount": 86000,
      "type": "income",
      "category_id": 1,
      "date": "2025-11-28"
    }
  ]
}

Success — Empty

URL:
{{base_url}}/transactions?type=all

Response:

{
  "transactions": []
}

TRANSACTIONS — CREATE
Success — Created

URL:
{{base_url}}/transactions

Response (201):

{
  "transaction_id": 3,
  "message": "Transaction created successfully"
}

Error — Validation Failed

URL:
{{base_url}}/transactions

Response (400):

{
  "error": "validation failed",
  "details": {
    "title": "Title is required"
  }
}

TRANSACTIONS — UPDATE
Success

URL:
{{base_url}}/transactions/{{transaction_id}}

Response:

{
  "transaction_id": 3,
  "updated": true,
  "message": "Transaction updated successfully"
}

Error — Not Found

URL:
{{base_url}}/transactions/999

Response (404):

{
  "error": "Transaction not found"
}

TRANSACTIONS — DELETE
Success

URL:
{{base_url}}/transactions/{{transaction_id}}

Response:

{
  "transaction_id": 3,
  "deleted": true,
  "message": "Transaction deleted successfully"
}

Error — Not Found

URL:
{{base_url}}/transactions/999

Response (404):

{
  "error": "Transaction not found",
  "message": "Unable to delete: ID does not exist"
}

CATEGORIES
Success — Get Categories

URL:
{{base_url}}/categories

Response:

[
  { "id": 1, "name": "Продукты" },
  { "id": 2, "name": "Транспорт" },
  { "id": 3, "name": "Подписки" }
]
