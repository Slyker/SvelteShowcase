<script lang="ts">
	import Modal,{getModal} from '$lib/CRUD/components/Modal.svelte'
    let keybClose:boolean = true;
    let mouseClose:boolean = true;
    let closeBtn:boolean = true;
    let okClose:boolean = true;
    let cancelClose:boolean = true;
    let title1:string="Update modal 1";
    let title2:string="Update modal 2";

    let ModalUpdatedValue:boolean = false;
    let ModalUpdatedValue2:boolean = false;
</script>
<Modal keybClose={keybClose} mouseClose={mouseClose} closeBtn={closeBtn} okClose={okClose} cancelClose={cancelClose} id="1" title={title1} type="yesno"  onOk={()=>ModalUpdatedValue=true} onCancel={()=>ModalUpdatedValue=false}>
	<h1> Hey you click ok to toogle ModalUpdatedValue</h1>
    <h1>Options</h1>
    <label>        
        Title 1
        <input type=text bind:value={title1}>
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

    <button on:click={()=>getModal("2").open()}>
        Open modal 2
    </button>
</Modal>
<Modal keybClose={keybClose} mouseClose={mouseClose} closeBtn={closeBtn} okClose={okClose} cancelClose={cancelClose} id="2" title={title2} type="yesno"  onOk={()=>ModalUpdatedValue2=true} onCancel={()=>ModalUpdatedValue2=false}>
	<h1> Hey you click ok to toogle ModalUpdatedValue2</h1>
    <h1>Options</h1>
    <label>        
        Title 2
        <input type=text bind:value={title2}>
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
</Modal>
<p>
    Modal is {(ModalUpdatedValue)? "activated":"deactivated"}

</p>
<p>
    Modal2 is {(ModalUpdatedValue2)? "activated":"deactivated"}

</p>
<button on:click={()=>getModal("1").open()}>
Open modal
</button>
<button on:click={()=>getModal("2").open()}>
    Open modal 2
</button>

<h1>Options</h1>
<label>        
    Title 1
    <input type=text bind:value={title1}>
</label>
<label>        
    Title 2
    <input type=text bind:value={title2}>
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