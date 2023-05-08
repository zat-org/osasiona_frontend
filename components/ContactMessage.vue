<template>
    <div class="card my-3 ">
        <div v-if="msg_success" class="alert alert-success alert-dismissible mx-3 mt-2" role="alert">
            <div>مرحبا بك فى اى وقت </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        <form @submit.prevent="handleSubmit" class="container px-4 mt-3 mb-3" novalidate>
            <div class=" mb-3">
                <label for="name" class="form-label">
                    <i class="fas fa-signature"></i>
                    الاسم</label>
                <input dir="rtl" type="text" v-model="state.name" class="form-control" @keypress="validateInput"
                    @blur="validateInput" id="name" name="name" placeholder=" " minlength="4" required>
                <div class="invalid-feedback"> برجاء ادراج اسم صحيح</div>

            </div>
            <div class="  mb-3">
                <label for="email" class="form-label">
                    <i class="fa-solid fa-at"></i>
                    البريد الالكتروني</label>
                <input type="email" lang="en" class="form-control" v-model="state.email" id="email"
                    @keypress="validateInput" @blur="validateInput" name="email" placeholder=" " required>
                <div class="invalid-feedback">برجاء ادراج بريد الكتروني صحيح</div>

            </div>
            <div class="  mb-3 message-form-elm">
                <label for="message" class="form-label">
                    <i class="fas fa-message"></i>
                    الرسالة</label>
                <textarea class="form-control" id="message" v-model="state.message" rows="5" @keypress="validateInput"
                    @blur="validateInput" name="message" required placeholder="" minlength="10"></textarea>

                <div class="invalid-feedback">برجاء ادراج محتوي بالرسالة</div>
            </div>
            <div class="row justify-content-center mt-2">
                <button class="btn btn-dark col-10">
                    <i class="fa-solid fa-paper-plane"></i>
                    ارسال
                </button>
            </div>
        </form>

    </div>
</template>

<script setup>
const props = defineProps(['type'])
const msg_success = ref(false)
const state = ref({
    message: "",
    name: "",
    email: ""
})

const validateInput = (e) => {
    e.target.setCustomValidity("")
    if (e.target.checkValidity()) {
        if (e.target.name === "email") {
            let emailRgx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            if (!emailRgx.test(e.target.value)) {
                e.target.classList.add("is-invalid")
                e.target.classList.remove("is-valid")
                e.target.setCustomValidity("not valid Email")
                return;
            }
        }
        e.target.classList.add("is-valid")
        e.target.classList.remove("is-invalid")
    } else {
        e.target.classList.add("is-invalid")
        e.target.classList.remove("is-valid")
    }
}

const client = useStrapiClient()

const handleSubmit = async (e) => {
    if (!e.target.checkValidity()) return;
    e.target.classList.add("was-validated")
    let now = new Date()
    try {

        const message = await client(`/${props.type === 'join_us' ? 'join-us-message' : 'contact-us-message'}`,
            { method: 'POST', body: { data: { ...state.value, sentAt: now.toISOString() } } })
        console.log(message);
        msg_success.value = true;
        state.value = {
            message: "",
            name: "",
            email: ""
        }
        e.target.classList.remove("was-validated")
    } catch (err) {
        console.error(err);
    }
}
</script>

<style scoped>
.alert-wrapper {
    position: relative;
}

.card {
    background-color: var(--palette-light);
}

i {
    color: var(--palette-orange);

}
</style>