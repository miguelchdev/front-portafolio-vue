<template>
    <div>
        <introduction v-bind="introduction"></introduction>
        <service v-bind="services"></service>
        <project v-bind="projects"></project>
        <contact v-bind="contact"></contact>
    </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
import Service from "@/components/Service.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";
import { mapActions, mapState } from "vuex";

export default {
    name: "Home",
    components: { Introduction, Service, Project, Contact },
    computed: {
        ...mapState("pages", [
            "services",
            "contact",
            "introduction",
            "projects"
        ])
    },
    methods: {
        ...mapActions("pages", ["fetchPages"])
    },
    created() {
        this.fetchPages();
    }
};
</script>
<style lang="scss">
@import "@/assets/styles/base.scss";
</style>