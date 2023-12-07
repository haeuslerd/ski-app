<template>
	<div class="sidebar" :style="{ width:sidebarWidth + 'px' }">
		<router-link to="/about">About</router-link>
		<a href="#">Services</a>
		<a href="#">Clients</a>
		<a href="#">Contact</a>
	</div>
	<div class="toggleSidebar">
		<Button class="pi pi-bars" text @click="openSidebar"/>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue'

const sidebarWidth = ref(0);

function openSidebar() {
	if	(sidebarWidth.value == 0) {
	sidebarWidth.value = 250;
	} else {
	sidebarWidth.value = 0;
	}
}

</script>

<style scoped>
.toggleSidebar {	
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	padding-left: 16px;
	padding-top: 16px;
}
.sidebar {
	height: 100%;
	width: 0px;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: #111;
	overflow-x: hidden;
	padding-top: 60px;
	transition: 0.5s;
}
.sidebar a {
	padding: 8px 8px 8px 32px;
	text-decoration: none;
	font-size: 25px;
	color: #818181;
	display: block;
	transition: 0.3s;
}
</style>
