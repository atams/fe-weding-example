<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    gsap.registerPlugin(ScrollTrigger);
    let container: HTMLDivElement;

    const packages = [
        {
            title: "Basic Package",
            subtitle: "Suitable for simple Engagement",
            price: "Rp5,000,000",
            image: "/img/prom.jpg",
            bgColor: "bg-white",
        },
        {
            title: "Premium Package",
            subtitle: "Embrace the richness of the culture, ",
            subtitleItalic: "all-in one package!",
            price: "Rp8,800,000",
            image: "/img/prom.jpg",
            bgColor: "bg-white",
        },
        {
            title: "Prom Full Package",
            subtitle:
                "Specially crafted for exclusive & full prom experience!",
            price: "Rp21,000,000",
            image: "/img/prom.jpg",
            bgColor: "bg-slate-800",
            isDark: true,
        },
    ];

    onMount(() => {
        // Animasi untuk heading
        gsap.from(".section-heading", {
            scrollTrigger: {
                trigger: ".section-heading",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(".section-description", {
            scrollTrigger: {
                trigger: ".section-description",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
        });

        // Animasi untuk setiap package card
        gsap.utils.toArray(".package-card").forEach((card: any, i: number) => {
            // Animasi card masuk
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 60,
                rotateY: -15,
                duration: 1,
                delay: i * 0.15,
                ease: "power3.out",
            });

            // Hover effect dengan GSAP
            const image = card.querySelector(".package-image");
            const content = card.querySelector(".package-content");
            const arrow = card.querySelector(".arrow-icon");

            card.addEventListener("mouseenter", () => {
                gsap.to(image, {
                    scale: 1.1,
                    duration: 0.6,
                    ease: "power2.out",
                });
                gsap.to(content, {
                    y: -5,
                    duration: 0.4,
                    ease: "power2.out",
                });
                gsap.to(arrow, {
                    x: 5,
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(image, {
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                });
                gsap.to(content, {
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                });
                gsap.to(arrow, {
                    x: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });
        });

        // Animasi untuk decorative couple image
        gsap.from(".couple-decoration", {
            scrollTrigger: {
                trigger: ".couple-decoration",
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: 50,
            duration: 1.2,
            ease: "power3.out",
        });

        // Parallax effect untuk couple decoration
        gsap.to(".couple-decoration", {
            scrollTrigger: {
                trigger: ".packages-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            y: -50,
        });
    });
</script>

<section
    class="packages-section relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 py-20 px-4 md:px-8"
>
    <!-- Decorative Background Pattern -->
    <div class="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" class="w-full h-full">
            {#each Array(5) as _, i}
                <circle
                    cx="100"
                    cy="100"
                    r={20 + i * 15}
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.5"
                    class="text-red-600"
                />
            {/each}
        </svg>
    </div>

    <div class="max-w-7xl mx-auto relative">
        <!-- Header Section -->
        <div class="mb-16 text-center">
            <h2
                class="section-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
                All in One<br />Package
            </h2>
            <p
                class="section-description text-gray-600 text-base md:text-lg leading-relaxed"
            >
                We handle every aspect of the event, from venue selection and
                decoration to gift arrangement and ceremonial setup.
            </p>
        </div>

        <!-- Packages Grid -->
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
            {#each packages as pkg, i}
                <div class="package-card group cursor-pointer">
                    <div
                        class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    >
                        <!-- Image Container -->
                        <div class="relative h-64 overflow-hidden">
                            <img
                                src={pkg.image}
                                alt={pkg.title}
                                class="package-image w-full h-full object-cover"
                            />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                            ></div>
                        </div>

                        <!-- Content Container -->
                        <div
                            class="package-content {pkg.bgColor} {pkg.isDark
                                ? 'text-white'
                                : 'text-gray-900'} p-6 min-h-[200px] flex flex-col justify-between"
                        >
                            <div>
                                <h3
                                    class="text-xl md:text-2xl font-bold mb-3 leading-tight"
                                >
                                    {pkg.title}
                                </h3>
                                <p
                                    class="{pkg.isDark
                                        ? 'text-gray-300'
                                        : 'text-gray-600'} text-sm mb-4"
                                >
                                    {pkg.subtitle}
                                    {#if pkg.subtitleItalic}
                                        <span class="italic"
                                            >{pkg.subtitleItalic}</span
                                        >
                                    {/if}
                                </p>
                            </div>

                            <div class="flex items-center justify-between">
                                <span
                                    class="text-2xl md:text-3xl font-bold {pkg.isDark
                                        ? 'text-amber-400'
                                        : 'text-amber-600'}"
                                >
                                    {pkg.price}
                                </span>
                                <div
                                    class="arrow-icon w-10 h-10 rounded-full {pkg.isDark
                                        ? 'bg-amber-400'
                                        : 'bg-amber-500'} flex items-center justify-center shadow-md"
                                >
                                    <svg
                                        class="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Decorative Couple Image -->
        <div
            class="couple-decoration absolute -right-10 top-1/3 w-64 md:w-96 h-auto hidden lg:block pointer-events-none"
        >
            <div class="relative">
                <!-- Decorative pattern background -->
                <div class="absolute -top-10 -left-10 w-40 h-40 opacity-20">
                    <svg
                        viewBox="0 0 100 100"
                        class="w-full h-full text-red-500"
                    >
                        {#each Array(8) as _, i}
                            <path
                                d="M 50 50 Q {50 +
                                    Math.cos((i * Math.PI) / 4) * 40} {50 +
                                    Math.sin((i * Math.PI) / 4) * 40} {50 +
                                    Math.cos((i * Math.PI) / 4) * 20} {50 +
                                    Math.sin((i * Math.PI) / 4) * 20}"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="0.5"
                            />
                        {/each}
                    </svg>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .package-card {
        transform-style: preserve-3d;
        perspective: 1000px;
    }

    .package-image {
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .arrow-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (max-width: 768px) {
        .section-heading {
            font-size: 2rem;
        }
    }
</style>
