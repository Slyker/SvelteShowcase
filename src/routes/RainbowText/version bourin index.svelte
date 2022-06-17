<script lang="ts">
    import RainbowText from "$lib/RainbowText/RainbowText.svelte";
    import {SerializeStyle,ParseStyles} from '$lib/StylesParser';
    import Select from 'svelte-select';

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

    type selectArray = {
        value:number,
        label:string,
        group?:string,
        selectable?:boolean,
        selected?:boolean
    }
    const incrementSelectId = (num:number,arr:selectArray[]):number => {
        console.log(num)
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
    let words:string[] =["Hey"," world ", "it's me"];
    let selectedWord:selectArray|null;
    let wordsSelect:selectArray[] = parseSelectArray(words)
    let newWord:string;
    $:words = wordsSelect.map(x=>x.label)
    const addWord = () => {
        if(newWord && newWord.length>0)
        wordsSelect.push(...parseSelectArray([newWord],wordsSelect))
        wordsSelect=wordsSelect
        newWord=""
    }
    const delWord = () => {
        wordsSelect = wordsSelect.filter(function( obj ) {
            return obj.value !== selectedWord?.value;
        });       
        selectedWord=null
    }

    let colors:string[] =["blue","gray", "red"];
    let selectedColor:selectArray|null;
    let newColor:string;
    let colorsSelect:selectArray[] = parseSelectArray(colors);
    $:colors = colorsSelect.map(x=>x.label)
    const addColor = () => {
        if(newColor && newColor.length>0)
        colorsSelect.push(...parseSelectArray([newColor],colorsSelect))
        colorsSelect=colorsSelect
        newColor=""
    }
    const delColor = () => {
        colorsSelect = colorsSelect.filter(function( obj ) {
            return obj.value !== selectedColor?.value;
        });
       
        selectedColor=null
    }

    const selectChange = (objArray:selectArray[], e:any) => {
        let selected:selectArray[] = []
        let result:selectArray[]|selectArray;
        objArray.forEach((el,index,arr)=> {
            arr[index].selected = false;
            if((e.detail && e.detail.some && e.detail.some(x=>el.value === x.value)) || (e.detail && !e.detail.some && e.detail.value === el.value))
            {                
                selected.push(arr[index])              
                arr[index].selected = true;
            }
        })
        result= selected[0]
        return result
    }


    //
</script>
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
<h1>Words</h1>
<input type="text" name="addWordInput" id="18dazdd81d8" bind:value={ newWord} on:change={()=>addWord()} >
<button on:click={()=>{
    addWord()
}}>Add
</button>
<Select showChevron  on:change={(e)=>{ 
    selectedWord = null
    selectedWord = selectChange(wordsSelect,e)
    console.log(wordsSelect )
}}
    items={wordsSelect} />
    {#if selectedWord }
    <input type="text" name="editWordInput" id="18daz81d8" bind:value={ selectedWord.label} on:input={() => wordsSelect = wordsSelect} on:change={()=>selectedWord=null} >
    <button on:click={()=>{
        delWord()
    }}>Delete</button>
    {/if}
<h1>Colors</h1>
<input type="text" name="addWordInput" id="18dazdd81d8" bind:value={ newColor} on:change={()=>addColor()} >
<button on:click={()=>{
    addColor()
}}>Add
</button>
<Select  showChevron on:change={(e)=>{ 
    selectedColor = null
    selectedColor=selectChange(colorsSelect,e)
    console.log(colorsSelect)
}}  items={colorsSelect} />
    {#if selectedColor }
    <input type="text" name="editWordInput" id="18dazdaz81d8" bind:value={ selectedColor.label} on:input={() => colorsSelect = colorsSelect} on:change={()=>selectedColor=null} >
    <button on:click={()=>{
        delColor()
    }}>Delete</button>
    {/if}


<h1>Live style editing</h1>
<input type="text" name="styleInput" id="18az81d8" value={inputStyle} on:change={buildStyle} >
<h1>Speed editing current : {speed}</h1>
<input min={0.0} max={10} step={0.1} type="range" name="speedInput" id="18addz81d8" bind:value={speed} >

