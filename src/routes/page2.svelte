
<script context="module">
	export async function load({ fetch }) {
		const response = await fetch(`/page2.json`);
		const json = await response.json();
		const content = json.data;
		return {
			props: {
				content
			}
		};
	}
</script>
<script>
	export let content;
</script>
<h1>This is page 2</h1>
{@html content}
<p>Back to home <a sveltekit:prefetch href="/">Home</a></p>
