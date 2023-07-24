<template>
    <nav class="relative container mx-auto p-6 ">
        <div class="flex justify-between items-center">
            <div>
                <img class="h-16 " src="/images/osasiona_dark.png" alt="">
            </div>
            <div class="space-x-6  hidden md:flex">
                <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
                <a href="#" class="hover:text-darkGrayishBlue">Products</a>
                <a href="#" class="hover:text-darkGrayishBlue">AboutUs</a>
                <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
                <a href="#" class="hover:text-darkGrayishBlue">Community</a>
            </div>
            <a href="#" class=" hidden md:block px-6 py-2 text-white bg-brightRed rounded-full hover:bg-brightRedLight">
                Get Started
            </a>
            <button @click="toggleNav" :class="navState ? 'open' : ''"
                class=" block md:hidden hamburger hover:text-gray-400 focus:outline-none ">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>
        </div>
        <div class="md:hidden ">
            <div id="menu" :class="navState ? 'flex' : 'hidden'" class=" flex-col absolute items-center self-end mt-10 
                space-y-6  py-8 font-bold bg-white sm:w-auto sm:self-center
                left-6 right-6 drop-shadow-md">
                <a href="#" class="hover:text-darkGrayishBlue">Pricing</a>
                <a href="#" class="hover:text-darkGrayishBlue">Products</a>
                <a href="#" class="hover:text-darkGrayishBlue">AboutUs</a>
                <a href="#" class="hover:text-darkGrayishBlue">Careers</a>
                <a href="#" class="hover:text-darkGrayishBlue">Community</a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const navState = ref<Boolean>(false);
const toggleNav = () => {
    navState.value = !navState.value;
}
</script>

<style scoped></style>