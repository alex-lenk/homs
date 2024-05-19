# gulp-v5-starter
http://www.alyans-audit.ru

## :fire: Особенности
* Gulp v5
* Webpack для обработки js и ts
* Единый ```config.mjs```
* Небольшой вес node_modules (Только необходимое)
* TWIG шаблонизатор для html разметки
* Импорт ```.js .mjs```

## :hammer_and_wrench: Установка
* Установите [NodeJS](https://nodejs.org/en/)
* Установите глобально:
    * [Gulp](https://gulpjs.com/): ```npm i -g gulp```
* Скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/alex-lenk/alyans-audit```
* Скачайте необходимые зависимости: ```npm i```
* Чтобы начать работу, введите команду: ```npm run start``` (режим разработки)
* Чтобы собрать проект, введите команду ```npm run build``` (режим сборки)

Если вы всё сделали правильно, у вас должен открыться браузер с локальным сервером.
Режим сборки предполагает оптимизацию проекта: сжатие изображений, минифицирование CSS и JS-файлов для загрузки на сервер.

## :open_file_folder: Файловая структура

```
gulp-v5-starter
├── dist
├── gulp
├── src
│   ├── assets
│   │   ├── favicon
│   │   ├── fonts
│   │   └── img
│   ├── html
│   ├── js
│   └── scss
├── .editorconfig
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── gulpfile.mjs
├── package.json
└── README.md
```

## :keyboard: Команды
* ```npm run start``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект с оптимизацией без запуска сервера
* ```npm run zipDist``` - заархивировать dist папку (Для отправки интегратору)
* ```npm run ttfToWoff``` - конвертация шрифтов из ttf2woff
* ```npm run fontsInStyle``` - подключение шрифтов в fonts.scss (Пример название шрифта: ```Montserrat-AlternatesBlack```)

## :point_right: Нюансы
* Данную сборку использую для личных проектов, могут присутствовать наработки под быстрый старт проекта или тестовые модификации

## :yellow_heart: Нравится проект?
Сообщайте мне о [багах](https://github.com/alex-lenk/alyans-audit/issues)
