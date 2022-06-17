<script lang="ts">
    import {onMount} from 'svelte';
    import {SerializeStyle} from '$lib/StylesParser'
       
    export let colors:string[] = [];
    export let words:string[]= [];
    export let delay:number = 1;
    export let reverse:boolean = false;
    export let style:object={};
    let oldDelay:number;
    let interval:any;
    let cCount = -1;
    let colorSet:string[]=colors;

    const asertCount=(currentCount:number, limit:number):number=>{
        if(reverse && currentCount === limit){currentCount = 0}
        else if(!reverse && currentCount === -1){currentCount = limit-1};
        return currentCount
    }
    let cCountAction = ():any => {  
        cCount +=1;
        if( cCount === colors.length){cCount = 0};
        if(colors.length === 1) {
            cCount = 0
        }
        let temp:string[] = []
            let count = cCount
            count = asertCount(count,colors.length)            
            words.forEach((word)=>{
                temp.push(colors[count])
                count =(reverse)?count+1:count-1
                count = asertCount(count,colors.length)
            })
        colorSet = temp;
    }
    $:if(oldDelay !== delay){
        oldDelay = delay                
        createInterval()                
    }
    const createInterval=()=>{
        clearInterval(interval)
        interval = setInterval(() => {
            cCountAction()

        }, delay*1000);
    }
    onMount(() => {
        cCountAction()
        createInterval()
		return () => clearInterval(interval);
	});
    //SerializeStyle({...style, color:colorSet[i]})
</script>
<span>
    {#each words as word,i}        
        <span style={SerializeStyle({...style, color:colorSet[i]})}>{word}</span>
    {/each}
</span>