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
import myaccount from '../components/myaccount'
import preloader from '../components/preloader'
import accountfooter from '../components/accountfooter'
import store from '../components/Nexbuystore1'
import store2 from '../components/Nexbuystore2'
import storefooter from '../components/storefooter'
import cart1 from '../components/emptycart'
import myStore1 from '../components/myStore1'
import myStore2 from '../components/myStore2'
import purchase from '../components/purchase'
import signpage from '../components/signpage'
import thankyou from '../components/thankyou'
import transfer from '../components/transfer'
import quickpurchase from '../components/quickpurchase'
import additems from '../components/additems'
// import cartfooter from '../components/cartfooter'



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
    {path: '/myaccount',      
    name: 'myaccount',      
    component: myaccount,
    },
    {path: '/store',      
    name: 'store',      
    component: store,
    },
    {path: '/store2',      
    name: 'store2',      
    component: store2,
    },
    {path: '/preloader',      
    name: 'preloader',      
    component: preloader,
    },
    {path: '/accountfooter',      
    name: 'accountfooter',      
    component: accountfooter,
    },
    {path: '/storefooter',      
    name: 'storefooter',      
    component: storefooter,
    },
    {path: '/cart1',      
    name: 'cart1',      
    component: cart1,
    },
    {path: '/myStore1',      
    name: 'myStore1',      
    component: myStore1,
    },
    {path: '/myStore2',      
    name: 'myStore2',      
    component: myStore2,
    },
    {path: '/purchase/:Pid',      
    name: 'purchase',      
    component: purchase,
    },
    {path: '/signpage',      
    name: 'signpage',      
    component: signpage,
    },
    {path: '/thankyou',      
    name: 'thankyou',      
    component: thankyou,
    },
    {path: '/transfer',      
    name: 'transfer',      
    component: transfer,
    },
    {path: '/quickpurchase',      
    name: 'quickpurchase',      
    component: quickpurchase,
    },
    {path: '/additems',      
    name: 'additems',      
    component: additems,
    },
]});


