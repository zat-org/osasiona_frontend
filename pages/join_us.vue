<template>
    <div class="container">
        <h2 class="section-header">تبغى تنضم معنا..؟</h2>
        <h4 class=" section-header mt-2"> ارسل لنا و نضبطك</h4>

        <ContactMessage type="join_us" />

    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: "join_us"
})


</script>

<style scoped>
.section-header {
    text-decoration: underline;
    text-decoration-color: var(--palette-orange);
    text-decoration-skip: 3px;
    text-decoration-thickness: 3px;
}
</style>