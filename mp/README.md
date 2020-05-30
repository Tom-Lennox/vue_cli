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
# ▼ component, ローカル登録 / グローバル登録
ローカル登録：
export defaultの[components]オプションに指定。

グローバル登録：
[main.js]に登録。

# ▼ コンポーネントAを[App.vue]だけで使用する
 ⇒ ローカル登録
```
Vue.component("LikeNumber", LikeNumber)
```
# ▼ componentsの配置場所
src/components
※移動させたら参照先を適宜変更のこと。
｜ファイル少ない場合、エラー表示させつつgrepすると編集しやすい。

# ▼ コンポーネント命名
ケバブ or パスカル
 - 自動補完
：パスカルはjsで広く使われるため。

 - html上、Vueコンポーネントとわかりやすい

 - ブラウザは大小区別が付けられない。

# ▼ DOMテンプレート作成時
 ⇒ ケバブケース一択。

# ▼ CSSはscoped付与でコンポーネント内のみに適用

div[data-v-276663f0]と属性指定している。
（具体的な仕組みはconsoleで確認できる。）
```
[body]
<div data-v-276663f0="" data-v-7ba5bd90=""><p data-v-276663f0="">いいね(5)</p><button data-v-276663f0="">+1</button><pre data-v-276663f0="">{
  "number": 5
}</pre></div>

[style]
div[data-v-276663f0] {
    border: 1px solid red;
}
```
------------------------------------------------------------------

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
