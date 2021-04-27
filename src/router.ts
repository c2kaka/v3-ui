import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc
    }
  ]
});

router.beforeEach(() => {
  console.log("路由切换了");
})
