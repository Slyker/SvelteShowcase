<script>
    import Counter from '$lib/Counter.svelte';
    async function onSubmit(e) {
      const formData = new FormData(e.target);
      const data = {};
      for (let field of formData) {
        const [key, value] = field;
        data[key] = value;
      }
      console.log("formData: " + formData);
      const res = await fetch('/Crud', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      const json = await res.json()
      result = JSON.stringify(json)
    }
  </script>
<form on:submit|preventDefault={onSubmit}>
    <label for="apothegm">Apothegm</label>
    <input type="text" name="apothegm" id="apothegm"/>
    <label for="author">Author</label>
    <input type="text" name="author" id="author"/>
    <button type="submit">Submit</button>
  </form>