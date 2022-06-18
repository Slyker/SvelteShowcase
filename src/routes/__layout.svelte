<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header routes={[
	{href:"/",label:"Home"},
	{href:"/todos",label:"Todos",disabled:true},
	{href:"/RainbowText",label:"RainbowText"},
	{href:"/Modals",label:"Modals"},
	{href:"/Crud",label:"Crud test"},
	{href:"/Styles",label:"Global styles"},
	{href:"/about",label:"About"},
	]} />

<main class="">
	<slot />

</main>
<footer class="footer">
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
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
		min-height: calc(100vh - 195px);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
            width: 100%;
    max-width: 100%;
		padding: 40px;
   		bottom:0;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
