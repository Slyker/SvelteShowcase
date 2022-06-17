<script lang="ts">
	import Modal,{getModal} from '$lib/CRUD/components/Modal.svelte'
    let ModalUpdatedValue:boolean = false;
    let ModalUpdatedValue2:boolean = false;
</script>
<Modal id="1" okClose title="Update modal" type="yesno"  onOk={()=>ModalUpdatedValue=true} onCancel={()=>ModalUpdatedValue=false}>
	<h1> Hey you click ok to toogle ModalUpdatedValue</h1>
    <button on:click={()=>getModal("2").open()}>
        Open modal 2
    </button>
</Modal>
<Modal id="2" okClose title="Update modal2" type="yesno"  onOk={()=>ModalUpdatedValue2=true} onCancel={()=>ModalUpdatedValue2=false}>
	<h1> Hey you click ok to toogle ModalUpdatedValue2</h1>

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