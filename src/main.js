import { createApp } from 'vue';

import App from './App.vue';
import { initI18n } from './i18n';

const app = createApp(App);

const i18n = initI18n();

app.use(i18n);
app.mount('#app');
