# Vue-star-wars-project

Выполненное тестовое задание: https://docs.google.com/document/d/1gEbnYBPxpyUvsjGAUpwqcZkCK21m1mTDG-2FeiGa5f0/edit#
Демо (без задержки лоадеров в 2 секунды): https://nikitosgolubev.github.io/star-wars/#/
(с задержкой - дев версия: npm install, npm run serve).

**Количество рабочих часов:** ~25
**Трудности:** Особых не возникло, но из-за лимита времени не успел сделать рефакторинг компонентов, получше разбить js код на удобночитаемые модули. Разделить HomePage view.
**Результат:** Весь функционал полностью реализован + добавлены дополнения. Нехватает только хорошего рефакторинга компонентов и по-dry-ить store.

**Улучшения ux**
- Разработал компонент для кэширования объектов AJAX запросов приложения (memento паттерн +-). Теперь приложение не совершает дублицирования запросов, тем самым ускоряя время взаимодействия с контентом, прогруженным ранее (т.е повторные поисковые запросы, просмотр основной ленты постов). Так же подобный подход открывает опцию кэширования в local-storage, что может дать существенное уменьшение ajax запросов.
- Добавил вывод network ошибок через toast-ы, так что если сервер прислал ошибку, то пользователь будет уведомлён, что с прогружаемым-контентом что-то не так.
- Добавил scroll-to-top фичу, позволяющую пользователю быстро вернуться в начало документа.
