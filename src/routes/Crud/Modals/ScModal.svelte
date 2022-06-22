<script lang="ts">
	import Modal,{getModal} from '$lib/CRUD/components/Modal.svelte'
    export let keybClose:boolean = true;
    export let mouseClose:boolean = true;
    export let closeBtn:boolean = true;
    export let okClose:boolean = true;
    export let cancelClose:boolean = true;
    export let title:string="Update modal 1";
    export let id:string;
    export let openAnotherOne:string = ""
    export let onOk:Function =()=>null;
    export let onCancel:Function =()=>null;
    export let type:string="basic";

</script>

<Modal keybClose={keybClose} mouseClose={mouseClose} closeBtn={closeBtn} okClose={okClose} cancelClose={cancelClose} id={id} title={title} type={type}  onOk={onOk} onCancel={onCancel}>
    <svelte:fragment slot="content">
        <h1> Hey you click ok to toogle ModalUpdatedValue {id}</h1>
        <h1>Options</h1>
        <label>        
            Title {id}
            <input type=text bind:value={title}>
        </label>
        <label>
            <input type=checkbox bind:checked={keybClose}>
            {(keybClose)?"You can close by pressing esc":"You can't close by pressing esc"}
        </label>
        <label>
            <input type=checkbox bind:checked={mouseClose}>
            {(mouseClose)?"You can close by clicking outside modal":"You can't close by clicking outside modal"}
        </label>
        <label>
            <input type=checkbox bind:checked={closeBtn}>
            {(closeBtn)?"Close btn is shown":"Close btn isn't shown"}
        </label>
        <label>
            <input type=checkbox bind:checked={okClose}>
            {(okClose)?"Ok button close modal":"Ok button won't close modal"}
        </label>
        <label>
            <input type=checkbox bind:checked={cancelClose}>
            {(cancelClose)?"Cancel button close modal":"Cancel button won't close modal"}
        </label>
        {#if openAnotherOne.length > 0 }
        <button on:click={()=>getModal(openAnotherOne).open()}>
            Open modal {openAnotherOne}
        </button>
        {/if}
    </svelte:fragment>


</Modal>
<slot/>

<button on:click={()=>getModal(id).open()}>
    Open modal {id}
</button>

