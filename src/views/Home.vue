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
     metaInfo() {
        return {
            title: this.$t('title'),
            titleTemplate: this.$t('title'),
            meta: [
                { name: "og:title", content: this.$t('title') },
                { name: "twitter:title", content: this.$t('title') },
                { name: "description", content: this.short_description },
                { name: "og:description", content: this.short_description },
                {
                    name: "twitter:description",
                    content: this.short_description
                },
                { name: "og:type", content: "website" },
                { name: "twitter:card", content: "summary_large_image" }
            ]
        };
    },
    computed: {
        ...mapState("pages", [
            "services",
            "contact",
            "introduction",
            "projects"
        ]),
        ...mapState("bio", [
          'about',
        ]),
        short_description(){
            return this.about.slice(0,120);
        }
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