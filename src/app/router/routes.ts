import Forms from '@compos/forms'
import Mypage from '@compos/home/mypage'
import Signup from '@compos/signup'
import Info from '@compos/signup/info'
// import Signout from '@compos/home/signout'
import Signin from '@compos/home/signin'
import GenAssessment from '@compos/forms/generate'
import Overview from '@compos/forms/overview'
import Status from '@compos/forms/status'
import Delivery from '@compos/forms/delivery'

import Search from '@compos/search'


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
    path: '/generate',
    component: GenAssessment
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
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/info',
    component: Info
  }
  // {
  //   path: '/signout',
  //   component: Signout
  // }
]

export default routes
