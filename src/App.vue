<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>	
	</div>
</template>

<script>
export default {
    name:'app'
}
</script>

<style>
* {
    margin: 0; 
    padding: 0;
}
html,
body {
    font: 
        12px/1.5 
        Tahoma, Helvetica, Arial, "Microsoft YaHei", "Hiragino GB", Sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
ul,ol {
	list-style-type: none;
}
a {
	text-decoration: none;
}
a:link {
	color: #000;
}
a:hover {
	color: #0000A0;
}
a:visited {
	text-decoration: underline;
	color: #00f;
}
a img,
div img {
	vertical-align: top;
	/* display: block; */
}
</style>
