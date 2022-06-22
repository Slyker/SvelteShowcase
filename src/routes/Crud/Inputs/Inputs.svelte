<script lang=ts>
  import InputList from './InputList.svelte';
  import TabControl from '$lib/UI/TabControl/TabControl.svelte';


   

</script>

<TabControl webpages={[{ name: "Inputs list", component: InputList }]}/>
