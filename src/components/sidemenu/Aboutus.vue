<template>
   <div>
    <header>
            <a @click="$router.go(-1)"><img src="../../assets/images/Path50.png" alt=""></a>
            <p>About Us</p>
    </header>
    <section id="sec1">
        <img src="../../assets/images/Group304.png" alt="" class="group304">
        <h4>Who are we</h4>    
        <p>We are NEXBUY DISTRICT, an affiliate marketing
        and tech startup whose mission is to provide
        indispensable solutions to low sales, low profit
        and poor brand awareness of businesses of any
        scale in Nigeria and abroad. At Nexbuy District, 
        we have the right tech tools and talent sets to
        help reach your business targets and accomplish
        annual revenue goals. Together, we can make
        the globe a tech-transactional one. </p>
        <img src="../../assets/images/OBJECTS.png" alt="" class="group304">
        <h4>Why NEXBUY</h4>    
        <p>Recently, there has been rapid increase in the number
            of student-entrepreneurs and small businesses
            across Nigeria and beyond. However, it has been
            observed that most of these businesses make little
            or no profits at all. This is due to the fact that their
            products/services are not targeted to the right 
            and potential market. Thus they experience low
            sales, little returns on investment (ROI) which in
            turn leads to low profits. Attempts to solve this 
            problem led to the birth of NEXBUY DISTRICT. </p>
    </section>
    <section id="sec2">
        <p id="what">What sets us Apart</p>
        <div class="enclosing">
            <img src="../../assets/images/telescope.png" alt="">
            <h2>Our Vision</h2>
            <p class="pad" style="color:#2A2A2A;">A whole new tech-transactional world.</p>

            <img src="../../assets/images/flat.png" alt="">
            <h2>Our Mission</h2>
            <p style="color:#292929;">Offering trust in mediation and providing the right
                number of prospects.</p>
            <p class="pad">"To provide indispensable solutions to low sales, low
                profit and poor brand awareness of businesses of
                any scale in Nigeria (and abroad).</p>

            <img src="../../assets/images/flat.png" alt="">
            <h2>Our Insight</h2>
            <p style="color:#292929;">Let's connect you better.</p>
            <p class="pad">To bridge the gap between brand owners and
            target customers; offer the desired number of
            customers to our prospects.  We are bringing to you
            the future of Ads and marketing, grab it and be our
            gest."</p>

            <img src="../../assets/images/rocket.png" alt="" >
            <h2>Our Motto</h2>
            <p>...Linked sales, pinned customers.</p>

        </div>
    </section>
  </div>
</template>



<script>
export default {

}
</script>



<style scoped>
    header{
        background-color: #AAA;
        display: inline-flex;
        padding:15px;
        width:100%;
    }
    header p{
        color: white;
        font-size:18.5px;
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

    #sec1{
        padding:20px;
    }

    #sec1 h4{
        color: #00386A;
        font-size:20px;
    }
    #sec1 p{
        color:black;
        font-size:11px;
        margin-right:35px;
        text-align:justify;
        line-height:20px;
        margin-bottom:30px;
    }
    #sec2 #what{
        width:100%;
        background:red;
        color:white;
        padding:20px;
        text-align:center;
        font-size:20px;
    }
    .enclosing{
        padding: 30px;
    }
    #sec2 img{
        width:35px;
    }
    #sec2 h2{
        font-size:18px;
        color:black;
    }
    #sec2 p{
        font-size:11px;
        color:#2A2A2A;

    }
    #sec2 .pad{
        margin-bottom:50px;
    }

</style>