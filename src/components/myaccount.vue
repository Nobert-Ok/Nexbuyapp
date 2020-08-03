<template>
    <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link >
            <p>Account Profile</p>
        </header>

        <div id="edit">
            <img src='../assets/images/profilepicture.png' alt="profile" class="profile">
            <!-- <input type="File"> -->
            <a @click="onUpload"> <img src='../assets/images/pencil.png' alt="pencil" class="pencil">Edit profile</a>
        </div>
        <div class="naming">
            <h2>James Etubo</h2>
            <h5>RCustomNG  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.554 29.63">
                        <g id="noun_Shop_2647565" transform="translate(-5.016 -13.71)">
                            <g id="Group_11" data-name="Group 11" transform="translate(5.016 13.71)">
                                <path id="Path_48" data-name="Path 48"
                                    d="M39.775,13.71H5.811a.792.792,0,0,0-.795.788v5.323A6.35,
                        6.35,0,0,0,6.9,24.337V36.9A6.473,6.473,0,0,0,13.4,43.339H32.044A6.473,6.473,0,0,0,38.538,36.9V24.53c0-.019,
                        0-.037-.006-.056a6.349,6.349,0,0,0,2.038-4.653V14.5A.792.792,0,0,0,39.775,13.71ZM27.659,19.821a4.866,4.866,
                        0,0,1-9.732,0V15.286h9.732ZM6.606,15.286h9.731v4.535a4.866,4.866,0,0,1-9.731,0ZM20.749,41.764V35.236H24.98v6.528H20.749Zm16.2-4.862a4.888,
                        4.888,0,0,1-4.9,4.861H26.57V34.448a.792.792,0,0,0-.795-.788H19.954a.792.792,0,0,0-.795.788v7.316H13.4a4.888,4.888,0,0,1-4.9-4.861V25.492a6.474,
                        6.474,0,0,0,8.64-2.6,6.479,6.479,0,0,0,11.321,0,6.464,6.464,0,0,0,8.494,2.669V36.9ZM38.98,19.821a4.866,4.866,0,0,1-9.732,0V15.286H38.98Z"
                                    transform="translate(-5.016 -13.71)" />
                            </g>
                        </g>
                    </svg>
            </h5>
            <p> <span style="font-weight:bold;">95</span>  <span style="color:#AAA;">total sales </span> <img src="../assets/images/ellipse.png" class="dot"><span style="font-weight:bolder;">326</span>  <span style="color:#AAA;">followers</span></p>
        </div>
        <div class="premium">
            <div id="topdiv"></div>
            <p><img src="../assets/images/premium.png"> GET YOUR PREMIUM ACCOUNT</p>
            <div></div>
            <p id='walletbalance'>Your wallet balance is <span>NGN 1,700</span></p>
        </div>
        <div class="detailed-analysis"></div>
            <div class="info">
                <ul>
                    <li><img src="../assets/images/store.png"> My Store <img src="../assets/images/arrow.png" class="arrow"></li>
                    <div></div>
                    <li><img src="../assets/images/heart.png"> My wish list <img src="../assets/images/arrow.png" class="arrow"></li>
                    <div></div>
                    <li><img src="../assets/images/order.png"> Order Details <img src="../assets/images/arrow.png" class="arrow"></li>
                    <div></div>
                    <li><img src="../assets/images/transact.png"> Transaction history <img src="../assets/images/arrow.png" class="arrow"></li>
                </ul>
            </div>
        <div class="detailed-analysis"></div> 
        <div class="info2">
                <a> <img src='../assets/images/pencil.png' alt="pencil" class="pencil">Edit contact</a>

                <ul >
                    <li><img src="../assets/images/call.png"> +234 810 491 5691 </li>
                    <div></div>
                    <li><img src="../assets/images/atsign.png"> Itubolite247@gmail.com </li>
                    <div></div>
                    <li><img src="../assets/images/location.png"> Fhh, Fvb, Umuahia, Abia</li>
                    <div ></div>
                </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    // import 'babel-polyfill'; // es6 shim
	// import Vue from 'vue';
    // import myUpload from 'vue-image-crop-upload';
    import footer from '../components/footer';
export default {
    components:{
        "app-footer": footer
    }
}      
</script>

<style scoped>

header{
    background-color: #AAA;
    display: inline-flex;
    padding:25px;
    width:100%;
    padding-top:16px;
    padding-bottom:100px !important;
    position: relative;
}

h2{
    font-size: 24.5px;
    font-weight: bolder;
}
h5{
    font-size: 18.5px;
}

header p{
    color: white;
    font-size:17.5px;
    margin-left:17%;
}

#edit {
    position: static;
    margin-top: 20px;
    list-style: none;
    width: 100%;
}

#edit a{
    margin-left: 50%;
    color: red;
    font-size: 16.5px;
    padding-left: 5px;
}
#edit .pencil{
    width:29px;
    height:20px;
    padding-right: 7px;
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
}

.profile{
    height: 150px;
    width: 150px;
    top: 14%;
    position: absolute;
    margin-left: 30px;
}
.dot{
    width:7px; 
    height:7px;
    margin-left:10px;
    margin-right:10px;
}

.naming{
    margin-top: 35px;
    margin-left: 35px;
}
.naming svg{
    width: 16px;
    height: 16px;
}

.premium div{
    width: 80%;
    border: 0.5px solid rgb(234, 234, 234);
    margin-left: 35px;
}

.premium p{
    padding-top: 18px;
    margin-left: 35px;
    font-size: 14.5px;
}

.premium #topdiv{
    margin-top: 25px;
}

.premium img{
    height: 20px;
    width: 20px;
}
.premium #walletbalance{
    width: 70%;
    border: 1px solid #FFEFEF;
    border-radius: 10px;
    background-color: #FFEFEF;
    color: #FF0000;
    padding-bottom:10.5px;
    padding-top:10.5px !important;
    margin: 35px auto;
    text-align: center;

}
.premium #walletbalance span{
    font-weight: bolder;
}

.detailed-analysis{
    background: rgb(228, 226, 226);
    width: 100%;
    height: 8px;
    margin-bottom: 10px;
}

.info{
    width: 90%;
    margin-left: 35px;
}
.info ul{
   list-style: none;
}
.info ul li{
    padding: 15px;
    font-size: 17.5px;
}
.info img{
    width: 19px;
    height: 18px;
    margin-right:8px;
}
.info div{
    width: 90%;
    border: 0.1px solid #f6f6f6;
}
.info ul li .arrow{
    position:absolute;
    height: 13px;
    width: 13px;
    right: 10%;
}

.info2{
    width: 90%;
    margin-left: 35px;
}

.info2 a{
    margin-left: 50%;
    color: red;
    font-size: 16.5px;
    margin-top: 15px;
    padding-left: 5px;
    padding-top: 15px;

}

.info2 ul{
   list-style: none;
   margin-bottom:60px;
}
.info2 ul li{
    padding: 15px;
    font-size: 17.5px;

}
.info2 img{
    width: 16.5px;
    height: 19px;
    margin-right:8px;
}
.info2 div{
    width: 90%;
    border: 0.1px solid #f6f6f6;
}






</style>