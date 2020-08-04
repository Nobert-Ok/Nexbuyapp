<template>
	<transition name="fade">
		<div v-if="show" class="preloader">
			<div>
                <img class="logo" src="../assets/images/B1.png" alt="">
            </div>
			<div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
		</div>
	</transition>
</template>



<script>
export default {
    name: 'preloader',
	data(){
		return {
			show: true
		}
	},
	created(){
		if(Boolean(this.show)) this.showToggle()
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = false
			}, 6000)
	 	}
    }
}
</script>


<style scoped>
.preloader{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: white;
    z-index: 9999;
}
img {
    height: 120px;
    width: 120px; 
    position: absolute;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
    /* transition: ease; */
    animation: blink 2s infinite;
}


@keyframes blink{
    0%{opacity: 0;}
    50%{opacity: .6;}
    100%{opacity: 1.2;}
}
</style>