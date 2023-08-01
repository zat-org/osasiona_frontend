<template>
    <h1 class="text-center text-2xl md:text-4xl font-bold mt-20">تواصل معنا، أنت آمر وحنا لك نطامر</h1>
    <div class="flex justify-evenly flex-col-reverse md:flex-row items-center py-10 px-8">
        <ClientOnly>
            <a href="https://www.google.com/maps/place/%D8%B3%D8%A7%D9%85%E2%80%AD/@24.8281431,46.6295646,19.5z/data=!4m14!1m7!3m6!1s0x3e2ee564332b3df5:0x9a9487c3eb408971!2z2LPZiNio2LEg2YXYp9ix2YPYqiDYs9mE2Kkg2KfZhNmD2YHYp9it!8m2!3d24.8280922!4d46.629681!16s%2Fg%2F11h4zq4_qg!3m5!1s0x3e2ee541598cc491:0x55d29e9cf910fd38!8m2!3d24.82821!4d46.6295932!16s%2Fg%2F11q4dfslqy?entry=ttu"
                target="_blank"
                class="rounded-xl relative shadow-xl border-2 hover:-translate-y-3 transition-all border-brightRed w-full  md:w-1/2 flex justify-center">
                <div
                    class="text-emerald-400 text-4xl bg-white h-16 w-16 flex justify-center items-center border-2 border-brightRed rounded-full absolute -top-8 -right-8">
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <iframe class="w-full h-96 rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452.6306977024888!2d46.63021164913907!3d24.828114769114233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee541598cc491%3A0x55d29e9cf910fd38!2z2LPYp9mF!5e0!3m2!1sar!2seg!4v1690555747684!5m2!1sar!2seg"
                    style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </a>
        </ClientOnly>
        <div class="p-10 w-full  md:w-1/2 flex md:flex-row flex-wrap justify-evenly items-center space-y-12">
            <a href="tel:0545970009"
                class=" hover:-translate-y-3 transition-all h-32 w-full md:w-52 bg-zinc-100 shadow-xl border-2 border-brightRed rounded-xl flex justify-center flex-col items-center relative">
                <div
                    class="text-violet-300 bg-white h-16 w-16 flex justify-center items-center border-2 border-brightRed rounded-full absolute -top-8">
                    <i class="fa-solid fa-phone fa-2xl"></i>
                </div>
                <h3 class="font-bold pt-5 text-xl">رقم الجوال</h3>
                <p class="pt-2 text-lg text-zinc-600">0545970009</p>
            </a>

            <a href="mailto:hr@osasyona.com"
                class=" hover:-translate-y-3 transition-all h-32 w-full md:w-52 bg-zinc-100 shadow-xl border-2 border-brightRed rounded-xl flex justify-center flex-col items-center relative">
                <div
                    class="text-blue-300 bg-white h-16 w-16 flex justify-center items-center border-2  border-brightRed rounded-full absolute -top-8">
                    <i class="fa-solid fa-envelope fa-2xl  "></i>
                </div>
                <h3 class="font-bold pt-5 text-xl">البريد الاكتروني</h3>
                <p class="pt-2 text-lg  text-zinc-600">hr@osasyona.com</p>
            </a>

            <a href="https://wa.me/+966545970009/" target="_blank"
                class=" hover:-translate-y-3 transition-all h-32 w-full md:w-52 bg-zinc-100 shadow-xl border-2 border-brightRed rounded-xl flex justify-center flex-col items-center relative">
                <div
                    class="text-green-500 text-4xl bg-white h-16 w-16 flex justify-center items-center border-2 border-brightRed rounded-full absolute -top-8">
                    <i class="fa-brands fa-whatsapp "></i>
                </div>
                <h3 class="font-bold pt-5 text-xl">واتساب</h3>
                <p class="pt-2 text-lg  text-zinc-600">+966545970009</p>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>