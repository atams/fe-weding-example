<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import CoreSangjit from '../../components/sangjit/CoreSangjit.svelte';
    let container: HTMLDivElement;

    function createFirefly(): void {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        firefly.style.left = startX + 'px';
        firefly.style.top = startY + 'px';

        container.appendChild(firefly);

        const tl = gsap.timeline({
            onComplete: () => {
                firefly.remove();
            }
        });

        for (let i = 0; i < 5; i++) {
            tl.to(firefly, {
                x: `+=${Math.random() * 300 - 150}`,
                y: `+=${Math.random() * 300 - 150}`,
                duration: Math.random() * 3 + 2,
                ease: 'sine.inOut'
            });
        }

        gsap.to(firefly, {
            opacity: 0.2,
            duration: Math.random() * 0.5 + 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        gsap.to(firefly, {
            scale: 1.5,
            duration: Math.random() * 0.8 + 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    function createLightParticle(): void {
        const particle = document.createElement('div');
        particle.className = 'light-particle';

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;

        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';

        container.appendChild(particle);

        gsap.to(particle, {
            y: -100,
            x: `+=${Math.random() * 50 - 25}`,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            ease: 'power1.out',
            onComplete: () => {
                particle.remove();
            }
        });
    }

    onMount(() => {
        const fireflyInterval = setInterval(createFirefly, 1500);

        const particleInterval = setInterval(createLightParticle, 300);

        for (let i = 0; i < 15; i++) {
            setTimeout(createFirefly, i * 400);
        }

        gsap.from('h1', {
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5
        });

        return () => {
            clearInterval(fireflyInterval);
            clearInterval(particleInterval);
        };
    });
</script>

<div class="hero-section px-10 bg-[url('/img/sangjit.jpg')] bg-cover">
    <div class="absolute inset-0 bg-black/30"></div>

    <div bind:this={container} class="animation-container"></div>

    <div class="min-h-screen flex items-center justify-center text-center align-bottom text-white pb-20">
        <h1 class="text-9xl">Sangjit</h1>
    </div>
</div>

<CoreSangjit/>

<style>
    .hero-section {
        position: relative;
        min-height: 100vh;
        overflow: hidden;
    }

    .animation-container {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 5;
    }

    h1 {
        position: relative;
        z-index: 10;
        font-family: 'Georgia', serif;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    :global(.firefly) {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #ffe57f;
        border-radius: 50%;
        box-shadow: 0 0 10px #ffe57f, 0 0 20px #ffeb3b, 0 0 30px #ffc107;
        pointer-events: none;
    }

    :global(.light-particle) {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 3rem;
        }
    }
</style>