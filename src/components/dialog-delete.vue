<template>
	<div id="dialog-delete">
	    <!-- 遮罩 注意top和left -->
		<div id="shade"></div>
	    <!-- 对话框 -->	
		<div id="dialog-delete-box">
			<!-- 	关闭按钮 -->
			<div class="box-top">
			    <span @click="clickNo">&times;</span>
			</div>
			<div class="box-content">
			    <p>你确认删除此订单信息吗?</p>
			    <div class="btn-wrap">
			        <!-- 	确认删除，自定义事件 -->
			        <button class="btn-confirm" @click="clickYes">Yes</button>
			        <!-- 	取消删除，自定义事件 -->
			        <button class="btn-cancel" @click="clickNo">No</button>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"dialog-delete",
	methods:{
		// 确认删除，自定义事件
		clickYes() {
			this.$emit("confirmDel")
		},
		// 取消删除，自定义事件
		clickNo() {
			this.$emit("cancelDel")
		}			
	}
}
</script>

<style scoped>
/* 遮罩 注意top和left*/
#shade {
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	opacity: .5;
	background: #bbb;
	z-index: 99;
}
/* 对话框 注意top和left*/
#dialog-delete-box {
	position: fixed;
	width: 400px;
	height: 250px;
	top: 50%;
	left: 50%;
	margin-left: -200px;
	margin-top: -125px;
	background: #fefcff;
	z-index:999;
}
.box-top {
	height: 40px;
	margin-bottom: 40px;
}
.box-top span {
	position: absolute;
	right: 5px;
	top: 0;
	font-size: 30px;
	cursor: pointer;
}
.box-content {
	text-align: center;
	font-size: 20px;
}
.btn-wrap {
	margin: 50px 0 30px 0;
}
.btn-wrap button {
	padding: 10px 50px;
	font-size: 18px;
	cursor: pointer;
}
.btn-confirm {
	margin-right: 5px;
	border: 1px solid #e56717;
	color: #faa;
	background: #fff;
}
.btn-cancel {
	margin-left: 5px;
	border: 1px solid #faa;
	background: #e56717;
	color: #000;
}
</style>