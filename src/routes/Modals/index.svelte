<script lang="ts">
  import ScModal from './ScModal.svelte';

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



<ScModal openAnotherOne="2" keybClose={keybClose} mouseClose={mouseClose} closeBtn={closeBtn} okClose={okClose} cancelClose={cancelClose} id="1" title={title1} type="yesno"  onOk={()=>ModalUpdatedValue=true} onCancel={()=>ModalUpdatedValue=false}>
    <p>
        Modal is {(ModalUpdatedValue)? "activated":"deactivated"}    
    </p>
</ScModal>
<ScModal keybClose={keybClose} mouseClose={mouseClose} closeBtn={closeBtn} okClose={okClose} cancelClose={cancelClose} id="2" title={title2} type="yesno"  onOk={()=>ModalUpdatedValue2=true} onCancel={()=>ModalUpdatedValue2=false}>
    <p>
        Modal2 is {(ModalUpdatedValue2)? "activated":"deactivated"}
    
    </p>
</ScModal>

