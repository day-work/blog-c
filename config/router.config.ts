export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/Home',
      },
      {
        path: '/Home',
        name: 'home',
        icon: 'smile',
        component: '@/pages/Home',
      },
      {
        path: '/Awhile',
        name: 'awhile',
        icon: 'smile',
        component: '@/pages/Awhile',
      },
      {
        path: '/Book',
        name: 'book',
        icon: 'smile',
        component: '@/pages/Book',
      },
      {
        component: './404',
      },
    ],
  },
];
