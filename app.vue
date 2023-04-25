<template>
  <div dir="rtl">
    <Navbar :links="links" />
    <ClientOnly>
      <Sidebar :links="links" />
    </ClientOnly>
    <div class="page">
      <NuxtPage />
    </div>
    <FooterBar :links="links" />
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    name: "قصتنا",
    href: "story"
  },
  {
    name: "قنواتنا",
    href: "channels"
  },
  {
    name: "عملائنا",
    href: "clients"
  },
  // {
  //   name: "انضم لنا",
  //   href: "join_us"
  // },
  {
    name: "اتصل بنا",
    href: "contact_us"
  }
]
</script>

<style >
:root {
  --palette-primary: #30475E;
  --palette-primary-light: #4b7eb1;
  --palette-secondary: #F05454;
  --palette-orange: #f68632;
  --palette-light: #F5F5F5;
  --palette-dark: #121212;
  --palette-dark-light: #707070;
}

@media (min-width: 768px) {
  .page {
    margin-top: calc(22vh + 3rem) !important;
  }
}

.page {
  margin-top: calc(15vh + 3rem);
}

body {
  background-color: var(--palette-light);
}
</style>
