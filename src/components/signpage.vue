<template>
    <div class="container">
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link >
            <p>Welcome</p>
        </header>
        <main>
            <img src="../assets/images/B1white.png" alt="">
            <button class="button1">Sign up</button>
            <h5>Already have an account?</h5>
            <button class="button2">Sign in</button>
            <h5>OR</h5>
            <button class="button3">Sign in with <span>Google</span> </button>
            <p>Please note that by creating an account, you agree to our
               <router-link to="../terms"> Terms of service</router-link> and <router-link to="../privacy">Privacy policy</router-link></p>
        </main>
    </div>
</template>

<script>

</script>

<style scoped>

.container{
    background: url(../assets/images/woman.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

 header{
    /* position: fixed; */
    top:0;
    display: inline-flex;
    width:100%;
    padding-top:16px;
    padding-bottom:6px !important;
}
header p{
    color: rgb(255, 255, 255);
    font-size:17.5px;
    margin-left:25%;
    right:0;
}
a img{
    width:30px;
    height:20px;
    left: 0px !important;
} 

main{
    margin-top: 72%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
}

main img{
    max-width: 30%;
    margin: 0 auto;
}

main a{
    color: red;
}

main button{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
}

main .button1{
    border: none;
    background-color: red;
    color: white;
    border-radius: 10px;
    height: 35px;
    outline: none;
}
main .button2{
    color:red;
    border: 1px solid red;
    background-color: white;
    border-radius: 10px;
    height: 35px;
    outline: none;
}

main .button3{
    color:black;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    height: 35px;
    outline: none;
}
main .button3 span{
    font-weight:bolder;
}
main h5{
    font-size: 15px;
}
main p{
    position: absolute;
    font-size: 14px;
    bottom: 0%;
    margin: 9px;
}




@media only screen  and (min-width:375px)  {
    main {
        margin-top: 80%;
    }
}


@media only screen  and (max-width:375px) {
    main{
        margin-top: 73%;
    }
    main p{
        position: absolute;
        bottom: 0%;
    }
}
@media only screen  and (max-width:375px) and (height: 812px){
    main{
        margin-top: 85%;
    }
    main button{
        margin-bottom: 2px;
    }
}

@media only screen  and (max-width:320px) {
    main {
        margin-top: 72%;
    }
    main p{
    font-size: 10px;
    }
    main .button1,main .button2,main .button3{
    width: 90%;
    height: 27px;
}
}


</style>