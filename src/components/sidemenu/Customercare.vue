<template>
   <div>
        <header>
            <a @onclick="$router.go(-1)"><img src="../../assets/images/Path50.png" alt=""></a>
            <p>Customer Care</p>
        </header>
        <section id="sec1">
            <img src="../../assets/images/girl.png" alt="" class="group304">
        </section>
        <section id="sec2">
            <h2>Get the help your business needs, here on NEXBUY.</h2>
            <div class="buttonIn"> 
                <input type="text" id="enter" placeholder="Describe the issue you're having">
                <button id="clear">Send</button> 
            </div>
            <p>We respond within 48 hours. Meanwhile, you may find your answer
                in our frequently resolved issues below.
            </p>
        </section>
        <section id="sec3">
            <div class="contain">
                <img src="../../assets/images/telephone.png" alt="">
                <h2>Call our help centre to get your solution.</h2>
                <p>Get answers to your business needs from our staff.</p>
            </div>
            <div class="contain">
                <img src="../../assets/images/chat.png" alt="">
                <h2>Have a live chat with our trained personal.</h2>
                <p>Get answers to your business needs from our staff.</p>
            </div>
            <div class="contain">
                <img src="../../assets/images/house.png" alt="">
                <h2>Create and manage multiple stores.</h2>
                <p>Get the tools you need to create and grow multiple businesses.</p>
            </div>
            <div class="contain">
                <img src="../../assets/images/cup.png" alt="">
                <h2>Publish and promote your stories.</h2>
                <p>Make your posts go viral and visible to every Nexbuyer.</p>
            </div>
            <div class="contain">
                <img src="../../assets/images/advertisements.png" alt="">
                <h2>Advertise your products and services.</h2>
                <p>Let more people know about your business.</p>
            </div>
            <div class="contain">
                <img src="../../assets/images/gift.png" alt="">
                <h2>Get incentives and bonuses.</h2>
                <p>Let how to get more at lesser cost from Nexbuy.</p>
            </div>
            <p style="color:red;">Were the above recommendations helpful?</p>
        </section>
  </div>
</template>



<script>
import Tabs from 'vue-tabs-with-active-line';

export default {
  components: {
    Tabs,
  },
  data: () => ({
    
  }),
  methods: {
   
  }
}
</script>



<style scoped>
#bb{
  width: 100%;
  border-bottom:0.5px solid #BFBFBF;
}

header{
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
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
}
.group304{
    max-width:80%;
    height:auto;
}

#sec1{
    padding:40px;
    padding-bottom:30px;
    display:inline-flex;
    justify-content: center;
}

#sec2 h2{
    padding:40px;
    padding-top:0px;
    padding-bottom:20px;
    display:block;
    justify-content: center;
    text-align:center;
    color:#00386A;
    font-size:21px;
}
#sec2 p{
    color:#818181;
    font-style:italic;
    font-size:10px;
    text-align:center;
    padding:20px;
    padding-top:10px;
}

.buttonIn { 
    width: 300px; 
    position: relative; 
    margin:0 auto;
} 
      
input { 
    margin: 0px; 
    padding: 10px; 
    width: 100%; 
    outline: none; 
    height: 35px; 
    border-radius: 10px; 
    border: 1px solid #FFC4C4;
    color:black;
} 

::placeholder { 
  color: black;
  font-size:11.5px;
}

button { 
    position: absolute; 
    border-radius: 0px 10px 10px 0px; 
    right: 0px; 
    z-index: 2; 
    border: none; 
    width:20%;
    height: 29px; 
    cursor: pointer; 
    color: black; 
    background-color: #FFC4C4; 
    /* transform: translateX(2px);  */
    margin-top:3px;
    margin-right:3px;
    outline:none;
} 

#sec3{
    background:#FAFAFA;
    padding:30px;
}
#sec3 .contain{
    background:white;
    margin:0 auto;
    box-shadow:0 1px 8px  gray;
    border-radius:5px;
    padding:15px;
    margin-bottom:50px;
}
#sec3 img{
    width:23%;
    height:23%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom:20px;
    margin-top:20px;
}

#sec3 h2{
    text-align:center;
    font-size:18px;
    color:#00386A;
    line-height:30px;
}
#sec3 p{
    text-align:center;
    color:black;
    font-size:14px;
}



</style>