<script lang=ts>
  import DynInput from './DynInput.svelte';

    export let number:number=1;
    export let text:string="1";
    export let color:string="#ffffff";
    export let checkbox:boolean=true;
    export let date:string="";
    export let datetime:string="";
    export let datetimeLocal:string="";
    export let email:string="";
    export let hidden:string="";
    export let file:string="";
    export let image:string="";
    export let month:string="";
    export let password:string="";
    export let radio:string="";
    export let range:string="";
    export let reset:string="";
    export let search:string="";
    export let submit:string="";
    export let tel:string="";
    export let time:string="";
    export let url:string="";
    export let week:string="";
    
    
    
</script>
<h1>Basic</h1>
<DynInput type="number" DEBUG bind:value={number} ></DynInput>
<DynInput type="text" DEBUG bind:value={text} />
<DynInput type="password" DEBUG bind:value={password} />
<DynInput type="color" DEBUG bind:value={color} />
<DynInput type="checkbox" DEBUG bind:value={checkbox} />
<DynInput type="email" DEBUG bind:value={email} />
<DynInput type="search" DEBUG bind:value={search} />
<h1>Date</h1>
<DynInput type="date" DEBUG bind:value={date} />
<DynInput type="datetime" DEBUG bind:value={datetime} />
<DynInput type="datetime-local" DEBUG bind:value={datetimeLocal} />
<DynInput type="month" DEBUG bind:value={month} />
<DynInput type="time" DEBUG bind:value={time} />
<DynInput type="week" DEBUG bind:value={week} />
<h1>UI</h1>
<DynInput type="radio" DEBUG bind:value={radio} radioOptions={["Test 1","test2","test3"]} />
<DynInput type="range" DEBUG bind:value={range} rangeOptions={{max:1000}}/>
<DynInput type="file" DEBUG bind:value={file} />
<DynInput type="image" DEBUG bind:value={image} />
<DynInput type="reset" DEBUG bind:value={reset} />
<DynInput type="submit" DEBUG bind:value={submit} />
<DynInput type="tel" DEBUG bind:value={tel} />
<DynInput type="url" DEBUG bind:value={url} />
<DynInput type="hidden" DEBUG bind:value={hidden} />
