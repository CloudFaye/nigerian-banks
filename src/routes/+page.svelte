<script lang="ts">
  import { Toast, getToastStore } from '@skeletonlabs/skeleton';
  import { onMount } from "svelte";
  import { banks, fetchBanks } from "../stores/bankStore";
  import type { Bank } from "../stores/bankStore";
  import type { ToastSettings } from '@skeletonlabs/skeleton';
  import Confetti from 'svelte-confetti';

  const toastStore = getToastStore();
  let bankData: Bank[] = [];
  let loading = true;
  let confettiVisible = false;




  onMount(async () => {
      try {
          await fetchBanks();
          banks.subscribe(value => {
              bankData = value.filter(
                  bank => bank.logo !== 'https://nigerianbanks.xyz/logo/default-image.png'
              );
          });
      } finally {
          loading = false;
      }
  });

  function handleImageError(e: Event) {
      const img = e.target as HTMLImageElement;
      img.src = '/bank-line.png';
  }

  async function copyImage(url: string) {
      try {
          const response = await fetch(url);
          const blob = await response.blob();
          const item = new ClipboardItem({ [blob.type]: blob });
          await navigator.clipboard.write([item]);
          
          // Show success toast
          const t: ToastSettings = {
                message: 'Image copied successfully!',
                background: 'variant-filled',
                hideDismiss: true,
                timeout: 10000
            };
            toastStore.trigger(t);
          

          // Trigger confetti
          confettiVisible = true;
          setTimeout(() => {
              confettiVisible = false;
          }, 2000);
      } catch (error) {
          console.error('Failed to copy image:', error);
          
                
      }


  };
</script>

{#if confettiVisible}
<div class="fixed inset-0 pointer-events-none z-50">
    <Confetti 
        amount={100}
        size={8}
        duration={2000}
        colorArray={['#FFD700', '#FFA500', '#FF69B4', '#87CEEB']}
    />
</div>
{/if}

<section class="w-full h-full flex flex-col items-start justify-start">


  <div class="w-full h-fit">
      <h1 class="text-7xl tracking-normal mb-5">Nigerian banks</h1>
      <p class="tracking-wide">
          Find the logo and brand details of all Nigerian banks. Intended for
      </p>
  </div>

  {#if loading}
      <div class="w-[200px] mt-20 h-32 animate-pulse bg-surface-300 rounded-lg" />
  {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {#each bankData as bank}
              <div 
                  class="card p-4 bg-white bg-opacity-10 backdrop-blur hover:bg-white hover:bg-opacity-20 
                         transition-all duration-300 rounded-lg cursor-pointer"
                  on:click={() => copyImage(bank.logo)}
                  on:keydown={(e) => e.key === 'Enter' && copyImage(bank.logo)}
                  role="button"
                  tabindex="0"
              >
                  <img 
                      src={bank.logo}
                      alt="{bank.name} logo"
                      class="p-2 w-[30%] object-contain mx-auto mt-4 mb-2"
                      loading="lazy"
                      on:error={handleImageError}
                  />
                  <div class="p-4 flex flex-col gap-2">
                      <h2 class="text-sm font-semibold">{bank.name}</h2>
                      <p class="text-sm text-surface-600">{bank.ussd}</p>
                  </div>
              </div>
          {/each}
      </div>
  {/if}

</section>

<style>
  .card {
      transition: transform 0.3s ease-in-out, background-color 0.3s;
  }

  .card:hover {
      transform: scale(1.02);
  }
</style>