import './styles/main.postcss'
import 'quill/dist/quill.snow.css'

import { createApp } from 'vue'

// import routes generated by Voie
import routes from 'voie-pages'
// progress bar
import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

import installPlugins from './plugins'
import App from './App.vue'

const app = createApp(App)
installPlugins(app)

const router = createRouter({
  history: createWebHistory(),
  routes,
})
router.beforeEach(() => { NProgress.start() })
router.afterEach(() => { NProgress.done() })

app.use(router)
app.mount('#app')
