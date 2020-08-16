<template>
  <div>
      <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>Your Cart</p>
    </header>
    <section class="full-details">
        <img class="cart-image" src="../assets/images/emptycart.png" alt="">
        <h1>Oops. Your cart is empty.</h1>
        <h2>Start shopping to add items!</h2>
        <button>Start Shopping</button>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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


/* section 1 */

section{
    width: 100%;
    text-align: center;
    margin-top: 20%;
}

section .cart-image{
    max-width:75%;
    margin: 8% auto;
}
section h1{
    color: #00386A;
    font-size: 27.5px;
    margin-bottom: 13px;
}
section h2{
    font-size: 16.5px;
    margin-bottom: 17px;
    color: black;
}
section button{
    border:none;
    background: red;
    border-radius: 10px;
    width: 40%;
    color: white;
    padding: 9px;
    font-size: 13.5px;
}



</style>