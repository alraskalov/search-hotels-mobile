# Проект Simple Hotel Check Mobile - мобильная версия приложение для поиска отелей

Ссылка на Web-версию проекта: **[Simple Hotel Check](https://search-hotels.vercel.app/)**

## 🧰 Экосистема

- `React Native`
- `Redux`
- `Redux-Saga`
- `React-Navigation`
- `React-Hook-Form`

## 📃 Описание интерфейса

- Страница авторизации:
  - Почта и пароль могут быть любыми, но должны проходить стандартную валидацию.

- Страница отображения отелей:
  - В инпуты формы можно ввести название города, дату заселения и количество дней.
  - По результатам этих данных отображаются отели и информация о них, которые можно добавить в избранное.
  - Избранные отели, в соответствующем блоке, можно отсортировать по стоимости и количеству звезд.
  - На странице отображается карусель захардкоженных изображений. Изображение в карусели можно прокручивать.

## 📺 Демонстрация

<div align="center">
<details>
    <summary>Click me</summary>
    <img src="/assets/gifs/demonstration.gif" width="30%"</img>
</details>
</div>

## 📺 Экраны

<div align="center">
<details>
    <summary>Click me</summary>
    <img src="/assets/screenshots/1.jpg" width="30%"</img>
    <img src="/assets/screenshots/2.jpg" width="30%"</img>
    <img src="/assets/screenshots/3.jpg" width="30%"</img>
    <img src="/assets/screenshots/4.jpg" width="30%"</img>
    <img src="/assets/screenshots/5.jpg" width="30%"</img>
</details>
</div>

## 🧥 Описание логики работы экранов

- [x] Если пароль и логин не прошли валидацию, отображать предупреждение о не правильности введенных данных. Правила валидации:
  - [x] Логин - любая почта
  - [x] Пароль - без кириллицы, минимум 8 символов
- [x] По клику на кнопку вход и наличии валидных данных происходит перенаправление на страницу отелей
- [x] На странице отелей по дефолту стоит город - Москва, день заезда - текущий (сегодняшний), количество дней - 1
- [x] Поиск отелей осуществляется при нажатии на кнопку найти, но при первой
      загрузке страницы с дефолтными данными, соответствующие отели должны быть
- [x] На странице отелей, добавить в избранное можно по нажатию на сердечко,
      удалить так же. В блоке избранных отелей также можно выполнить удаление из
      избранных
- [x] При выборе новых данных для поиска, список избранных не должен
      сбрасываться. При перезагрузке страницы - может
- [x] При перезагрузке страницы с отелями авторизация не должна сбрасываться
- [x] По клику на кнопку “Выход” авторизация сбрасывается и происходит переход на страницу авторизации

## 👨🏻‍💻 Развертывание проекта:

- Клонировать репозиторий `git clone https://github.com/alraskalov/search-hotels.git`
- Установить зависимости `npm i`
- `npm run start` - запуск Expo
