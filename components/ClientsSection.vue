<template>
    <section id="clients" class="pt-10  bg-zinc-800 overflow-hidden">
        <h2 class="text-4xl font-bold text-center text-white">شركاء نجاحنا</h2>
        <div v-if="document" class="py-10">
            <carousel :items-to-show="2" dir="rtl" :wrapAround="true" :breakpoints="breakpoints" :transition="700"
                :autoplay="700" :pauseAutoplayOnHover="true">
                <slide v-for="img in document.clientsLogos" :key="img">
                    <div class=" w-32 h-32 mr-5 p-4 bg-white shadow-xl rounded-md 
                    flex justify-center items-center">
                        <img :src="img" alt="client logo">
                    </div>
                </slide>
            </carousel>
        </div>
        <div v-if="loading">
            loading...
        </div>
        <div v-if="error">
            <p class="my-4 text-red-500 text-note text-center">تعذر تحميل صور العملاء</p>
        </div>
    </section>
</template>

<script setup lang="ts">

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
const { getDoc, document, loading, error } = getDocument()
const breakpoints = {
    480: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
    // 700px and up
    768: {
        itemsToShow: 4,
        snapAlign: 'center',
    },
    // 1024 and up
    976: {
        itemsToShow: 5.5,
        snapAlign: 'start',
    },
    1440: {
        itemsToShow: 7,
        snapAlign: 'start',
    },
}

onMounted(async () => {
    await getDoc("clients", "3TNpA07XfzJg38SRabns");
    console.log(document.value);
})

</script>

<style scoped></style>