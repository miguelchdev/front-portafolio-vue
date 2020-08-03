<template>
    <div>
        <introduction
            @click="go"
            v-bind="introduction"
        ></introduction>

        <service v-bind="services"></service>

        <project
            id="project"
            v-bind="projects"
        ></project>

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
        ...mapActions("pages", ["fetchPages"]),
        go() {
            this.$vuetify.goTo('#project', {
                duration: 750,
                offset: 0,
                easing: "easeInQuad"
            });
        }
    },
    created() {
        this.fetchPages();
    }
};
</script>
<style lang="scss">
@import "@/assets/styles/base.scss";
</style>