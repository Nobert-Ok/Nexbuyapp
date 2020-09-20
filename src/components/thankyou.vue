<template>
    <div>
        <header>
            <router-link to="/"><img src="../assets/images/redarrow.png" alt=""></router-link >
        </header>
        <main>
            <img src="../assets/images/bigbox.png" alt="">
            <h5>You will be notified within 48hrs on your payment status.</h5>
            <h4><span>Contact us</span> if you have any issues</h4>
            <button>Continue Shopping</button>
        </main>
    </div>
</template>

<script>

export default {
    name:'purchase',
    data(){
        return{
        // product: this.$store.getters.product(this.$route.params.id),
        }
    }
}      
</script>

<style scoped>

header{
    top:0;
    background-color: rgb(255, 255, 255);
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
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

main img{
    margin: 0 auto;
    margin-top: 30%;
    max-width: 65%;
    margin-bottom: 10%;
}

main h5, main h4{
    font-size: 14.5px;
}

main h5{
    margin-bottom: 8%;
    padding:0 15%;
}
main h4{
    padding:0 2%;
}

main button{
    width: 65%;
    margin: 0 auto;
    margin-top: 4%;
    border: none;
    background: red;
    border-radius: 10px;
    color: white;
    padding: 10px;
}

main span{
    color: red;
}



/* Section1 */



</style>