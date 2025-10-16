<script lang="ts">
    import { onMount } from "svelte";
    import { fade, slide } from "svelte/transition";
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import {
        Home,
        Info,
        Star,
        Package,
        Heart,
        Sparkles,
        Maximize2,
        Building2,
        ChevronDown,
        X,
        Menu,
        ArrowRight,
    } from "lucide-svelte";

    // Menu Configuration
    interface MenuItem {
        label: string;
        href: string;
        icon: any;
    }

    interface PackageItem {
        label: string;
        href: string;
        icon: any;
    }

    const mainMenu: MenuItem[] = [
        { label: "Home", href: "/", icon: Home },
        { label: "About", href: "/about", icon: Info },
        { label: "Service", href: "/service", icon: Star },
    ];

    const packages: PackageItem[] = [
        { label: "Wedding Package", href: "/", icon: Heart },
        { label: "Sangjit Ceremony", href: "/sangjit", icon: Sparkles },
        { label: "Prom Night", href: "/prom", icon: Maximize2 },
    ];

    let isMenuOpen = false;
    let isDropdownOpen = false;
    let isDropdownOpenMobile = false;
    let mobileMenuElement: HTMLElement;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            toggleClass: { targets: "#navbar", className: "scrolled" },
        });
    });

    function handleClickOutside(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.closest(".dropdown-container")) {
            isDropdownOpen = false;
        }
    }

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
            
            // Animate menu opening
            gsap.fromTo(mobileMenuElement,
                { 
                    opacity: 0,
                    y: -20
                },
                { 
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out"
                }
            );

            // Animate menu items
            gsap.fromTo('.mobile-menu-item',
                {
                    opacity: 0,
                    x: -30
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                    delay: 0.2
                }
            );

            // Animate CTA button
            gsap.fromTo('.mobile-cta',
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    delay: 0.6
                }
            );
        } else {
            // Enable body scroll
            document.body.style.overflow = '';
            
            // Animate menu closing
            gsap.to(mobileMenuElement, {
                opacity: 0,
                y: -20,
                duration: 0.3,
                ease: "power2.in"
            });
        }
    }

    function closeMobileMenu() {
        document.body.style.overflow = '';
        isMenuOpen = false;
        isDropdownOpenMobile = false;
    }
</script>

<svelte:window on:click={handleClickOutside} />

