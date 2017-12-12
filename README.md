# MatMapa Simple Sequelize API

## Instalation
At first make sure you have [nvm](https://github.com/creationix/nvm) and MySQL installed.

### 1. Install current version of node:
```
$: nvm install
```

### 2. Install dependencies:
```
$: npm install -g sequelize-cli
$: npm install
```

### 3. Fill connection details:
Copy `./config/config.sample.json`, remove `.sample` from filename and fill it with your connection details.


### 4. Setup database:
```
$: npm run setup
```

### 5. Migrate DB:
```
$: sequelize db:migrate
```

### 6. Run app:
```
$: npm run start:dev
```
