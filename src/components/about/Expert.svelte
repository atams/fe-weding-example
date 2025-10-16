<script lang="ts">
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Fade in tiap elemen dengan efek halus saat scroll
		gsap.from(".expert-reveal", {
			scrollTrigger: {
				trigger: ".expert-section",
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
			y: 40,
			opacity: 0,
			duration: 1,
			stagger: 0.25,
			ease: "power2.out",
		});

		// Efek zoom ringan untuk gambar
		gsap.from(".expert-img", {
			scrollTrigger: {
				trigger: ".expert-img",
				start: "top 90%",
				toggleActions: "play none none reverse",
			},
			scale: 0.95,
			opacity: 0,
			duration: 1.2,
			ease: "power2.out",
		});
	});
</script>

<section class="expert-section bg-[#FAF7F3] py-10 px-6 lg:px-24 text-[#4B3E2A]">
	<div class="grid lg:grid-cols-[45%_55%] gap-10 items-center">
		<div class="space-y-5">
			<div class="expert-reveal">
				<h3 class="text-sm tracking-[0.2em] font-medium text-[#9C8B78]">OUR</h3>
				<h2 class="text-3xl sm:text-4xl font-serif font-semibold text-[#3B2E1E]">
					EXPERT TEAM
				</h2>
			</div>

			<p class="expert-reveal text-[#6F6455] text-sm sm:text-base leading-relaxed max-w-md">
				Uncover the artistry behind the magic of your wedding day from the initial consultation to the final dance.
			</p>
		</div>

		<div
			class="expert-reveal relative overflow-hidden flex justify-center items-center"
		>
			<img
				src="/img/venue.jpg"
				alt="Wedding Venue"
				class="expert-img w-[50%] rounded-md"
			/>
		</div>
	</div>

	<!-- BOTTOM TEXT ROW -->
	<div
		class="expert-reveal grid sm:grid-cols-3 gap-8 mt-16 text-center sm:text-left"
	>
		<div>
			<h4 class="text-lg font-semibold mb-2 tracking-wide">CONSULTATION</h4>
			<p class="text-sm text-[#6F6455] leading-relaxed">
				Begin with a detailed discussion to understand your dream wedding vision and preferences.
			</p>
		</div>

		<div>
			<h4 class="text-lg font-semibold mb-2 tracking-wide">COORDINATION</h4>
			<p class="text-sm text-[#6F6455] leading-relaxed">
				We meticulously plan every vendor, detail, and coordinate seamlessly for a stress-free experience.
			</p>
		</div>

		<div>
			<h4 class="text-lg font-semibold mb-2 tracking-wide">EXECUTION</h4>
			<p class="text-sm text-[#6F6455] leading-relaxed">
				On the big day, our expert team ensures everything runs smoothly, turning your dreams into reality.
			</p>
		</div>
	</div>
</section>

<style>
	:global(body) {
		font-family: "Playfair Display", serif;
		background-color: #faf7f3;
	}
</style>
