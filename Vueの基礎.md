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

# ▼ props
親 ⇒ 子：props

（子）
受け取り側（子）に　props: []　設定
（propsは配列 or obj）
配列 ⇒ 変数名
ex)
props: ["num"]
}

obj ⇒ key, value ⇒ 変数名, 型
ex)
props: {
  num: num
}

（親）
```
<LikeNumber :number="6"></LikeNumber>
```
※propsで渡すだけでは親の変数と同期しない。

[imo]
props ⇒ objで返すもの。
通常はrequired等設定するから。

# ▼ props - defaultで object, 配列 を返す場合は関数
込み入ったものを返すときは関数。
```
default: function() {
  return {
    number: 5
  }
}
```

# ▼ DOM template内はケバブ
htmlの属性はケバブが慣習だからキャメルより良いかも。
```
<LikeNumber :total-number="6"></LikeNumber>
```

# ▼ $emit
親子component、送り口、受け口を作るイメージ
子 ⇒ 親：$emit
*$emitは親コンポーネントにしてある式（custom event）を実行*

詳細：
（子）my-clickという名前で実行 ⇒ 親のthis.totalNumberに代入する
（親）totalNumberに$event記述丸ごと受け取る

親
```
<LikeNumber :total-number="totalNumber" test-props="" @my-click="totalNumber = $event"></LikeNumber>
```
子
```
  methods: {
    increment() {
      this.$emit('my-click', this.totalNumber + 1)
    }
  }
```



## ついでに：
下記の場合、親の変数に影響が無い。
（子が受け取った変数を操作しているに過ぎない）
ex)
親
```
<LikeNumber :total-number="totalNumber" test-props=""></LikeNumber>
```
子
```
  methods: {
    increment() {
        this.totalNumber += 1
    }
  }
```

# ▼ propsで配列、objectを渡す場合
 ⇒ 参照渡し

# ▼ $emitのカスタムイベント名
 ⇒ ケバブケース
親コンポーネント内で記載する場合はDOM内に記載 ＝ ケバブケース。
---
s8