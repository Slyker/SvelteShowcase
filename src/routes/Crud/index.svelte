<script lang=ts>
   
    import TabControl from '$lib/UI/TabControl/TabControl.svelte'

    import BasicCrud from './BasicCrud.svelte';
    import Modals from './Modals/Modals.svelte';  
    import Inputs from '../Crud/Inputs/Inputs.svelte';    
    import OnlineCrud from './Modals/OnlineCrud.svelte';
</script>

<TabControl webpages={[{ name: "Inputs", component: Inputs },{ name: "Modals", component: Modals },{ name: "Basic offline crud", component: BasicCrud },{ name: "Basic online crud", component: OnlineCrud }]}/>





