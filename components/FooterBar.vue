<template>
    <div class="footer-container ">
        <div class=" footer pt-3 container w-100 d-flex justify-content-center align-items-center flex-column ">
            <!-- <img src="@/assets/images/osasiona_dark.png" class="footer-logo" alt="osasiona logo"> -->
            <div class="links mb-4 w-100 d-flex justify-content-evenly flex-wrap">
                <template v-for="link in links" :key="link.name">
                    <NuxtLink class="nav-link" aria-current="page" :to="{ name: link.href }">{{ link.name }}
                    </NuxtLink>
                </template>
            </div>
            <div class="social-links w-100">
                <template v-for="sl in socialMedia" :key="sl.icon">
                    <div class="link-wrapper">
                        <a class="icon-wrapper" :href="sl.href" :style="`color:${sl.color}`">
                            <i :class="`fa-brands fa-${sl.icon} fa-2x`"></i>
                        </a>
                    </div>
                </template>
            </div>
            <p class="small text-center">2023 © جميع الحقوق محفوظة لشركة اوساسيونا للنشر والتوزيع</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['links'])
const socialMedia = [

    {
        icon: "twitter", href: "#", color: "#00acee"
    },
    {
        icon: "tiktok", href: "#", color: "#000"
    },
    {
        icon: "youtube", href: "#", color: "#c4302b"
    },
    {
        icon: "linkedin", href: "#", color: "#0072b1"
    },

] 
</script>
    
<style scoped>
@media (min-width: 992px) {
    .footer {
        width: 50% !important;
    }
}

.footer-container {
    background-color: var(--palette-dark-light);
    color: var(--palette-light);
}


.footer-logo {
    width: 10rem;
    margin-bottom: 2rem;
}

.social-links {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.link-wrapper {
    width: 3rem;
    height: 3rem;
    background-color: var(--palette-light);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>