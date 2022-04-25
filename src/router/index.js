import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/Home'),
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login'),
      hidden: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFound'),
      hidden: true
    },
    {
      path: '/students',
      name: '学生管理系统',
      iconfont: 'fa fa-podcast',
      redirect: '/students/list',
      component: () => import('@/components/Students'),
      children: [
        {
          path: '/students/list',
          name: '学生列表',
          iconfont: 'fa fa-user-circle-o',
          component: () => import('@/components/students/StudentList')
        },
        {
          path: '/students/work',
          name: '作业列表',
          iconfont: 'fa fa-handshake-o',
          component: () => import('@/components/students/WorkList')
        },
        {
          path: '/students/attendance',
          name: '考勤管理',
          iconfont: 'fa fa-ravelry',
          component: () => import('@/components/students/AttendanceManagement')
        },
        {
          path: '/students/information',
          name: '学生信息',
          iconfont: 'fa fa-address-card-o',
          component: () => import('@/components/students/StudentInformation')
        }
      ]
    }
  ],
  mode: 'history'
})
