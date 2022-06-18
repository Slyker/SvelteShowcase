<script lang="ts">
import {ParseStyles,SerializeStyle} from '$lib/Styles/StylesParser'

export let id:any;
export let h:any;
export let w:any;
export let style:any= {stroke:"black",strokeWidth:2.5};
let appliedStyle:any;
$:appliedStyle=SerializeStyle({...style})
</script>
<svg id={id} height={h} width={w} >
    <line x1="0" y1="0"  x2="100%" y2="0"  style={appliedStyle} />
</svg>