<template>
    <section dir="rtl" id="contact-from" class="bg-white ">
        <div class="grid  grid-cols-1 md:grid-cols-2 py-10 px-5 items-center">
            <div class="container mx-auto flex flex-col items-center ">
                <div id="from-header" class="text-black">
                    <h2 class="text-4xl">
                        تواصل معنا لنعمل سويا<span class="text-brightRed">.</span>
                    </h2>
                    <p class="text-gray-600 pl-1">او راسلنا من خلال: <a class="text-blue-500 underline"
                            href="mailto:hr@osasyona.com">
                            hr@osasyona.com</a></p>
                </div>
                <form class="pt-5" @submit.prevent="handleSubmit" novalidate>
                    <template v-for="elm in FormElements" :key="elm.name">
                        <div class="input-Element relative mb-1.5">
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
                                    class="transition-all
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
                        <div v-show="formState[elm.name].errors.length > 0" class="text-sm text-brightRed  mb-2 ">
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
            <div class=" hidden md:flex container mx-auto  justify-center">
                <img class="" src="/images/contact-form.svg" alt="contact-from-svg">
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