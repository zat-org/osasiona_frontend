<template>
    <div class="bg-zinc-800 py-5 text-white text-center   overflow-hidden">
        <div class="container mx-auto">

            <h2 class="text-4xl font-bold my-8 text-center">احصائياتنا</h2>

            <div class=" flex flex-col space-y-4 md:space-y-0 md:flex-row-reverse w-full justify-center items-center ">
                <div class="hidden md:flex justify-end items-center">
                    <div
                        class="rounded-full h-32 mx-10 w-32 text-6xl flex justify-center items-center border-2 border-white">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div class="w-3/4 md:w-1/2 lg:w-1/3 flex justify-center items-center">
                    <div class="flex flex-col space-y-3 w-full">
                        <div v-for="statistic in statistics"
                            class="flex flex-row-reverse justify-center items-center relative">
                            <div
                                class="absolute -right-8 bg-zinc-900 shadow-lg  h-16 w-16 border-2 border-white rounded-full flex justify-center items-center">
                                <i class="text-2xl" :class="statistic.icon"></i>
                            </div>
                            <div class="flex h-16 w-full flex-col">
                                <p
                                    class=" h-[40%] w-2/3 ms-auto rounded-l-full bg-brightRedLight px-2 flex justify-center items-center">
                                    {{
                                        statistic.title }}
                                </p>
                                <p
                                    class=" h-[60%] bg-zinc-300 rounded-l-full text-zinc-900 px-2 text-xl flex justify-center items-center">
                                    {{ statistic.value.toLocaleString('ar-EG') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="w-1/2 mx-auto my-10 h-0 border-t-2 border-brightRed">

            <h2 class="text-4xl font-bold">منصات تواجدنا</h2>
            <div class="my-5">
                <template v-if="document">
                    <carousel :items-to-show="1" dir="rtl" :wrapAround="true" :transition="1000" :autoplay="1500"
                        :pauseAutoplayOnHover="true">
                        <slide v-for="channel in document.channelsData" :key="channel.youtubeId">
                            <div class="flex flex-col justify-center items-center text-center space-y-4">
                                <div class=" w-32 h-32  p-4 shadow-xl rounded-md 
                        flex justify-center items-center" :style="`background-color:${channel.bgColor}`">
                                    <img :src="channel.imageLink" alt="Channel logo">
                                </div>
                                <h2 class="font-bold text-2xl"> {{ channel.name }}
                                    <a v-if="channel.state === 'Working'" class="hover:text-brightRed" target="_blank"
                                        :href="channel.youtubeLink"><i class="fa-regular fa-share-from-square"></i>
                                    </a>
                                    <span v-else
                                        class="bg-[#ffc107] text-sm text-gray-900 rounded-lg px-2 py-1 font-normal">قيد
                                        الانشاء</span>
                                </h2>
                                <p class="text-lg text-zinc-300">{{ channel.description }}</p>
                            </div>
                        </slide>
                    </carousel>
                </template>
                <template v-if="loading">
                    loading...
                </template>
                <template v-if="error">
                    <p class="my-4 text-red-500 text-note text-center">تعذر تحميل صور العملاء</p>
                </template>
            </div>



        </div>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
const { getDoc, document, loading, error } = getDocument()
type Statistic = {
    title: string, value: number, icon: string

}
interface IStatistics {
    subscriberCount: Statistic
    videoCount: Statistic
    viewCount: Statistic
}
const statistics = ref<IStatistics>({
    subscriberCount: {
        title: "عدد المشتركين ", value: 0, icon: "fa-solid fa-users"
    },
    videoCount: {
        title: "عدد الفديوهات ", value: 0, icon: "fa-solid fa-video"
    },
    viewCount: {
        title: "عدد المشاهدات ", value: 0, icon: "fa-solid fa-glasses"
    }
})
onMounted(async () => {
    await getDoc("channels", "IqJYbOQ4oJAHeJ66AtV7");
    document.value.channelsData.forEach(async (channel: any) => {
        if (channel.state === 'Working' && channel.youtubeId !== '') {
            $fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channel.youtubeId}&key=AIzaSyB7zy8THRNZgKJtf3Yz1La66OoYYl3z0tw`)
                .then((data: any) => {
                    let states = data.items[0].statistics;
                    statistics.value.subscriberCount.value += parseInt(states.subscriberCount);
                    statistics.value.videoCount.value += parseInt(states.videoCount);
                    statistics.value.viewCount.value += parseInt(states.viewCount);
                }
                ).catch((err) => {
                    console.error(err);
                })
        }
    });
})

</script>

<style scoped></style>