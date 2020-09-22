<template>
   <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>Delivery and Shipping Info.</p>
        </header>
        
        <section class="sec1">
            <div class="bbb"></div>
            <div class="container1">
                <p class="enter">Enter Delivery Address</p>
                <button class="button1">Click to add address</button>
            </div>
            <div class="container1">
                <p class="enter"> Enter Delivery Station</p>
                <select name="" id="" class="select3" style="margin-bottom: 7%;">
                    <option>Delivery Stations</option>
                </select>
            </div>
            <div class="container2">
                <div class="total">Total Items cost</div>
                <div class="ngn">NGN 16,000</div>
            </div>
            <div class="container2">
                <div class="total">Total Items cost</div>
                <div class="ngn">NGN 2,000</div>
            </div>
            <div class="bb"></div>
            <div class="container3">
                <div class="total2">Sub total</div>
                <div class="ngn2"><span>NGN 18,000</span></div>
            </div>
            <button class="continue">Continue purchase</button>
        </section>
  </div>
</template>



<script>

export default {
 data(){
     return{
    }
 }
}
</script>



<style scoped>
.bb{
  width: 80%;
  border: 1px solid #f6f6f6;
  margin: 4% 10%;
}
.bbb{
  width: 100%;
  border: 5px solid #e3e3e3;
}

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
    margin-left:13%;
    right:0;
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
}

/* SEC 1 */
.sec1{
    margin-top: 18%;
    margin-bottom: 20px;
}
.sec1 .enter{
    margin-top: 2%;
    margin-left: 11%;
}

.sec1 .container1{
    margin:0 5%;
    border: 1px solid #EEEEEE;
    border-radius: 10px;
    margin-top: 7%;
}

.sec1 .button1{
    display: flex;
    border: 1px solid #F20C0C;
    border-radius: 10px;
    background: #FFEFEF;
    color: #F20C0C;
    margin: 0 auto;
    margin-bottom: 7%;
    width: 85%;
    padding: 50px 45px;
    outline: none;
}
.sec1 select{
    display: flex;
    border: 1px solid #F20C0C;
    border-radius: 10px;
    background: #FFEFEF;
    color: #F20C0C;
    margin: 0 auto;
    margin-bottom: 7%;
    width: 85%;
    outline: none;
    border-radius: 10px;
    font-size: 19px;
    padding: 7px 35px;
    text-align: center;
}

.sec1 .container2{
    display: flex;
    margin:0 10%;
    margin-top: 7%;
    width: 78%;
    justify-content: flex-end;
    margin-right: 20%;
}
.sec1 .total{
    margin-right: auto;
}
.sec1 .container3{
    display: flex;
    margin:0 10%;
    margin-top: 7%;
    width: 78%;
    justify-content: flex-end;
    margin-right: 20%;
    font-size: 20px;
}
.sec1 .total2{
    margin-right: auto;
    font-size: 22px;
}
.sec1 .ngn2{
    font-size: 22px;
}
.sec1 .continue{
    display: flex;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 19px;
    background: red;
    padding: 10px 65px;
    margin-top: 9%;
    text-align: center;
    outline: none;
    width: 85%;
}

span{
    font-weight: bolder;
}



</style>

