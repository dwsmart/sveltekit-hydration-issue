
<script context="module">
	export const hydrate = false;
	export async function load({ fetch }) {
		const response = await fetch(`/home.json`);
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
<h1>Welcome to SvelteKit</h1>
{@html content}
<p>Visit <a href="page2">page2</a></p>
