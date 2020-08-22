<template>
  <div>
    <main id="content">
      <section class="sec2"><div id="gg"></div>
            <div class="element">
                <a href="#"><img src="../assets/images/ad3.png" alt=""></a>
                <a href="#"><img src="../assets/images/ad1.png" alt=""></a>
                <a href="#"><img src="../assets/images/ad2.png" alt=""></a>
            </div>
      </section>
      <app-deals></app-deals>
      <app-displays></app-displays>
    </main>
    <app-footer></app-footer> 
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import deals from '../components/deals';
import displays from '../components/displays';
import footer from '../components/footer';


export default {
  components:{
    'app-deals':deals, 
    'app-displays':displays, 
    'app-footer':footer, 
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

#gg{
   background: rgb(245, 245, 245);
   width: 100%;
   height: 3px;
}
</style>
