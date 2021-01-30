import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/file',
    name: 'File',
    component: () => import('../views/File.vue')
  },
  {
    path: '/email',
    name: 'Email',
    component: () => import('../views/Email.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/video_detail/:id',
    name: 'VideoDetail',
    component: () => import('../views/VideoDetail.vue')
  },
  {
    path: '/done',
    name: 'Done',
    component: () => import('../views/Done.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/work',
    name: 'Editor',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/address_book',
    name: 'AddressBook',
    component: () => import('../views/AddressBook.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/tools/Index.vue'),
    children: [
      {path: 'list', name: 'ToolsList', component: () => import('../views/tools/ext/List.vue')},
      {path: 'ticket', name: 'ToolsTicket', component: () => import('../views/tools/ext/Ticket.vue')},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
