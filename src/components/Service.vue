<template>
    <div class="bg-dark full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <h1
                v-if="title"
                class="text-sm-justify text-center"
            >{{ title }}</h1>
            <p
                v-if="page_contents"
                class="description-services "
            >{{ page_contents.description }}</p>
            <service-list></service-list>
        </v-container>
    </div>
</template>

<script>
import ServiceList from "@/components/ServiceList.vue";

export default {
    name: "Service",
    props: {
        title: String,
        images: Object,
        page_contents: Object
    },
    components: { ServiceList }
};
</script>

<style lang="scss">
/* global styles */
//@import "@/assets/styles/base.scss";
</style>

<style lang="scss" scoped>
@import "@/assets/styles/responsive-breakpoints.scss";

.description-services {
    font-weight: 400;
    font-size: 1rem;
    color: var(--v-darkText-base);
    padding: 5% 0 3% 0%;
    word-wrap: break-word;
}
@include respond-above(sm) {
    @media (orientation: portrait) {
        .full-view {
            min-height: 70vh;
            height: auto;
        }
        .parent-height {
            min-height: inherit;
        }
    }
    @media (orientation: landscape) {
        .full-view {
            min-height: 100vh;
            height: auto;
        }
    }
}
</style>
