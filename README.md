# studyNetwork

Проект разработки студенческого портала для проекта Филиппова

Описание команды ([отчет РП](https://github.com/monpase007/laba.github.io/wiki/business-game)) 

## Сбор требований по зонам ответственности

### 1. АД (Мастер) Диспетчирование и контроль задач, выявление проблем - Бороздин, Ефремов

1.1 Для задач на [канбан-доске](https://github.com/monpase007/Praktika/projects/1) должны использоваться следующие статусы выполнения:

* To Do

* Plans

* In progress

* Done

1.2 Для задач на [канбан-доске](https://github.com/monpase007/Praktika/projects/1) должны использоваться следующие метки (labels):

* studyNetwork

* Показывающие роли для задач

### 2. СП (Аналитик) Сбор и управление всеми требованиями в проекте - Жиделёв, Федотов

**2.1 Бизнес-требования**

2.1.1. Должны выполняться требования [пользовательской истории](https://vk.com/away.php?utf=1&to=https%3A%2F%2Fgithub.com%2Fmonpase007%2FPraktika%2Fissues)

2.1.2. Запросить дополнительные требования у автора (Филиппов)

**2.2 Функциональные требования**

2.2.1. Программа/интерфейс должна содержать разделы "Мой профиль","Заметки","Пользователи","Мой профиль","Ответы на вопросы"

2.2.2. Программа/интерфейс. Вкладка "Мой профиль", должана содержать классический функционал: добавление постов, основные манипуляции с постами(удаление, изменение), отображение пользовательской информации

2.2.3. Программа/интерфейс. Вкладка "Заметки", должна содержать классический функционал: добавление новых заметок, основные манипуляции с заметками(удаление, изменение), отображение заголовка и основных всплывающих кнопок на заметке

2.2.4. Программа/интерфейс.  Вкладка "Пользователи", должна содержать классический функционал страницы пользователей: отображение пользователей с основной информацией(Имя, статус), нумерация страниц

2.2.5. Программа/интерфейс. Вкладка "Ответы на вопросы", должана содержать классический функционал страницы ответы на вопрос: добавление вопросов, добавление комментариев, соортировка вопросов по предметам 

### 3. ВН (Дизайнер) Удобство использования, привлекательность продукта - Кайкова, Бороздин 

3.1. Вся пользовательская документация должна выполняться в едином стиле

3.2. Интерфейс должен быть интуитивно понятен

3.3. Кликабельность кнопок и ссылок должна быть очевидной

3.4. Все программные блоки должны сопровождаться комментариями

3.5. Все программные функции должны быть самодокументируемы

### 4. БА (Тестировщик) Выявление бизнес-проблем, способы тестирования - Руденко, Кайкова

4.1. Должно быть произведено тестирование пользовательского интерфейса

### 5. НИ (Архитектор) Структура продукта, инструменты разработки и поставки - Поздеев, Жиделёв

5.1. Разработка должна быть выполнена с использованием html, css, javascript, redux, react js

5.2. Сохранение наборов исходных данных и результатов должно обеспечиваться в локальной базе данных браузера пользователя.

**5.3. Комплект поставки должен включать в себя:**

5.3.1. Программные модули:

* index.html - стартовая страница модулей проверки библиотеки
* \css\style.css - основной файл стилей
* \js\main.js - основной скрипт библиотеки 

5.3.2. Данные, включая контрольные примеры:

* \tests\test1.json - КП функции по п. 2.2.1.
* \tests\test2.json - КП функции по п. 2.2.2.
* \tests\test3.json - КП функции по п. 2.2.3.

5.3.3. Вики-страницы с документацией и инструкциями:

* \readme.md - описание требований, ссылки на документацию
* \instruction.md - инструкция, контрольные примеры

### 6. ПП (Программист) Стиль и способы разработки, используемые фреймворки - Филиппов, Ефремов

6.1. При разработке исходных кодов можно не соблюдать [правила оформления](https://learn.javascript.ru/coding-style)

6.2. Для определения объектов должны использоваться стрелочные операторы

6.3. Использование фреймворков react-redux

6.4. Ишью должны быть оформлены по [шаблону](https://github.com/monpase007/Praktika/wiki/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD-%D0%B8%D1%88%D1%8C%D1%8E)

### 7. КО (Тех.писатель) Документирование проекта и продукта - Федотов, Поздеев

7.1. Документация должна быть оформленна в виде страниц .md

7.2. Документация должна содержать инструкцию по применению

7.3. Документация должна содержать описание контрольных примеров

7.4. Документация к библиотеке должна быть доступна с landing page
