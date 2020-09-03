<template>
    <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link >
            <p>Purchase your item</p>
        </header>
        <main v-for="(product,index) in products" :key="index">
            <section id="section1" v-if="proId == product.productId">
                <div class="container"> 
                    <img v-bind:src= product.img alt="" class="product" style="width:100%;">
                    <div class="arrowleft"><img src="../assets/images/arrow1.png" alt="" class="arrow1"></div>
                    <div class="arrowright"><img src="../assets/images/arrow2.png" class="arrow1"></div>
                    <div class="bottom"><p>{{product.name}}</p></div>
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
            </section>
            <div class="line"></div>
            <section id="section2">
                <h2>Product description</h2>
                <div class="thin-line"></div>
                <h3>
                    <!-- This ultra-modern ladies bag, <span>size 44</span>, made in Italy,
                    gives you a classic look and confidence boost,
                    anywhere in the world. -->
                    {{product.description}}
                </h3>
            </section>
            <div class="line"></div>
            <section id="section3">
                <h2>Product color</h2>
                <div class="thin-line"></div>
                <div class="color-box">
                    <ul>
                        <li><img src="../assets/images/Rectangle60.png" alt="" class="box"></li>
                        <li><img src="../assets/images/Rectangle61.png" alt=""></li>
                        <li><img src="../assets/images/Rectangle62.png" alt=""></li>
                        <li><img src="../assets/images/Rectangle63.png" alt=""></li>
                    </ul>
                </div>
            </section>
            <div class="line"></div>
        </main>
    </div>
</template>

<script>
    import pic1 from "../assets/images/sneakers.png"
    import pic2 from '../assets/images/bag.png'
    import pic3 from '../assets/images/shirts.png'
    import pic4 from '../assets/images/bluesneakers.png'
    import pic5 from '../assets/images/sneakers.png'
    import pic6 from '../assets/images/applewatch.png';

export default {
    name:'purchase',
    data(){
        return{
        // product: this.$store.getters.product(this.$route.params.id),
        products:[
        {
          shopname: 'Start Kits',
          name: 'Ultra-modern ladies bag',
          img: pic2,
          itemname:'Shark Edges snea...',
          mainprice:'NGN 15,000',
          description:'This ultra-modern ladies bag, <span>size 44</span>,' 
          + 'made in Italy, gives you a classic look and confidence boost,anywhere in the world.',
          productId:1,
        },
        {
          shopname: 'RCustomNG',
          img: pic6,
          itemname:'Apple Watch',
          mainprice:'NGN 97,000',
          productId:2,
        },
        {
          shopname: 'Fez World',
          img: pic4,
          itemname:'Sneaker Shoes',
          mainprice:'NGN 6,000',
          productId:3,
        },
        {
          shopname: 'Stlyewithdivas',
          img: pic2,
          itemname:'Ultra-modern ladies b...',
          mainprice:'NGN 3,000',
          productId:4,
        },
        {
          shopname: 'RCustomNG',
          img: pic1,
          itemname:'Bluetooth smart watch',
          mainprice:'NGN 3,000',
          productId:5,
        },
        {
          shopname: 'Tiyelshop',
          img: pic3,
          itemname:'Burberry T-shirts',
          mainprice:'NGN 11,000',
          productId:6,
        },
      ]
    }
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

/* Main */
main{
    position: relative;
    margin: 21.5% 0;
    z-index: -1;
}




/* Section1 */
#section1 .container{
    position: relative;
    width: 100%;
}
#section1 .arrowleft{
    position: absolute;
    top: 45%;
    left: 26px;
}
#section1 .arrowright{
    position: absolute;
    top: 45%;
    right: 8px;
}
#section1 .bottom{
    position: absolute;
    text-align: center;
    bottom: 8px;
    background-color: #AAAAAA;
    border-radius: 10px;
    opacity: 0.8;
    color: white;
    padding:10px 45px;
    padding-bottom: 0px !important;
    left: 12.5%;
    margin-bottom: 5px;
    font-size: 16.5px;
}
#section1 .arrow1{
    max-width: 50%;
}

.product{
    display: block;
    /* margin:0 auto; */
    width: 100%;
    object-fit: cover;
}

.buttons{
    margin: 13px;
    width: 95%;
}

.buttons div{
    display: inline-block;
    justify-content: space-evenly;
    text-align: center;
    margin:9px 2px;
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

.line{
    border: 4px solid rgb(229, 229, 229);
}
.thin-line{
    display: block;
    margin: 0 auto;
    border: 0.2px solid rgb(239, 239, 239);
    width: 85%;
}

/* section2 */

#section2 h2{
    margin:16px 25px;
    font-size: 16.5px;
}
#section2 h3{
    margin:16px 25px;
    font-size: 16.5px;
    line-height: 25px;
}
#section2 span{
    font-weight: bolder;
}

/* Section3 */
#section3 h2{
    margin:16px 25px;
    font-size: 16.5px;
}
#section3 .color-box{
    width: 100%;
}
#section3 .box{
    margin: 0 !important;
    padding: 0 !important;
}
#section3 ul{
    width: 100%;
}
#section3 ul li{
    display: inline-block;
    margin: 0 5px !important;
}
#section3 ul li img{
    width: 50%;
}


</style>