<script lang=ts context=module>
        import {SerializeStyle,ParseStyles} from '$lib/Styles/StylesParser'

    const styles:any={};  //all modals get registered here for easy future access
	class Styles {
        
        
        constructor(id:any,style:object){
           this._style =style
            
        }
        get style() {
            return this._style;
        }
        get(addStyle:object) {
            return SerializeStyle({...addStyle,...this.style})
        }

    }
	// 	returns an object for the modal specified by `id`, which contains the API functions (`open` and `close` )
	export function getSheet(id=''){
		return styles[id]
	}
    export function createSheet(id="",style:object={}){
        styles[id] = new Styles(id,style)
        
    }
  
</script>
