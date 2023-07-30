<template>
    <button ref="btn" @click="handleClick" tabindex="0"
        class="bg-brightRed h-14 w-14 shadow-lg rounded-full text-2xl text-white fixed bottom-3 right-3 z-10">
        <i class="fa-solid fa-arrow-up"></i>
    </button>
</template>

<script setup lang="ts">
const btn = ref<HTMLElement | null>(null);
window.onscroll = () => {
    if (btn.value && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        btn.value.style.display = "block";
    } else if (btn.value) {
        btn.value.style.display = "none";
    }
}
const handleClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>

<style scoped></style>