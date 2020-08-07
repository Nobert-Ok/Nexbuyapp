<template>
   <div>
    <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>NEXBUY Stores</p>
    </header>
    
    <section class="s1">
        <div class="gray-background"></div>
        <div id="sec1">
            <h3>Want to grow your business?</h3>
            <h5>Create a store and let Nexbuy take you on a success ride!</h5>
            <button>Create my store</button>
        </div>
        <div class="gray-background"></div>
        <main id="sec2">
            <div class="text-introduction">
                <h1>You may need items from this stores</h1>
            </div>
            <div class="sec3" v-for="(obj,key) in details" :key="key">
                <div>
                    <img class="profile-picture" v-bind:src= obj.img alt="">
                </div>
                <div class="shop-details">
                    <h5>{{obj.shopname}} <img class='icon' src="../assets/images/storered.png" alt=""></h5>
                    <h4>{{obj.item1}}  |  {{obj.item2}}  |  {{obj.item3}}</h4>
                    <h3>{{obj.text}}</h3>
                </div>
                <div>
                    <button>Follow Store</button>
                </div>
            </div>
        </main>
    </section>
    <storefooter></storefooter>
  </div>
</template>


<script>
import storefooter from "./storefooter"
import pic1 from "../assets/images/image2.png"
import pic2 from "../assets/images/image1.png"
import pic3 from "../assets/images/image3.png"

export default {
    components:{
        "storefooter":storefooter
    },
    data(){
        return{
            details:[
                {
                    shopname: 'Start Kits',
                    img: pic1,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic2,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic3,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic1,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic2,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic3,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic1,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic2,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
                },
                {
                    shopname: 'Start Kits',
                    img: pic3,
                    item1:'Shoes',
                    item2:'Bags',
                    item3:'Clothes',
                    text:'Your no. 1 official online store. We... ',
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
        padding:15px;
        padding-bottom:5px;
        width:100%;
    }
    header p{
        color: white;
        font-size:15.5px;
        margin-left:25%;
        right:0;
    }
    a img{
        width:30px;
        height:20px;
        left: 0px !important;
    }
    .group304{
        max-width:100%;
        height:auto;
        margin-bottom:20px;
    }

    /* Section 1 */
    section{
        margin-top: 60px;
        margin-bottom: 18%;
    }
    section #sec1{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        text-align: center;
    }
    #sec1 h3{
        font-size: 15.5px;
        text-align: center;
        margin-bottom: 12px;
    }
    #sec1 h5{
        font-size: 9.5px;
        margin-bottom: 15px;

    }
    #sec1 button{
        border:none;
        background: red;
        border-radius: 10px;
        width: 50%;
        color: white;
        padding: 6px;
        font-size: 13.5px;

    }
    .gray-background{
        width: 100%;
        border: 4px solid rgb(229, 229, 229);
    }
    
    /* Section 2 */
   main{
       margin: 15px;
       position: relative;
       z-index: -1;
   }
   main h1{
       text-align: left;
       font-size: 13.5px;
       margin: 20px 0;
   }
   main .sec3{     
       margin-left: 5%;
   }
   main .sec3 div{
       display: inline-block;
       justify-items: center;
   }
   main .sec3 .profile-picture{
       position: relative;
       top: -20px !important;
       max-width: 45%;
       /* margin: 10px 0;*/
   }
   main .sec3 .icon{
       margin-left: 4px;
       max-width: 11.5%;
   }
   main .sec3 h5{
       color: red;
       font-size: 10.5px;
   }
   main .sec3 h4{
       font-size: 8.5px;
   }
   main .sec3 h3{
       font-size: 6.5px;
   }
   main .sec3 .shop-details{
       margin-left: -30px;
       /* margin-top: -50px; */
   }
   main .sec3 button{
        position: relative;
        top: -25px !important;
        border:none;
        background: #DFF2FF;
        border-radius: 10px;
        width: 100%;
        color: #1492E6;
        padding: 6px;
        font-size: 12.5px;
        right: -45%;
   }



</style>