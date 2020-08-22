<template>
  <div>
      <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>NEXBUY store info</p>
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
            <div>
            <button class="button1"> Rate Store</button>
            <p>4.5 <img src="../assets/images/star2.png" alt=""> rating</p>
            </div>
            <div>
            <button class="button2">Write review</button>
            <p>23 review</p>
            </div>
            <div>
            <button class="button3">Follow store</button>
            <p>371 followers</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="display">
            <p>All products</p>
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
    width: 100%;

}
/* .buttons button{
    display: inline-block;
    margin:6px 4px;
} */
.buttons div{
    display: inline-block;
    justify-content: space-evenly;
    text-align: center;
    margin:9px 4px;
    margin-bottom: -10px !important;
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
.buttons p{
    margin-top: 3px;
    font-size: 13.5px;
    color: #818181;
}


.display p{
    margin: 15px 20px;
    margin-bottom: 20px;
    font-size: 21.5px;
}



</style>