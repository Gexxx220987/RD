<<<<<<< HEAD
«СКАН» — система управления репутацией, созданная ведущим российским информационным агентством «Интерфакс». Сервис предназначен для менеджеров по PR, коммуникациям и специалистов по рискам и безопасности. Решает широкий спектр задач, связанных с медиааналитикой.

Система анализирует материалы СМИ и социальные медиа, оповещает о новых публикациях в режиме реального времени, автоматически формирует аналитические отчёты по любым запросам и инфоповодам, а также позволяет прогнозировать репутационные и экономические риски, связанные с партнёрами и контрагентами.

В пректе организовано следующее:
1.Открывая приложение (без авторизации), попадаем на главную страницу.
2.Используя форму авторизации, заходим в аккаунт (POST account/login).
{
"login": "",
"password": ""
}
3.После успешной авторизации в фоновом режиме запрашиваются данные об аккаунте пользователя и выводятся в шапку страницы (GET account/info).
4.Переходим на страницу поиска и задаём параметры. Если параметры поиска введены корректно, получаем сводную информацию по количеству публикаций и рискам (POST objectsearch/histograms).
5.Параллельно, используя те же параметры, выполняем поиск непосредственно самих публикаций (POST objectsearch).
6.После успешного завершения запроса POST objectsearch получаем список ID публикаций и запрашиваем содержимое первых 10 публикаций (POST documents).
7.Если найденных публикаций больше 10, нажимаем на кнопку «Показать больше» и подгружаем следующие 10 публикаций.

-С помощью React Router организована навигация по страницам, при успешной авторизации и вводе правильных данных;
-Состояние приложения и слайсы находятся в папке store , контроль организован redux toolkit
-В проекте применялись многие сторонние библиотеки - смотри файл package.json
-Приложение свёрстано под desktop и mobile версии
-Бэкенд-часть подключена к фронтенду, настроена отправка запросов.(библиотека axios)
-Отлажены детали для гладкого UX (пользовательского опыта): добавлены лоадеры, валидации форм и оповещения.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# react
Пробуем изменения!
>>>>>>> d1f49d808006af67a27c55699a1f45375b00d523
