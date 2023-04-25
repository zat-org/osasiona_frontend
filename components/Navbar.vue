<template>
    <nav class="navbar fixed-top navbar-light py-0 text-white" dir="ltr">
        <div class="container-fluid d-none d-md-block ">
            <div class="row flex-column justify-content-center align-items-center">
                <a class="navbar-brand " href="#">
                    <img src="osasiona.png" class="nav-logo" alt="osasiona logo">
                </a>
                <ul class="navbar-nav flex-row justify-content-evenly align-items-center" dir="rtl">
                    <template v-for="link, index in links" :key="link.href">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" :class="$route.path.includes(link.href) ? 'active' : ''"
                                aria-current="page" :to="{ name: link.href }">{{ link.name }}
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="container-fluid d-md-none ">
            <a class="navbar-brand d-block" href="#">
                <img src="osasiona.png" class="nav-logo" alt="osasiona logo">
            </a>
            <button class="navbar-toggler d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarElm">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">
const props = defineProps(["links"])

</script>

<style scoped>
@media (min-width: 768px) {
    .navbar {
        height: 22vh !important;
    }
}

.navbar {
    /* height: 15vh; */
    background-color: var(--palette-primary) !important;
}

.nav-logo {
    transition: transform 0.5s ease;
    width: 5rem;
}

.navbar-brand {
    width: 5rem;
}

.nav-logo:hover {
    transform: translate(0.3rem, 0);
}

.nav-item {
    transition: all 0.5s ease;
    height: 100%;
    border-bottom: 2px solid #f6873200;
}

.nav-item:hover {
    border-bottom-color: #f68632;
}

.nav-link {
    color: #FFF
}

.nav-link.active {
    color: #f68632;
    border-bottom: 2px solid #f68732;
}

.navbar-toggler {
    color: var(--palette-light);
    border-color: var(--palette-light);
}
</style>