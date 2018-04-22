import Overview from '../components/forms/overview'
import Status from '../components/forms/status'
import Delivery from '../components/forms/delivery'


const routes = [
  {
    path: '/',
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
    redirect: '/'
  }
]

export default routes
