<script lang="ts">
  import { onMount } from "svelte";
  import { banks, fetchBanks } from "../stores/bankStore";
  import type { Bank } from "../stores/bankStore";
  import '../app.css';
  

  let bankData: Bank[] = [];
  let loading = true;

  let showToast = false;
  let toastMessage = '';
  let hideTimeoutId: ReturnType<typeof setTimeout>;
  let copiedBankId: string | null = null;

  function triggerToast(bankId: string) {
    if (hideTimeoutId) clearTimeout(hideTimeoutId);
    
    copiedBankId = bankId;
    
    hideTimeoutId = setTimeout(function() {
      copiedBankId = null;
    }, 3000);
  }

  async function copyImage(url: string, bankId: string) {
      try {
          const response = await fetch(url);
          const blob = await response.blob();
          const item = new ClipboardItem({ [blob.type]: blob });
          await navigator.clipboard.write([item]);
          
          triggerToast(bankId);
      } catch (error) {
          console.error('Failed to copy image:', error);
      }
  }

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
</script>

<section class="w-full max-w-[1024px] mt-10 h-full flex flex-col items-start justify-start">


  <div class="w-full h-fit">
      <h1 class="text-7xl tracking-normal h1 mb-5">Nigerian Banks Logo</h1>
      <p class="tracking-wide">
          Find the logo and brand details of all Nigerian banks. Intended for Design purposes only.
      </p>
  </div>

  {#if loading}
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <div class="w-[200px] mt-20 h-32 animate-pulse bg-surface-300 rounded-lg" />
  {:else}
      <div class="grid max-w-[1024px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {#each bankData as bank (bank.slug)}
              <div 
                  class=" bg-slate-200 p-4 hover:bg-white b
                         transition-all duration-300 rounded-lg cursor-pointer flex flex-col justify-between relative"
                  on:click={() => copyImage(bank.logo, bank.slug)}
                  on:keydown={(e) => e.key === 'Enter' && copyImage(bank.logo, bank.slug)}
                  role="button" 
                  tabindex="0"
              >
                  <img
                      src={bank.logo}
                      alt="{bank.name} logo"
                      class="p-2 w-[50%] h-[50%] object-contain mx-auto mt-4 mb-2"
                      loading="lazy"
                      on:error={handleImageError}
                  />
                  <div class="p-3 bg-slate-300 rounded-lg flex flex-col gap-2">
                      <h2 class="text-sm text-black font-semibold">{bank.name}</h2>
                      <p class="text-sm text-surface-600">{bank.ussd}</p>
                  </div>
                  {#if copiedBankId === bank.slug}
                    <div 
                      class="absolute top-2 right-2 bg-green-800 text-white px-2 py-1 rounded text-xs shadow-lg z-50
                             toast-notification"
                      on:animationend={() => {
                        if (!copiedBankId) {
                          copiedBankId = null;
                        }
                      }}
                    >
                      Image copied!
                    </div>
                  {/if}
              </div>
          {/each}
      </div>
  {/if}

</section>

<style>
 
  

  

  

  @keyframes slideIn {
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-50%);
      opacity: 0;
    }
  }

  .toast-notification {
    animation: slideIn 0.3s ease-out forwards;
  }

 
</style>