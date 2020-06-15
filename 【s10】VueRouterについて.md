mdファイルから復元できるか試す。せっかくだから。

作成目安
ファイル名、手順を*できるだけ少なく*かく。
 - どこの部分か、titile情報だけ用意しておく。
 - 復元 ⇒ 復習するだけで良いから少なくて良い。

復元時：
不備 ⇒ メモできるように整える。


# ▼ 1
npm install vue-ruter

router.js作る

[main.js]
下記2追加
import router from "./router";
router,

views(dir)作成

[router.js]
viewsに作成したファイルのimport

viewsに追加したvueファイルをroutesに追記
（obj

[App.vue]
```
<template>
  <div id="app">
    <router-view />
  </div>
</template>
```

## 確認
http://localhost:8081/#/users
http://localhost:8081/#/home

# ▼ 2　URLから#を無くしたい
 ⇒ historyモード　を使用する。
2.
url: #
=ID指定
（普段はscrollに使用。）

3.
hash -> historyモード
urlから#を除却

何のpathが来ても[index.html]を返す（devのみ。distは設定が必要。）
ex)
http://localhost:8081/users
 ⇒ [index.html]を返す
http://localhost:8081/hoge
 ⇒ [index.html]を返す

【参考】
https://router.vuejs.org/ja/guide/essentials/history-mode.html#%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%81%AE%E8%A8%AD%E5%AE%9A%E4%BE%8B

4.URLをボタンで切り替えたい
- aタグ
x SPAでなくなる
- router-link
toで指定
｜tag：
aタグリンクは使う場面無いから

```
    <nav>
      <p># ▼ a</p>
      <a href="/">home</a>
      <a href="/users">users</a>
      <p># ▼ router-link</p>
      <router-link to="/">home</router-link>
      <router-link to="/users">users</router-link>
      <p># ▼ tag指定</p>
      <router-link to="/" tag="div">home</router-link>
      <router-link to="/users" tag="div">users</router-link>
    </nav>
```

# ▼ router-link　activeにしたい
- active-class属性を使用する。
- exact
｜o 特定のurlだけ指定
｜x 樹形状にstyleを指定

ex)
exact
x　http://localhost:8081/
o　http://localhost:8081/users
```
<router-link to="/" active-class="link--active" exact>home</router-link>
<router-link to="/users" active-class="link--active" exact>users<router-link>

[css]
.link--active {
  font-size: 20px;
}
```

# ▼ router-link　タグを使用しないlinkの切り替え
method呼び出すだけ。
path指定は無くてもok
```
<button @click="toUsers">users</button>

[script]
export default {
  methods: {
    toUsers() {
      // 1
      this.$router.push('users')
      // 2
      this.$router.push({ path: 'users' })
    }
  }
}
```
# ▼ urlを動的に
urlに変数を追加
Usrs.vueでidを表示する。

urlを引数に渡すイメージ
```
[router.js]
{ path: '/users/:id', component: Users }

[C:\koko\hs\dir_sakujyo\s13\mp\src\views\Users.vue]
http://localhost:8081/users/ 以降：{{ $route.params.id }}
```
# ▼ router-link 遷移時にライフサイクルフックを呼びたい
 ⇒ ウォッチャを使用する。
```
  watch: {
    $route(too, fromm) {
      console.log(too)
      console.log(fromm)
    }
  }
```
# ▼ {{ $route.params.id }}　は密結合だから使いたくない場合
 ⇒ router.jsのpropsをtrueに、渡すものは「:id」の部分（paramは同一で）、子コンポーネント側でpropsを受け取る。
 （router.jsはmain.jsで呼び出してる。
```
[router.js]
{ path: '/users/:id', component: Users, props: true }

[Users.vue]
props: ["id"]
{{ id }}　で呼び出し。

```
# ▼ 同じrouter-viewは再帰的に呼べるか？
 ⇒ 呼べない。
- 同一component内に複数設置はできる。
- router-view ⇒ 呼び出し ⇒ ko.vue ⇒ ko.vue　内でrouter-viewがある場合 ⇒ 無理。

# ▼ 別のrouter-viewは再帰的に呼べるか？
 ⇒ ok
