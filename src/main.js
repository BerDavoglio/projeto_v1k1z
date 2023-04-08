import { createApp } from 'vue';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  CoFacebookF,
  CoInstagram,
  CoLinkedinIn,
  MdEmailOutlined,
  CoPinterestP,
  CoTwitter,
  CoYoutube,
  CoMenu,
  BiChevronCompactDown,
  BiChevronCompactUp,
} from 'oh-vue-icons/icons';

import App from './App.vue';
import router from './router';
import store from './store';

import './assets/tailwind.css';

addIcons(
  CoFacebookF,
  CoInstagram,
  CoLinkedinIn,
  MdEmailOutlined,
  CoPinterestP,
  CoTwitter,
  CoYoutube,
  CoMenu,
  BiChevronCompactDown,
  BiChevronCompactUp,
);

createApp(App).component('v-icon', OhVueIcon)
  .use(store).use(router)
  .mount('#app');
