const routes = [
    {
        path: '/',
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/HomeView.vue'),
            },
            {
                path: 'about',
                name: 'about',
                //
                //
                //
                component: () => import('@/views/AboutView.vue'),
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: () => import('@/views/DetailView.vue'),
            },    
        ],
    },
];

export default routes;