<template>
    <section dir="rtl" id="hero" class="my-20 ">
        <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10">
            <div class="flex flex-col space-y-4  md:space-y-12 md:w-1/2">
                <h1 class="max-w-md text-4xl  leading-10 font-bold text-center md:text-5xl  md:text-right">
                    أوساسيونا، قصة بدأت من اللاشيء لتكون شيئًا
                </h1>
                <p class="text-center text-md font-medium md:text-right text-gray-500">
                    نعرف طبيعة المعاناة، ونعرف حجم المشاغل التي يحتاجها صانع المحتوى لينجح، نحن نبدأ بك من حيث انتهى
                    الآخرون، لنصنع لك المحتوى الذي يليق بك. </p>
                <div class="flex justify-center md:justify-start">
                    <NuxtLink to="/about"
                        class=" block px-6 py-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">اعرف عنا
                        أكثر</NuxtLink>
                </div>
            </div>
            <div class="hidden md:block md:w-1/2 ass ">
                <img src="~/assets/images/WelcomeSectionImg.svg" alt="hero image">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped></style>