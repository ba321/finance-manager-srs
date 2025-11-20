# Диаграммы поведения системы — “Умный список задач”

Данный раздел содержит Use Case диаграмму и диаграммы последовательности, отражающие ключевые сценарии работы приложения "Умный список задач".

---

## 1. Use Case диаграмма

Показывает взаимодействие основного пользователя с системой и все ключевые варианты использования.

**Основные Use Cases:**
- Добавление новой задачи  
- Пометка задачи как выполненной  
- Редактирование задачи  
- Удаление задачи  
- Просмотр всех задач  
- Фильтрация задач  
- Поиск задач  
- Сортировка задач  
- Валидация данных  
- Автосохранение изменений  

**Диаграмма (PNG):**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/use_case/use_case_diagram.png

**PlantUML код:**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/use_case/use_case_diagram.puml

---

## 2. Диаграммы последовательности

Ниже приведены 4 подробные sequence diagrams, описывающие основные процессы внутри системы.

---

### 2.1. Добавление новой задачи

**Диаграмма (PNG):**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/add_task_sequence.png

**PlantUML:**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/add_task_sequence.puml

---

### 2.2. Отметка выполнения задачи

**Диаграмма (PNG):**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/complete_task_sequence.png

**PlantUML:**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/complete_task_sequence.puml

---

### 2.3. Фильтрация задач по категории

**Диаграмма (PNG):**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/filter_tasks_sequence.png

**PlantUML:**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/filter_tasks_sequence.puml

---

### 2.4. Ежедневный workflow пользователя

Объединённый сценарий, включающий:
- запуск приложения  
- загрузку всех задач  
- создание задачи  
- выполнение задачи  
- фильтрацию  
- завершение работы  

**Диаграмма (PNG):**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/daily_workflow_sequence.png

**PlantUML:**  
https://github.com/ba321/finance-manager-srs/blob/feature/behavior-diagrams/docs/behavior/sequence/daily_workflow_sequence.puml

---

## Используемые инструменты

### PlantUML:
- Легко хранится в Git  
- Быстрое редактирование  
- Единый стиль  
- Автоматическая проверка синтаксиса  

---
