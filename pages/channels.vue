<template>
    <div class="container mb-5">
        <section class=" text-center">
            <h3 class="my-5">عدد مشتركي القنوات التابعه لأوساسيونا</h3>
            <div class="row ">
                <div class="col-6 ">
                    <i class="fa-brands fa-youtube fa-7x text-danger"></i>
                    <p class="fs-1">303538</p>
                </div>

                <div class="col-6 ">
                    <i class="fa-brands fa-twitch fa-7x " style="color:#613fa0"></i>
                    <p class="fs-1">84000</p>
                </div>
            </div>
        </section>
        <hr />
        <h1 class="my-5 text-center">قنواتنا</h1>

        <div class="row justify-content-evenly align-items-center mt-5">
            <div v-for="channel in Channels" :key="channel.name"
                class="d-flex justify-content-center flex-column align-items-center col-12 col-md-6">
                <div class="image-container mb-3" :style="`background-color:${channel.color}`">
                    <img :src="channel.image" class="image" alt="logo">
                </div>
                <h4 class="text-center">{{ channel.name }}
                    <span v-if="!channel.url" class="badge bg-warning fs-6 fw-light">
                        قيد الانشاء
                    </span>

                    <a class="text-dark" v-else :href="channel.url" target="_blank">
                        <i class="fa-solid fa-share-from-square"></i>
                    </a>
                </h4>
                <p class="text-center">{{ channel.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: "channels"
})
const Channels = [
    {
        name: "سام",
        description: "قناة متخصصة ببطولات البلوت بجودة عالية جدا",
        image: "sam.png",
        url: "https://www.youtube.com/@SAM_3b",
        color: "#faea1b"
    },
    {
        name: "سام بلس",
        description: "قناة لبثوث البلوت الترفيهية",
        image: "samplus.png",
        url: "https://www.youtube.com/@SAM_PLUS",
        color: "#e43329",

    },
    {
        name: "سمرة",
        description: "قناة متخصصة بالسواليف و القصص",
        image: "Samara-Logo-wight.png",
        color: "#17507e",
        url: "https://www.youtube.com/@samra2",
    },
    {
        name: "هاتركس",
        description: "قناة متخصصة بلعبة الهند و التركس",
        image: "hatrex-dark.jpg",
        url: "",
        color: "#2e2e3a",

    },
    {
        name: "هيكلة",
        description: "قناة متخصصة بعالم المال و الأعمال",
        image: "youtube_logo.webp",
        url: "",
        color: "#fff",
    },
    {
        name: "تشييد",
        description: "قناة متخصصة بالبناء والتصميم",
        image: "youtube_logo.webp",
        url: "",
        color: "#fff",
    }
]
</script>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid black; */
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
}



.image {
    width: 90%;
    height: auto;
    object-fit: contain;
}
</style>