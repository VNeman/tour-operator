# tour-operator

Технологии: NodeJS (ExpressJs), MongoDb

Для запуска:
 1. Переходим в каталог проекта
 2. Инициализируем проект: npm init
 3. Запуск: nodemon index
 4. Проверяем работу: localhost: 8080/api/payments
 
Поля базы данных:
 1.  appointment -  назначение (кому поступает платёж)
 2.  user - от кого поступает платёжь
 3.  date - дата
 4.  amount - сумма платежа
 
 Конечные точки:
 GET/payments
 POST/payments
 GET/payments/id
 PUT/payments/id
 DELETE/payments/id
 
 Для тестирования используется приложение Postman
