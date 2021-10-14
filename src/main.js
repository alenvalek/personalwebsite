import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { init } from 'emailjs-com';
init('user_IeoVmVXc1erxbwMYsRWLe');
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import '@/assets/tailwind.css';

library.add(fab, fas);

createApp(App)
   .use(VueToast)
   .use(router)
   .component('fa', FontAwesomeIcon)
   .mount('#app');
