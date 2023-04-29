<template>
    <div class="container text-center my-5">
        <h1>عملائنا</h1>

        <div class="clients-container mt-3">
            <div v-for="client in CLIENTS" :key="client.image" class=" image-container"
                :style="`background-color:${client.color}`">
                <img :src="client.image" class="image" :alt="client.name" draggable="false">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: "clients"
})

const CLIENTS = [
    {
        image: "gan.jpeg",
        color: "#fff",
        name: "جان"
    },
    {
        image: "kam_logo.png",
        color: "#fff",
        name: "كملنا"
    },

    {
        image: "ska.jpeg",
        color: "#fff",
        name: "صكة"
    },
    {
        image: "khder.jpeg",
        color: "#fff",
        name: "خدير"
    },

    {
        image: "javaTime.jpg",
        color: "#fff",
        name: "جافا تايم"
    },
    {
        image: "tarbe3a.png",
        color: "#fff",
        name: "تربيعة"
    },
    {
        image: "romansya.jpg",
        color: "#fff",
        name: "رومانسية"
    },
    {
        image: "stc.jpg",
        color: "#fff",
        name: "stc play"
    },
    {
        image: "creativeOfHope.jpg",
        color: "#fff",
        name: "ابداع الامل"
    }

]
</script>

<style scoped>
.clients-container {
    display: grid;
    gap: 1rem;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fill, 10rem);
    align-items: center;
}

.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--palette-orange);

    width: 10rem;
    height: 10rem;
    border-radius: 5px;
    overflow: hidden;
}



.image {
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>