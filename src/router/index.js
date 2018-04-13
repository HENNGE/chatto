import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Channels from '@/components/Channels';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          components: {
            Header,
            Sidebar,
            Channels,
          },
        },
      ],
    },
  ],
});
