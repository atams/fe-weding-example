<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import "../global.css";
	import NavBar from "../components/NavBar.svelte";
	import Footer from "../components/Footer.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
{@render children?.()}
<Footer />
