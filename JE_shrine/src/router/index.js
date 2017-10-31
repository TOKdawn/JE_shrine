import App from '../App.vue'
export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')
    }
    //   {
    //     path: 'login',
    //     component: r => require.ensure([], () => r(require('../components/log/login.Vue')), 'login')
    // }, {
    //     path: 'registered',
    //     component: r => require.ensure([], () => r(require('../components/log/registered.Vue')), 'registered')
    // }
    ]
}]

