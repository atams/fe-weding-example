<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const services = [
    {
      title: "VENUE SELECTION",
      text: "Explore a diverse array of enchanting venues, from picturesque outdoor settings to elegant indoor spaces, ensuring the perfect backdrop for your love story.",
      img: "/img/venue.jpg",
      imgLeft: true
    },
    {
      title: "CATERING SELECTION",
      text: "Indulge your guests with exquisite cuisine tailored to your taste. Our culinary experts craft menus that delight the palate and elevate the overall dining experience.",
      img: "/img/catering.jpg",
      imgLeft: false
    },
    {
      title: "DECOR SELECTION",
      text: "Transform your event with stunning decor that reflects your unique style and vision, creating an unforgettable atmosphere.",
      img: "/img/decor.jpg",
      imgLeft: true
    },
    {
      title: "MEDIA SELECTION",
      text: "Capture every cherished moment with our professional photography and videography services that tell your story beautifully.",
      img: "/img/venue.jpg",
      imgLeft: false
    },
    {
      title: "MUSIC SELECTION",
      text: "Set the perfect mood with curated music, live bands, or DJs tailored to your event theme and atmosphere.",
      img: "/img/music.jpg",
      imgLeft: true
    },
    {
      title: "ATTIRE SELECTION",
      text: "Find the perfect attire for your special day, from elegant gowns to sharp suits that make you feel confident.",
      img: "/img/attire.jpg",
      imgLeft: false
    }
  ];

  onMount(() => {
    // Animasi untuk setiap section
    gsap.utils.toArray('.service-card').forEach((card: any, i: number) => {
      const image = card.querySelector('.service-image');
      const content = card.querySelector('.service-content');
      
      // Animasi image
      gsap.from(image, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.95,
        x: i % 2 === 0 ? -60 : 60,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Animasi content
      gsap.from(content, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        x: i % 2 === 0 ? 40 : -40,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.to(image, {
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: -30
      });
    });

    // Animasi untuk READ MORE button hover effect
    document.querySelectorAll('.read-more-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          x: 10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  });
</script>

<div class="services-container">
  {#each services as service, i}
    <div class="service-card" class:reverse={!service.imgLeft}>
      <div class="service-image">
        <div class="image-wrapper">
          <img src={service.img} alt={service.title} />
          <div class="image-overlay"></div>
        </div>
      </div>
      
      <div class="service-content">
        <div class="content-wrapper">
          <h2 class="service-title">{service.title}</h2>
          <p class="service-text">{service.text}</p>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a href="#" class="read-more-btn">
            READ MORE
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .services-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 80px 20px;
    background: linear-gradient(to bottom, #faf9f7 0%, #f5f3f0 50%, #faf9f7 100%);
  }

  .service-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    margin-bottom: 0;
    min-height: 550px;
    position: relative;
  }

  .service-card.reverse {
    direction: rtl;
  }

  .service-card.reverse > * {
    direction: ltr;
  }

  .service-image {
    position: relative;
    overflow: hidden;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 450px;
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .service-card:hover .image-wrapper img {
    transform: scale(1.05);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
    pointer-events: none;
  }

  .service-content {
    display: flex;
    align-items: center;
    padding: 60px;
    background: #f8f6f3;
    position: relative;
  }

  .content-wrapper {
    max-width: 500px;
  }

  .service-title {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #5a4a3a;
    margin-bottom: 24px;
    font-family: 'Cormorant Garamond', serif;
  }

  .service-text {
    font-size: 15px;
    line-height: 1.8;
    color: #7a6a5a;
    margin-bottom: 28px;
    font-family: 'Lato', sans-serif;
  }

  .read-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #5a4a3a;
    text-decoration: none;
    transition: all 0.3s ease;
    font-family: 'Lato', sans-serif;
    border-bottom: 1px solid transparent;
  }

  .read-more-btn:hover {
    color: #8b7355;
    border-bottom-color: #8b7355;
  }

  .arrow {
    transition: transform 0.3s ease;
  }

  .read-more-btn:hover .arrow {
    transform: translateX(5px);
  }

  @media (max-width: 968px) {
    .service-card {
      grid-template-columns: 1fr;
      min-height: auto;
    }

    .service-card.reverse {
      direction: ltr;
    }

    .service-image {
      padding: 30px;
      min-height: 350px;
    }

    .image-wrapper {
      height: 350px;
    }

    .service-content {
      padding: 40px 30px;
    }

    .service-title {
      font-size: 22px;
    }

    .service-text {
      font-size: 14px;
    }
  }

  @media (max-width: 640px) {
    .services-container {
      padding: 40px 15px;
    }

    .service-image {
      padding: 20px;
      min-height: 280px;
    }

    .image-wrapper {
      height: 280px;
    }

    .service-content {
      padding: 30px 20px;
    }

    .service-title {
      font-size: 20px;
      letter-spacing: 1.5px;
    }

    .service-text {
      font-size: 13px;
      line-height: 1.7;
    }
  }
</style>