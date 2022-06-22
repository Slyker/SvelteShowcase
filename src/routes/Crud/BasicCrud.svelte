<script lang="ts">
    import RainbowText from "$lib/RainbowText/RainbowText.svelte";
    import {SerializeStyle,ParseStyles} from '$lib/Styles/StylesParser';
    import DySelect,{parseSelectArray} from '$lib/CRUD/components/DySelect.svelte'
    import type {selectArray} from '$lib/CRUD/components/DySelect.svelte'

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

    // Words CRUD JS
    let words:string[] =["Hey"," world ", "it's me"];
    let wordsSelect:selectArray[] = parseSelectArray(words);
    $:words = wordsSelect.map(x=>x.label)

    // Colors CRUD JS
    let colors:string[] =["blue","gray", "red"];
    let colorsSelect:selectArray[] = parseSelectArray(colors);
    $:colors = colorsSelect.map(x=>x.label)

</script>

<center>

<h1>Including intervals</h1>
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
<h1>Words :</h1>
<DySelect  bind:items={words} bind:itemsList={wordsSelect} />
<h1>Colors :</h1>
<DySelect  bind:items={colors} bind:itemsList={colorsSelect} type="color" />


<!--Style and props edit-->
<h1>Live style editing</h1>
<input type="text" name="styleInput" id="18az81d8" value={inputStyle} on:change={buildStyle} >
<h1>Speed editing current : {speed}</h1>
<input min={0.0} max={10} step={0.1} type="range" name="speedInput" id="18addz81d8" bind:value={speed} >

