import Login from './Login';
import Home from './Home';
import Conversation from './Conversation';
import Customer from './Customer';
import Generic from './Generic';

const modules = [
    {
        path: '/',
        component: Login
        // component: Home
    },
    {
        path: '/home',
        component: Home,
        protected: true
    },
    {
        path: '/customers',
        component: Customer,
        protected: true
    },
    {
        path: '/conversation',
        component: Conversation,
        protected: true
    },
    {
        path: '/generic',
        component: Generic,
        protected: true
    }
]

export default modules;