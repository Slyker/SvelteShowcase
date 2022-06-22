<script context="module">
	export const tabsKey = {};
</script>

<script lang="ts">
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	
	const tabs = writable([]);
	const selectedTab = writable(null);
	
	setContext(tabsKey, {
		tabs,
		selectedTab,
	});
	
	onMount(() => {
			if ($tabs.length > 0)
				$selectedTab = $tabs[0];
	});


	export let webpages:any[] = [];
	
	// Loads an object in webpages array
	let selectedPage = webpages[0];
	//$: console.dir(selectedPage)
	
	// Have to use obj as arg. so value can be a class
	const loadPage = (obj:any) => selectedPage = obj;
</script>
<div class="tabControl">
    {#each webpages as webpageObj}
        <button class="tablink" 
                        title={webpageObj.name}
                        on:click={() => loadPage(webpageObj)}>{webpageObj.name}</button>
    {/each}
</div>


<!-- Loaded component/webpage -->
<svelte:component this={selectedPage.component} />
<style>
	/* Style tab links */
    .tabControl{
        display: flex;
    }
	.tablink {
		background-color: #555;
		color: white;
		float: left;
		border: none;
		outline: none;
		border: .5px solid #444;
		border-radius: 0;
		cursor: pointer;
		padding: 14px 16px;
		font-size: 17px;
		width: 25%;
	}

	.tablink:hover {
		background-color: #777;
	}
</style>

<div class="tab-control">
	<div class="tabs">
		<slot isTitle={true} isContent={false}/>
	</div>
	<div class="tab-content">
		<slot isTitle={false} isContent={true}/>
	</div>
</div>