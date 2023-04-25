<template>
    <div class="container my-4">
        <h1 class="mt-5">قصتنا</h1>
        <section>
            <h3 class="section-header">من هي اوساسيونا..؟</h3>
            <p class="mt-2">بدأت اوساسيونا بعد معاناة صانع محتوى كثرت عليه مهام الشهرة و الأضواء وصار ضائع بمشاغل إلى
                مالانهاية، وضيع
                الهدف الأساسي اللي هو التأثير على المجتمع والترفيه ) وصار شغله الشاغل البحث بقوقل: (كيف اطلب من الصين، كيف
                ارفع قوائم مالية للزكاة والدخل، أفضل شركة تخزين وشحن بالرياض، كيف أوظف افضل ناس…) و غيره الكثير من المهام
                التي لا يفقه فيها و كان دايم يجيب العيد، من أجل ذلك صنعت أوساسيونا.
            </p>
        </section>

        <section>
            <h3 class=" section-header">من نحن..؟</h3>
            <p class="mt-2">مؤسسة اعلامية لصناعة صناع المحتوى، بس نقولك: (ركز على محتواك و الباقي علينا) وهنا يبدأ شغلنا
                بالتصوير و المونتاج و التسويق وزيادة عليه ننوع مصادر دخلك كمؤثر بالعربي (حطنا على يمناك)
            </p>
        </section>


        <section>
            <h4 class="  section-header">فريقنا العظيم</h4>
            <div class="row mt-2 gx-3 gy-3 justify-content-evenly align-items-between">
                <div v-for="member in TEAM" class="team_mem col-10 col-sm-5 col-lg-5  text-start">
                    <h5 class="name">
                        {{ member.name }}
                    </h5>
                    <h6 class="title ">
                        {{ member.title }}
                    </h6>
                    <p class="description text-muted">
                        {{ member.description }}
                    </p>
                </div>
            </div>
        </section>


    </div>
</template>

<script setup lang="ts">
definePageMeta({
    name: "story"
})

const TEAM = [
    {
        name: "عبد الرحمن المسعر",
        title: "الرئيس التنفيذي",
        description: "يحب يكرفنا"
    },
    {
        name: "سعد الدوسري",
        title: " المدير المالي",
        description: " يحب البخاري"
    },
    {
        name: "أسامة السحيباني",
        title: "مدير الانتاج",
        description: "يحب يهاوش"
    },
    {
        name: "عبد الرحمن ليلى",
        title: "مسؤول قسم المونتاج",
        description: "يحب السيارات"
    },
    {
        name: "جهاد",
        title: "مصور",
        description: "يحب يلعب بجواله"
    },
    {
        name: "أحمد",
        title: "مصمم",
        description: "سريع جدا"
    },
    {
        name: "عاصم مرسي",
        title: "المدير التقني",
        description: "ما يعرف يقول ما اعرف"
    },

]
</script>

<style scoped>
.section-header {
    text-decoration: underline;
    text-decoration-color: var(--palette-secondary);
    text-decoration-skip: 3px;
    /* text-decoration-style: wavy; */
    text-decoration-thickness: 3px;
}

.team_mem {
    box-sizing: border-box;
    padding: 10px;
    /* border-radius: 10px; */
    /* margin: 1px; */
    /* border: 2px solid black; */
    /* background-color: #fbac7e3f; */
    /* background-image: linear-gradient(30deg, #fbac7e62 0%, #f7cf6850 100%); */
    border-right: 5px solid var(--palette-secondary);
    background-color: #fff;
}

.section-header {
    padding: 2rem 0rem;
    /* background-color: ; */
}
</style>