<nav
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-500 py-2"
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="flex justify-between items-center h-16">
            <a href="/" class="flex items-center gap-2 group">
                <span class="text-2xl font-bold text-white"> LogoHere</span>
            </a>

            <div class="hidden md:flex items-center gap-1">
                {#each mainMenu as item}
                    <a
                        href={item.href}
                        class="flex items-center gap-2 px-4 py-2 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-white/10"
                    >
                        <svelte:component this={item.icon} size={16} />
                        {item.label}
                    </a>
                {/each}

                <!-- Dropdown Desktop -->
                <div class="relative dropdown-container">
                    <button
                        on:click|stopPropagation={() =>
                            (isDropdownOpen = !isDropdownOpen)}
                        class="flex items-center gap-2 px-4 py-2 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:text-white hover:bg-white/10"
                    >
                        <Package size={16} />
                        Packages
                        <ChevronDown
                            size={14}
                            class="transition-transform duration-300 {isDropdownOpen
                                ? 'rotate-180'
                                : ''}"
                        />
                    </button>

                    {#if isDropdownOpen}
                        <div
                            transition:fade={{ duration: 150 }}
                            class="absolute right-0 mt-2 w-56 bg-white backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div class="py-2">
                                {#each packages as pkg}
                                    <a
                                        href={pkg.href}
                                        class="flex items-center gap-3 px-4 py-3 text-gray-700 font-medium transition-all duration-200 hover:bg-black hover:text-white"
                                        on:click={() =>
                                            (isDropdownOpen = false)}
                                    >
                                        <svelte:component
                                            this={pkg.icon}
                                            size={20}
                                        />
                                        {pkg.label}
                                    </a>
                                {/each}
                            </div>
                        </div>
                    {/if}
                </div>

                <!-- CTA Button -->
                <a
                    href="#contact"
                    class="flex items-center gap-2 ml-4 px-6 py-2.5 bg-[#dcdcdc] text-[#1a1919] font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:scale-105 active:scale-95"
                >
                    Hubungi Kami
                    <ArrowRight size={16} />
                </a>
            </div>

            <!-- Mobile Toggle -->
            <button
                class="md:hidden relative w-10 h-10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg z-[60]"
                on:click={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                <div class="absolute inset-0 flex items-center justify-center text-white">
                    {#if isMenuOpen}
                        <X size={24} />
                    {:else}
                        <Menu size={24} />
                    {/if}
                </div>
            </button>
        </div>
    </div>

    <!-- Mobile Menu Fullscreen -->
    {#if isMenuOpen}
        <div
            bind:this={mobileMenuElement}
            class="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black z-[55] overflow-y-auto"
        >
            <!-- Decorative Background Elements -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div class="relative min-h-screen flex flex-col px-8 py-24">
                <!-- Menu Items -->
                <div class="space-y-3 mb-8">
                    {#each mainMenu as item, index}
                        <a
                            href={item.href}
                            class="mobile-menu-item flex items-center gap-4 px-6 py-4 text-[#f9f9f9] text-xl font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm border border-white/5"
                            on:click={closeMobileMenu}
                        >
                            <div class="p-2 bg-white/10 rounded-xl">
                                <svelte:component this={item.icon} size={24} />
                            </div>
                            {item.label}
                        </a>
                    {/each}

                    <!-- Mobile Dropdown -->
                    <div class="mobile-menu-item space-y-2">
                        <button
                            on:click={() =>
                                (isDropdownOpenMobile = !isDropdownOpenMobile)}
                            class="w-full flex items-center justify-between px-6 py-4 text-[#fff] text-xl font-semibold rounded-2xl transition-all duration-300 hover:bg-white/10 active:bg-white/20 backdrop-blur-sm border border-white/5"
                        >
                            <div class="flex items-center gap-4">
                                <div class="p-2 bg-white/10 rounded-xl">
                                    <Package size={24} />
                                </div>
                                Packages
                            </div>
                            <ChevronDown
                                size={20}
                                class="transition-transform duration-300 {isDropdownOpenMobile
                                    ? 'rotate-180'
                                    : ''}"
                            />
                        </button>

                        {#if isDropdownOpenMobile}
                            <div class="pl-4 space-y-2">
                                {#each packages as pkg}
                                    <a
                                        href={pkg.href}
                                        class="flex items-center gap-3 px-6 py-3 text-gray-300 text-lg font-medium rounded-xl transition-all duration-200 hover:bg-white/10 hover:text-white active:bg-white/20"
                                        on:click={closeMobileMenu}
                                    >
                                        <svelte:component
                                            this={pkg.icon}
                                            size={20}
                                        />
                                        {pkg.label}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>

                <!-- Mobile CTA -->
                <a
                    href="#contact"
                    class="mobile-cta flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-white to-gray-200 text-gray-900 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-white/30 hover:scale-105 active:scale-95 transition-all duration-300"
                    on:click={closeMobileMenu}
                >
                    Hubungi Kami
                    <ArrowRight size={20} />
                </a>

                <!-- Decorative Text -->
                <div class="mt-12 text-center">
                    <p class="text-gray-500 text-sm">© 2024 LogoHere. All rights reserved.</p>
                </div>
            </div>
        </div>
    {/if}
</nav>

<style>
    :global(#navbar.scrolled) {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    :global(#navbar.scrolled) button:not(.md\:hidden button),
    :global(#navbar.scrolled) .text-white {
        color: #000000 !important;
    }

    :global(#navbar.scrolled) .text-gray-300 {
        color: #6b7280 !important;
    }

    :global(#navbar.scrolled) .hover\:text-white:hover {
        color: #000000 !important;
    }

    :global(#navbar.scrolled) .bg-white {
        background-color: #ffffff !important;
        color: #ffffff !important;
    }

    /* Keep mobile menu button white when scrolled */
    :global(#navbar.scrolled) .md\:hidden {
        color: #000000 !important;
    }

    svg.lucide-icon.lucide.lucide-x{
        color: #fff;
    }
</style>