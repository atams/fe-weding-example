<script lang="ts">
    import { categories, menuItems } from "../utils/menu";
    import { promos } from "../utils/promo";
    import { onMount } from "svelte";
    import Lenis from "lenis";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { Phone, Mail, MapPin } from "lucide-svelte";

    gsap.registerPlugin(ScrollTrigger);

    let name = "";
    let email = "";
    let phone = "";
    let message = "";
    let lenis: any;
    let heroSection: HTMLElement;
    let coffeeImg: HTMLElement;
    let heroTitle: HTMLElement;
    let titleLine1: HTMLElement;
    let titleLine2: HTMLElement;

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        alert(`Terima kasih, ${name}! Pesanmu sudah terkirim ☕`);
        name = "";
        email = "";
        phone = "";
        message = "";
    };

    onMount(() => {
        lenis = new Lenis({
            autoRaf: true,
            smoothWheel: true,
            smoothTouch: false,
            lerp: 0.1,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        });

        tl.to(
            coffeeImg,
            {
                scale: 1.3,
                rotation: 15,
                opacity: 1,
                y: -100,
                ease: "power2.out",
            },
            0,
        );

        tl.to(
            titleLine1,
            {
                y: -150,
                opacity: 0,
                scale: 0.8,
                ease: "power2.out",
            },
            0,
        ).to(
            titleLine2,
            {
                y: -80,
                opacity: 0,
                scale: 0.9,
                ease: "power2.out",
            },
            0,
        );

        // Initial entrance animation
        gsap.from(titleLine1, {
            opacity: 0,
            y: 100,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
        });

        gsap.from(titleLine2, {
            opacity: 0,
            y: 120,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.5,
        });

        gsap.from(coffeeImg, {
            opacity: 0,
            scale: 0.8,
            rotation: -10,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.2,
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    });

    let selectedCategory: string = "all";

    $: filteredMenuItems =
        selectedCategory === "all"
            ? menuItems
            : menuItems.filter((item) => item.categoryId === selectedCategory);
</script>

<section
    bind:this={heroSection}
    class="min-h-screen hero-up-banner flex items-center justify-center m-auto px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    id="home"
>
    <div class="relative text-center w-full max-w-7xl">
        <img
            bind:this={coffeeImg}
            src="/img/coffee-mocup.png"
            alt="Coffee Mockup"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] opacity-95 z-0 object-contain max-h-[80vh] will-change-transform"
            style="filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3));"
        />
        <div
            class="relative z-10 py-12 sm:py-16 md:py-20"
            bind:this={heroTitle}
        >
            <h1
                class="text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold uppercase leading-tight sm:leading-tight md:leading-tight"
            >
                <span
                    bind:this={titleLine1}
                    class="block will-change-transform"
                    style="text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);"
                >
                    Name Your
                </span>
                <span
                    bind:this={titleLine2}
                    class="block will-change-transform"
                    style="text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);"
                >
                    Coffee
                </span>
            </h1>
        </div>
    </div>
</section>

<section class="about-section pl-6 pr-6 pt-6" id="about">
    <div class="pb-5 title">
        <h2 class="text-7xl font-bold">Our Story</h2>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="">
            <img src="/img/bg-about.jpg" alt="" class="rounded-2xl" />
        </div>
        <div class="justify-start items-center h-[100%] block">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                porro fuga repellat iure, id odio eos consectetur consequatur
                enim vero maiores debitis iste dicta quae quisquam culpa
                nostrum! Omnis, sunt!
                <br>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, explicabo maiores id dolores doloribus incidunt possimus obcaecati earum quaerat fugiat aut, eaque inventore! Dicta suscipit tempore mollitia aut totam eum?
            </p>
        </div>
    </div>
</section>

<section class="min-h-screen Menu-section pl-6 pr-6 py-10" id="menu">
    <div class="pb-8 title">
        <h2 class="text-5xl md:text-7xl font-bold">Menu</h2>
    </div>

    <!-- Kategori Navigation -->
    <div
        class="mb-8 sticky top-0 bg-white/95 backdrop-blur-sm z-10 -mx-6 px-6 py-4 shadow-sm"
    >
        <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {#each categories as category}
                <button
                    class="px-6 py-2 rounded-full whitespace-nowrap transition-all font-medium {selectedCategory ===
                    category.id
                        ? 'bg-green-900 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}"
                    on:click={() => (selectedCategory = category.id)}
                >
                    {category.name}
                </button>
            {/each}
        </div>
    </div>

    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
        {#each filteredMenuItems as item}
            <div
                class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
                <div class="aspect-video bg-gray-200 relative">
                    <img
                        src={item.image}
                        alt={item.name}
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="p-4">
                    <h4 class="text-lg font-semibold mb-2">{item.name}</h4>
                    <p class="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xl font-bold text-green-700">
                            Rp {item.price.toLocaleString("id-ID")}
                        </span>
                        <button
                            class="bg-green-900 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                        >
                            Pesan
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<section class="h-min-screen promo-section py-6">
    <div class="text-5xl py-6 px-6 promo-section text-center">
        <h1>Promo and Benefits</h1>
    </div>
    <div class="grid md:grid-cols-3 gap-8 px-6 lg:px-20">
        {#each promos as promo}
            <div
                class="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
                <img
                    src={promo.image}
                    alt={promo.title}
                    class="w-full h-full object-cover"
                />
            </div>
        {/each}
    </div>
</section>

<!-- <section class="py-16 px-6 lg:px-20">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <div
            class="bg-[#075E3E] overflow-hidden text-white rounded-2xl py-10 px-8 md:px-10 relative h-[100%]"
        >
            <h2 class="text-3xl font-bold mb-10">Informasi Kontak</h2>
            <p class="text-sm text-[#d9f2e3] leading-relaxed mb-10">
                Jika Anda mempunyai pertanyaan atau kekhawatiran, Anda dapat
                menghubungi kami dengan mengisi formulir kontak, menelepon kami,
                datang ke kantor kami, atau mengirim email pribadi kepada kami
                di:
            </p>

            <div class="flex flex-col items-start gap-6 mb-5 !mt-8">
                <div class="flex items-start gap-4">
                    <Phone class="w-5 h-5 text-white flex-shrink-0" />
                    <p class="text-base">80808080808080</p>
                </div>
                <div class="flex items-start gap-4">
                    <Mail class="w-5 h-5 text-white flex-shrink-0" />
                    <p class="text-base">example@gmail.com</p>
                </div>
                <div class="flex items-start gap-4">
                    <MapPin class="w-5 h-5 text-white flex-shrink-0" />
                    <p class="text-base leading-relaxed">
                        Jl. Pondok Hijau Golf Tangerang, Gading Serpong
                    </p>
                </div>
            </div>

            <div
                class="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"
            ></div>
            <div
                class="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none"
            ></div>
        </div>

        <form
            on:submit={handleSubmit}
            class="bg-white rounded-2xl p-8 w-[100%] shadow-sm border border-gray-100 space-y-5"
        >
            <div>
                <label class="block text-sm font-semibold mb-2 text-[#2f2f2f]"
                    >Name</label
                >
                <input
                    type="text"
                    bind:value={name}
                    required
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#075E3E] focus:border-[#075E3E] focus:outline-none transition-all"
                    placeholder="Masukkan nama kamu"
                />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2 text-[#2f2f2f]"
                    >Email</label
                >
                <input
                    type="email"
                    bind:value={email}
                    required
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#075E3E] focus:border-[#075E3E] focus:outline-none transition-all"
                    placeholder="Masukkan email kamu"
                />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2 text-[#2f2f2f]"
                    >Phone Number</label
                >
                <input
                    type="tel"
                    bind:value={phone}
                    required
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#075E3E] focus:border-[#075E3E] focus:outline-none transition-all"
                    placeholder="Nomor telepon kamu"
                />
            </div>

            <div>
                <label class="block text-sm font-semibold mb-2 text-[#2f2f2f]"
                    >Message</label
                >
                <textarea
                    rows="5"
                    bind:value={message}
                    required
                    class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#075E3E] focus:border-[#075E3E] focus:outline-none resize-none transition-all"
                    placeholder="Tulis pesan kamu di sini..."
                ></textarea>
            </div>

            <button
                type="submit"
                class="w-full bg-[#075E3E] text-white font-semibold py-3 rounded-full hover:bg-[#0b724d] hover:shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
                SEND
            </button>
        </form>
    </div>
</section> -->
