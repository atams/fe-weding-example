<script lang="ts">
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	// Animasi scroll reusable
	function scrollReveal(target: string, options: gsap.TweenVars = {}) {
		gsap.from(target, {
			scrollTrigger: {
				trigger: target,
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
			opacity: 0,
			y: 50,
			duration: 1,
			ease: "power3.out",
			...options,
		});
	}

	onMount(() => {
		scrollReveal(".why-title");
		scrollReveal(".why-item", { stagger: 0.2 });
		scrollReveal(".achievements-title");
		scrollReveal(".achievements-item", { stagger: 0.15 });
		scrollReveal(".achievements-image", { x: 50, duration: 1 });
	});
</script>

<main class="bg-[#fefdfb] font-sans text-[#4b2e22]">

	<!-- WHY CHOOSE SECTION -->
	<section class="bg-[#fdfaf8] py-20 px-6 lg:px-24 text-center">
		<h2 class="why-title text-[#6b4b3e] text-sm uppercase font-semibold tracking-wide">
			Why Choose
		</h2>
		<h1 class="why-title text-4xl font-serif text-[#4b2e22] mb-12">
			Name Your Brand
		</h1>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			<div class="why-item flex flex-col items-center space-y-4">
				<img src="/img/3.png" alt="Creative Concept" class="w-25 h-25" />
				<h3 class="font-bold uppercase">Creative Concept</h3>
				<p class="text-sm text-[#7a6a60] max-w-xs">
					Our wedding organizers bring your dream wedding concept to life — from thematic decorations to innovative layouts.
				</p>
			</div>

			<div class="why-item flex flex-col items-center space-y-4">
				<img src="/img/2.png" alt="Perfect Attire" class="w-25 h-25" />
				<h3 class="font-bold uppercase">Perfect Attire</h3>
				<p class="text-sm text-[#7a6a60] max-w-xs">
					We collaborate with renowned designers to ensure your wedding attire is the star of the occasion.
				</p>
			</div>

			<div class="why-item flex flex-col items-center space-y-4">
				<img src="/img/1.png" alt="Delicious Foods" class="w-25 h-25" />
				<h3 class="font-bold uppercase">Delicious Foods</h3>
				<p class="text-sm text-[#7a6a60] max-w-xs">
					We partner with top caterers to make your wedding feast a true symphony of flavors.
				</p>
			</div>
		</div>
	</section>

	<!-- OUR ACHIEVEMENTS SECTION -->
	<section class="bg-[#fbf8f6] py-20 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-10">
		<div class="flex-1">
			<h2 class="achievements-title text-[#4b2e22] text-sm uppercase font-semibold">
				Our Achievements
			</h2>

			<div class="mt-6 space-y-4">
				<div class="achievements-item flex justify-between border-b border-[#d7c5b7] pb-2">
					<span>2023</span>
					<span>Excellence in Event Planning</span>
				</div>
				<div class="achievements-item flex justify-between border-b border-[#d7c5b7] pb-2">
					<span>2022</span>
					<span>Customer Satisfaction Award</span>
				</div>
				<div class="achievements-item flex justify-between border-b border-[#d7c5b7] pb-2">
					<span>2021</span>
					<span>Innovative Wedding Design Award</span>
				</div>
			</div>
		</div>

		<div class="flex-1 flex justify-end">
			<div class="achievements-image bg-white rounded-2xl shadow-md overflow-hidden w-[320px]">
				<img src="/img/achivment.jpg" alt="Flowers" class="w-full h-full object-cover" />
			</div>
		</div>
	</section>

</main>
