<template>
    <svg width="24" height="24" viewBox="0 0 24 24">
        <ellipse class="spinner_rXNP" cx="12" cy="5" rx="4" ry="4" />
    </svg>
</template>

<script setup lang="ts">

</script>

<style scoped>
.spinner_rXNP {
    animation: spinner_YeBj .8s infinite;

}

@keyframes spinner_YeBj {
    0% {
        animation-timing-function: cubic-bezier(0.33, 0, .66, .33);
        cy: 5px;
    }

    46.875% {
        cy: 20px;
        rx: 4px;
        ry: 4px
    }

    50% {
        animation-timing-function: cubic-bezier(0.33, .66, .66, 1);
        cy: 20.5px;
        rx: 4.8px;
        ry: 3px
    }

    53.125% {
        rx: 4px;
        ry: 4px
    }

    100% {
        cy: 5px
    }
}
</style>