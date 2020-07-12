<template>
    <!-- Deals of the Day -->
        <section class="sec3">
            <div class="card rounded">
                <div class="card-header">
                    Deal of the Day!
                </div>
                <div class="maincontainer">
                    <div class="contain" v-for="(obj,key) in dealsjson" :key="key">
                        <a href="#">
                            <div class="card" id="card" style="width: 8.8rem;">
                                <img v-bind:src= 'obj.img' alt="">
                                <div class="discount">{{obj.discount}}  off</div>
                                <div class="card-body">
                                    <p class="card-text" id="text" style="color: red;font-size: 9px;">{{obj.shopname}}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"
                                                viewBox="0 0 12.79 12.79">
                                                <g transform="translate(0 0)">
                                                    <g transform="translate(0 0)">
                                                        <path d="M12.79-11.21H0V-24H12.79Z" transform="translate(0 24)"
                                                            fill="none" fill-rule="evenodd" />
                                                        <path
                                                            d="M12.362,7.311a1.048,1.048,
                                        0,0,1-.174-1.221,1.049,1.049,0,0,0,.029-.923,1.034,1.034,0,0,0-.711-.583,1.038,1.038,0,0,1-.8-.932,
                                        1.042,1.042,0,0,0-.471-.792,1.025,1.025,0,0,0-.91-.1A1.027,1.027,0,0,1,8.15,2.41a1.027,1.027,0,0
                                        ,0-1.642,0,1.027,1.027,0,0,1-1.173.347,1.025,1.025,0,0,0-.91.1,1.042,1.042,0,0,0-.471.792,1.038,
                                        1.038,0,0,1-.8.932,1.034,1.034,0,0,0-.711.583,1.048,1.048,0,0,0,.029.923A1.048,1.048,0,0,1,2.3,
                                        7.311,1.046,1.046,0,0,0,2.53,8.95a1.044,1.044,0,0,1,.508,1.122,1.048,1.048,0,0,0,.231.894,1.028,
                                        1.028,0,0,0,.845.357,1.032,1.032,0,0,1,1.029.667,1.036,1.036,0,0,0,.673.626,1.025,1.025,0,0,0,
                                        .9-.16,1.026,1.026,0,0,1,1.223,0,1.029,1.029,0,0,0,1.576-.466,1.032,1.032,0,0,1,1.029-.667,1.028,
                                        1.028,0,0,0,.845-.357,1.048,1.048,0,0,0,.231-.894,1.044,1.044,0,0,1,.508-1.122,1.046,1.046,0,0,0,
                                        .233-1.639ZM6.518,8.937l.274.257.269-.263L9.994,6.058l-.55-.594-2.651,2.6L5.2,6.6,4.665,7.2Z"
                                                            transform="translate(-0.934 -0.934)" fill="#4772eb"
                                                            fill-rule="evenodd" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span></p>
                                    <p class="card-title" style="font-weight: bolder;">{{obj.itemname}}</p>
                                    <p class="card-text" style="font-size: 10px;">{{obj.mainprice}}<span class="naira">{{obj.discountedprice}}</span></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import pic1 from '../assets/images/shirts.png'
import pic2 from '../assets/images/bag.png'
import pic3 from '../assets/images/watch.png'



export default {
  data () {
    return {
      dealsjson:[
        {
          discount:'60%',
          shopname: 'Tiyelshop',
          img: pic1,
          itemname:'Burberry T-shirt',
          mainprice:'NGN 11,000',
          discountedprice:' NGN 27,500'
        },
        {
          discount:'73%',
          shopname: 'StylewithDiva',
          img: pic2,
          itemname:'Ladies Bag',
          mainprice:'NGN 16,000',
          discountedprice:' NGN 50,300'
        },
        {
          discount:'70%',
          shopname: 'RCustomNG',
          img: pic1,
          itemname:'Bluetooth smart watch',
          mainprice:'NGN 3,000',
          discountedprice:' NGN 33,000'
        }
      ],
    }
  }
}
</script>

<style>

</style>
