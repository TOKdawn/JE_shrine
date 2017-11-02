import App from '../App.vue'
export default [{
    path: '/',
    component: App,
    children: [{
            path: '',
            component: r => require.ensure([], () => r(require('../components/home/home.vue')), 'home'),
            redirect: '/step',
            children: [{
                path: 'bd',
                component: r => require.ensure([], () => r(require('../components/home/Tspectrum/BD.vue')), 'bd')
            }, {
                path: 'step',
                component: r => require.ensure([], () => r(require('../components/home/Tspectrum/stepModulation.vue')), 'step')
            }, {
                path: 'once',
                component: r => require.ensure([], () => r(require('../components/home/Tspectrum/onceModulation.vue')), 'once')
            }]
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