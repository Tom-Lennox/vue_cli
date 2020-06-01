import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Users from "./views/Users.vue";

Vue.use(Router);

export default new Router({
    // mapping
    routes: [{path: '/', component: Home }, { path: "/users", component: Users }]
})
