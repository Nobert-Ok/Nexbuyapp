<template>
  <div id="app">
      <!-- <app-header></app-header> -->
      <!-- <details></details>
      <aboutus></aboutus>
      <terms></terms>
      <customer></customer>
      <privacy></privacy> -->
      <router-view></router-view>
  </div>
</template>


<script>
// import header from './components/header';
// import foryou from './components/Foryou';
// import details from './components/details'
// import aboutus from './components/sidemenu/Aboutus'
// import terms from './components/sidemenu/terms'
// import customer from './components/sidemenu/Customercare'
// import privacy from './components/sidemenu/privacy'
// import myaccount from './components/myaccount'

export default {
  name: 'App',
  components:{ 
    // 'app-header':header,
    // 'aboutus':aboutus,
    // 'details':details,
    // 'terms':terms,
    // 'customer':customer,
    // 'privacy':privacy
    // 'preloader':preloader,
  },
  
}
</script>

<style lang="scss">
  // Import custom SASS variable overrides, or alternatively
  // define your variable overrides here instead
  @import 'assets/custom.scss';

  // Import Bootstrap and BootstrapVue source SCSS files
  @import '~bootstrap/scss/bootstrap.scss';
  @import '~bootstrap-vue/src/index.scss';

  // General style overrides and custom classes


</style>