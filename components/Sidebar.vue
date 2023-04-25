<template>
    <div class="offcanvas offcanvas-start text-bg-light" data-bs-backdrop="static" tabindex="-1" id="sidebarElm">
        <div class="offcanvas-header d-flex justify-content-center align-items-center mt-3">
            <img src="@/assets/images/osasiona.png" class="logo" alt="لوجو اوساسيونا">
            <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas"
                data-bs-toggle="sidebarElm"></button>
        </div>
        <hr>
        <div class="offcanvas-body">
            <ul class="navbar-nav flex-column justify-content-evenly align-items-start" dir="rtl">
                <template v-for="link, index in links" :key="link.href">
                    <li class="nav-item " :class="$route.path.includes(link.href) ? 'active' : ''">
                        <NuxtLink class="nav-link" @click="(e) => handleNavigation(e, link.href)" aria-current="page"
                            :to="{ name: link.href }">
                            {{ link.name }}
                        </NuxtLink>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup >
const props = defineProps(['links'])
const { $bootstrap } = useNuxtApp()
let bt_offcanvas = null;
onMounted(() => {
    bt_offcanvas = new $bootstrap.Offcanvas('#sidebarElm')
})
const handleNavigation = (e, pathName) => {
    bt_offcanvas.hide()
    navigateTo({ "name": pathName });
}
</script>

<style scoped>
.logo {
    width: 8rem;
}

.offcanvas {
    background-color: var(--palette-primary) !important;
}

.btn-close {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
}

.nav-item {
    transition: all 0.5s ease;
    height: 100%;
    padding-right: 1rem;
    border-right: 5px solid #f6873200;
    font-size: 1.4rem;
    margin: 0.3rem;
    width: 100%;
}

.nav-item:hover {
    border-right-color: var(--palette-orange);
    background-color: var(--palette-dark);
}

.nav-link {
    color: var(--palette-light);
}

.nav-link:hover {
    color: var(--palette-light);
}

.nav-item.active .nav-link {
    color: var(--palette-orange);
}

.nav-item.active {
    background-color: var(--palette-dark);
    border-right: 5px solid var(--palette-orange);
}
</style>