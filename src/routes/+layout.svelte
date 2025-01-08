<script>

  import { autoModeWatcher } from '@skeletonlabs/skeleton';
  import '../app.css';
  import { LightSwitch } from '@skeletonlabs/skeleton';
  import NavBar from "../components/NavBar.svelte";
  import { initializeStores, Toast } from '@skeletonlabs/skeleton';

  initializeStores();

 
						
</script>
<NavBar/>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<Toast />
<main  class=" box-border w-full  p-20">

  
  <slot />

</main>


