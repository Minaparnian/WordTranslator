import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Word from '@/components/Word'
import WordList from '@/components/WordList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/words',
      name: 'WordList',
      component: WordList
    },
    {
      path: '/words/word/:id',
      name: 'Word',
      component: Word
    }
  ]
})
