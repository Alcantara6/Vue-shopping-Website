<template>
	<div id="orderProcedure">
		<header class="procedure-title">
			<div :class="{'current-procedure':stepIndex === 1}">地址确认</div>
			<div :class="{'current-procedure':stepIndex === 2}">查看订单</div>
			<div :class="{'current-procedure':stepIndex === 3}">支付</div>
			<div :class="{'current-procedure':stepIndex === 4}">订单确认</div>
		</header>
		<keep-alive>	
			<router-view></router-view>
		</keep-alive>
		<footer>
			<!-- 原生事件需要加.native-->
			<router-link 
				class="next-step-btn" 
				:to="currentRouter" 
				@click.native="gotoNextStep">
				下一步
			</router-link>
		</footer>
	</div>
</template>

<script>
export default {
	name:"orderProcedure",
	data() {
		return {
			step:[
				"address",   //next--1
				"view",      //next--2
				"pay",       //next--3
				"confirm"    //next--4-another
			],
			stepIndex: 1
		}
	},
	computed:{
		currentRouter() {
			// 前3页，指向后一个子router
			if(this.stepIndex < this.step.length) {
				return "/order/" + this.step[this.stepIndex];
			}
			// 第4页，指向另一router
			else if(this.stepIndex === this.step.length) {
				return "/complete";
			}
		}
	},
	methods:{
		gotoNextStep() {
			if(this.stepIndex < this.step.length) {
				this.stepIndex++;
			}
			else{
				this.stepIndex = 99;
			}
		}
	}
}
</script>

<style scoped>
/* 结构*/	
#orderProcedure {
	min-width:1280px;
}
/* 1. 订单流程*/	
.procedure-title {
	/* 清除浮动，不用margin-bottom的原因是:after的圆点会被修剪*/
	overflow: hidden;
	padding-bottom: 40px;
}
.procedure-title > div {
	float: left;
	position: relative;
	height: 40px;
	width: 25%;
	padding: 20px 0 10px 0;
	border-bottom: 2px solid #ccc;
	text-align: center;
	font-size:20px;
    color: #ccc;	
}
.procedure-title > div:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 50%;
	margin: 0 0 -7px -7px;	
	width: 14px;
	height: 14px;
	background: #ccc;
	border-radius: 7px;
}
.procedure-title > .current-procedure {
	color: #fa0;
	border-color:#fa0;
}
.procedure-title > .current-procedure:after {
	background: #fa0;
}
/* 2. 下一步按钮*/	
.next-step-btn {
	display: inline-block;
	float: right;
	margin: 10px 40px 0 0;
	padding: 5px 10px;
	border: 1px solid #000;
	border-radius: 5px;
	font-size: 18px;
	font-weight: 700;
	background: #fa0;
}
</style>