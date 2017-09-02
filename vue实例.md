---
title: Vue实例
date: 2017-08-19 10:51:49
tags:
---
## Vue实例
	var vm = new Vue({
	  // 选项
	})
整个页面就可以映射为一个组件树,Vue实例就是跟组件













## Vue 中使用v-for语句抛出v-bind:key错误的解决方案
在Vue 2.0之前的版本可以通过在v-for语句后面加如下语句解决一些问题：

	<div v-for="item in items" track-by="id">
在Vue 2.0之后的版本中track-by改为了key，所以对于Vue 2.0之后的版本可以使用：

	<div v-for="item in items" v-bind:key="item.id">