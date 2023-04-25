<template>
    <div class="container text-center my-5">
        <h1>عملائنا</h1>

        <div class="row justify-content-evenly align-items-center g-3 mt-3">
            <div v-for="client in CLIENTS" :key="client.image" class="col-auto image-container"
                :style="`background-color:${client.color}`">
                <img :src="client.image" class="image" :alt="client.name">
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
        image: "gan.jpeg",
        color: "#fff",
        name: "جان"
    },
    {
        image: "kam_logo.png",
        color: "#fff",
        name: "كملنا"
    },

]
</script>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #F05454;

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