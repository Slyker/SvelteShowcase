<script lang=ts>
  import DynInput from "$lib/CRUD/components/DynInput.svelte";
  let DEBUG:boolean = false;
  export let number:number;
  export let text:string="";
  export let color:string="#ffffff";
  export let checkbox:boolean=true;
  export let date:string="";
  export let datetime:string="";
  export let datetimeLocal:string="";
  export let email:string="";
  export let hidden:string="";
  export let file:string="";
  export let image:string="https://f.hellowork.com/blogdumoderateur/2013/09/google-logo.png";
  export let month:string="";
  export let password:string="";
  export let radio:string="";
  export let range:string="";
  export let reset:string="Reset";
  export let search:string="";
  export let submit:string="Submit";
  export let tel:string="";
  export let time:string="";
  export let url:string="";
  export let week:string="";
  const notEmptyStr =(val:string)=>{
    return (val && val.length >0)
  }
  const passwordValidatation = (val:string) => {
    let result = "Please enter a password that meet requirements : min 5 chars";
    if(val.length>5 && true && true) // true means another condition
    {
      result="Password is weak"
    }
    if(val.length> 10){
      result="Password is strong"
    }

    return result
  }
</script>

<h1>Basic</h1>
<DynInput type="number" {DEBUG} bind:value={number}>
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>

<DynInput label="Name" labelRight={(notEmptyStr(text))? `Hi ${text} how are you ?`:`Enter your name`} type="text" {DEBUG} bind:value={text} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput label="Password" labelRight={(notEmptyStr(password))? passwordValidatation(password):`Enter a password`} type="password" {DEBUG} bind:value={password} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput label="Favorite color" labelRight={(notEmptyStr(color))? `Selected color is : ${color}`:`Select a color`}  type="color" {DEBUG} bind:value={color} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="checkbox" {DEBUG} bind:value={checkbox}>
test
<svelte:fragment slot="right">
  Hey
</svelte:fragment>
</DynInput>

<DynInput type="email" {DEBUG} bind:value={email} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="search" {DEBUG} bind:value={search} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="tel" {DEBUG} bind:value={tel} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="url" {DEBUG} bind:value={url} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<h1>Date</h1>
<DynInput type="date" {DEBUG} bind:value={date} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="datetime" {DEBUG} bind:value={datetime}>
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="datetime-local" {DEBUG} bind:value={datetimeLocal} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="month" {DEBUG} bind:value={month} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="time" {DEBUG} bind:value={time} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="week" {DEBUG} bind:value={week} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<h1>UI</h1>
<DynInput type="radio" {DEBUG} bind:value={radio} radioOptions={["Test 1","test2","test3"]} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="range" {DEBUG} bind:value={range} rangeOptions={{max:1000}}>
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="file" {DEBUG} bind:value={file} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="image" style="max-width: 60%" {DEBUG} bind:value={image}  >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="reset" {DEBUG} bind:value={reset} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="submit" {DEBUG} bind:value={submit} >
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>
<DynInput type="hidden" {DEBUG} bind:value={hidden}>
  Age
  <svelte:fragment slot="right">
    {(number && number > 0)? `You are ${number} years old`:"Enter your age"}
  </svelte:fragment>
</DynInput>