Vue购物车
===

主要技术
---
计算属性控制数量、价格
vue-router购买流程

编程细节
---
1. 导入外部CSS: vue-cli可以在index.html中link方式引入，也可在main.js中import

2. 页面生成之后，移动静态资源(从正确路径到错误路径，或从错误路径到正确路径)，
网页刷新后不受影响（如原来是正确路径，保持正确显示；否则保持错误显示）———— 静态资源得到缓存。

3. 地址卡片：inline-block元素默认是baseline对齐，一个inline-block如果其中有内容，其baseline就是最后一行文字的baseline，否则就是其margin下边缘。

4. data中的变量相当于全局变量，元素属性相当于局部变量