// order页面使用了重定向
import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home'
import orderProcedure from '../components/orderPage/orderProcedure'
import postAddress from '../components/orderPage/postAddress'
import viewOrder from '../components/orderPage/viewOrder'
import payOrder from '../components/orderPage/payOrder'
import confirmOrder from '../components/orderPage/confirmOrder'

Vue.use(Router)

export default new Router ({
	mode:'history',
	routes:[
	  {
		path:'/',                     // 这里设置初始默认打开
		component:home,     
	  },
	  {
		path:'/order',
		component:orderProcedure,
        // 使用重定向
		redirect: '/order/address',
		children:[			
			{
				path:'address',
				component:postAddress
			},
			{
				path:'view',
				component:viewOrder
			},
			{
				path:'pay',
				component:payOrder
			},
			{		
				path:'confirm',
				component:confirmOrder
			}						
		]					
	  }
	]
});