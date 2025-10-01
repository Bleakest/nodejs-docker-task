# Node.js Docker Application

Node.js приложение, контейнеризированное с помощью Docker и развернутое на удаленном сервере.

## 🚀 О проекте

Это учебный проект, демонстрирующий полный цикл разработки и деплоя современного веб-приложения:

- **Backend**: Node.js сервер с Express.js
- **Frontend**: Статический HTML с JavaScript
- **Infrastructure**: Docker контейнеризация, Docker Compose оркестрация
- **Deployment**: Удаленный сервер с автоматическим развертыванием

## 🛠 Технологический стек

### Backend
- **Node.js** - среда выполнения JavaScript
- **Express.js** - веб-фреймворк для Node.js
- **HTTP модуль** - работа с низкоуровневыми HTTP запросами

### Frontend
- **HTML5** - семантическая разметка
- **Vanilla JavaScript** - клиентская логика без фреймворков
- **Webpack** - сборка статических ресурсов

### DevOps & Infrastructure
- **Docker** - контейнеризация приложения
- **Docker Compose** - оркестрация контейнеров
- **Docker Hub** - хранение и распространение образов

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Клонируй репозиторий
git clone https://github.com/Bleakest/nodejs-docker-task.git
cd my-node-app

# Установи зависимости
npm install

# Собери статические файлы
npm run build

# Запусти сервер
npm start
```

📦 Продакшен деплой

```bash
ssh username@server-ip

# Деплой приложения
docker-compose up -d

# Проверка статуса
docker-compose ps
curl http://localhost:3000

```