<template>
  <div>
    <!-- <preloader></preloader> -->
    <header id="header">
        <div class="head">
            <div class="pic">
                <div><a href="#" v-b-toggle.sidebar-backdrop><img src="../assets/images/pics.svg" alt="" class="pics"></a></div>
                <div><input type="text" name="" id="" placeholder="Find anything, items, stores, brands"></div>
            </div>
        </div>
        <tabs
          :tabs="tabs"
          :currentTab="currentTab"
          :wrapper-class="'default-tabs'"
          :tab-class="'default-tabs__item'"
          :tab-active-class="'default-tabs__item_active'"
          :line-class="'default-tabs__active-line'"
          @onClick="handleClick"
        />
    </header>

    
    <div class="content">
            <div v-if="currentTab === 'tab1'">
            </div>
            <div v-if="currentTab === 'tab2'">
              <main id="content">
                <section class="sec2">
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
            </div>
            <div v-if="currentTab === 'tab3'">
            </div>
            <div v-if="currentTab === 'tab4'">
            </div>
            <div v-if="currentTab === 'tab5'">
            </div>
    </div>

    <b-sidebar
      id="sidebar-backdrop"
      title=""
      :backdrop-variant="variant"
      backdrop
      shadow
      >
      <div class="slide">
            <div class="details">
                <div class="img">
                    <img src="../assets/images/Group 24.png" alt="" class="profile-pic">
                </div>
                <div class="profile-details">
                    <p style="font-weight: bold;" class="para">James Itubo</p>
                    <p class="para">RCustomNG store</p>
                    <p class="para"><router-link to='/myaccount' style="color: red;">View full profile</router-link></p>

                    
                    <p class="para"><a href="#" v-b-modal.modal-sm ><img src="../assets/images/premium.png" alt="" class="bullet"> Go Premium</a></p>
                    <b-modal id="modal-sm" centered size="sm" title="Why you need to Go Premium" header-text-variant="light" hide-header-close header-bg-variant='secondary'>
                      <p>Going premium lets you do this
                        and also lets you do this while
                        you're doing this easily.
                      </p>
                      <p>
                        Going premium lets you do this
                        and also lets you do this while
                        you're doing this easily.
                      </p>
                      <p>
                        Going premium lets you do this
                        and also lets you do this while
                        you're doing this easily.
                      </p>
                      <b-button variant="primary">LET'S DO THIS</b-button>
                    </b-modal>
                </div>
            </div>
            <div class="contain_logo">
                <a href="#"><img src="../assets/images/B1.png" alt="" class="logo"></a>
            </div>
            <div class="links">
                <ul class="ul2">
                    <li><router-link to="/">NexApp</router-link></li>
                    <li><router-link to="/aboutus">About us</router-link></li>
                    <li><router-link to="/terms">Terms and Conditions</router-link></li>
                    <li><router-link to="#">Chat with us</router-link></li>
                    <li><router-link to="#">Refer us and win</router-link></li>
                    <li><router-link to="#">My store</router-link></li>
                    <li><router-link to="/customercare">Customer Care</router-link></li>
                </ul>
            </div>
            <div class="socials">
                <a href="#"><img src="../assets/images/011-instagram.png" alt=""></a>
                <a href="#"><img src="../assets/images/013-twitter-1.png" alt=""></a>
                <a href="#"><img src="../assets/images/001-facebook.png" alt=""></a>
                <a href="#"><img src="../assets/images/Subtraction 8.png" alt=""></a>
                <a href="#"><img src="../assets/images/010-linkedin.png" alt=""></a>
                <a href="#"><img src="../assets/images/telegram.png" alt=""></a>
            </div>
        </div>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Tabs from 'vue-tabs-with-active-line';
import deals from '../components/deals';
import displays from '../components/displays';
import footer from '../components/footer';
import preloader from '../components/preloader'




export default {
  components: {
    Tabs,
    'app-deals':deals, 
    'app-displays':displays, 
    'app-footer':footer,
    'preloader':preloader,
  },
  data: () => ({
    tabs: [
      { title: 'STORIES', value: 'tab1' },
      { title: 'FOR YOU', value: 'tab2' },
      { title: 'TRENDING', value: 'tab3' },
      { title: 'CATEGORIES', value: 'tab4' },
      { title: 'LOCAL BRANDS', value: 'tab5' },
    ],
    currentTab: 'tab2',
    variant:'dark'
  }),
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  },
  props:['value']
}
</script>



<style lang="scss" scoped>
.default-tabs {
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow-x:scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-color: none;
  background-color: white;
  // border: 1px solid red;
  box-shadow: 0 5px 9px -6px grey;

  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    font-size: 13.5px;
    letter-spacing: 0.8px;
    color: rgb(0, 0, 0);
    text-decoration: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      color: red;
    }
    &:hover {
      border-bottom: 2px solid red;
      color: red;
      font-weight: bolder;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid red;
      color: red;
      font-weight: bolder;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    background-image: url("../assets/images/Rectangle.png");
    transition: transform 0.4s ease, width 0.4s ease;
    background-size: 100%;
  }
}


@media only screen and (min-width: 375px) {

.pic div{
    display: inline-block;
    padding: 0 13px;
    justify-content: center;
}
input{
    width: 295px;
}
}
@media only screen and (max-width: 375px) {

  .pic div{
    display: inline-block;
    padding: 0 9px;
    justify-content: center;
  }
  input{
      width: 250px;
  }
  #modal-sm {
    width: 250px; /* New width for small modal */
  }
}
@media only screen and (max-width: 320px) {

.pic div{
    display: inline-block;
    padding: 0 8px;
    justify-content: center;
}
input{
    width: 225px; 
}
}
</style>

<style lang="css" scoped>
  input{
    border-radius: 1000px;
    border: 1px solid red;
    padding: 10px 20px;
    width: 275px;
    height: 40px;
    font-size: 9.5px !important;
}

input:focus{
    outline: none;
}

</style>