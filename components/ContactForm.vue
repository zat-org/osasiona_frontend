<template>
    <section id="contact-form" dir="rtl" class="text-gray-600 body-font relative">
        <div class="px-5 py-16 mx-5 md:mx-10 lg:mx-20 flex sm:flex-nowrap flex-wrap flex-col md:flex-row">
            <div
                class=" md:w-1/2 bg-white flex flex-col md:mr-auto w-full items-center justify-center md:py-8 mb-8 md:mt-0">
                <h2 class="text-3xl font-bold lg:text-4xl text-black text-right">
                    قل اللي بخاطرك <span class="text-brightRed">..</span>
                </h2>
                <form class="pt-5 w-10/12" @submit.prevent="handleSubmit" novalidate>
                    <template v-for="elm in FormElements" :key="elm.name">
                        <div class="relative mb-1.5 w-full">
                            <template v-if="elm.type === 'textarea'">
                                <textarea
                                    class="not-Resize transition-all w-full  h-52
                                        outline-none bg-gray-100 rounded-xl pt-6 pb-3 rtl:pr-5 ltr:pl-5 focus:shadow-lg shadow-white 
                                    text-gray-900 hover:bg-gray-300 focus:outline-2 focus:bg-white outline-offset-0 focus:outline-brightRed"
                                    :id="elm.name" :name="elm.name" :type="elm.type" @focus="handleElmFocus"
                                    v-model="formState[elm.name].value" @blur="HandleElmBlur"></textarea>
                                <label
                                    class="-translate-y-1/2 rtl:right-5 ltr:left-5 absolute transition-all rounded-full px-2"
                                    :class="!formState[elm.name].focus && formState[elm.name].empty ? 'text-gray-600 bg-gray-100 top-1/2' : 'bg-white text-brightRed top-4 text-sm'"
                                    :for="elm.name">{{ elm.label }}</label>
                                <i :class="`${elm.icon} ${formState[elm.name].focus ? 'text-brightRed' : 'text-gray-900'}`"
                                    class="transition-all absolute top-1/2 -translate-y-1/2 fa-xl ltr:-left-8 rtl:-right-8"></i>
                            </template>
                            <template v-else>
                                <input
                                    class="transition-all  w-full
                                        outline-none bg-gray-100 rounded-xl  pt-6 pb-3 rtl:pr-5 ltr:pl-5 focus:shadow-lg shadow-white 
                                    text-gray-900 hover:bg-gray-300 focus:outline-2 focus:bg-white outline-offset-0 focus:outline-brightRed"
                                    :id="elm.name" :name="elm.name" v-model="formState[elm.name].value" :type="elm.type"
                                    @focus="handleElmFocus" @blur="HandleElmBlur">
                                <label
                                    class="-translate-y-1/2 rtl:right-5 ltr:left-5 absolute transition-all rounded-full px-2"
                                    :class="!formState[elm.name].focus && formState[elm.name].empty ? 'text-gray-600  bg-gray-100  top-1/2' : 'bg-white text-brightRed top-1/4 text-sm'"
                                    :for="elm.name">{{ elm.label }}</label>
                                <i :class="`${elm.icon} ${formState[elm.name].focus ? 'text-brightRed' : 'text-gray-900'}`"
                                    class="transition-all absolute top-1/2 -translate-y-1/2 fa-xl ltr:-left-8 rtl:-right-8"></i>
                            </template>
                        </div>
                        <div v-show="formState[elm.name].errors.length > 0" class="text-sm text-brightRed mb-2 ">
                            <p v-for="err in formState[elm.name].errors" class="">
                                <i class="fa-solid fa-circle-exclamation"></i> {{ err }}
                            </p>
                        </div>
                    </template>

                    <button type="submit" :disabled="loading"
                        class="bg-brightRed py-2 pl-3 pr-3 rounded-xl text-white hover:bg-brightRedLight disabled:bg-brightRedLight focus:outline-1 outline-gray-200">
                        ارسال
                        <SpinnersSquareSpinner v-show="loading" class="inline-block" style="fill:#fff" />
                    </button>
                    <p v-if="error" class="text-sm text-brightRed">
                        <i class="fa-solid fa-circle-exclamation"></i> {{ error }}
                    </p>
                </form>

            </div>
            <div class=" md:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-10 flex items-center justify-center relative">
                <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
                    marginwidth="0" scrolling="no" allowfullscreen="false" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452.6306977024888!2d46.63021164913907!3d24.828114769114233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee541598cc491%3A0x55d29e9cf910fd38!2z2LPYp9mF!5e0!3m2!1sar!2seg!4v1690555747684!5m2!1sar!2seg"
                    style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
                <div class="bg-white relative py-6 rounded shadow-md">
                    <h2 class="text-md text-black w-full text-center font-bold mb-3">
                        تواصل معنا، أنت آمر وحنا لك نطامر
                    </h2>
                    <div class="flex flex-wrap">
                        <div class="lg:w-1/2 px-6">
                            <h2 class="title-font  text-gray-900 tracking-widest text-xs font-bold">
                                العنوان
                                <a target="_blank"
                                    href="https://www.google.com/maps/place/%D8%B3%D8%A7%D9%85%E2%80%AD/@24.8282124,46.6308807,18z/data=!3m1!4b1!4m6!3m5!1s0x3e2ee541598cc491:0x55d29e9cf910fd38!8m2!3d24.82821!4d46.6295932!16s%2Fg%2F11q4dfslqy?hl=ar&entry=ttu"><i
                                        class="fa-regular text-indigo-500 fa-share-from-square"></i></a>
                            </h2>
                            <p class="mt-1"> شارع رقم 298 ، حي الياسمين ، الرياض ، المملكة العربية السعودية </p>

                        </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 class="title-font  text-gray-900 font-bold tracking-widest text-xs">البريد الالكتروني
                            </h2>
                            <a href="mailto:hr@osasyona.com" class="text-indigo-500 leading-relaxed">hr@osasyona.com</a>
                            <h2 class="title-font font-bold text-gray-900 tracking-widest text-xs mt-4">رقم الجوال</h2>
                            <a href="tel:0545970009" class="leading-relaxed text-indigo-500">54-597-0009</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { required, validate, email } from "../utils/validators"
