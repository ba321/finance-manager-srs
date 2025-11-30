# FinanceManager API Documentation

## Mock Server URL
`https://e7b4de02-bb5a-4efb-b434-5d79cbed4977.mock.pstmn.io`

---

## Endpoints

### Authentication
- `POST /auth/login` — авторизация пользователя

### Transactions
- `GET /transactions` — получить все транзакции
- `POST /transactions` — создать транзакцию
- `PATCH /transactions/:id` — обновить транзакцию
- `DELETE /transactions/:id` — удалить транзакцию

### Categories
- `GET /categories` — получить категории

---

# Examples

## Authentication — Login

### Success — Login  
**URL:** `{{base_url}}/auth/login?username=ab`

### Error  
**URL:** `{{base_url}}/auth/login?username=ab`

**Response:**
```json
{
    "token": "mocked-auth-token",
    "user_id": 1,
    "email": "ab@example.com",
    "message": "Login successful"
}
