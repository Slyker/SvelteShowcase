<script context="module" lang="ts">
	let onTop:any   //keeping track of which open modal is on top
	const modals:any={}  //all modals get registered here for easy future access
	
	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getModal(id=''){
		return modals[id]
	}
</script>

<script lang="ts">
import {onDestroy, onMount} from 'svelte'
import {ParseStyles,SerializeStyle} from '$lib/StylesParser'
import Separator from '$lib/UI/Separator.svelte'
let topDiv:any
let visible=false;
let prevOnTop:any
let closeCallback:any

export let keybClose:boolean = true;
export let mouseClose:boolean = true;
export let closeBtn:boolean = true;
export let okClose:boolean = true;
export let cancelClose:boolean = true;
export let title:string="";
// Concerns buttons
export let type:string = "basic" // basic|yesno|remove
export let onOk:Function = () => null;
export let onCancel:Function = () =>null;
export let okText:string = "Yes";
export let cancelText:string = "No";
export let okStyle:object={};
export let cancelStyle:object={};

$:{
	switch (type) {
		case "basic":
			okText = ""
			cancelText=""
			break;
		case "yesno":
			okText = "Yes"
			cancelText="No"
		break;
		case "delete":
			okText = "Delete"
			cancelText="Cancel"		
		break;
		case "add":
			okText = "Add"
			cancelText="Cancel"		
			break;
		case "update":
			okText = "Update"
			cancelText="Cancel"		
		break;
	
		default:
			break;
	}
}
export let id=''

function keyPress(ev:any){
	//only respond if the current modal is the top one
	if(keybClose && ev.key=="Escape" && onTop==topDiv) close() //ESC
}

/**  API **/
function open(callback:Function){
	closeCallback=callback
	if(visible) return
	prevOnTop=onTop
	onTop=topDiv
	window.addEventListener("keydown",keyPress)
	
	//this prevents scrolling of the main window on larger screens
	document.body.style.overflow="hidden" 

	visible=true
	//Move the modal in the DOM to be the last child of <BODY> so that it can be on top of everything
	document.body.appendChild(topDiv)
}
	
function close(retVal?:any){
	if(!visible) return
	window.removeEventListener("keydown",keyPress)
	onTop=prevOnTop
	if(onTop==null) document.body.style.overflow=""
	visible=false
	if(closeCallback) closeCallback(retVal)
}
	
//expose the API
modals[id]={open,close}
	
</script>

<div id={"topModal-"+id} class={"topModal"} class:visible bind:this={topDiv} on:click={()=>{if(mouseClose){close()}}}>
	<div id={'modal-'+id} class={"modal"} on:click|stopPropagation={()=>{}}>
        {#if closeBtn }
            <svg class:close id="{'modal-close-'+id}" on:click={()=>close()} viewBox="0 0 12 12">
                <circle cx=6 cy=6 r=6 />
                <line x1=3 y1=3 x2=9 y2=9 />
                <line x1=9 y1=3 x2=3 y2=9 />
            </svg>
        {/if}

		<div class="modal-content" id={'modal-content-'+id}>
			{#if $$slots.header}
				<slot name="header"></slot>
				<Separator id={"modal-header-serparator-"+id} h={1} w="100%"/>
			{:else if title && title.length > 0} 
                <h1 style="margin:0;">{title}</h1>
				<Separator id={"modal-header-serparator-"+id} h={1} w="100%"/>

            {/if}			
			<slot name="content"></slot>
			{#if type.toLowerCase() !== "basic" }
			<div style="float: right;">
				<button style={SerializeStyle({...cancelStyle})}  on:click={()=>{onCancel();if(cancelClose)getModal(id).close()}}>
					{cancelText}
				</button>
				<button style={SerializeStyle({...okStyle})} on:click={()=>{onOk();if(okClose)getModal(id).close()}}>
					{okText}
				</button>
			</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.topModal {
		visibility: hidden;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #4448;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal {
		position: relative;
		border-radius: 6px;
		background: white;
    border: 2px solid #000;
		filter: drop-shadow(5px 5px 5px #555);
		padding: 1em;
	}

	.visible {
		visibility: visible !important;
	}

	.close {
		position: absolute;
		top:-12px;
		right:-12px;
		width:24px;
		height:24px;
		cursor: pointer;
		fill:#F44;
		transition: transform 0.3s;
	}	

	.close:hover {
		transform: scale(2);
	}

	.close line {
		stroke:#FFF;
		stroke-width:2;
	}
	.modal-content {
		max-width: calc(100vw - 20px);
		max-height: calc(100vh - 20px);
		overflow: auto;
	}
</style>