<template>
   <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>Your cart</p>
        </header>
        <div class="bb"></div>
        <section v-for="(obj,key) in items" :key="key">
            <div class="sec1">
                <div class="firstdiv">
                    <div><img :src="obj.img" alt=""></div>
                    <button class="button1">+</button>1<button class="button2">-</button>
                </div>
                <div>
                    <h4>{{obj.productname}}</h4>
                    <h2>{{obj.productdetails}}
                    </h2>
                    <div class="line"></div>
                    <h3>{{obj.productprice}}</h3>
                </div>
            </div>
            <div>
                <div class="line2"></div>
                <h1>Remove item</h1>
            </div>
            <div class="bbb"></div>  
        </section>  
        <div class="container2">
                <div class="total">Total items cost excluding shipping fee</div>
                <div class="ngn"><span>NGN 26,000</span></div>
        </div>
        <button class="button3">Proceed to Checkout</button> 
        <button class="button4">Continue Shopping</button>  
  </div>
</template>



<script>
import pic1 from '../assets/images/applewatch.png';
import pic2 from '../assets/images/bag.png';

export default {
 data(){
     return{
        items:[
            {
                img: pic1,
                productname: "Bluetooth Smart watch",
                productdetails:"You can use this watch as a" +
                "smart watch to check your BP, step count, SMS," + 
                "as well as using it to answer calls or to play songs.",
                productprice: "NGN 10,000"
            },
            {
                img: pic2,
                productname: "Ultra-modern Ladies bag",
                productdetails:"This ultra-modern ladies bag," +
                "size 44, made in Italy, gives you"+
                "a classic look and confidence"+
                "boost, anywhere in the world.",
                productprice: "NGN 16,000"
            },
        ]
    }
 }
}
</script>



<style scoped>
.bb{
    width: 100%;
    height: 20px;
    border: 4px solid #e3e3e3;
    background: #e3e3e3;
    margin-top: 15%;

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
    margin-left:17%;
    right:0;
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
}

/* SEC 1 */
.container{
    width: 100%;
}
.sec1{
    display: inline-flex;
    padding: 5%;
    margin-top: 5%;
    width: 100%;
}

.sec1 div{
    width:100%;
}

.sec1 img{
    width: 90%;
    margin-bottom: 5%;
    border-radius: 10px;
}

.sec1 h4{
    font-size: 13.5px;
    font-weight: bolder;
}
.sec1 h2{
    font-size: 10px;
    margin-bottom: 40%;
}
.sec1 h3{
    font-size: 15.5px;
    padding: 2%;
    font-weight: bolder;
}
 h1{
    color: red;
    font-size: 11px;
    text-align: right;
    margin-right: 5.5%;
    margin-bottom: 4%;
}
.sec1 .line{
    border: 0.2px solid #EEEEEE;
    margin-bottom: 3%;
}
 .line2{
    margin: 0 auto;
    width: 90%;
    border: 0.2px solid #EEEEEE;
    margin-bottom: 2%;
}
.sec1 .outdiv{
    display: flex;
}

.button1,.button2{
    width: 30%;
    border: #FFC5C5;
    border-radius: 15px;
    color: #F20C0C;
    background: #FFEFEF;
    font-weight: bolder;
    padding: 2px;
    font-size: 15px;
    margin: 0 3px;
    outline: none;
}
.container{
    width: 100%;
}

.button3,.button4{
    display: flex;
    margin: 0 auto;
    width: 65%;
    padding: 10px 40px;
    margin-top: 5%;
    border-radius: 10px;
}

.button3{
    background: #F20C0C;
    border: none;
    color: white;
    outline: none;
    font-size: 15px;    
}
.button4{
    background: #FFEFEF;
    border: 1px solid #FFC5C5;
    color: #F20C0C;
    outline: none;
    margin-bottom: 10%;
}

.container2{
    display: flex;
    margin:0 10%;
    margin-top: 5%;
    width: 90%;
    justify-content: flex-end;
    margin-right: 40%;
    font-size: 20px;
}
.total{
    margin-right: auto;
    font-size: 11px;
    width: 100%;
}
.ngn{
    font-size: 20px;
    width: 100%;
}


</style>

