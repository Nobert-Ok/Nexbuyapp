<template>
  <div>
      <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>My NEXBUY Store</p>
    </header>
    <section class="full-details">
        <div class="line"></div>
        <div class="fb-container">
            <img src="../assets/images/Fb.png" alt="">
            <div class="top-left"><img src="../assets/images/location2.png" alt="" class="location"> Enugu-Enugu (Enu)</div>
            <div class="bottom">
                <h3>STYLEWITHDIVAS <img src="../assets/images/nounshop.png" class="nounshop"></h3>
                <h5>Your no. 1 official online store. We deal on quality and affordable
                    Fashion accessories for both male and female. Your...read more
                </h5>
            </div>
        </div>
        <div class="buttons">
            <button class="button1">4.5 <img src="../assets/images/star.png" alt=""> rating</button>
            <button class="button2">23 review</button>
            <button class="button3">371 followers</button>
        </div>
        <div class="line"></div>
        <div class="display">
            <p>Your products</p>
            <display></display>
        </div>
        
    </section>
    <storefooter></storefooter>
    
  </div>
</template>

<script>
import storefooter from './storefooter.vue'
import display from './displays.vue'
export default {
    components:{
        'storefooter': storefooter,
        'display': display,
    }

}
</script>

<style scoped>
header{
    position: fixed;
    top:0;
    background-color: #AAA;
    display: inline-flex;
    padding:25px;
    width:100%;
    padding-top:16px;
    padding-bottom:6px !important;
}
header p{
    color: white;
    font-size:17.5px;
    margin-left:17%;
    right:0;
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
}


/* section 1 */

section{
  position: relative;
  margin: 17.5% 0;
  z-index: -1;
}
section .fb-container{
  position: relative;
  text-align: center;
  color: white;
  width: 100%;
  z-index: -1;
}
section .fb-container img{
  width: 100%;
}
.location{
   max-width: 8%;
   margin-right: 5px;
}
.top-left {
    position: absolute;
    width: 60%;
    top: 11px;
    left: 16px;
    padding: 5px;
    font-size: 16.5px;
    background-color:#2A2A2A;
    border-radius: 10px;    
    opacity: 0.9;
}

.bottom{
    position: absolute;
    background-color:#2A2A2A;
    bottom: 0;
    opacity: 0.7;
    padding: 10px 20px;
    text-align: left;
    line-height: 10px;
}
.bottom h3{
    font-size: 14.5px;
}
.bottom h5{
    font-size: 11.5px;
}

.nounshop{
    max-width: 4%;
    margin-left: 9px;
}

.line{
    border: 4px solid rgb(229, 229, 229);
}

/* BUTTONS */

.buttons{
    margin: 13px;
}
.buttons button{
    display: inline-block;
    margin:6px 4px;
}
.button1{
    border:none;
    background: #FFEFEF;
    border-radius: 10px;
    color: #F20C0C;
    padding: 8px 15px;
    font-size: 13.5px;
}
.button2{
    border:none;
    background: #FFEFEF;
    border-radius: 10px;
    color: #F20C0C;
    padding: 8px 15px;
    font-size: 13.5px;
}
.button3{
    border:none;
    background: #DFF2FF;
    border-radius: 10px;
    color: #1492E6;
    padding: 8px 15px;
    font-size: 13.5px;
}

.display p{
    margin: 15px 20px;
    margin-bottom: 20px;
    font-size: 21.5px;
}



</style>