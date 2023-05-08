<template>
    <div class="container  hero">
        <h2>ابقى على تواصل معنا.</h2>
    </div>

    <div class="container my-3">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="row mb-2">
                    <div class="col-3 col-md-2  d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-phone icon fa-2x"></i>
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <span class="d-inline-block p-0 m-0 fw-semibold contact_header">
                                رقم الهاتف
                            </span>
                            <span class="d-inline-block p-0 m-0">
                                <a href="tel:0545970009">0545970009</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="row mb-2">
                    <div class="col-3 col-md-2  d-flex justify-content-center align-items-center">
                        <i class="fa-solid fa-at icon fa-2x"></i>
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <span class="d-inline-block p-0 m-0 fw-semibold contact_header">
                                عنوان البريد الالكتروني
                            </span>
                            <span class="d-inline-block p-0 m-0">
                                <a href="mailto:hr@osasyona.com">hr@osasyona.com</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mb-2">
            <div class="col-3 col-md-1 d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-location-dot icon fa-2x"></i>
            </div>
            <div class="col-9">
                <div class="row">
                    <span class="d-inline-block p-0 m-0 fw-semibold contact_header">
                        العنوان
                    </span>
                    <span class="d-inline-block p-0 m-0">
                        3587 شارع رقم 298 - حي الياسمين ,الرياض , المملكة العربية
                        السعودية
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid email-form">
        <h3 class="contact_header">دون رسالتك هنا</h3>
        <ContactMessage type="contact_us" />
    </div>

    <section class="container-fluid location mt-3" data-wow-duration="600ms" id="contact-us"
        style="visibility: visible;-webkit-animation-duration: 600ms; -moz-animation-duration: 600ms; animation-duration: 600ms;">

        <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3587%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%B1%D9%82%D9%85%20298%20-%20%D8%AD%D9%8A%20%D8%A7%D9%84%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86%20,%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6%20,%20%D8%A7%D9%84%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9+(osasione)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe></div>

        <div class="contact-info">
            <ul>
                <li class="address">
                    <span>
                        3587 شارع رقم 298 - حي الياسمين ,الرياض <br> , المملكة العربية السعودية
                    </span>
                </li>
                <li>
                    <a class="btn btn-light mt-4 px-4 directions-btn"
                        href="https://www.google.com/maps/place/%D8%B3%D9%88%D8%A8%D8%B1+%D9%85%D8%A7%D8%B1%D9%83%D8%AA+%D8%B3%D9%84%D8%A9+%D8%A7%D9%84%D9%83%D9%81%D8%A7%D8%AD%E2%80%AD/@24.8280034,46.629812,18z/data=!4m6!3m5!1s0x3e2ee564332b3df5:0x9a9487c3eb408971!8m2!3d24.8280922!4d46.629681!16s%2Fg%2F11h4zq4_qg"
                        target="_blank"><span> احصل علي المسار </span></a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    name: "contact_us"
})
</script>

<style scoped>
.email-form {
    background-color: #fff;
    padding: 1rem 1rem;
}

.address {
    background-color: #fff;
    padding: 1rem;
    border-radius: 1rem;
}

.contact_header {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--palette-orange);
}

.icon {
    color: var(--palette-orange);
    margin-left: 0.5rem;
}

.location {
    position: relative;
}

a {
    color: inherit;
    text-decoration: none;
}

.contact-info {
    overflow: hidden;
    height: 100%;
    width: 100%;
    display: block;
    background: #f5843375;
    position: absolute;
    top: 0;
    right: 0;
    color: #222;
    box-shadow: 0 0 6px 1px RGBA(0, 0, 0, .17);
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-info ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align: center;
}

.directions-btn {
    border-radius: 0;
}
</style>