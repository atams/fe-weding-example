<script lang="ts">
  import { MapPin, Phone, Instagram, Twitter, Facebook, Mail } from "lucide-svelte";
</script>

<section class="footer-section h-[100%] mt-7 px-6 py-10" id="contact">
  <div class="grid grid-cols-1 md:grid-cols-3 pb-20">
    <div class="logo">
      <h1 class="text-7xl">CoffeeTime</h1>
    </div>
    <div class="contact">
      <h2 class="text-2xl">Contact Us</h2>
      <div class="flex gap-2">
        <Phone size="16" />
        <p>0811111111111</p>
      </div>
      <div class="flex gap-2">
        <Mail size="16" />
        <p>coffetime@example.com</p>
      </div>
      <div class="flex gap-2">
        <MapPin size="16" />
        <p>jl. lorem ipsum dolor sit amet</p>
      </div>
    </div>
    <div class="social-media">
      <h2 class="text-2xl">Follow Us</h2>
      <div class="flex gap-2">
        <Instagram size="16" />
        <p>@coffeetime</p>
      </div>
      <div class="flex gap-2">
        <Twitter size="16" />
        <p>@coffeetime</p>
      </div>
      <div class="flex gap-2">
        <Facebook size="16" />
        <p>CoffeeTime</p>
      </div>
    </div>
  </div>
</section>
