import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import { createMetaManager } from 'vue-meta';
import "primevue/resources/themes/lara-light-teal/theme.css";
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';


export const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component("Card", Card);


// app.use(createMetaManager());
// await router.isReady();
// app.mount('#app')
