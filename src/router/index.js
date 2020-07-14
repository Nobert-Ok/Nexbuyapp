import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import trending from '@/components/Trending'
import stories from '@/components/Stories'
import foryou from '@/components/Foryou'
import categories from '@/components/categories'



Vue.use(Router)

export default new Router({
    routes: [
    {path: '/',
    name: 'For you',
    component: foryou
    },    
    {path: '/stories',
     name: 'stories',
     component: stories
    },
    {path: '/trending',      
     name: 'trending',      
     component: trending 
    },    
    {path: '/categories',      
    name: 'categories',      
    component: categories
    }  
]});

