Vue CLI v4.3.1
? Please pick a preset: default (babel, eslint)
? Pick the package manager to use when installing dependencies: Yarn


# ▼ assets:
css, 画像等の格納。

# ▼ main.js:
最終的にcomponentsを1つのjsファイルにするもの(bundle.jsの立ち位置)

# ▼ 【build】するには：
```
[package.json]
  "scripts": {
    # ▼ 開発用
    "serve": "vue-cli-service serve",
    # ▼ 本番用
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
yarn build
 ⇒ dist dirに書き出し。

・[dist]内の解説
(index.html, 最後の方に記載。)
 - chunk-~~.js：
 node_modulesの中身。
 - app-~~.js：
 
```

<!-- == -->
# init

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
