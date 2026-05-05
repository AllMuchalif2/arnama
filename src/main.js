import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-show');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

app.directive('animate', {
  mounted(el) {
    el.classList.add('scroll-hidden');
    observer.observe(el);
  },
  unmounted(el) {
    observer.unobserve(el);
  },
});

app.mount('#app');
