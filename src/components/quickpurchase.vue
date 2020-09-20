<template>
   <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>Quick Purchase</p>
        </header>
        
        <section class="sec1">
            <div class="bb"></div>
            <div class="sec1-container">
                <h5>
                   We understand you're in a hurry.
                </h5>
                <h4>However, in order to enable us contact you, carefully fill our quick purchase form below.</h4>
            </div>
            <div class="card">
                <div class="card-header">
                    Quick Purchase form
                </div>
                <div class="card-body">
                        <form action="">
                            <input type="text" class="input" placeholder="Full name">
                            <div class="side-side">
                                <select id="select1">
                                    <option value="">+234</option>
                                </select>
                                <input class="input2" type="text" placeholder="Mobile Number"> 
                            </div>
                            <input type="text" class="input" placeholder="Account name">
                            <p>Don't want to create an account or sign in?</p>
                            <b-button v-b-modal.modal-center variant="danger">Use Quick Purchase</b-button>
                        </form>
                    </div>
            </div>
        </section>
        <div>
            <b-modal 
            size="huge" id="modal-center"  
            centered 
            title="Choose Payment Method" 
            hide-header-close
            :header-bg-variant="headerBgVariant"
            :header-text-variant="headerTextVariant"
            :hide-footer="true">
                <button class="debit">Debit/Credit Card</button>
                <button class="mobile">Use Mobile Tranfer</button>
            </b-modal>
        </div>
  </div>
</template>



<script>

export default {
 data(){
     return{
        show: false,
        headerBgVariant: 'secondary',
        headerTextVariant: 'light',
        okdisabled: true,
        canceldisabled: true,
    }
 }
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
    font-size: 29.5px;
    margin: 0 1%;
    margin-bottom: 8%;
    text-align: center;
    color: #00386A;
}

.sec1 .card{
    position: relative;
    z-index: 1;
    display: flex;
    margin: 0 auto;
    width: 19rem;
    margin-bottom: 20%;
    border-radius: 10px;
}

.sec1 h4{
    font-size: 16.5px;
    margin: 8% 4%;
    text-align: center;
}
.sec1 .card-header{
    background-color: #AAAAAA;
    color:white ;
    text-align: center;
    font-size: 18.5px;
    padding: 20px;
}
.sec1 select{
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
.sec1 #select1{
    border: none;
    border-bottom: 3px solid #707070;
    color: #BFBFBF;
    margin-bottom: 15%;
    font-size: 17.5px;
    padding: 5px 0;
    width: 35%;
}
.sec1 .input{
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

.sec1 .input2{
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

.sec1 button{
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
.sec1 p{
    text-align: center;
    font-size: 12.5px;
    margin: 0 10%;
    margin-bottom: 7%;
}

button, input, select{
    outline: none;
}

.debit{
    display: flex;
    margin: 10% auto;
    text-align: center;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    background: red;
    padding: 11px 35px;
    width: 90%;
}

.mobile{
    display: flex;
    margin: 10% auto;
    border: 1px solid #F20C0C;
    border-radius: 10px;
    color: #F20C0C;
    font-size: 17px;
    background: #FFEFEF;
    padding: 10px 35px;
    margin-bottom: 20px;
    text-align: center;
    width: 90%;
}

</style>

