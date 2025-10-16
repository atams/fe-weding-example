<script lang="ts">
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		gsap.from(".reveal-text", {
			scrollTrigger: {
				trigger: ".reveal-section",
				start: "top 80%",
				end: "top 30%",
				toggleActions: "play none none reverse",
			},
			y: 60,
			opacity: 0,
			duration: 1.4,
			stagger: 0.3,
			ease: "power3.out",
		});

		const flower = document.querySelector(".flower-img");
		if (flower) {
			gsap.fromTo(
				flower,
				{ 
					scale: 0.5, 
					opacity: 0, 
					y: -30,
					rotation: -15 
				},
				{
					scale: 1,
					opacity: 1,
					y: 0,
					rotation: 0,
					duration: 1.6,
					ease: "back.out(1.4)",
					scrollTrigger: {
						trigger: ".reveal-section",
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
				}
			);

			gsap.to(flower, {
				y: -8,
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
			});

			flower.addEventListener("mouseenter", () => {
				gsap.to(flower, { 
					rotate: 8, 
					scale: 1.15, 
					duration: 0.5, 
					ease: "back.out(2)",
					filter: "brightness(1.1)"
				});
			});
			flower.addEventListener("mouseleave", () => {
				gsap.to(flower, { 
					rotate: 0, 
					scale: 1, 
					duration: 0.5, 
					ease: "power2.out",
					filter: "brightness(1)"
				});
			});
		}

		gsap.from(".decor-left", {
			scrollTrigger: {
				trigger: ".reveal-section",
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
			scaleX: 0,
			transformOrigin: "right center",
			duration: 1.4,
			ease: "power3.inOut",
		});

		gsap.from(".decor-right", {
			scrollTrigger: {
				trigger: ".reveal-section",
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
			scaleX: 0,
			transformOrigin: "left center",
			duration: 1.4,
			ease: "power3.inOut",
		});

		gsap.from(".decor-line", {
			scrollTrigger: {
				trigger: ".reveal-section",
				start: "top 75%",
				toggleActions: "play none none reverse",
			},
			scaleX: 0,
			transformOrigin: "center",
			duration: 1.3,
			delay: 0.4,
			ease: "power3.inOut",
		});

		gsap.to(".reveal-section", {
			scrollTrigger: {
				trigger: ".reveal-section",
				start: "top bottom",
				end: "bottom top",
				scrub: 1,
			},
			y: -50,
			ease: "none",
		});

		const heading = document.querySelector(".heading-text");
		if (heading) {
			gsap.fromTo(
				".shine-effect",
				{ x: "-100%" },
				{
					x: "200%",
					duration: 2,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: ".reveal-section",
						start: "top 70%",
						toggleActions: "play none none none",
					},
				}
			);
		}

		const paragraph = document.querySelector(".description-text");
		if (paragraph) {
			paragraph.addEventListener("mouseenter", () => {
				gsap.to(paragraph, {
					scale: 1.02,
					duration: 0.3,
					ease: "power2.out",
				});
			});
			paragraph.addEventListener("mouseleave", () => {
				gsap.to(paragraph, {
					scale: 1,
					duration: 0.3,
					ease: "power2.out",
				});
			});
		}
	});
</script>

<section
	class="reveal-section bg-[#F8F4EF] mt-10 flex flex-col items-center justify-center text-center px-6 py-5 relative overflow-hidden"
>
	<div class="flex items-center justify-center w-full max-w-4xl mb-8">
		<div class="decor-left decor-side h-px flex-1 bg-gradient-to-r from-transparent via-[#D8CBB6] to-[#D8CBB6]"></div>
		<img
			src="/particle/1.png"
			alt="flower"
			class="flower-img w-24 h-24 object-contain mx-6 cursor-pointer transition-all"
		/>
		<div class="decor-right decor-side h-px flex-1 bg-gradient-to-l from-transparent via-[#D8CBB6] to-[#D8CBB6]"></div>
	</div>

	<h2
		class="reveal-text heading-text font-serif text-[#4B3E2A] text-xl sm:text-2xl font-medium tracking-wide max-w-3xl leading-relaxed relative overflow-hidden"
	>
		<span class="shine-effect absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"></span>
		DISCOVER THE <span class="font-bold">PERFECT SETTING</span> FOR YOUR LOVE STORY WITH OUR EXQUISITE VENUE SELECTION WEDDING SERVICE.
	</h2>

	<p
		class="reveal-text description-text text-[#6F6455] max-w-2xl mt-6 text-sm sm:text-base leading-relaxed transition-transform cursor-default"
	>
		Discover the perfect setting for your love story with our exquisite venue selection service. Immerse yourself
		in a world of possibilities as we guide you through a curated collection of enchanting locations. Whether you
		envision an intimate garden ceremony surrounded by nature's beauty or an elegant indoor celebration in a
		historic ballroom, our expert team ensures each venue aligns with your vision.
	</p>

	<div class="decor-line reveal-text h-px bg-gradient-to-r from-transparent via-[#D8CBB6] to-transparent w-1/4 mt-10"></div>
</section>

<style>
	:global(body) {
		font-family: "Playfair Display", serif;
		background-color: #f8f4ef;
	}

	.flower-img {
		filter: drop-shadow(0 4px 12px rgba(216, 203, 182, 0.3));
	}
</style>