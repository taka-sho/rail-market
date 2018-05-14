import Forms from '@compos/forms'
import Overview from '@compos/forms/overview'
import Mypage from '@compos/home/mypage'
// import Signup from '@compos/home/signup'
// import Signout from '@compos/home/signout'
import Signin from '@compos/home/signin'
import Status from '@compos/forms/status'
import Delivery from '@compos/forms/delivery'


const routes = [
  {
    path: '*',
    redirect: '/signin'
  },
  {
    path: '/mypage',
    component: Mypage
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/assessment/:id',
    component: Forms,
    children: [
      {
        path: 'overview',
        component: Overview
      },
      {
        path: 'status',
        component: Status
      },
      {
        path: 'delivery',
        component: Delivery
      }
    ]
  }
  // {
  //   path: '/signup',
  //   component: Signup
  // },
  // {
  //   path: '/signout',
  //   component: Signout
  // }
]

export default routes
