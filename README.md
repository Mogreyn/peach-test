Вот обновленный ридми с учётом предоставленной информации о проекте, включая структуру зависимостей и скриптов:

---

# Тестовое задание для Студия дизайна Peach

## Описание проекта

Этот проект представляет собой тестовое задание для Студии дизайна Peach, целью которого является продемонстрировать навыки в веб-разработке с использованием современных технологий и подходов. 

Проект включает:
- Компонентный подход
- Минимизация JS-рендеринга
- Анимации для улучшения пользовательского опыта
- Стационарная карта с динамическими городами

## Технологии

- **HTML5** — структура страницы.
- **CSS3 (SCSS)** — стилизация с использованием методологии БЭМ.
- **JavaScript (Vanilla)** — функционал без использования фреймворков.
- **Webpack** — сборка и оптимизация проекта.
- **GSAP** — анимации для плавных переходов.
- **Bootstrap** — для компонентов и сетки.
- **Normalize.css** — для кроссбраузерной стилизации.
- **Splide.js** — для слайдеров/галерей.

## Установка и запуск

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/Mogreyn/peach-test.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd peach-test
   ```

3. Установите зависимости:

   ```bash
   npm install
   ```

4. Для запуска проекта в режиме разработки используйте:

   ```bash
   npm run server-dev
   ```

5. Для сборки проекта:

   ```bash
   npm run build
   ```

6. Для развертывания на GitHub Pages:

   ```bash
   npm run deploy
   ```

7. Откройте проект в браузере, перейдя по адресу:

   ```
   https://Mogreyn.github.io/peach-test/
   ```

## Скрипты

- **dev**: Запускает проект в режиме разработки.
- **build**: Создает оптимизированную версию проекта для продакшн.
- **watch**: Следит за изменениями в исходных файлах и автоматически пересобирает проект.
- **server-dev**: Запускает локальный сервер для разработки с автозапуском в браузере.
- **server-build**: Запускает сервер с продакшн-версией проекта.
- **deploy**: Публикует проект на GitHub Pages.

## Структура проекта

- **src** — исходный код проекта
  - **components** — компоненты страницы
  - **styles** — стили в SCSS
  - **assets** — изображения и другие ресурсы
  - **scripts** — основной JavaScript
- **public** — публичные файлы (HTML-шаблон)
- **dist** — финальная сборка для продакшн

## Лицензия

Проект лицензируется на условиях [MIT License](LICENSE).

---

Если нужно что-то изменить или добавить, скажи!
