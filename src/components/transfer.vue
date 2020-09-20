<template>
   <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>Mobile Transfer </p>
        </header>
        
        <section class="sec1">
            <div class="bb"></div>
            <div class="sec1-container">
                <h5>
                    Dear customer, you are to pay NGN 18,000 or it's equivalent in another currency to:
                </h5>
                <div class="block-details">
                    <p>NEXBUY DISTRICT</p>
                    <p class="numbers">1221603625</p>
                    <p>ACCESS BANK PLC</p>
                </div>
            </div>
        </section>
        <div class="bbb"></div>
        <section class="sec2">
            <h4>To help us confirm your payment, kindly fill our mobile transfer form.</h4>
            <div class="card">
                <div class="card-header">
                    Mobile transfer form
                </div>
                <div class="card-body">
                    <form action="">
                        <select id="customer">
                            <option value="">Customer Bank</option>
                        </select>
                        <input type="text" class="input" placeholder="Account name">
                        <div class="side-side">
                           <select id="select1">
                            <option value="">NGN</option>
                            </select>
                            <input class="input2" type="text" placeholder="Amount Transfered"> 
                        </div>
                        <p>Don't want to create an account or sign in?</p>
                        <button>Complete Purchase</button>
                    </form>
                </div>
            </div>
        </section>
  </div>
</template>



<script>

export default {
 
}
</script>



<style scoped>
.bb{
  width: 100%;
  border: 4px solid #e3e3e3;
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
.sec1{
    margin-top: 18%;
    margin-bottom: 20px;
}

.sec1-container{
    margin: 6%;
    margin-top: 7%;
}
.sec1-container h5{
    font-size: 15.5px;
    margin-bottom: 10%;
    text-align: center;
}

.block-details{
    margin: 0 auto;
    border: 2px solid #00386A;
    border-radius: 10px;
    width: 69%;
    text-align: center;
    color: #00386A;
    padding: 30px;
    margin-bottom: 14%;
}

.block-details p{
    padding: 0 !important;
    margin: 0 !important;
    font-size: 15px;
}
.block-details .numbers{
    font-size: 23px;
}

.sec2 .card{
    position: relative;
    z-index: 1;
    display: flex;
    margin: 0 auto;
    width: 19rem;
    margin-bottom: 20%;
    border-radius: 10px;
}

.sec2 h4{
    font-size: 15.5px;
    margin: 8% 5%;
    text-align: center;
}
.sec2 .card-header{
    background-color: #AAAAAA;
    color:white ;
    text-align: center;
    font-size: 18.5px;
    padding: 20px;
}
.sec2 select{
    display: flex;
    margin: 0 auto;
    border: none;
    border-bottom: 3px solid #707070;
    color: #BFBFBF;
    margin-bottom: 15%;
    font-size: 17.5px;
    padding: 5px 0;
    width: 97%;
}
.side-side{
    display: inline-flex;
    margin: 0 auto;
}
.sec2 #select1{
    border: none;
    border-bottom: 3px solid #707070;
    color: #BFBFBF;
    margin-bottom: 15%;
    font-size: 17.5px;
    padding: 5px 0;
    width: 35%;
}
.sec2 .input{
    display: flex;
    margin: 0 auto;
    border: none;
    border-radius: none ;
    border-bottom: 0.5px solid #707070;
    color: #BFBFBF;
    margin-bottom: 15%;
    padding: 5px 0;
    font-size: 17.5px;
    width: 97%;
}

.sec2 .input2{
    border: none;
    border-radius: none ;
    border-bottom: 0.5px solid #707070;
    color: #BFBFBF;
    margin-bottom: 15%;
    margin-left: 9%;
    font-size: 17.5px;
    width: 100%;
    padding: 5px 0;
}

.sec2 button{
    display: flex;
    margin: 0 auto;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 19px;
    background: red;
    padding: 10px 35px;
    margin-bottom: 20px;
    text-align: center;
}
.sec2 p{
    text-align: center;
    font-size: 10.5px;
    margin: 0 10%;
    margin-bottom: 7%;
}

button, input, select{
    outline: none;
}


</style>