作成：vueファイル
追加：[router.js]import
追加：children
追加：[User.vue]<router-view />
あとはアドレスバーで呼ぶだけ。
```
[routes.js]
++
import UsersProfile from './views/UsersProfile'
++
children: [{ path: 'profiles', component: UsersProfile }]

[User.vue]
++
<router-view />

```
# ▼ router-linkのtoを動的に。
```
1.
<router-link :to="'/users/' + (Number(id) + 1) + '/profiles'">次のuser<router-link>

2.
[C:\koko\hs\dir_sakujyo\s13\mp\src\router.js]
{ path: 'profiles', component: UsersProfile, name: 'users-id-profile' }

[C:\koko\hs\dir_sakujyo\s13\mp\src\views\UsersPost.vue]
<router-link
        :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 } }"
        tag="button"
        >次のuser</router-link
      >

methodsで遷移する場合（router-link使用しない場合
 ⇒ 名前指定して遷移」というイメージ。
[Home.vue]
methods: {
    toUsers() {
      // this.$router.push({ path: 'users/1' })
      this.$router.push({ name: 'users-id-profile', params: { id: 1 } })
    }
  }

```
# ▼ query付与したい
```
1:
router-linkに付与するだけ。
query: { lang: 'ja', page: 2 }

2:
methodで遷移する場合
下記付与。
query: { lang: 'ja', page: 2 }

```
# ▼ 複数の <router-view> を使用する場合
ファイル追加

[App.vue]
<router-view name="header"></router-view>

[router.js]
routesは下記。component ⇒ 複数形に書き換える、obj形式にする。
      components: {
        default: Home,
        header: HeaderHome
      }

# ▼ 名前付き <router-view> を使用する場合 96
 ⇒ propsはobj形式で個々に設定する必要がある。

 他に追加したcomponentがあれば適宜追記する。
（この場合は下記
    Users
      components: {
        default: Users,
        header: HeaderUsers
      },

# ▼ redirect　97
*：
path指定ないものは全て'/'に。
  routes: [
    {
      path: '*',
      redirect: '/'
    }
  ]

# ▼ transitionの付与
```
[App.vue]
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

- css
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
```
# ▼ id指定してスクロールさせたい
 ⇒ scrollBehavior関数を使用。

[router.js]に書きます。

考慮すべきこと
- transition　等



Vue.jsはID指定できない。
遷移しない。

//# ▼ router-link toについて
```
      <router-link
        # ▼ obj形式で渡せる
        :to="{
            # ▼ router-viewのネストに使用
            name: 'users-id-profile',
            # ▼ [router.js]/Users/:idで渡す ⇒ [Users.vue]props: ['id'],で受け取る ⇒ 名前付きのネストに渡す
            params: { id: Number(id) + 1 },
            # ▼ queryはこちらで設定。
            query: { lang: 'ja', page: 2 },
            # ▼ スクロールしてほしい時とかに使用
            hash: '#next-user
        }"
        tag="button"
        >次のuser</router-link
      >
```

# ▼ scrollBehavior　について
to：
from：
saverPosition：
ブラウザバック時の位置等で使用
```
  scrollBehavior(to, from, saverPosition) {
    // # ▼ 1 selectorを選択可能
    // return {
    //   selector: '#next-user',
    //   offset: { x: 0, y: 100 }
    // }

    // # ▼ 2 単純に書くことも可能
    // return { x: 0, y: 100 }
    // }
    console.log('# ▼ from')
    console.log(from)
    console.log('# ▼ saverPosition（ブラウザの戻るボタン等で表示できる。）')
    console.log(saverPosition)
    // hashがあったら
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (saverPosition) {
      return saverPosition
    }
  }
```

# ▼ transition適用時、scrollBehavior　を適用したい。
DOM作成されていないidに対してscrollしようとするから。
手順 [App.vue]のtransitionに@before-enter="beforeEnter"属性を設定
beforeEnter　methodを作成
[App] ⇒ [main.js] ⇒ [roter.js]
beforeEnterのmethodから[roter.js]のscrollBehaviorを呼び出す。
非同期で。
まずはreturn を返す。
次に、
```
    <transition name="fade" mode="out-in" @before-enter="beforeEnter">
      <router-view />
    </transition>

[main.js]
の、これに「$root」でアクセスする。
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')


scrollBehaviorを呼び出したい時。

component ⇒ main.js ⇒ router.js

scrollBehavior(to, from, saverPosition) {
    return new Promise((resolve) => {
      this.$emit('triggerScroll')
      // this.app：[main.js]new Vue({ に挿入されたinstanceのこと。
      this.app.$root.$once('triggerScroll', () => {
        let position = { x: 0, y: 0 }
        if (savedPosition) {
          position = savedPosition
        }
        if (to.hash) {
          position = {
            selector: to.hash
          }
        }
        // resolve({ x: 0, y: 0 })
      })
    })
    // # ▼ 1 selectorを選択可能
    // return {
    //   selector: '#next-user',
    //   offset: { x: 0, y: 100 }
    // }

    // # ▼ 2 単純に書くことも可能
    // return { x: 0, y: 100 }
    // }
    console.log('# ▼ from')
    console.log(from)
    console.log('# ▼ saverPosition（ブラウザの戻るボタン等で表示できる。）')
    console.log(saverPosition)
    // hashがあったら
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    if (saverPosition) {
      return saverPosition
    }
  }
```

# ▼ 個人用memo
## ▼ <router-link>
- DOMでは<a>になる。
- activeになる：router-link-exact-active　のclassが付与。