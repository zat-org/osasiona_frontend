<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="grow w-full">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
  <ClientOnly>
    <FloatingBotton />
  </ClientOnly>
</template>
<script setup lang="ts">

</script>

<style></style>
