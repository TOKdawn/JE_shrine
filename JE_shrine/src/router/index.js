import App from '../App.vue'
export default [{
    path: '/',
    component: App,
    redirect: '/home',
    children: [{
            path: '/home',
            component: r => require.ensure([], () => r(require('../components/home/home.vue')), 'home'),
            redirect: '/home/step',
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
        },
        {
            path: '/basic',
            component: r => require.ensure([], () => r(require('../components/basic/basic.vue')), 'basic'),
            children: [{
                    path: '/agreement',
                    component: r => require.ensure([], () => r(require('../components/basic/agreement/agreement.vue')), 'agreement')
                }, {
                    //     path: '/retrieve', // 检索分页
                    //     component: r => require.ensure([], () => r(require('../components/basic/retrieve/retrieve.vue')), 'retrieve')
                    // }, {

                    // }, {
                    //     path: '/score', // 曲谱信息
                    //     component: r => require.ensure([], () => r(require('../components/basic/retrieve/score.vue')), 'scroe')
                    // }, {
                    path: 'zrelease', // 曲谱发布页
                    component: r => require.ensure([], () => r(require('../components/basic/zrelease/zrelease.vue')), 'zrelease'),
                    meta: {
                        requireAuth: true
                    }
                }, {
                    path: '/retrieve/:keyword',
                    name: 'retrieve',
                    component: r => require.ensure([], () => r(require('../components/basic/retrieve/retrieve.vue')), 'retrieve')
                }, {
                    path: '/score/:scorename',
                    name: 'score',
                    component: r => require.ensure([], () => r(require('../components/basic/retrieve/score.vue')), 'score')
                },
                {
                    path: 'loginbasic',
                    component: r => require.ensure([], () => r(require('../components/basic/login/loginbasic.vue')), 'loginbasic'),
                    redirect: '/basic/loginbasic/login',
                    children: [{
                        path: 'login', // 登录分页
                        component: r => require.ensure([], () => r(require('../components/basic/login/login.vue')), 'login')
                    }, {
                        path: 'registered', // 注册分页
                        component: r => require.ensure([], () => r(require('../components/basic/login/registered.vue')), 'registered')
                    }]
                }
            ]
        },
        {
            path: '/text',
            component: r => require.ensure([], () => r(require('../components/text/index.vue')), 'text')
        }
    ]
}]