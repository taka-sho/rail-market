import Overview from '../components/forms/overview'
import Mypage from '../components/home/mypage'
import Signup from '../components/home/signup'
import Signout from '../components/home/signout'
import Login from '../components/home/login'
import Status from '../components/forms/status'
import Delivery from '../components/forms/delivery'


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/mypage',
    component: Mypage
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/signout',
    component: Signout
  },
  {
    path: '/overview',
    component: Overview
  },
  {
    path: '/status',
    component: Status
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/**',
    redirect: '/login'
  }
]

export default routes
