<script lang=ts>
    let loremTag:string = "p"
    let loremNr:number = 3;
    let loremCenter:boolean =true;
    let loremCenterStyle = "";
    $:loremCenterStyle = (loremCenter)? "text-align: center;":""
    let testLoremIndex:number[] = [];
    $:{
        testLoremIndex= []
        for (let i = 0; i < loremNr; i++) {
            testLoremIndex.push(i);
        }
        testLoremIndex = testLoremIndex;
    }

</script>

<h1>Lorem generator</h1>
<label for="loremTag">Tag <input type="text" name="loremTag" id="loremTag" bind:value={loremTag}> {loremTag}</label>
<label for="loremNr">Number <input type="number" name="loremNr" id="loremNr" bind:value={loremNr}> {loremNr} / {testLoremIndex.length}</label>
<label for="loremCenter"><input type="checkbox" name="loremCenter" id="loremCenter" bind:checked={loremCenter}> Center lorem </label>
{#if loremTag !== "" }

    {#each testLoremIndex as element,i }
        {@html `<${loremTag} style="${loremCenterStyle}">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor facilis sint mollitia accusantium praesentium rerum dolorem, ut, nemo esse iusto quaerat, illum magni commodi sequi dolorum doloremque iste odit at ${i}.
        </${loremTag}>`}
    {/each}
{:else}
   <center> <h2 style="color:red">You should enter a tag to generate lorems</h2></center>
{/if}


<style>

</style>

