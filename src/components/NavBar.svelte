<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	interface MenuItem {
		label: string;
		href: string;
	}

	const menuItems: MenuItem[] = [
		{ label: 'Home', href: '#home' },
		{ label: 'About', href: '#about' },
		{ label: 'Menu', href: '#menu' },
		{ label: 'Contact', href: '#contact' }
	];

	let menuOpen = false;
	let isScrolled = false;
	let mobileMenu: HTMLDivElement;
	let mobileMenuLinks: HTMLAnchorElement[] = [];

	function toggleMenu() {
		menuOpen = !menuOpen;
		
		if (menuOpen) {
			// Animasi saat menu dibuka
			gsap.to(mobileMenu, {
				opacity: 1,
				duration: 0.3,
				ease: 'power2.out'
			});
			
			gsap.fromTo(
				mobileMenuLinks,
				{
					y: 30,
					opacity: 0
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.5,
					stagger: 0.1,
					ease: 'power3.out',
					delay: 0.1
				}
			);
		} else {
			// Animasi saat menu ditutup
			gsap.to(mobileMenuLinks, {
				y: -20,
				opacity: 0,
				duration: 0.3,
				stagger: 0.05,
				ease: 'power2.in'
			});
			
			gsap.to(mobileMenu, {
				opacity: 0,
				duration: 0.2,
				delay: 0.2,
				ease: 'power2.in'
			});
		}
	}

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav
	class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 transition-all duration-300 px-6"
	class:bg-white={isScrolled}
	class:text-gray-900={isScrolled}
	class:text-white={!isScrolled}
>
	<!-- Logo -->
	<a href="/" class="relative z-30 flex items-center space-x-2">
		<span class="text-2xl font-bold tracking-wide transition-transform hover:scale-105 drop-shadow-lg">
			CoffeeTime
		</span>
	</a>

	<!-- Hamburger Button -->
	<button
		on:click={toggleMenu}
		class="relative z-30 p-2 -mr-2 transition-transform lg:hidden hover:scale-110"
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
	>
		{#if !menuOpen}
			<svg class="w-7 h-7 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		{:else}
			<svg class="w-7 h-7 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		{/if}
	</button>

	<!-- Mobile Menu -->
	<div
		bind:this={mobileMenu}
		class="fixed inset-0 z-20 flex flex-col items-center justify-center w-full h-screen lg:hidden backdrop-blur-sm"
		class:pointer-events-none={!menuOpen}
		class:opacity-0={!menuOpen}
		style="background-color: {isScrolled ? 'rgba(255, 255, 255, 0.97)' : 'rgb(75 105 46 / 97%)'};"
	>
		<div class="flex flex-col items-center space-y-6 px-6">
			{#each menuItems as item, i}
				<a 
					bind:this={mobileMenuLinks[i]}
					href={item.href}
					class="text-3xl font-bold ml- transition-all hover:scale-110 hover:tracking-wider"
					class:text-gray-800={isScrolled}
					on:click={toggleMenu}
				>
					{item.label}
				</a>
			{/each}
		</div>
	</div>

	<!-- Desktop Menu -->
	<ul class="items-center hidden space-x-10 font-medium uppercase lg:flex">
		{#each menuItems as item}
			<li class="!ml-4">
				<a 
					href={item.href}
					class="transition-all hover:text-opacity-70 hover:tracking-wider"
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>