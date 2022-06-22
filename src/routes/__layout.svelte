<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import RainbowText from '$lib/RainbowText/RainbowText.svelte';
</script>
<header>
	<Header routes={[
		{href:"/",label:"Home"},
		{href:"/todos",label:"Todos",disabled:false},
		{href:"/RainbowText",label:"RainbowText"},
		{href:"/Modals",label:"Modals"},
		{href:"/Crud",label:"Crud test"},
		{href:"/Styles",label:"Global styles"},
		{href:"/about",label:"About"},
		]} />
</header>
<main class="content">
	<slot />

</main>
<footer class="footer">
	<h1> <RainbowText words={["Made ","With 💘"," by 😺"]} colors={["pink","violet","red"]} /></h1>
</footer>



<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
    	max-width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 100%;
	}

	header{z-index:1000;}
	

	header, footer {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: auto;
		text-align: center;
		background-color: #a8b5c0;
	}

	main {
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: auto;
	}

	@media (min-width: 480px) {
		
	}
</style>
