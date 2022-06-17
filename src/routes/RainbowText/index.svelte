<script lang="ts">
    import RainbowText from "$lib/RainbowText/RainbowText.svelte";
    import {SerializeStyle,ParseStyles} from '$lib/StylesParser';
    import Select from 'svelte-select';
	import Modal,{getModal} from '$lib/CRUD/components/Modal.svelte'

    // edit rainbow style and speed
    let CurrentStyle:object;
    $:CurrentStyle ={backgroundColor:"black",fontSize:"40px"}    
    let inputStyle:string;
    $:inputStyle =SerializeStyle(CurrentStyle)
    let buildStyle = (e:any)=>{
        CurrentStyle = ParseStyles(e.target.value)
        inputStyle = SerializeStyle(CurrentStyle)        
    }
    let speed:number;
    $:speed=1

    // COMMON CRUD JS
    type selectArray = {
        value:number,
        label:string,
        group?:string,
        selectable?:boolean,
        selected?:boolean
    }

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

    const incrementSelectId = (num:number,arr:selectArray[]):number => {
        if(arr.find(x=>x.value === num)){
            return incrementSelectId(num+1,arr)
        }
        return num
    }

    const parseSelectArray = (labels:string[], current?:selectArray[])=> {
        let result:selectArray[] = []
        let id = current || result
        labels.forEach(label => {
            result.push({value:incrementSelectId(id.length+1,result),label})
        });
        return result
    }

    // Words CRUD JS
    let words:string[] =["Hey"," world ", "it's me"];
    let selectedWord:selectArray|null;
    let wordsSelect:selectArray[] = parseSelectArray(words)
    let newWord:string="";
    let updateWord:string="";

    $:words = wordsSelect.map(x=>x.label)
    const addWord = () => {
        if(newWord && newWord.length>0)
        wordsSelect.push(...parseSelectArray([newWord],wordsSelect))
        wordsSelect=wordsSelect
        newWord=""
    }
    const upWord = () => {
        if(selectedWord)
            selectedWord.label=updateWord
            wordsSelect = wordsSelect 
        getModal("updateWord").close()
    }
    const confirmRemoveWord= () => {
        getModal("delWord").open()
    }
    const delWord = () => {
        wordsSelect = wordsSelect.filter(function( obj ) {
            return obj.value !== selectedWord?.value;
        });       
        selectedWord=null
        getModal("delWord").close()
    }
    // Colors CRUD JS
    let colors:string[] =["blue","gray", "red"];
    let selectedColor:selectArray|null;
    let colorsSelect:selectArray[] = parseSelectArray(colors);
    let newColor:string;
    let updateColor:string="";

    $:colors = colorsSelect.map(x=>x.label)
    const addColor = () => {
        if(newColor && newColor.length>0)
        colorsSelect.push(...parseSelectArray([newColor],colorsSelect))
        colorsSelect=colorsSelect
        newColor=""
    }
    const upColor = () => {
        if(selectedColor)
            selectedColor.label=updateColor
            colorsSelect = colorsSelect 
        getModal("updateColor").close()
    }
    const confirmRemoveColor= () => {
        getModal("delColor").open()
    }
    const delColor = () => {
        colorsSelect = colorsSelect.filter(function( obj ) {
            return obj.value !== selectedColor?.value;
        });
       
        selectedColor=null
        getModal("delColor").close()
    }



    //
</script>
<!-- Words CRUD modals html !-->
<Modal id="updateWord" title="Update entry" type="update" onOk={upWord}>
	<h1> Selected entry : {selectedWord?.label}</h1>
    <center>
        {#if selectedWord }
            <input type="text" name="editWordInput" id="18daz81d8" bind:value={updateWord} on:change={upWord}  >
        {/if}
    </center>
</Modal>

<Modal id="addWord" title="Entry creation" type="add" onOk={()=>{
    addWord()
    getModal("addWord").close()
}}>
	<h1> Word :</h1>
    <center>
        <input type="text" name="addWordInput" id="18dazdd81d8" bind:value={ newWord} on:change={()=>{getModal("addWord").close();addWord()}} >
    </center>
</Modal>

<Modal id="delWord" title="Would you delete ?"  type="delete" onOk={delWord}>
	<h1>Are you sure you want to delete entry : <strong>{selectedWord?.label}</strong></h1>
    <center>
        <h2 style="color:red">This action can't be undo</h2>
    </center>
</Modal>
<!-- Colors CRUD modals html!-->

<Modal id="updateColor" title="Update entry" type="update" onOk={upColor}>
	<h1> Selected entry : {selectedColor?.label}</h1>
    <center>
        {#if selectedColor }
            <input type="text" name="editColorInput" id="18daz81d8" bind:value={updateColor} on:change ={upColor}  >
        {/if}
    </center>
</Modal>

<Modal id="addColor" title="Entry creation"type="add" onOk={()=>{
    addColor()
    getModal("addColor").close()
}}>
	<h1>Color name :</h1>
    <center>
        <input type="text" name="addColorInput" id="18dazdd81dd8" bind:value={ newColor} on:change={()=>{getModal("addColor").close();addColor()}} >
    </center>
</Modal>

<Modal id="delColor" title="Would you delete ?" type="delete" onOk={delColor}>
	<h1>Are you sure you want to delete entry : <strong>{selectedColor?.label}</strong></h1>
    <center>
        <h2 style="color:red">This action can't be undo</h2>
    </center>
</Modal>
<center>


<h1>Normal way</h1>
<h3>
    <RainbowText
        bind:words={words}
        bind:colors={colors}
        style={CurrentStyle}
        bind:delay={speed}

    />
</h3>
<h1>Reverse way</h1>
<h3>
    <RainbowText
        bind:words={words}
        bind:colors={colors}
        style={CurrentStyle}
        bind:delay={speed}
        reverse
    />
</h3>
</center>
<!-- Words CRUD select html-->
<h1>Words</h1>
<button on:click={()=>{
    getModal("addWord").open()
}}>Add
</button>
<Select showChevron  on:change={(e)=>{ 
    selectedWord = null
    selectedWord = selectChange(wordsSelect,e)
    console.log(wordsSelect )
}}
    items={wordsSelect} />
    {#if selectedWord }
    <!--<input type="text" name="editWordInput" id="18daz81d8" bind:value={ selectedWord.label} on:input={() => wordsSelect = wordsSelect} on:change={()=>selectedWord=null} > !-->
    <button on:click={()=>{
        updateWord = selectedWord?.label || ""
        getModal("updateWord").open()
    }}>Edit</button>
    <button on:click={()=>{
        confirmRemoveWord()
    }}>Delete</button>
    {/if}

<!-- Colors CRUD select html-->
<h1>Colors</h1>
<button on:click={()=>{
    getModal("addColor").open()
}}>Add
</button>
<Select  showChevron on:change={(e)=>{ 
    selectedColor = null
    selectedColor=selectChange(colorsSelect,e)
    console.log(selectedColor)
}}  items={colorsSelect} />
    {#if selectedColor }
    <button on:click={()=>{
        updateWord = selectedWord?.label || ""
        getModal("updateColor").open()
    }}>Edit</button>
    <button on:click={()=>{
        confirmRemoveColor()
    }}>Delete</button>
    {/if}

<!-- Style and props edit-->
<h1>Live style editing</h1>
<input type="text" name="styleInput" id="18az81d8" value={inputStyle} on:change={buildStyle} >
<h1>Speed editing current : {speed}</h1>
<input min={0.0} max={10} step={0.1} type="range" name="speedInput" id="18addz81d8" bind:value={speed} >

