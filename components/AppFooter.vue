<template>
    <section id="footer" class="bg-zinc-800 border-t-2  border-zinc-700">
        <div class="container mx-auto py-10 px-5 flex flex-col-reverse md:flex-row space-y-6">
            <div class="md:w-1/3 flex flex-col justify-between items-center space-y-6">
                <img class="w-24" src="/images/osasiona.png" alt="">
                <div class="flex flex-row space-x-6">
                    <a href="#" class=" text-gray-200  hover:text-[#0165E1]">
                        <i class="fa-brands fa-facebook fa-2x"></i>
                    </a>
                    <a href="#" class=" text-gray-200  hover:text-blue-400">
                        <i class="fa-brands fa-twitter fa-2x"></i>
                    </a>
                    <a href="#" class=" text-gray-200  hover:text-red-600">
                        <i class="fa-brands fa-youtube fa-2x"></i>
                    </a>
                    <a href="#" class=" text-gray-200  hover:text-[#E60023]">
                        <i class="fa-brands fa-pinterest fa-2x"></i>
                    </a>
                    <a href="#" class=" text-gray-200  hover:text-blue-400">
                        <i class="fa-brands fa-instagram fa-2x"></i>
                    </a>
                </div>
                <p class="block md:hidden  text-left md:text-center text-white">
                    Copyrights 2023 All Rights reserved.
                </p>
            </div>
            <div class="md:w-1/3 flex flex-row justify-evenly items-center space-x-2">
                <div class="flex flex-col text-white space-y-3">
                    <a href="#" class="hover:text-brightRed">Home</a>
                    <a href="#" class="hover:text-brightRed">Products</a>
                    <a href="#" class="hover:text-brightRed">Pricing</a>
                    <a href="#" class="hover:text-brightRed">AboutUs</a>
                </div>
                <div class="flex flex-col text-white space-y-3">
                    <a href="#" class="hover:text-brightRed">Careers</a>
                    <a href="#" class="hover:text-brightRed">Community</a>
                    <a href="#" class="hover:text-brightRed">Privacy Policy</a>
                </div>
            </div>
            <div class="md:w-1/3 flex flex-col justify-around   items-center md:items-start space-y-6">
                <div class="flex space-x-6">
                    <input type="text" class=" w-4/5 rounded-full px-3 py-2 capitalize focus:outline-none "
                        placeholder=" updates in your inbox.">
                    <a href="#"
                        class="w-1/5 bg-brightRed hover:bg-brightRedLight text-center text-white rounded-full px-4 py-2">Go</a>
                </div>
                <p class="hidden md:block text-left md:text-center text-white">
                    Copyrights 2023 All Rights reserved.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped></style>