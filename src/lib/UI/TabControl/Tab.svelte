<script lang="ts">
	import { tabsKey } from './TabControl.svelte';
	import { getContext, onMount } from 'svelte';

	export let id:any;
	export let isTitle:any;
	export let isContent:any;
	
	const { selectedTab, tabs } = getContext(tabsKey);
	$tabs = $tabs.some((t: any) => t == id)
		? $tabs
		: [...$tabs, id];
	
	$: isSelected = id == $selectedTab;
</script>

<style>
	.tab {
		border: none;
		background: none;
		margin: 0;
		cursor: pointer;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

	}
	.tab.selected {
		background: lightgrey;
		cursor: default;
	}
</style>

{#if isTitle}
	<button type="button" class="tab"
					class:selected={isSelected}
					on:click={() => $selectedTab = id}>
		<slot name="title"/>
	</button>
{/if}

{#if isContent && isSelected}
	<slot/>
{/if}