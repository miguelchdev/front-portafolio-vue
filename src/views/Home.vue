<template>
    <div>
        <introduction />
        <service />

        <project />
        <contact />
    </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import Service from "@/components/Service.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";

export default {
    name: "Home",
    components: { Introduction, Service, Project, Contact }
};
</script>
<style lang="scss">
@import "@/assets/styles/base.scss";
</style>