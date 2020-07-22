// importing modules
import Vue from 'vue'
import Router from 'vue-router'

// import trending from '@/components/Trending'
// import stories from '@/components/Stories'
// import foryou from '@/components/Foryou'
// import categories from '@/components/categories'
// import details from '@/components/details'

import aboutus from '../components/sidemenu/Aboutus'
import customercare from '../components/sidemenu/Customercare'
import privacy from '../components/sidemenu/privacy'
import terms from '../components/sidemenu/terms'
import header from '../components/header'



Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
    {path: '/',
    name: 'header',
    component: header,
    },    
    // {path: '/stories',
    //  name: 'stories',
    //  component: stories,
    // },
    // {path: '/trending',      
    //  name: 'trending',      
    //  component: trending,
    // },    
    // {path: '/categories',      
    // name: 'categories',      
    // component: categories,
    // },
    // {path: '/details',      
    // name: 'details',      
    // component: details,
    // },

    {path: '/aboutus',      
    name: 'aboutus',      
    component: aboutus,
    },
    {path: '/customercare',      
    name: 'customercare',      
    component: customercare,
    },
    {path: '/privacy',      
    name: 'privacy',      
    component: privacy,
    },
    {path: '/terms',      
    name: 'terms',      
    component: terms,
    },
]});


