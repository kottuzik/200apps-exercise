import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import './assets/tailwind.css'
import './assets/styles.scss';
import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { unstyled: true })
app.mount('#app')
