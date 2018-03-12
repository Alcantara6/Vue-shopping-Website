<template>
	<div id="post-address">
		<section id="address-list">
			<h2 class="address-title">
				<span>配送地址</span>
			</h2>
			<!-- 事件触发样式改变：将v-bind:class、index、currentIndex、click互相关联 -->
			<!-- 
				鼠标进入显示设为默认、编辑、删除元素，不能用CSS的hover，因为要显示的元素是hover元素的子元素。
				用事件函数，每个列表项添加appear属性。
				如果不是为了用函数添加appear属性，可以用@mouseover="item.appear = index === currentIndex"
			-->		
			
			<!-- 地址卡片 -->
			<ul>	
				<li 
				    :class="[{'selected':index === currentIndex},'adr-list-card']"
				    v-for="(item,index) in filterAddress" 
				    @mouseover="showAdrEdite(item)" 
				    @mouseout="item.appear = false" 
				    @click="currentIndex = index">
					<h3 v-text="item.userName"></h3>
					<p v-text="item.streetName"></p>
					<br>
					<p v-text="item.tel"></p>
					<p class="default-address" v-if="item.isDefault">默认地址</p>
					<!-- 根据appear属性决定是否显示设为默认、编辑、删除按钮 -->
					<template v-if="item.appear">
						<a 
						    class="set-default-address" 
						    href="javascript:void(0)"
						    v-if="!item.isDefault" 
						    @click="setAsDefaultAdr(item)">
						    设为默认地址
						</a>
						<i class="iconfont icon-edit"></i>
						<i class="iconfont icon-delete" @click="deleteAddress(index)"></i>
					</template>
				</li>
				<li class="add-address">
					<i class="iconfont icon-add"></i>
					<p>添加新地址</p>
				</li>
			</ul>
			<!-- 地址列表展开和收起 -->
			<div class="more-address">
				<a 
				    href="javascript:void(0)" 
				    v-if="addressNum === addressList.length" 
				    v-on:click="addressNum = 3">
				    收起
				    <i class="iconfont icon-up"></i>
				</a>
				<a 
				    href="javascript:void(0)"
				    v-else  
				    v-on:click="addressNum = addressList.length">
				    more
				    <i class="iconfont icon-down"></i>
				</a>
			</div>	
		</section>

		<!-- 配送选项 -->
		<section id="shipping">
			<h2 class="shipping-title">
				<span>配送方式</span>
			</h2>			
			<ul>
				<li :class="{'selected':shippingMethod === 1}" @click="shippingMethod = 1">
					<h3>标准配送</h3>
					<p>Free</p>
				</li>
				<li :class="{'selected':shippingMethod === 2}" @click="shippingMethod = 2">
					<h3>高级配送</h3>
					<p>180</p>				
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	name:"post-address",
	data() {
		return {
			addressList:[],
			addressNum:3,
			currentIndex:0,
			shippingMethod:1
		}
	},

	// 先缓存filterAddress，页面仅显示3条
	computed:{
		filterAddress() {
			return this.addressList.slice(0,this.addressNum);
		}
	},
	methods:{
		// 获取地址列表json数据
		addressView() {
			this.$axios.get("../static/address.json",{id:"addressId"})
			.then(res => {
				// status等于0说明请求成功
				if(res.data.status === 0) {
					this.addressList = res.data.result;
				}
			});
		},
		/* 为列表项添加appear属性 */
		showAdrEdite(item) {
			if (typeof item.appear === "undefined") {
				this.$set(item, "appear", "true");	
			}
			else {
				item.appear = true;
			}				
		},
		/* 先全部取消，再设置目标；或传入键值,再遍历*/
		setAsDefaultAdr(item) {
			this.filterAddress.forEach(value => {
				value.isDefault = false;
			});
			item.isDefault = true;
		},
		/* 删除地址 */
		deleteAddress(index) {
			this.addressList.splice(index,1);
		}
	},

	mounted() {
		this.$nextTick(function () {
			this.addressView();
		});
	},
}
</script>

<style scoped>
/* 通用-- part2和part3的标题抬头*/
.address-title,
.shipping-title {
	/* 水平线的基准*/
	position: relative;  
	margin-bottom: 30px;
	text-align: center;	
}
.address-title span,
.shipping-title span {
	position: relative;
	display: inline;
	padding: 0 20px;
	background: #fefcff;
	z-index: 99;
}
.address-title:before,
.shipping-title:before {
	content: "";
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	border: .5px dotted #ccc;
}
.iconfont {
	cursor: pointer;
}
.selected {
	border:2px solid #fa0!important;
}
/* 1. 地址卡片列表*/
#address-list {
	margin-bottom:40px;		
}
/* 1.2 地址卡片*/
#address-list ul {
	margin-right: -1%;  /*拉长最右卡片，隐藏padding-right的空白*/
	font-size: 0;
	letter-spacing: -3px;
}
.adr-list-card,
.add-address {
	display: inline-block;
	position: relative;
	box-sizing:border-box;
	width: 24%;
	height: 180px;
	margin: 0 1% 20px 0;
	padding: 10px;
    /* inline元素默认是baseline对齐，一个 inline-block 如果其中有内容，
    其baseline 就是最后一行文字的baseline，否则就是其margin下边缘。 */
	vertical-align: top;
	border: 1px dashed #bbb;
	font: 16px/2 "Microsoft YaHei";
	letter-spacing: 1px;
}
.add-address {
	text-align: center;
	line-height: 2;
}
.add-address .icon-add{
	font-size: 56px;
}
.adr-list-card:hover {
	border: 2px solid #fa0;
}
.default-address {
	font: 14px/2 "Hiragino GB";
	font-weight: 700;
	color: #c60;
}
/* 1.3 鼠标进入地址卡片的设置项*/
.set-default-address {
	font: 12px/2 "Hiragino GB";
	cursor: pointer;
}
.icon-edit {
	position: absolute;
	top: 0;
	right: 0;
	font-size: 20px;
}
.icon-delete {
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 20px;		
}
.icon-edit:hover,
.icon-delete:hover {
	color: #fa0;
}
/* 1.4 展开、收起地址卡片*/
.more-address {
	text-align: center;		
}
.more-address a{
	font-size: 16px;
	color: #fa0;
}


/* 2.配送方式*/
#shipping > ul {
	text-align: center;
}
#shipping > ul > li {
	display: inline-block;
	width: 250px;
	margin: 0 10px;
	border: 1px dashed #bbb;
	line-height: 2;
	cursor: pointer;
}
</style>