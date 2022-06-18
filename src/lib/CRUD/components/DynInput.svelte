<script lang=ts>
    import {getID} from "$lib/CRUD/IdGen.svelte"
    export let type:string="text";    
    export let value:any;
    export let input:any=value;
    export let DEBUG:boolean=false;
    export let radioOptions:string[]=[];
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
        console.log(`DynInput Changed old:${value} new:${input}`)
    }
    
    $:if(changed){
        value=input;
        changed=false;
    }
    
</script>

<label for={value}>
    {(DEBUG)? `DEBUG - Type : ${type} old:${value} new:${input}`:""}
    Value : {value} |
    {#if type ==="text" }
        <input type="text" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="number"}
        <input type="number" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="color"}
        <input type="color" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="checkbox"}
        <input type="checkbox" name={name} id={id} bind:checked={input} on:change={()=>changed=true}>
    {:else if type==="date"}
        <input type="date" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="datetime"}
        TODO<input type="datetime" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="datetime-local"}
        <input type="datetime-local" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="email"}
        <input type="email" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="file"}
        <input type="file" bind:value={input} on:change={()=>changed=true}>
    {:else if type==="hidden"}
        <input type="hidden">
    {:else if type==="image"}
        <input type="image" src={input} alt=""> MAY NOT WORK ITS OK
    {:else if type==="month"}
        <input type="month" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="password"}
        <input type="password" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="radio"}
        {#each radioOptions as radioOption, i }
        <label for={radioOption}>
            <input type="radio" name={name} id={id} bind:group={input} value={i} on:change={()=>changed=true}>
            {radioOption}
        </label>            
        {/each}
    {:else if type==="range"}
        <input type="range" name={name} id={id} bind:value={input} on:change={()=>changed=true} min={rangeOptions.min} max={rangeOptions.max} step={rangeOptions.step}>
    {:else if type==="reset"}
        <input type="reset" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="search"}
        <input type="search" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="submit"}
        <input type="submit" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="tel"}
        <input type="tel" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="time"}
        <input type="time" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="url"}
        <input type="url" name={name} id={id} bind:value={input} on:change={()=>changed=true}>
    {:else if type==="week"}
        <input type="week" name={name} id={id} bind:value={input} on:change={()=>changed=true}>

    {/if}
    
</label>


