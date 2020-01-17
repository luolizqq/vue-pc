const routes = [
    {
        path:'/home',component:resolve => require.ensure([], () => resolve(require('../pages/home')), 'home'),
    }, 
    {
        path:'/list',component:resolve => require.ensure([], () => resolve(require('../pages/list')), 'list')
    }
]
export default routes;