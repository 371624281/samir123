require.config({
	paths: {
		//使用数组方式添加备选路径
		"jquery": "./js/jquery-1.11.2", //js文件省略掉文件类型.js
		"index": "./js/index",
		"Backbone": "./js/backbone",
		"underscore": "./js/underscore",
		"text": "./js/text",
		"css": "./js/css",
		'router': "./js/router",
		"swiper":"./js/swiper-3.4.0.jquery.min",
		"baiduTmp":"./js/baiduTemplate",
		'lazy':'./js/jquery.lazyload.min'
	},
	shim: {

		"index": {
			deps: ["jquery"]
		},
		"swiper": {
			deps: ["jquery"]
		},
		"lazy":{
			deps:["jquery"]
		}
		
	}
})

//使用backbone 路由
require(["jquery", "Backbone", "router","swiper", "lazy","baiduTmp","index"], function($, Backbone, router) {
	Backbone.history.start();
});