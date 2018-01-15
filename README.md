1.VUE渲染列表有问题，用li

2.目前使用的是class方法
	下载时会合并在一个iconfront，需把每个图标拆分成单个css文件，
	可以每个样式一个文件，也可以写在一个文件内
	@font-face的url引入字体路径，字体文件必须存在。
	vue-cli可以在index.html中link方式引入，也可在main.js中import
   目前版本无需更改webpack配置，无需将url的格式改为./xxx/xxx

3.页面生成之后，移动静态资源(从正确路径到错误路径，或从错误路径到正确路径)，
网页刷新后不受影响（如原来是正确路径，保持正确显示；否则保持错误显示）。
——推测是静态资源得到缓存。

4.inline元素默认是baseline对齐，一个 inline-block 如果其中有内容，其baseline 就是最后一行文字的baseline，否则就是其margin下边缘。

5.D:\Programming\engineering\Webpack\webpack教程\关于css-loader

6.data中的变量相当于全局变量，元素属性相当于局部变量