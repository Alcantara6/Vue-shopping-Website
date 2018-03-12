<template>
    <div id="home">
    	  <div id="cart">
      	    <!-- 1.checkout-title -->
      	    <header id="checkout-title">
      	         <h2>购物车</h2>
      	    </header>
      	    <!-- 2.checkout-item-->
      	    <section id="cart-item">
      	        <div class="cart-item-header">
        	          <ul>
        	              <li>商品信息</li>
        	              <li>商品金额</li>
        	              <li>商品数量</li>
        	              <li>总金额</li>
        	              <li>编辑</li>
        	          </ul>
      	        </div>
      	        <div class="cart-item-list">
      	            <ul>
      	                <li v-for="(item,index) in productList">
      	                    <!-- tab1: incon(svg),img,title,parts-->
              	            <div class="cart-tab1">
              	                <!--项目符号-->
              	                <!-- <svg></svg> -->
                                <!-- 不使用input-checkbox的原因：用$set方法为元素添加属性 -->
              	                <a href="javascript:void(0)" @click="selectItem(item)">
              	                    <i :class="[
                                                   'iconfont',
                                                   {'icon-notchecked':!item.isChecked},
                                                   {'icon-checked':item.isChecked}
                                               ]">
                                    </i>
              	                </a>
                    	          <!--商品图片-->
                    	         <img class="item-pic" :src="item.productImg" :alt="item.productName">
                    	          <!--商品信息-->
                    	          <div class="item-info">
                    	              <p class="item-title" v-text="item.productName"></p>
                    	              <!--赠送-->
                    	              <div class="item-include">
                    	                  <dl>
                    	                    <dt>赠送：</dt>
                    	                    <dd v-for="part in item.parts" v-text="part.partsName"></dd>
                    	                  </dl>
                    	              </div>
                    	          </div>
              	            </div> 
              	            <!-- tab2 price-->
                  	        <div class="cart-tab2">
                  	            <p class="item-price">
                                {{item.productPrice | formatMoney}}
                                </p>   
                  	        </div>
              	            <!-- tab3 quantity-->
                  	        <div class="cart-tab3">
                    	          <div class="item-quantity">
                      	            <!-- 传入参数1或-1，就可以只使用一个函数-->
                      	            <a href="javascript:void(0)" 
                                        v-on:click="changeQuantity(item,-1)">
                                    -</a>
                                    <!-- 注意disabled,v-model的使用,不使用name属性-->
                                    <input type="text" disabled v-model="item.productQuantity"> 
                      	            <a href="javascript:void(0)" 
                                        v-on:click="changeQuantity(item,1)">
                                    +</a>
                    	          </div>
                  	        </div>
              	            <!-- tab4 price-total-->
                  	        <div class="cart-tab4">
                  	            <p class="price-total">
                  	                <!-- 参数“yuan”传入过滤器-->   
                                    {{item.productPrice*item.productQuantity 
                                        | formatMoney("元")}}
                  	            </p>                 
                  	        </div>
              	            <!-- tab5 edit-->
                  	        <div class="cart-tab5">
                  	            <i class="iconfont icon-delete" 
                                    @click="delItem(index)"> 
                                </i>
                  	        </div>
      	                </li>
      	            </ul>
      	        </div>
      	    </section>
      	    <!-- 3.checkout-account-->
      	    <div>
        	      <!--全选和取消全选-->
        	      <div class="item-all-check">
        	          <a 
                        href="javascript:void(0)">
            	          <i  
            	              class="iconfont" 
                	          :class="[
                                        {'icon-notchecked':!selectAllFlag},
                                        {'icon-checked':selectAllFlag}
                                    ]" 
                            @click="selectAll(true)">
            	          </i>
        	          </a>
        	          <a
                        class="check-all-btn" 
                        href="javascript:void(0)" 
                        @click="selectAll(true)">
                        全选
                    </a>
        	          <a 
                        href="javascript:void(0)" 
                        @click="selectAll(false)">
                        取消全选
                    </a>
        	      </div>
        	      <!-- 结算总金额-->
        	      <div class="checkout-account">
        	          <div class="total-money">
        	              总价格：{{totalMoney | formatMoney("元")}}
        	          </div>
        	          <!-- 结账按钮-->
        	          <!-- router路由-->
        	          <div class="checkout-btn">
        	              <keep-alive>
                            <router-link to="/order">结账</router-link>
                        </keep-alive>
        	          </div>
        	      </div>
      	    </div>
        </div>
        
        <!-- 4. 删除对话框组件 -->
        <!-- v-show控制出现，v-on自定义事件确认删除和取消删除 -->
        <dialog-delete 
            :isShow="isShowDialog" 
            v-on:confirmDel="confirmDel"
             v-on:cancelDel="isShowDialog = false">
        </dialog-delete>
    </div>
</template>

