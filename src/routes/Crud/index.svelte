<script lang=ts>
   
    import TabControl from '$lib/UI/TabControl/TabControl.svelte'

    import Inputs from './inputs.svelte';
    import BasicCrud from './BasicCrud.svelte';
    import Modals from './Modals/Modals.svelte';   
 
</script>

<TabControl webpages={[{ name: "Inputs", component: Inputs },{ name: "Basic crud", component: BasicCrud },{ name: "Modals", component: Modals }]}/>





