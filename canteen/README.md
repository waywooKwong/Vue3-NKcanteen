# canteen

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## 数据库：

### mysql中创建表：

CREATE TABLE front_menu (
    win_id VARCHAR(255) NOT NULL,
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    image VARCHAR(255) NOT NULL
);

### 修改server.js

src/axios/server.js:

行12：修改账号密码以及数据库名称。


## 运行
终端：
1.node src/axios/server.js
    出现MySQL connected...成功。
2.npm run dev