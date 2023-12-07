import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' // theme
import 'primeicons/primeicons.css'

import Button from 'primevue/button';
import Menubar from 'primevue/menubar';

createApp(App)
.use(PrimeVue)
.component('Button', Button)
.component('Menubar', Menubar)
.mount('#app')
