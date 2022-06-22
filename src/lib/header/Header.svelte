<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import Navbar from '$lib/UI/Navbar.svelte';
	export let routes:NavItem[] = [];
    type NavItem = {
        label:string,
        href:string,
        disabled?:boolean,
        hidden?:boolean
    }
</script>

<header>
	<Navbar navItems={routes}></Navbar>
</header>

<style>
	header {
		width: 100%;
	}
</style>
