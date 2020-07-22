<template>
	<div>
        <header>
            <!-- <router-link><img src="../assets/images/Path 50.png" alt=""></router-link> -->
			<p>Purchase your item</p>
        </header>  
		<section class="items">
		</section>  
		<div> 
			<h2>Nav Bar</h2> 
			<nav> 
				<router-link to="/">Home</router-link>
			</nav> 
		</div>   
		<!-- <router-view></router-view> -->
    </div>
</template>

<script>

	export default{
		name:'details',
		// data(){
		// 	return{
		// 		proId:this.$route.params.Pid,
		// 		title:"details",
		// 		products:[
		// 		{
		// 		productTitle:"ABCN",
		// 		image       : require('../assets/images/product1.png'),
		// 		productId:1
		// 		},
		// 		{
		// 		productTitle:"KARMA",
		// 		image       : require('../assets/images/product2.png'),
		// 		productId:2
		// 		},
		// 		{
		// 		productTitle:"Tino",
		// 		image       : require('../assets/images/product3.png'),
		// 		productId:3
		// 		},
		// 		{
		// 		productTitle:"EFG",
		// 		image       : require('../assets/images/product4.png'),
		// 		productId:4
		// 		},
		// 		{
		// 		productTitle:"MLI",
		// 		image       : require('../assets/images/product5.png'),
		// 		productId:5
		// 		},
		// 		{
		// 		productTitle:"Banans",
		// 		image       : require('../assets/images/product6.png'),
		// 		productId:6
		// 		}
		// 		]
				 
		// 	}
		// }
		
	}
</script>