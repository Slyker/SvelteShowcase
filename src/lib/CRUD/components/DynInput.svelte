<script lang=ts>
    import {getID} from "$lib/CRUD/IdGen.svelte"
    export let type:string="text";    
    export let value:any;
    export let input:any=value;
    export let DEBUG:boolean=false;
    export let radioOptions:string[]=[];
    export let onChange:Function=()=>null;
    export let placeholder:string = "";
    export let style:string ="";
    export let label:string="";
    export let labelRight:string="";
    const simpleInput:string[] = ["text","number","color","date","datetime","datetime-local","email","file","month","password","reset","search","submit","tel","time","url","week"]
    function typeAction(node:any) {
        node.type = type;
    }
    let id =  getID(5)
    let name = id + "-" + type   
    type rangeOption = {
        min?:number,
        max?:number,
        step?:number,
    }
    export let rangeOptions:rangeOption= {min:0,max:100,step:1};
    let changed:boolean = false;
    $:if(DEBUG){
        //console.log(`DynInput Changed old:${value} new:${input}`)
    }
    
    $:if(changed){
        onChange();
        value=input;
        changed=false;
    }
    
</script>


    {(DEBUG)? `DEBUG - Type : ${type} old:${value} new:${input} |`:""}
    <slot />
        {#if simpleInput.includes(type)}
            <input use:typeAction {name} {style} {placeholder} id={id} bind:value={input} on:change={()=>changed=true}> 
        {:else if type==="checkbox"}
            <input type="checkbox" {name} {style} {placeholder} id={id} bind:checked={input} on:change={()=>changed=true}>
        {:else if type==="hidden"}
            <input type="hidden" {style}>
        {:else if type==="image"}
            <input type="image" src={input} alt="" {name} {id} {style}>
        {:else if type==="radio"}
            {#each radioOptions as radioOption, i }
            <label for={radioOption}>
                <input type="radio" {name} {id} bind:group={input} value={i} on:change={()=>changed=true} {style}>
                {radioOption}
            </label>            
            {/each}
        {:else if type==="range"}
            <input type="range" {name} {id} bind:value={input} on:change={()=>changed=true} min={rangeOptions.min} max={rangeOptions.max} step={rangeOptions.step} {style}>
        {/if}
        {labelRight}
        <slot name ="right"/>    
    



