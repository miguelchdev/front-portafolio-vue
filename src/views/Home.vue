<template>
    <div>
        <introduction v-bind="introduction"></introduction>
        <v-lazy
            v-model="isVisibleService"
            :options="options"
            min-height="100vh"
            :transition="transition"
        >
            <service v-bind="services"></service>
        </v-lazy>
        <v-lazy
            v-model="isVisibleProject"
            :options="options"
            min-height="100vh"
            :transition="transition"
        >
            <project v-bind="projects"></project>
        </v-lazy>

        <v-lazy
            v-model="isVisibleContact"
            :options="options"
            min-height="100vh"
            :transition="transition"
        >
            <contact  v-bind="contact"></contact>
        </v-lazy>

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
    data() {
        return {
            isActive: false,
            isVisibleService: false,
            isVisibleProject: false,
            isVisibleContact: false,
            transition:"slide-x-transition",
            options:{
                threshold: .20
            }
        };
    },
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
    },
    created() {
        this.fetchPages();
    }
};
</script>
<style lang="scss">
@import "@/assets/styles/base.scss";
</style>