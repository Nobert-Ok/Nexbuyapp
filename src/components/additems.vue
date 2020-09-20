<template>
   <div>
        <header>
            <router-link to="/"><img src="../assets/images/Path50.png" alt=""></router-link>
            <p>Upload item</p>
        </header>
        
        <section class="sec1">
            <div class="bbb"></div>
            <h5>Enter Product Details</h5>
            <div class="bb"></div>
            <form action="">
                <input id="productname" type="text" placeholder="Product Name">
                <textarea name="" id="productdescription" cols="30" rows="10" placeholder="Product Description"></textarea><br>
                <div style="margin-bottom: 7%;" class="checkboxes">
                    <label class="container"> <h3>Local Brand?(These are hand-made items)</h3>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    </label>

                    <label class="container"><h3> Make a <span> deal for the day?</span></h3>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    </label>

                    <label class="container"><h3><span>Advertise</span> in slider?</h3>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    </label>

                    <label class="container"><h3>Place on <span>pre-order?</span></h3>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div class="selectinput" style="margin-bottom: 7%;">
                    <select name="" id="" class="select1">
                        <option>NGN</option>
                        <option>USD</option>
                    </select>
                    <input type="text" name="" id="" placeholder="Product first price" class="firstprice">
                    <br><br>
                    <select name="" id="" class="select1">
                        <option>NGN</option>
                    </select>
                    <input type="text" name="" id="" placeholder="Product first price" class="firstprice">
                </div>
                <div class="othercontents">
                    <select name="" id="" class="select2">
                            <option>Category</option>
                    </select>
                    <select name="" id="" class="select3" style="margin-bottom: 7%;">
                            <option>Sub-Category</option>
                    </select>
                    <button class="button1">Add Size Variant</button>
                    <button class="button1" style="margin-bottom: 7%;">Add Color Variant</button>
                    <h4>Note that the total quantity is automatically calculated as the 
                        number of calculate variants you selected
                    </h4>
                    <input type="text" placeholder="Quantity in stock" class="quantity">
                    <h4>To make your product stand-out, add a minimum of 2 high-qualit outstanding images</h4>
                    <span class="span2">0 of 6 added</span>
                    <button class="button2">Add Product Images</button>
                    <button class="button3">Upload Item</button>
                </div>
            </form>
        </section>
  </div>
</template>



<script>

export default {
 data(){
     return{
    }
 }
}
</script>



<style scoped>
.bb{
  width: 80%;
  border: 1px solid #f6f6f6;
  margin: 4% 10%;
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

.sec1 #productname, #productdescription{
    background:#ececec;
    border-radius: 10px;
    width: 100%;
    margin: 5% 0;
    border: 0.5px solid #4141417b;
    color: white;
    padding: 20px;
    outline: none;
}
.sec1 .quantity{
    background:#ececec;
    border-radius: 10px;
    width: 100%;
    border: 0.5px solid #4141417b;
    color: white;
    padding: 20px;
    outline: none;
    margin-bottom: 7%;
}

.sec1 h5{
    color: blue;
    font-size: 25px;
    text-align: center;
    margin-top: 7%;
}

.sec1 #productname{
    height: 40px;
    color: black !important;
}
.sec1 .quantity{
    height: 40px;
    color: black !important;
}
.sec1 textarea{
    height: 150px;
    color: black !important;
}

form{
    z-index: -1;
    margin: 0 10%;
    margin-bottom: 20px;
}

.sec1 .select1{
    z-index: -1;
    left: 0;
    background: #b6b6b6;
    width: 20%;
    height: 40px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}


.sec1 .firstprice{
    z-index: -1;
    margin-left:-4px;
    background: #ececec;
    width: 75%;
    height: 40px;
    border: 1px solid #898989;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding:0 30px;
    outline: none;

} 
 
.sec1 .select2, .select3{
    width: 100%;
    background: #ececec;
    margin: 3% 0;
    border-radius: 10px;
    height: 40px;
} 
.sec1 button{
    outline: none;
}
.sec1 .button1{
    width: 100%;
    margin: 3% 0;
    border-radius: 10px;
    height: 80px;
    background: #FFEFEF;
    color: #F20C0C;
    border: 1px solid #F20C0C;
    font-weight: bolder;
} 
.sec1 .button2{
    width: 100%;
    margin: 3% 0;
    margin-top: 0;
    border-radius: 10px;
    height: 50px;
    background: #FFEFEF;
    color: #F20C0C;
    border: 1px solid #F20C0C;
    font-weight: bolder;
} 
.sec1 .button3{
    width: 100%;
    margin: 3% 0;
    border-radius: 10px;
    height: 50px;
    background: #F20C0C;
    color: white;
    border: 1px solid #F20C0C;
    font-weight: bolder;
} 
.sec1 h4{
    font-size: 14px;
    font-style: italic;
    margin: 0 15px;
} 
.sec1 h3{
    font-size: 16.5px;
    z-index: -1;
} 
.sec1 .span2{
    font-size: 14px;
    margin: 0 15px;
} 
.sec1 label{
    font-size: 14.5px;

} 

label{
    font-size: 20px;
}

span{
    font-weight: bolder;
    /* margin-left: ; */
}

.container {
  display: inline-flex;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 21px;
  background-color: rgb(221, 221, 221);
  border-radius: 4px;
  z-index: -1;

}




/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: rgb(183, 183, 183);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 7px;
  top:3px;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>

