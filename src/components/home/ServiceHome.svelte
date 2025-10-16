<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    let sectionRef: HTMLElement;

    const services = [
        { title: "VENUE", img: "/img/venue.jpg" },
        { title: "CATERING", img: "/img/catering.jpg" },
        { title: "DECOR", img: "/img/decor.jpg" },
        { title: "ATTIRE", img: "/img/attire.jpg" },
        {
            title: "MEDIA",
            img: "/img/media.jpg", // img tidak digunakan untuk render, tapi bisa untuk data
            desc: "Capture every moment with the artistry of our talented on-site photographers & videographers.",
            button: true
        },
        { title: "MUSIC", img: "/img/music.jpg" }
    ];

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animasi heading (tidak berubah)
        gsap.from(".services-heading", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // Animasi cards (tidak berubah)
        const cards = document.querySelectorAll(".service-card");
        gsap.from(cards, {
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        // Cleanup (tidak berubah)
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<section bind:this={sectionRef} class="py-10 px-6">
    <div class="max-w-7xl mx-auto">
        <h2 class="services-heading text-2xl font-serif text-[#4a4139] text-center mb-16 tracking-[0.2em] uppercase">
            Our Services
        </h2>

        <div class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {#each services as service}
                <div
                    class="service-card relative overflow-hidden group cursor-pointer arch-card"
                    class:media-border={service.button}
                    class:bg-white={service.button}
                >
                    {#if !service.button}
                        <div
                            class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style="background-image: url({service.img});"
                        ></div>
                        <div class="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
                    {/if}

                    <div class="relative z-10 h-full">
                        {#if service.button}
                            <div class="flex flex-col items-center justify-center h-full text-center p-8 text-[#4a4139]">
                                <div class="w-16 h-16 mb-4 border border-gray-300 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 class="text-xl font-medium tracking-[0.25em] mb-3">
                                    {service.title}
                                </h3>
                                <p class="text-xs leading-relaxed text-gray-600 max-w-[200px] mb-5 font-light">
                                    {service.desc}
                                </p>
                                <button class="bg-[#ae7b54] rounded-sm text-white px-6 py-2 text-xs font-medium tracking-wider hover:bg-[#5a4d44] transition-all duration-300 uppercase">
                                    Book Now
                                </button>
                            </div>
                        {:else}
                            <div class="h-full flex flex-col items-center justify-end pb-12 text-white">
                                <h3 class="text-xl font-medium tracking-[0.25em]">
                                    {service.title}
                                </h3>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .arch-card {
        height: 320px;
        border-radius: 50% 50% 0 0 / 40% 40% 0 0;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    /* Border untuk media card tetap sama, tapi sekarang di atas background putih */
    .media-border {
        border: 2px solid #6f441fb6;
    }

    @media (min-width: 1024px) {
        .arch-card {
            height: 300px;
        }
    }
</style>