<script lang="ts">
	import { onMount } from "svelte";
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	let sectionRef: HTMLElement;

	onMount(() => {
		// Register ScrollTrigger plugin
		gsap.registerPlugin(ScrollTrigger);

		// Animasi munculnya garis vertikal dengan progress scroll
		gsap.fromTo(".line", 
			{
				height: 0
			},
			{
				height: "4rem", // 16 in Tailwind = 4rem
				ease: "power2.out",
				scrollTrigger: {
					trigger: sectionRef,
					start: "top 80%",
					end: "top 40%",
					scrub: 1, // Smooth scrubbing effect
					toggleActions: "play none none reverse"
				}
			}
		);

		// Animasi heading
		gsap.from(".about-heading", {
			y: 40,
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			scrollTrigger: {
				trigger: ".about-heading",
				start: "top 85%",
				end: "top 60%",
				toggleActions: "play none none reverse"
			}
		});

		// Animasi paragraf dengan stagger
		gsap.from(".about-text p", {
			y: 30,
			opacity: 0,
			duration: 0.8,
			stagger: 0.2,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".about-text",
				start: "top 85%",
				end: "top 60%",
				toggleActions: "play none none reverse"
			}
		});

		// Animasi logo
		gsap.from(".about-logo", {
			scale: 0.8,
			opacity: 0,
			duration: 1,
			ease: "back.out(1.7)",
			scrollTrigger: {
				trigger: sectionRef,
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse"
			}
		});

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	});
</script>

<section bind:this={sectionRef} class="py-16 px-8 md:px-20 bg-[#f8f6f3] text-[#3b2f2f]">
	<div class="flex flex-col items-center text-center max-w-3xl mx-auto">
		<!-- Logo -->
		<img src="/particle/1.png" alt="ornament" class="about-logo w-32 mb-6" />

		<!-- Vertical Line -->
		<div class="line w-[1px] h-16 bg-[#bfa98a] mb-6"></div>

		<!-- Heading -->
		<h2 class="about-heading text-2xl md:text-3xl font-light leading-snug tracking-wide text-[#3a2d2d]">
			WE ARE <span class="font-semibold text-[#bfa98a]">PASSIONATE</span> ABOUT UNLEASHING ONLY THE
			<br class="hidden md:block" />
			BEST WEDDINGS, WITH YEARS OF <span class="font-semibold text-[#bfa98a]">EXPERIENCE</span> AND A
			<span class="font-semibold text-[#bfa98a]">PORTFOLIO</span> OF COUNTLESS WORKS.
		</h2>

		<!-- Paragraph -->
		<div class="mt-6 space-y-4 text-sm md:text-base text-[#5a4c4c] leading-relaxed about-text">
			<p>
				Here, we understand that your wedding day is a chapter in your love story,
				and we're here to ensure it's a masterpiece. With years of expertise in orchestrating dream weddings,
				we've earned a reputation for creating unforgettable love moments.
			</p>
			<p>
				Our journey is woven with a passion for love, design, and meticulous planning. 
				We are not casual event planners; we are professional memory curators dedicated 
				to making your special day a reflection of your love story.
			</p>
		</div>
	</div>
</section>