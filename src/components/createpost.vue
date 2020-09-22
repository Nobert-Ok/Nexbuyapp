<template>
   <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path 107.png" alt=""></router-link>
            <p>Creating  your post</p>
        </header>
        
        <section class="sec1">
                <div class="full-details">
                    <div>
                        <img class="profile-picture" v-bind:src= img alt="">
                    </div>
                    <div class="shop-details">
                        <h5>{{shopname}} <img class='icon' src="../assets/images/store.png" alt=""></h5>
                        <h4>{{item1}}  |  {{item2}}  |  {{item3}}</h4>
                    </div>
                    <textarea name="" id="" cols="30" rows="10">Start sharing something</textarea>
                </div>
        </section>
        <section class="sec2">
            <h5><img src="../assets/images/Subtraction4.png" alt="" class="images">Add a gallery photo</h5>
            <div class="bb"></div>
            <h5><img src="../assets/images/nouncamera.png" alt="" class="images">Use camera</h5>
            <div class="bb"></div>
            <h5><img src="../assets/images/addfriend.png" alt="" class="images">Tag stores or people</h5>
            <div class="bb"></div>
            <h5><img src="../assets/images/excite.png" alt="" class="images">Add a feeling or activity</h5>
        </section>
  </div>
</template>



<script>
import pic1 from "../assets/images/image2.png"


export default {
 data(){
     return{
        shopname: 'Start Kits',
        img: pic1,
        item1:'Shoes',
        item2:'Bags',
        item3:'Clothes',
    }
 }
}
</script>



<style scoped>
.bb{
  width: 80%;
  border: 1px solid #f6f6f6;
  margin: 2% 10%;
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
    height:30px;
    left: 0px !important;
}

/* SEC 1 */
.sec1{
    z-index: -1;
    width: 100%;
    margin-top: 13%;
    background: #EEEEEE;

}
.sec1 h1{
    text-align: left;
    font-size: 13.5px;
    margin: 20px 5%;
}
.sec1 .full-details{     
    margin-left: 10%;
   
}
.sec1 .full-details div{
    display: inline-block;
    justify-items: center;
    margin-top: 15%;
}
.sec1 .full-details .profile-picture{
    /* position: relative; */
    margin-top: -27% !important;
    max-width: 60%;
}
.sec1 .full-details .icon{
    margin-left: 4px;
    max-width: 13.5%;
}
.sec1 .full-details h5{
    color: black;
    font-size: 11.5px;
}
.sec1 .full-details h4{
    font-size: 11.5px;
}

.sec1 .full-details .shop-details{
    margin-left: -15px;
}

.sec1 textarea{
    border: none;
    background: #EEEEEE;
    color: #BFBFBF;
    margin: 5% 0;
    outline: none;
    width: 86%;
}
.sec2{
    margin: 4% 0;
}
.sec2 h5{
    font-size: 20px;
}
.sec2 .images{
    max-width: 8%;
    margin: 4% 10%;
}



</style>

