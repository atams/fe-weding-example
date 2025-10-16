<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "../app.css";
	import "../global.css";
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	import Lenis from "lenis";
	import "lenis/dist/lenis.css";
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	let lenis: Lenis;

	onMount(() => {
		// Register GSAP ScrollTrigger plugin
		gsap.registerPlugin(ScrollTrigger);

		// Initialize Lenis with optimal settings
		lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			smoothTouch: false,
			autoRaf: false,
		});

		lenis.on("scroll", ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(lenis.raf);
			lenis.destroy();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>A-TAMS Wedding Organizer</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Navbar />

<main>
	{@render children?.()}
</main>

<Footer />

<style>
	:global(html) {
		overflow-x: hidden;
	}

	:global(html.lenis, html.lenis body) {
		height: auto;
	}

	:global(.lenis.lenis-smooth) {
		scroll-behavior: auto !important;
	}

	:global(.lenis.lenis-smooth [data-lenis-prevent]) {
		overscroll-behavior: contain;
	}

	:global(.lenis.lenis-stopped) {
		overflow: hidden;
	}

	:global(.lenis.lenis-smooth iframe) {
		pointer-events: none;
	}

	main {
		position: relative;
		width: 100%;
	}
</style>