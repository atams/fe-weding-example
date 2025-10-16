<script lang="ts">
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	let openIndex: number | null = 2; // default terbuka seperti di gambar

	const faqs = [
		{
			q: "How early should we start planning our wedding?",
			a: "We recommend starting your planning process at least 6-12 months in advance to ensure you have the best options for venues and vendors."
		},
		{
			q: "Can we customize our wedding package?",
			a: "Absolutely! Our team works closely with you to tailor every detail of your wedding to match your vision and preferences."
		},
		{
			q: "How do you handle unexpected challenges on the wedding day?",
			a: "Our experienced team is adept at troubleshooting. We have plans to address any unforeseen challenges, ensuring a smooth and stress-free celebration."
		},
		{
			q: "What if we already have some vendors in mind?",
			a: "We’re happy to collaborate with your preferred vendors and seamlessly integrate them into your event plan."
		}
	];

	onMount(() => {
		// Animasi masuk saat scroll
		gsap.from(".faq-reveal", {
			scrollTrigger: {
				trigger: ".faq-section",
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
			y: 40,
			opacity: 0,
			duration: 1.1,
			stagger: 0.25,
			ease: "power2.out",
		});

		// Efek zoom ringan untuk gambar
		gsap.from(".faq-img", {
			scrollTrigger: {
				trigger: ".faq-img",
				start: "top 90%",
				toggleActions: "play none none reverse",
			},
			scale: 0.95,
			opacity: 0,
			duration: 1.2,
			ease: "power2.out",
		});
	});

	function toggleFAQ(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="faq-section bg-[#FAF7F3] py-20 px-6 lg:px-24 text-[#4B3E2A]">
	<div class="grid lg:grid-cols-[45%_55%] gap-10 items-start">
		<!-- LEFT IMAGE -->
		<div class="faq-reveal relative bg-white shadow-md rounded-md overflow-hidden ">
			<img
				src="/img/decor.jpg"
				alt="FAQ Decor"
				class="faq-img w-full h-[40vh] object-cover"
			/>
		</div>

		<!-- RIGHT TEXT -->
		<div class="faq-reveal space-y-8">
			<h2 class="text-3xl sm:text-4xl font-serif font-semibold text-[#3B2E1E]">
				FREQUENTLY <br />
				<span class="font-normal">ASKED QUESTIONS</span>
			</h2>

			<div class="space-y-4">
				{#each faqs as item, i}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="border-b border-[#D8CBB6] pb-4 cursor-pointer transition-all"
						on:click={() => toggleFAQ(i)}
					>
						<div class="flex justify-between items-center">
							<h4 class="font-semibold text-[15px] sm:text-base">
								{item.q}
							</h4>
							<span
								class="text-lg font-bold transition-transform duration-300"
								class:rotate-45={openIndex === i}
							>
								{openIndex === i ? "×" : "+"}
							</span>
						</div>

						{#if openIndex === i}
							<p
								class="mt-3 text-sm text-[#6F6455] leading-relaxed transition-all duration-500"
							>
								{item.a}
							</p>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	:global(body) {
		font-family: "Playfair Display", serif;
		background-color: #faf7f3;
	}
	.rotate-45 {
		transform: rotate(45deg);
	}
</style>
