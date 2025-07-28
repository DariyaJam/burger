import { createApp } from 'vue'
import { createPinia } from 'pinia'
import components from '@/components'
import directives from '@/directives'
import App from './App.vue'
import router from './router'

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

directives.forEach(directive => {
  app.directive(directive.name, directive)
  console.log('directive included', directive)
})


app.use(createPinia())
app.use(router)

app.mount('#app')
