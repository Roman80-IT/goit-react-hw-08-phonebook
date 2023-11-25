```jsx
npm uninstall redux-persist

npm install axios

npm install react-loader-spinner
```

```
Ctrl + Space - вставити автоматично посилання на файл (шлях)

rafce - створення сторінки

```

```jsx
npm install react-router-dom

npm install redux-persist

npm install react-hook-form notiflix
```

# Книга контактів

Візьми своє рішення завдання з попередньої домашньої роботи і додай зберігання
контактів телефонної книги в `localStorage`. Використовуй методи життєвого
циклу.

- Під час додавання та видалення контакту контакти зберігаються у локальне
  сховище.
- Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального
  сховища і записуються у стан.

## Підготовка

`package.json`

```jsx
"homepage": "https://Roman80-IT.github.io/goit-react-hw-06-phonebook-redux/",
```

### Усунення помилок при інсталяції

---

помилки пов'язані з застарілими версіями пакетів, які використовуються в
проекті. Щоб їх виправити, потрібно оновити ці пакети до актуальних версій.
Можна зробити це за допомогою `npm` (`Node Package Manager`) команди
`npm install` або `npm update`.

```
npm install @babel/plugin-transform-class-properties --save-dev

npm install @babel/plugin-transform-private-property-in-object --save-dev

npm install @babel/plugin-transform-object-rest-spread --save-dev

npm install svgo@2 --save-dev

npm install source-map-resolve@latest

npm install svgo@latest
```

### Інсталяція

```
npm install react-icons
```

### Підключення нормалайзеру (найоптимальніший варіант)

https://cdnjs.com/libraries/modern-normalize

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/2.0.0/modern-normalize.min.css"
  integrity="sha512-4xo8blKMVCiXpTaLzQSLSw3KFOVPWhm/TRtuPVc4WG6kUgjH6J03IBuG7JZPkcWMxJ5huwaBpOpnwYElP/m6wg=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

вставимо код в **index.html**

### Встановимо Styled Components:

```jsx
npm install styled-components
```

```jsx
npm install redux react-redux
npm install @redux-devtools/extension
```

# Завдання

Книга контактів Додай у програму «Книга контактів» можливість реєстрації, логіна
та оновлення користувача, а також роботу з приватною колекцією контактів.

Бекенд Для цього завдання є готовий бекенд. Ознайомся з документацією. Він
підтримує всі необхідні операції з колекцією контактів, а також реєстрацію,
логін та оновлення користувача за допомогою JWT. Використовуй його замість твого
бекенда створеного через сервіс `mockapi.io`.

Маршрутизація Додай маршрутизацію з бібліотекою React Router. У програмі має
бути кілька сторінок:

- `/register` - публічний маршрут реєстрації нового користувача з формою
- `/login` - публічний маршрут логіна існуючого користувача з формою
- `/contacts` - приватний маршрут для роботи зі списком контактів користувача

Додай компонент навігації `Navigation` з посиланнями для переходу по маршрутах.

Меню користувача Створи компонент `UserMenu`, що відображає пошту користувача і
кнопку виходу з облікового запису. Ось як може виглядати його розмітка.

```html
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```

**Стилізація** Це фінальна версія програми, тому попрацюй над оформленням
інтерфейсу. Можна використовувати бібліотеку стилізації або компонентів,
наприклад Chakra UI або Material UI.

# Настанови ментора

Авторизація. Штука необхідна і всі ми з нею стикалися в своєму житті.

Основні поінти:

- [Приклад в _codesandbox_](https://codesandbox.io/s/goit-textbook-lesson-15-16-auth-final-lvri7x?from-embed=&file=/src/components/App.js)
  з конспекта можна використовувати для розв’язання даного ДЗ.
- Після успішної логінізації користувача повинно перенаправляти на сторінку
  контактів.
- Після успішної логінізації повинен відправлятися один запит за контактами.
- Коли користувач залогінений і обновляє сторінку повинен відправитися запит за
  поточним користувачем, а потім за контактами.
- Запита повинно бути лише два і користувач повинен залишитися на сторінці з
  контактами після успішної відповіді.
- Стилізація довільна, але не забуваємо, що це вже фініш нашої телефонної книги
  і цей додаток сміливо можна включати в резюме

  # Зауваження ментора

  - При оновленні сторінки контактів летить 3 запита на бекенд за контактами,
    достатньо лише одного 😉

- Раджу додати сторінку Not found