<script>
import dialogDelete from "./dialog-delete";
export default {
    name:"home",
    components: {
      dialogDelete
    },
    data() {
      return {
        productList: [],
        selectAllFlag: false,
        isShowDialog: false,
        deleteNth: 0
      }
    },

    // 总价钱计算,计算选中的(计算属性有watch功能)
    computed:{
      totalMoney() {
        let total = 0;
        this.productList.forEach(item => {
          if (item.isChecked) {
            total += item.productPrice * item.productQuantity;
          }
        });
        return total;
      }
    },


    filters: {
      formatMoney(value,arg1) {
        // 实际开发中由后端处理数字，因为toFixed会四舍五入
        if(arg1) {
          return "￥" + value.toFixed(2) + arg1;
        }
        else {
          return "￥" + value.toFixed(2);
        }
      }
    },


    methods:{
      // 从后端引入产品数据
      cartView() {
        this.$axios.get("/api/list",{id:"productlist"})
          .then(response => {
            // 箭头函数的this固定指向外层调用者
            this.productList = response.data.data;
            // this.totalMoney = response.data.result.totalMoney;
          });
          this.$axios.post("/api/list",{id:"productlist"})
            .then(response => {
              console.log(response);
            });
      },

      // 事件-改变数量
      changeQuantity(item,count) {
        // 如果是减少数量，则限制不能小于1
        if(count === -1 && item.productQuantity <= 1) {
          item.productQuantity = 1;
        }
        else {
          item.productQuantity += count;
        }
        // 如果用methods计算总价格，这里调用计算总价格方法
        // this.cancTotalMoney();
      },

      // 事件-单选
      selectItem(item) {
        // （1）第一次点击，如果item不存在isChecked属性，则添加
        //  data中相当于全局变量，item.prop则是属性
        if(typeof item.isChecked === "undefined") {
          this.$set(item,"isChecked",true);
        }
        else {
          item.isChecked = !item.isChecked;
        }
        // （2）isChecked已经存在，每次点击单项，遍历判定是否全选
        this.selectAllFlag = this.productList.every(value => value.isChecked);
        // (3) 如果用methods计算总价格，这里调用计算总价格方法
        // this.cancTotalMoney();
      },
      
      // 事件-全选和取消全选，单项的true和false跟随全选的true和false
      selectAll(flag) {
        //第一次点击，如果item不存在isChecked属性，则添加
        this.selectAllFlag = flag;
        this.productList.forEach(item => {
          if(typeof item.isChecked === "undefined") {
            this.$set(item,"isChecked",this.selectAllFlag);
          }
          else {
            item.isChecked = this.selectAllFlag;
          }   
        });
        // 如果用methods计算总价格，这里调用计算总价格方法
        // this.cancTotalMoney();    
      },
      // 计算总价(函数方式，优先用计算属性)
      /*cancTotalMoney() {
        // 首先清零，避免重复计算
        this.totalMoney = 0;
        // 叠加计算总价格
        this.productList.forEach(item => {
          if (item.isChecked) {
            this.totalMoney += item.productPrice * item.productQuantity;
          }
        });      
      },*/

      // 事件-点击删除某项后弹框，传入序号。
      // 之后确认事件时不知道删除哪一项，所以向data里的变量传入index
      delItem(index) {
        this.isShowDialog = true;
        this.deleteNth = index;
      },

      // 确认删除。实际业务中会将id等信息传到后台删除
      confirmDel() {
        this.productList.splice(this.deleteNth,1);
        this.isShowDialog = false;
      }
    },

    // 注意使用$nextTick
    mounted() {
      this.$nextTick(function () {
        this.cartView();
      });
    },
}
</script>

<style>
/* 通用 */
.iconfont {
  cursor: pointer;
}
/* 结构 */
#home {
  margin: 0 20px;
  min-width: 1280px;
}
#cart {
  margin-top: 60px;
}
/* 1.购物车标题 */
#checkout-title {
    position: relative;
    text-align: center;
    line-height: 2;
}
#checkout-title:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    border: .5px solid #ccc;
}
#checkout-title h2 {
    position: relative;    /*为了使用z-index*/
    display: inline;
    padding: 0 1em;
    font-size: 20px;
    background: #fff;
}

/* 2-1.购物车列表-标题 */
.cart-item-header {
    font-size: 0;
    letter-spacing: -3px;
}
.cart-item-header li {
    display: inline-block;
    height: 54px;
    line-height: 54px;
    width: 12%;
    font-size: 18px;
    color: #fff;
    background: #cd1;
}
.cart-item-header li:first-child {
    width: 52%;
    text-align: center;
}
/* 2-2. 购物车列表--内容 */
.cart-item-list {
    margin: 30px 0;
}
.cart-item-list > ul > li {
    padding: 20px 0;
    font-size: 0;
    letter-spacing: -3px;
    border-bottom: 1px dashed #bbb;
}
.cart-tab1,
.cart-tab2,
.cart-tab3,
.cart-tab4,
.cart-tab5 {
    display: inline-block;
    width: 12%;
    font-size: 14px;
    letter-spacing: 0;
    vertical-align: middle;
}
.cart-tab1 {
    width: 52%;
}
.item-pic {
    height: 86px;
    width: 112px;
    margin: 0 20px;
    vertical-align: middle;
}
/* 购物项信息 */
.item-info {
    display: inline-block;
    vertical-align: top;
}
.item-title {
    height: 80px;
    font-weight: 700;
}
.item-include {
    width: 150px;
}
.item-include dt {
    float: left;
}
.item-include dd {
    margin-left: 50px;
}
/* 购物项数量 */
.item-quantity input {
    width: 30px;
    text-align: center;
}

/* 3.购物车结算*/
.item-all-check {
    float: left;
    height: 40px;
    font-size: 16px;
}
.checkout-account {
    float: right;
    height: 40px;
    font-size: 20px;
}
.checkout-account > div {
    float: left;
}
.checkout-btn a {
    margin-left: 30px;
    padding: 10px 60px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #000;
    border-radius: 5px;
    color: #fefcff;
    background: #e5c;
}
</style>