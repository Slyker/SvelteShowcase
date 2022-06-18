<script lang=ts>
     import {createSheet,getSheet} from "$lib/Styles/GlobalStyles.svelte";

     createSheet("button1", {
        color:"white",
        fontSize:20,
     })
</script>

<h1> Global styles</h1>
<button style={getSheet("button1").get({backgroundColor:"black"})}> TEST</button>
