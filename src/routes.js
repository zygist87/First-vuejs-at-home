import Mixins38 from './components/Mixins38.vue'
import CheckboxBinding30 from './components/CheckboxBinding30.vue'
import RouteParameters42 from './components/RouteParameters42.vue'

export default [
    {
        path: '/',
        component: Mixins38
    },
    {
        path: '/add',
        component: CheckboxBinding30
    },
    {
        path: '/blog/:id',
        component: RouteParameters42
    }
]