import useCollection from "../composables/useCollection"
const { loading, saveDoc, error } = useCollection("messages");
const { $toast } = useNuxtApp();
const FormElements = [
    { name: "lastName", label: "الاسم", icon: " fa-regular fa-address-card", type: "text", validators: [required()] },
    { name: "email", label: "البريد الالكتروني", icon: "fa-regular fa-envelope", type: "email", validators: [required(), email()] },
    { name: "message", label: "الرسالة", icon: "fa-regular fa-message", type: "textarea", validators: [required()] },
]
type ElementState = { focus: boolean, empty: boolean, value: string, name: string, errors: string[], validators: Function[] }
const formState = ref<{ [key: string]: ElementState }>({})
FormElements.forEach((elm) => {
    formState.value[elm.name] = {
        focus: false,
        empty: true,
        value: "",
        name: elm.name,
        errors: [],
        validators: elm.validators
    }
})
const handleElmFocus = (e: Event) => {
    let elm = e.target as HTMLInputElement;
    let elmState = formState.value[elm.name];
    if (elm && elmState) {
        elmState.focus = true
    }
}
const HandleElmBlur = (e: Event) => {
    let elm = e.target as HTMLInputElement;
    let elmState = formState.value[elm.name];
    if (elm && elmState) {
        elmState.focus = false
        elmState.empty = (elm.value === "")
    }
    elmState.errors = validate(elmState.validators, elmState.value);
}
const handleSubmit = async () => {
    let data: { [key: string]: string } = {};
    let isValid = true;
    for (const key in formState.value) {
        let val = formState.value[key];
        val.errors = validate(val.validators, val.value);
        isValid = isValid && val.errors.length === 0;
        data[val.name] = val.value
    }
    if (isValid) {
        await saveDoc(data);
        if (!loading.value && !error.value) {
            for (const key in formState.value) {
                formState.value[key].value = "";
            }

            $toast.success("تم الارسال بنجاح");
        } else {
            $toast.danger("حدث خطأ ما برجاء المحاولة مرة اخري");
        }
    }
}
</script>

<style scoped>
.not-Resize {
    resize: none;
}
</style>