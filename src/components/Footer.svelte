<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  let footerRef: HTMLElement;
  let logoRef: HTMLDivElement;
  let servicesRef: HTMLDivElement;
  let aboutRef: HTMLDivElement;
  let locationRef: HTMLDivElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animasi fade in dari bawah saat scroll
    gsap.from(footerRef, {
      scrollTrigger: {
        trigger: footerRef,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Animasi stagger untuk setiap kolom
    const columns = [logoRef, servicesRef, aboutRef, locationRef];
    gsap.from(columns, {
      scrollTrigger: {
        trigger: footerRef,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Hover animasi untuk links
    const links = footerRef.querySelectorAll('a');
    links.forEach((link: Element) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          x: 5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Logo pulse animation
    gsap.to(logoRef, {
      scale: 1.02,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
</script>

<footer bind:this={footerRef} class="bg-black text-white py-16 px-8">
  <div class="max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <!-- Logo & Tagline -->
      <div bind:this={logoRef} class="space-y-6">
        <div>
          <h1 class="text-4xl font-bold tracking-tight">YOUR</h1>
          <p class="text-sm tracking-widest text-gray-400">ORGANIZER</p>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          Modern Intimate Event Services
        </p>
      </div>

      <!-- Services -->
      <div bind:this={servicesRef} class="space-y-6">
        <h3 class="text-lg font-semibold tracking-wide border-b border-gray-800 pb-2">
          Services
        </h3>
        <nav class="flex flex-col space-y-3">
          <a href="/prom" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Prom Night
          </a>
          <a href="/" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Wedding
          </a>
          <a href="/sangjit" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Sangjit
          </a>
        </nav>
      </div>

      <!-- About Us -->
      <div bind:this={aboutRef} class="space-y-6">
        <h3 class="text-lg font-semibold tracking-wide border-b border-gray-800 pb-2">
          About Us
        </h3>
        <nav class="flex flex-col space-y-3">
          <a href="/about" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            About Us
          </a>
          <a href="/" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Partnership
          </a>
          <a href="/" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
            Careers
          </a>
        </nav>
      </div>

      <div bind:this={locationRef} class="space-y-6">
        <h3 class="text-lg font-semibold tracking-wide border-b border-gray-800 pb-2">
          Our Location
        </h3>
        <div class="space-y-4 text-sm text-gray-400 leading-relaxed">
          <p>
            PT Atams Indonesia<br />
            Gading Serpong, Pondok hijaugolf, Tangerang Banten
          </p>
          <div class="space-y-2">
            <a href="tel:+628000000000" class="block hover:text-white transition-colors duration-300">
              +62 8000000000
            </a>
            <a href="mailto:Atams@gmail.com" class="block hover:text-white transition-colors duration-300">
              Atams@gmail.com
            </a>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
      <p>© 2025 Atams Indonesia. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
  /* Smooth transitions */
  a {
    transition: all 0.3s ease;
  }
</style>