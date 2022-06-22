<script lang=ts context=module>
    export type selectArray = {
        value:number,
        label:string,
        group?:string,
        selectable?:boolean,
        selected?:boolean
    }
    const incrementSelectId = (num:number,arr:selectArray[]):number => {
        if(arr.find(x=>x.value === num)){
            return incrementSelectId(num+1,arr)
        }
        return num
    }

    export const parseSelectArray = (labels:string[], current?:selectArray[])=> {
        let result:selectArray[] = []
        let id = current || result
        labels.forEach(label => {
            result.push({value:incrementSelectId(id.length+1,result),label})
        });
        return result
    }
</script>
<script lang=ts>
    import {SerializeStyle,ParseStyles} from '$lib/Styles/StylesParser';
    import {getID} from "$lib/CRUD/IdGen.svelte"
    import DynInput from '$lib/CRUD/components/DynInput.svelte';

    import Select from 'svelte-select';
	import Modal,{getModal} from '$lib/CRUD/components/Modal.svelte'

    

    
    const selectChange = (objArray:selectArray[], e:any) => {
        let selected:selectArray[] = []
        let result:selectArray[]|selectArray;
        objArray.forEach((el,index,arr)=> {
            arr[index].selected = false;
            if((e.detail && e.detail.some && e.detail.some((x: { value: any; })=>el.value === x.value)) || (e.detail && !e.detail.some && e.detail.value === el.value))
            {                
                selected.push(arr[index])              
                arr[index].selected = true;
            }
        })
        result= selected[0]
        return result
    }

    export let items:string[] =[];
    export let selectedItem:selectArray|null = null;
    export let itemsList:selectArray[] = parseSelectArray(items)
    export let type="text";
    let newWord:string="";
    let updateWord:string="";
    $:updateWord = (selectedItem)?selectedItem?.label:""
    let updateModal=getID(5);
    let AddModal=getID(5);
    let DelModal=getID(5);
    $:items = itemsList.map(x=>x.label)

    const addWord = () => {
        if(newWord && newWord.length>0)
        itemsList.push(...parseSelectArray([newWord],itemsList))
        itemsList=itemsList
        newWord=""
    }
    const upWord = () => {
        if(selectedItem)
            selectedItem.label=updateWord
            itemsList = itemsList 
        getModal(updateModal).close()
    }

    const delWord = () => {
        itemsList = itemsList.filter(function( obj ) {
            return obj.value !== selectedItem?.value;
        });       
        selectedItem=null
        getModal(DelModal).close()
    }


    const confirmRemoveWord= () => {
        getModal(DelModal).open()
    }
</script>

<Modal id={updateModal} title="Update entry" type="update" onOk={upWord}>
    <svelte:fragment slot="content">
        <h1> Selected entry : {selectedItem?.label}</h1>
        <center>
            {#if selectedItem }
            
                <DynInput type={type} placeholder={selectedItem?.label} bind:value={updateWord} on:change={upWord} />
    
            {/if}
        </center>
    </svelte:fragment>

</Modal>

<Modal id={AddModal} title="Entry creation" type="add" onOk={()=>{
    addWord()
    getModal(AddModal).close()}}>
    <svelte:fragment slot="content">
        <center>
            <DynInput type={type} bind:value={newWord} on:change={()=>{getModal(AddModal).close();addWord()}}/>
        </center>
    </svelte:fragment>
</Modal>

<Modal id={DelModal} title="Would you delete ?"  type="delete" onOk={delWord}>
    <svelte:fragment slot="content">
        <h1>Are you sure you want to delete entry : <strong>{selectedItem?.label}</strong></h1>
        <center>
            <h2 style="color:red">This action can't be undo</h2>
        </center>
    </svelte:fragment>
</Modal>


<Select showChevron  on:change={(e)=>{ 
    selectedItem = null
    selectedItem = selectChange(itemsList,e)
    console.log(itemsList )
}}
    items={itemsList} />
    <div style="display:flex; flex-direction: row; justify-content: center; align-items: center;">
        <button on:click={()=>{getModal(AddModal).open()}}>Add</button>
        {#if selectedItem }
            <button on:click={()=>{updateWord = selectedItem?.label || "";getModal(updateModal).open()}}>Edit</button>
            <button on:click={()=>{ confirmRemoveWord() }}>Delete</button>
        {/if}
    </div>


<style>
    button {
        width: 4em;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        touch-action: manipulation;
        color: var(--text-color);
        font-size: 2rem;
        margin-right: 10px;
        margin-top: 5px;
        background-color:rgba(117, 117, 117, 0.322);
    }

    button:hover {
        background-color: var(--secondary-color);
    }
</style>