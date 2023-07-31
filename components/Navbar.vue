<template>
    <!-- sticky top-0 z-50 -->
    <nav class="shadow-lg  bg-white">
        <div class="flex justify-between items-center relative py-2 px-8 bg-white ">
            <div class="flex justify-between md:justify-center w-full md:w-fit">
                <img class="h-16" src="~/assets/images/osasiona_dark.webp" alt="osasyona Logo">
                <button @click="toggleNav" class="block md:hidden hover:text-gray-600 focus:outline-none ">
                    <i :class="navState ? 'fa-align-right' : 'fa-xmark'" class="fa-solid fa-xl"></i>
                </button>
            </div>

            <ul dir="rtl" class="flex flex-col  bg-white w-full shadow-lg
                    transition-all ease-in duration-500
                    absolute top-[5rem]
                    p-2 md:p-0
                    divide-y-[1px] divide-brightRed md:divide-y-0
                    border-t-8 border-t-brightRed  md:border-none
                    md:w-fit md:flex-row md:static md:shadow-none " :class="navState ? 'left-[-100%]' : 'left-0'">
                <li v-for="l in Links" class="">
                    <button :href="l.link"
                        class="block w-full ltr:text-left rtl:text-right  px-6 py-2 md:px-4 md:py-1.5 md:rounded-full hover:bg-brightRedSupLight"
                        @click="handleLinkClick(l)">
                        <i class="md:hidden ml-2 text-zinc-600" :class="l.icon"></i>
                        {{ l.name }}
                    </button>
                </li>
            </ul>

            <Button class="hidden md:block">لنعمل سويا</Button>
        </div>
    </nav>
</template>

<script setup lang="ts">
const router = useRouter()
const navState = ref<Boolean>(false);
const toggleNav = () => {
    navState.value = !navState.value;
}
type link = {
    name: string, link: string, icon: string
}
const Links: link[] = [
    { name: "الرئيسية", link: "#hero", icon: "fa-solid fa-house" },
    { name: "الاسعار", link: "#testimonials", icon: "fa-solid fa-house" },
    { name: "تواصل معنا", link: "#contact-from", icon: "fa-solid fa-house" },
    { name: "عنا", link: "#features", icon: "fa-solid fa-house" }
]
const handleLinkClick = (link: link) => {
    toggleNav();
    router.push(link.link)
}
</script>

<style scoped></style>